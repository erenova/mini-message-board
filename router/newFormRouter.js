const { Router } = require("express");
const { messages } = require("./indexRouter");
const newFormRouter = Router();
newFormRouter.get("/", (req, res) => {
  res.render("form");
});
newFormRouter.post("/", (req, res) => {
  const { text, user } = req.body;
  if (text != "" && user != "") {
    messages.push({
      id: messages.length + 1,
      text: text,
      user: user,
      added: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    });
    res.redirect("/");
  }
});

module.exports = newFormRouter;
