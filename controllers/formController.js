const db = require("../db/queries");

async function getFormPage(req, res) {
  res.render("form");
}

async function addNewUser(req, res) {
  const { author, message } = req.body;
  if (author != "" && message != "") {
    db.addNewUserDB({
      author,
      message,
      message_time: new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }),
    });
    res.redirect("/");
  }
}

module.exports = { addNewUser, getFormPage };
