//postgresqldb/pool.js
const { Pool } = require("pg");
require("dotenv").config();
const dbUrl = process?.argv[2]; // Get the database URL from the command-line argument

const pool = new Pool(
  dbUrl
    ? { connectionString: dbUrl }
    : {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASS,
        port: process.env.DB_PORT,
      },
);

module.exports = pool;
