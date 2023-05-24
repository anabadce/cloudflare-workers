async function handleRequest(request) {
  const newReq = new Request(request)

  newReq.headers.append('x-workers-hello', 'Hello from Cloudflare Workers');

  return await fetch(newReq);
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
