const mongoose = require('mongoose');

const investorSchema = mongoose.Schema({
  investorName: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const offeringSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
  info: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dealType: String,
  investorYield: {
    type: Number,
    required: true,
  },
  fundingGoal: {
    type: Number,
    required: true,
  },
  estimatedFundingDate: String,
  county: String,
  city: String,
  lienPosition: String,
  propertyType: String,
  pledged: {
    type: Number,
    required: true,
  },
  minInvestment: {
    type: Number,
    required: true,
  },
  eligible: String,
  overviewList: [String],
  overviewDesc: String,
  managementDesc: String,
  financialDesc: String,
  PropertyHighlightsDesc: String,
  photos: [String],
  investors: [investorSchema], 
});

module.exports = mongoose.model('Offering', offeringSchema);
