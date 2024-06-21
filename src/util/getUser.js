export default async function getUser(context) {
  let authToken = context.cookies.get('auth')
  
  if (!authToken) return null

  // await mongoose.connect(import.meta.env.MONGO_URI)

  // const user = await User.findOne({ jwt: authToken })

  // if (!user) return null

  // console.log('user', user)
  
  return null
}