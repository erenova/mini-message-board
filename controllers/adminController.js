const db = require("../db/queries");

function getAdmin(req, res) {
  res.render("admin");
}

async function deleteUser(req, res) {
  const { deletePostId } = req.body;
  if (deletePostId.includes("admin")) {
    await db.deleteUserByIdDB(deletePostId.replace("admin", ""));
    const allUsers = await db.getAllUsersDB();
    console.log(allUsers);
  }
  res.redirect("/admin");
}

module.exports = {
  getAdmin,
  deleteUser,
};
