const db = require("../db/queries");

function getAdmin(req, res) {
  res.render("admin");
}

async function deleteUser(req, res) {
  const { deletePostId } = req.body;

  await db.deleteUserByIdDB(deletePostId);
  const allUsers = await db.getAllUsersDB();
  console.log(allUsers);
  res.redirect("/admin");
}

module.exports = {
  getAdmin,
  deleteUser,
};
