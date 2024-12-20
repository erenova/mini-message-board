const { Router } = require("express");
const { messages } = require("./indexRouter");
const adminRouter = Router();

adminRouter.get("/", (req, res) => {
  res.render("admin");
});

adminRouter.post("/", (req, res) => {
  const { deletePost } = req.body;
  const postIndex = parseInt(deletePost, 10) - 1;
  if (postIndex >= 0 && postIndex < messages.length) {
    messages.splice(postIndex, 1);
  }
  res.redirect("/admin");
});

module.exports = { adminRouter };
