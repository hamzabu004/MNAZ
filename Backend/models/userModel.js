const mongoose = require("mongoose")
 

const userSchema = mongoose.Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['Visitor', 'Lendor', 'Broker', 'Investor'],
      required: true,
    },
  });

module.exports = mongoose.model("User",userSchema)