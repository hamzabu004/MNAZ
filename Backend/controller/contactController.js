const Contact = require('../models/contactModel');
const User = require('../models/userModel');

async function findUserIdByNameAndEmail(firstName, email) {
  try {
    const user = await User.findOne({ firstName, email });
    return user ? user._id : null;
  } catch (error) {
    console.error('Error finding user:', error);
    throw error; 
  }
}

let saveContact = (req, res, next) => {
  let { firstName, email, subject, message,phoneNumber } = req.body;
  if (!firstName || !email || !message) {
    res.status(400).json({ message: 'Missing required fields' });
    return;
  }

  findUserIdByNameAndEmail(firstName, email)
    .then((userId) => {
      if (userId) {
        console.log('User ID found:', userId);

        const newContact = new Contact({
          user: userId,
          subject: subject,
          message: message,
          phoneNumber: phoneNumber
        });

        newContact.save()
          .then((result) => {
            if (!result) {
              res.status(400).json({ "message": "Failed to save the information!!!" });
            } else {
              res.status(200).json({ "message": "Successfully saved the information.", "contact": result });
            }
          })
          .catch((error) => {
            console.error('Error while saving contact:', error);
            res.status(500).json({ "message": "Internal Server Error" });
          });
      } else {
        res.status(400).json({ "message": "No user exists with the provided first name and email." });
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      res.status(500).json({ "message": "Internal Server Error" });
    });
};

module.exports = {
  saveContact
};
