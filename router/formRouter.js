const { Router } = require("express");
const formController = require("../controllers/formController");
const formRouter = Router();
formRouter.get("/", formController.getFormPage);
formRouter.post("/", formController.addNewUser);

module.exports = { formRouter };
