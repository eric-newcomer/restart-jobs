const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
require('dotenv').config();

const auth = require("../middleware/auth");
let User = require('../models/user.model');


// GET: Get all users
router.route('/').get((req, res) => {
   User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json("Error: " + err));
});

// POST: USER REGISTRATION
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
      console.log("User successfully registered!");
      res.json(savedUser);
   } catch (err) {
      res.status(500).json({ 
         error: err.message
      });
   }
});

// POST: USER LOGIN
router.route('/login').post( async (req, res) => {
   try {
      const { email, password } = req.body;
      // validate
      if (!email || !password) {
         return res.status(400).json({
            msg: "Not all fields have been entered."
         });
      }
      const user = await User.findOne({ email: email});
      if (!user) {
         return res.status(400).json({
            msg: "No account with this email has been registered."
         });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
         return res.status(400).json({
            msg: "Invalid credentials."
         });
      }
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
      console.log('Login successful!');
      res.json({
         token,
         user: {
            id: user._id,
            displayName: user.displayName
         }
      });
   } catch (err) {
      res.status(500).json({ 
         error: err.message
      });
   }
});

// DELETE: Delete a user
router.route('/delete').delete(auth, async (req, res) => {
   try {
      const deletedUser = await User.findByIdAndDelete(req.user);
      res.json(deletedUser);
   } catch (err) {
      res.status(500).json({
         error: err.message
      });
   }
});

module.exports = router;
