//postgresqldb/pool.js
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: postgres.railway.internal,
  user: postgres,
  database: railway,
  password: WPdRakcIUialhbPABKaVibrDJlgFjapQ,
  port: 5432,
});

module.exports = pool;
