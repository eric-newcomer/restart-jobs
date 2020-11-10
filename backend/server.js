const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const User = require('./models/user.model');
const Opportunity = require('./models/opportunity.model');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, 
   { useNewUrlParser: true, 
      useCreateIndex: true,
      useUnifiedTopology: true
   },
   (err) => {
      if (err) throw err;
});

const connection = mongoose.connection;

connection.once('open', () => {
   console.log("MongoDB database connection established successfully!");
})


// LOGIN
app.post('/login', (req, res) => {
   // Authenticate user
   const username = req.body.username;



   jwt.sign()

})

// Routes
const usersRouter = require('./routes/users');
const opportunitiesRouter = require('./routes/opportunities');
app.use('/users', usersRouter);
app.use('/opportunities', opportunitiesRouter);

app.listen(port, () => {
   console.log(`Server is running on port: ${port}`);
});