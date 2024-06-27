import { lucia } from "./util/auth/auth";

import { defineMiddleware } from "astro/middleware";
import { roles } from "./util/db/schema";
import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { eq } from "drizzle-orm";


export const onRequest = defineMiddleware(async (context, next) => {
  const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) {
		context.locals.user = null;
		context.locals.session = null;
	}

  const onAuthPage = context.url.pathname === '/log-in' || context.url.pathname === '/create-account' 
  const { session, user } = await lucia.validateSession(sessionId);
  

  const client = createClient({ url: import.meta.env.SQLITE_URL, authToken: import.meta.env.SQLITE_TOKEN });
  const db = drizzle(client);

  const role = (await db.select().from(roles).where(eq(roles.id, user.role)).limit(1))[0]

  context.locals.user = {
    ...user,
    role: role,
  }
  context.locals.session = session
  // console.log('session', session)
  // console.log('user', user)
  

  if (!onAuthPage && !session) return context.redirect('/log-in')

  if (onAuthPage && session) return context.redirect('/')

  return next()
})