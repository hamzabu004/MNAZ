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

const paidOfferingSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
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
    type: String,
    required: true,
  },
  fundingGoal: {
    type: String,
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
  funded:{
    type: Number,
    required: true,
  } ,
  paidOff:{
    type: String,
    required: true,
  },
  minInvestment: {
    type: String,
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

module.exports = mongoose.model('PaidOffering', paidOfferingSchema);
