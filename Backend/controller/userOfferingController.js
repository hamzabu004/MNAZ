const UserOffering = require('../models/userOfferingModel');
const User = require('../models/userModel');
const Offering = require('../models/offeringModel');

const saveFollowInformation = async (req, res) => {
    try {
      let { userId, offeringId, following } = req.body;
      console.log(userId, offeringId, following);

      const existingUser = await User.findById(userId);
      if (!existingUser) {
        return res.status(404).json({ message: `User not found` });
      }
      const existingOffering = await Offering.findById(offeringId);
      if (!existingOffering) {
        return res.status(404).json({ message: `Offering not found` });
      }

      const existingUserOffering = await UserOffering.findOne({ user: userId, offering: offeringId });

      if (existingUserOffering) {
        existingUserOffering.following = following;
        await existingUserOffering.save();
        return res.status(200).json({ message: `Information updated successfully for user with current offering` });
      }

      const userOffering = new UserOffering({
        user: userId,
        offering: offeringId,
        following: following,
      });

      await userOffering.save();
      res.status(200).json({ message: `Information saved successfully for user with current offering` });
    } catch (error) {
      console.error('Error saving follow information:', error);
      res.status(500).json({ message: 'Error while saving information' });
    }
};

const addQuestions = async (req, res) => {
    try {
      let { userId, offeringId, questions } = req.body;
      console.log(userId, offeringId, questions);

      const existingUser = await User.findById(userId);
      if (!existingUser) {
        return res.status(404).json({ message: `User not found` });
      }
      const existingOffering = await Offering.findById(offeringId);
      if (!existingOffering) {
        return res.status(404).json({ message: `Offering not found` });
      }

      const existingUserOffering = await UserOffering.findOne({ user: userId, offering: offeringId });

      if (existingUserOffering) {
        existingUserOffering.questions = questions;
        await existingUserOffering.save();
        return res.status(200).json({ message: `Questions updated successfully for user related to current offering` });
      }

      const userOffering = new UserOffering({
        user: userId,
        offering: offeringId,
        questions: questions,
      });

      await userOffering.save();
      res.status(200).json({ message: `Questions are saved successfully for user related to current offering` });
    } catch (error) {
      console.error('Error saving questions:', error);
      res.status(500).json({ message: 'Error saving questions' });
    }
};

module.exports = {
  saveFollowInformation,
  addQuestions,
};
