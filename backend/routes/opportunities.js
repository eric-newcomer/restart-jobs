const router = require('express').Router();
let Opportunity = require('../models/opportunity.model');

// GET: Get all opportunities
router.route('/').get((req, res) => {
   Opportunity.find()
      .then(opps => res.json(opps))
      .catch(err => res.status(400).json("Error: " + err));
});

// POST: Add new opportunity
router.route('/add').post((req, res) => {
   const opportunityTitle = req.body.opportunityTitle;
   const companyName = req.body.companyName;
   const description = req.body.description;

   const newOpp = Opportunity({
      opportunityTitle: opportunityTitle, 
      companyName: companyName, 
      description: description,
   });

   newOpp.save()
      .then(() => res.json('Opportunity added successfully!'))
      .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
