CREATE TABLE `content_models` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`order` integer NOT NULL,
	`fields` text,
	`permissions` text,
	`created_at` integer DEFAULT '"2024-06-21T21:15:47.194Z"',
	`updated_at` integer DEFAULT '"2024-06-21T21:15:47.194Z"'
);
--> statement-breakpoint
CREATE TABLE `contents` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`content_model` integer,
	`fields` text,
	`draftFields` text,
	`published` integer,
	`created_at` integer DEFAULT '"2024-06-21T21:15:47.194Z"',
	`updated_at` integer DEFAULT '"2024-06-21T21:15:47.194Z"',
	FOREIGN KEY (`content_model`) REFERENCES `content_models`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `mailing_contact` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`email` text NOT NULL,
	`subscriptions` text,
	`created_at` integer DEFAULT '"2024-06-21T21:15:47.195Z"',
	`updated_at` integer DEFAULT '"2024-06-21T21:15:47.195Z"'
);
--> statement-breakpoint
CREATE TABLE `mailing_lists` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`created_at` integer DEFAULT '"2024-06-21T21:15:47.195Z"',
	`updated_at` integer DEFAULT '"2024-06-21T21:15:47.195Z"'
);
--> statement-breakpoint
CREATE TABLE `roles` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`order` integer NOT NULL,
	`permissions` text,
	`created_at` integer DEFAULT '"2024-06-21T21:15:47.192Z"',
	`updated_at` integer DEFAULT '"2024-06-21T21:15:47.192Z"'
);
--> statement-breakpoint
CREATE TABLE `settings` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`value` text,
	`created_at` integer DEFAULT '"2024-06-21T21:15:47.193Z"',
	`updated_at` integer DEFAULT '"2024-06-21T21:15:47.193Z"'
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`role` integer,
	`email` text,
	`password` text,
	`salt` text,
	`auth_token` text,
	`avatar` text,
	`created_at` integer DEFAULT '"2024-06-21T21:15:47.193Z"',
	`updated_at` integer DEFAULT '"2024-06-21T21:15:47.193Z"'
);
--> statement-breakpoint
CREATE UNIQUE INDEX `content_models_order_unique` ON `content_models` (`order`);--> statement-breakpoint
CREATE UNIQUE INDEX `mailing_contact_email_unique` ON `mailing_contact` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `roles_name_unique` ON `roles` (`name`);--> statement-breakpoint
CREATE UNIQUE INDEX `roles_order_unique` ON `roles` (`order`);