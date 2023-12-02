const mongoose = require("mongoose");

const userOfferingSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  offering: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Offering',
    required: true,
  },
  following: {
    type: Boolean,
    default: false,
  },
  questions: [{
    type: String,
  }],
});

module.exports = mongoose.model("UserOffering", userOfferingSchema);