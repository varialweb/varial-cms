export async function POST({ request }) {
  console.log('POST REQUEST IN CREATE ACCOUNT')

  return new Response(JSON.stringify({ message: 'hello world' }))
}