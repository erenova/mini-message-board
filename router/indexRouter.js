const { Router } = require("express");
const indexRouter = Router();

const messages = [
  {
    id: 1,
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  },
  {
    id: 2,
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  },
  {
    id: 3,
    text: "Odinians!",
    user: "Zeus",
    added: new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "mini-messageboard",
    messages: messages,
  });
});
indexRouter.get("/messages/:id", (req, res) => {
  res.render("messages/message", {
    id: req.params.id,
    text: messages[req.params.id - 1].text,
    user: messages[req.params.id - 1].user,
    added: messages[req.params.id - 1].added,
  });
});

module.exports = { indexRouter, messages };
