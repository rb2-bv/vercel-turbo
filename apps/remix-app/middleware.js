export const config = {
  // Only run the middleware on the admin route
  matcher: '/admin',
}

export default function middleware(request) {
  const url = new URL(request.url)
  console.log('[middleware from root]', request.url)
  // You can retrieve IP location or cookies here.
  if (url.pathname === '/admin') {
    url.pathname = '/'
  }
  return Response.redirect(url)
}
