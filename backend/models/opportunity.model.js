const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const opportunitySchema = new Schema({
   opportunityTitle: {
      type: String,
      required: true,
   },
   companyName: {
      type: String,
      required: true
   },
   description: {
      type: String,
      required: true
   },
   // TODO: Add type option!
   // opportunityType: {
   //    type: String,
   //    required: true,
   // },
}, {timestamps: true});

const Opportunity = mongoose.model('Opportunity', opportunitySchema);

module.exports = Opportunity;