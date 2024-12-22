const { Router } = require("express");
const indexController = require("../controllers/indexController");
const indexRouter = Router();

indexRouter.get("/", indexController.getAllUsers);

indexRouter.get("/message", indexController.getMessagePage);

module.exports = { indexRouter };
