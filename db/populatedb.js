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
  const client = new Client({
    connectionString: process.argv[2] || process.env.PG_CONNECTION_URL,
  });

  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("Database populated!");
}

main().catch((err) => console.error(err));
