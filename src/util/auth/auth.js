import { Lucia, TimeSpan } from "lucia";
import { adapter } from "./db";

// import { BetterSqlite3Adapter } from "@lucia-auth/adapter-sqlite";

// const adapter = new BetterSqlite3Adapter(db, {
// 	user: "user",
// 	session: "session"
// });

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			secure: import.meta.env.PROD
		}
	},
	getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			name: attributes.name,
			avatar: attributes.avatar,
			role: attributes.role,
		};
	},
	sessionExpiresIn: new TimeSpan(1, 'd')
});


// declare module "lucia" {
// 	interface Register {
// 		Lucia: typeof lucia;
// 		DatabaseUserAttributes: DatabaseUserAttributes;
// 	}
// }

// interface DatabaseUserAttributes {
// 	username: string;
// }