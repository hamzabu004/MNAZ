const { addNewOffering, getAllOfferings, getOfferingById, editOfferingById, deleteOfferingById } = require("../controller/offeringController");

const offeringRouter = require("express").Router();


offeringRouter.post("/add", addNewOffering);
offeringRouter.get("/all", getAllOfferings);
offeringRouter.get("/:id", getOfferingById);
offeringRouter.post("/:id", editOfferingById);
offeringRouter.delete("/:id", deleteOfferingById);

module.exports = offeringRouter;