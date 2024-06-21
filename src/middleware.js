import getUser from "./util/getUser"

import { defineMiddleware } from "astro/middleware";


export const onRequest = defineMiddleware(async (context, next) => {
  const user = await getUser(context)
  const onAuthPage = context.url.pathname === '/log-in' || context.url.pathname === '/create-account' 

  if (!user && !onAuthPage) return context.redirect('/log-in')

  if (user && onAuthPage) return context.redirect('/')

  return next()
})