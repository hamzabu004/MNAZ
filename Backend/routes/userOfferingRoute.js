const { addQuestions, saveFollowInformation} = require("../controller/userOfferingController");
const {verifyUserLoggedIn } = require("../validation");
const userOfferingRouter = require("express").Router();


userOfferingRouter.post("/following", verifyUserLoggedIn, saveFollowInformation);
userOfferingRouter.post("/question/add",verifyUserLoggedIn, addQuestions);

module.exports = userOfferingRouter;