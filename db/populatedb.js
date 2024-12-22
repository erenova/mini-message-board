#! /usr/bin/env node

const { Client } = require("pg");
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR (255),
  message VARCHAR (255),
  message_time TIME
);

INSERT INTO messages (author, message, message_time)
VALUES
  ('Thor', 'GRR', '00:00'),
  ('Odin', 'TBH i love open-source!', '06:38'),
  ('Damon', 'Me too:))', '11:56');
`;

async function main() {
  const dbUrl = process.argv[2]; // Get the database URL from the command-line argument
  if (!dbUrl) {
    console.error("Error: Please provide a database connection URL.");
    process.exit(1);
  }

  console.log("Connecting to the database...");
  const client = new Client({ connectionString: dbUrl });
  try {
    await client.connect();
    console.log("Running the SQL commands...");
    await client.query(SQL);
    console.log("Database setup complete!");
  } catch (err) {
    console.error("Error setting up the database:", err);
  } finally {
    await client.end();
    console.log("Disconnected from the database.");
  }
}

main();
