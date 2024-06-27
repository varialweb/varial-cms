import { config } from "dotenv";

import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { sessions, users } from "../db/schema";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";

config()

const client = createClient({ url: process.env.SQLITE_URL, authToken: process.env.SQLITE_TOKEN });
const db = drizzle(client);

export const adapter = new DrizzleSQLiteAdapter(db, sessions, users);