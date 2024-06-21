import { config } from "dotenv";

config()

/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./src/util/db/schema.js",
  dialect: 'sqlite',
  driver: 'turso',
  dbCredentials: {
    url: process.env.SQLITE_URL,
    authToken: process.env.SQLITE_TOKEN,
  }
};
