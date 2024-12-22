const db = require("../db/queries");

async function getAllUsers(req, res) {
  const allMessages = await db.getAllUsersDB();
  console.log("heyyyyy");
  res.render("index", { allMessages: allMessages });
}
//TODO MESSAGE PAGE 1
async function getMessagePage(req, res) {
  const selectedUser = await db.getUserByIdDB(req.query.id);
  console.log(selectedUser);
  res.render("messages/message", {
    id: selectedUser.id,
    author: selectedUser.author,
    message: selectedUser.message,
    message_time: selectedUser.message_time,
  });
}

module.exports = {
  getAllUsers,
  getMessagePage,
};
