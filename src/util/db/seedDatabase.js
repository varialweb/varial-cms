import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import { config } from "dotenv";
import { roles, settings } from './schema.js';

config()

const client = createClient({ url: process.env.SQLITE_URL, authToken: process.env.SQLITE_TOKEN });
const db = drizzle(client);

async function seed() {
  await db.insert(roles).values({
    id: 0,
    order: 0,
    name: 'Developer',
    permissions: {
      view: {
        contentManager: true,
        marketingEmails: true,
        mediaLibrary: true,
        roles: true,
        settings: true,
        users: true,
      },
      create: {
        contentModels: true,
        content: true,
        marketingEmails: true,
        media: true,
        roles: true,
        settings: true,
        users: true,
      },
      edit: {
        contentModels: true,
        content: true,
        marketingEmails: true,
        media: true,
        roles: true,
        settings: true,
        users: true,
      },
      delete: {
        contentModels: true,
        content: true,
        marketingEmails: true,
        media: true,
        roles: true,
        settings: true,
        users: true,
      },
      send: {
        marketingEmails: true,
      },
      editBy: [],
      editSelf: true,
    }
  })
  
  await db.insert(roles).values({
    id: 1,
    order: 1,
    name: 'Admin',
    permissions: {
      view: {
        contentManager: true,
        marketingEmails: true,
        mediaLibrary: true,
        roles: true,
        settings: true,
        users: true,
      },
      create: {
        contentModels: true,
        content: true,
        marketingEmails: true,
        media: true,
        roles: true,
        settings: true,
        users: true,
      },
      edit: {
        contentModels: true,
        content: true,
        marketingEmails: true,
        media: true,
        roles: true,
        settings: true,
        users: true,
      },
      delete: {
        contentModels: true,
        content: true,
        marketingEmails: true,
        media: true,
        roles: true,
        settings: true,
        users: true,
      },
      send: {
        marketingEmails: true,
      },
      editBy: [0],
      editSelf: false,
    }
  }).returning()
  
  await db.insert(roles).values({
    id: 2,
    order: 2,
    name: 'User',
    permissions: {
      view: {
        contentManager: false,
        marketingEmails: false,
        mediaLibrary: false,
        roles: false,
        settings: false,
        users: false,
      },
      create: {
        contentModels: false,
        content: false,
        marketingEmails: false,
        media: false,
        roles: false,
        settings: false,
        users: false,
      },
      edit: {
        contentModels: false,
        content: false,
        marketingEmails: false,
        media: false,
        roles: false,
        settings: false,
        users: false,
      },
      delete: {
        contentModels: false,
        content: false,
        marketingEmails: false,
        media: false,
        roles: false,
        settings: false,
        users: false,
      },
      send: {
        marketingEmails: false,
      },
      editBy: [0],
      editSelf: false,
    }
  })
  
  await db.insert(settings).values({
    name: 'role-settings',
    value: {
      defaultRole: 2,
    },
  })
}

await seed()

