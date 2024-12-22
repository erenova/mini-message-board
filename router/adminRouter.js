const { Router } = require("express");
const adminRouter = Router();
const adminController = require("../controllers/adminController");
adminRouter.get("/", adminController.getAdmin);

adminRouter.post("/", adminController.deleteUser);

module.exports = { adminRouter };
