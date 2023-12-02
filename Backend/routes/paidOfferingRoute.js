const { addNewPaidOffering, getAllPaidOfferings, getPaidOfferingById, editPaidOfferingById, deletePaidOfferingById } = require("../controller/paidOfferingController");

const paidOfferingRouter = require("express").Router();


paidOfferingRouter.post("/add", addNewPaidOffering);
paidOfferingRouter.get("/all", getAllPaidOfferings);
paidOfferingRouter.get("/:id", getPaidOfferingById);
paidOfferingRouter.post("/:id", editPaidOfferingById);
paidOfferingRouter.delete("/:id", deletePaidOfferingById);

module.exports = paidOfferingRouter;