const pool = require("./pool");

async function getAllUsersDB() {
  const allUsers = await pool.query("SELECT * FROM messages");
  console.log(allUsers.rows);
  return allUsers.rows;
}

async function addNewUserDB(userObj) {
  await pool.query(
    "INSERT INTO messages(author, message, message_time) VALUES ($1,$2,$3)",
    [userObj.author, userObj.message, userObj.message_time],
  );
  console.log(`${userObj.author}'s message saved to db`);
}
async function getUserByIdDB(userId) {
  const user = await pool.query("SELECT * FROM messages WHERE id = ($1)", [
    userId,
  ]);
  return user.rows[0];
}

async function deleteUserByIdDB(userId) {
  const user = await pool.query("DELETE FROM messages WHERE id = ($1)", [
    userId,
  ]);
}

module.exports = {
  getAllUsersDB,
  addNewUserDB,
  getUserByIdDB,
  deleteUserByIdDB,
};
