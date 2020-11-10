const bcrypt = require('bcrypt');
const router = require('express').Router();
let User = require('../models/user.model');


// GET: Get all users
router.route('/').get((req, res) => {
   User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json("Error: " + err));
});

// POST: Add new user
router.route('/register').post( async (req, res) => {
   try {
      let { email, password, passwordCheck, displayName} = req.body;
      // validate and check
      if (!email || !password || !passwordCheck) {
         return res.status(400).json({ 
            msg: "Not all fields have been entered." 
         });
      }
      if (password.length < 5) {
         return res.status(400).json({ 
            msg: "Password must be at least 5 characters long." 
         });
      }
      if (password !== passwordCheck) {
         return res.status(400).json({
            msg: "The passwords must match"
         });
      }
      const existingUser = await User.findOne({ email: email });
      if (existingUser) {
         return res.status(400).json({
            msg: "An account with this email already exists."
         });
      }
      if (!displayName) {
         displayName = email;
      }
      const salt = await bcrypt.genSalt();
      const passwordHash = await bcrypt.hash(password, salt);
      console.log(password);
      console.log(passwordHash);
      const newUser = new User({
         email,
         password: passwordHash,
         displayName
      });
      const savedUser = await newUser.save();
      res.json(savedUser);
   } catch (err) {
      res.status(500).json({ 
         error: err.message
      });
   }
});

module.exports = router;
