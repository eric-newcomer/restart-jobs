const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const User = require('./models/user.model');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, 
                        useCreateIndex: true,
                        useUnifiedTopology: true});

const connection = mongoose.connection;

connection.once('open', () => {
   console.log("MongoDB database connection established successfully!");
})

// GET: Get all users
app.get('/api/users', (req, res) => {
   User.find()
      .then(users => res.json(users))
      .catch(err => res.status(400).json("Error: " + err));
});

// POST: Add new user
app.post('/api/users/add', (req, res) => {
   const username = req.body.username;
   const firstName = req.body.firstName;
   const lastName = req.body.lastName;

   const newUser = User({username, firstName, lastName});

   newUser.save()
      .then(() => res.json('User added successfully!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

app.listen(port, () => {
   console.log(`Server is running on port: ${port}`);
});