const { saveContact } = require("../controller/contactController");
const {verifyUserLoggedIn } = require("../validation");


const contactRouter = require("express").Router();


contactRouter.post("/save",verifyUserLoggedIn, saveContact);

module.exports = contactRouter;