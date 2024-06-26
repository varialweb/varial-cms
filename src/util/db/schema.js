import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const roles = sqliteTable('roles', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name').unique(),
  order: integer('order', { mode: 'number' }).unique(),
  permissions: text('permissions', { mode: 'json' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date(Date.now())),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(new Date(Date.now())),
})

export const users = sqliteTable('users', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name'),
  role: integer('role').references(() => roles.id),
  email: text('email'),
  password: text('password'),
  salt: text('salt'),
  authToken: text('auth_token'),
  avatar: text('avatar'),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date(Date.now())),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(new Date(Date.now())),
})


export const settings = sqliteTable('settings', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name'),
  value: text('value', { mode: 'json' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date(Date.now())),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(new Date(Date.now())),
})

export const contentModels = sqliteTable('content_models', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name', { mode: 'json' }),
  order: integer('order').unique().notNull(),
  fields: text('fields', { mode: 'json' }),
  permissions: text('permissions', { mode: 'json' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date(Date.now())),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(new Date(Date.now())),
})

export const contents = sqliteTable('contents', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  contentModel: integer('content_model').references(() => contentModels.id),
  fields: text('fields', { mode: 'json' }),
  draftFields: text('draftFields', { mode: 'json' }),
  published: integer('published', { mode: 'boolean' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date(Date.now())),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(new Date(Date.now())),
})

export const mailingLists = sqliteTable('mailing_lists', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name'),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date(Date.now())),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(new Date(Date.now())),
})

export const mailingContact = sqliteTable('mailing_contact', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name'),
  email: text('email').notNull().unique(),
  subscriptions: text('subscriptions', { mode: 'json' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).default(new Date(Date.now())),
  updatedAt: integer('updated_at', { mode: 'timestamp' }).default(new Date(Date.now())),
})