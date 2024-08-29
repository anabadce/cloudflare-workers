
async function handleRequest(request) {
  const payload = {
    IP : request.headers.get('CF-Connecting-IP'),
    Colo : request.cf.colo,
    ASN : request.cf.asn,
    ISP : request.cf.asOrganization,
    Country : request.cf.country,
    City : request.cf.city,
    Region : request.cf.region,
    Latitude : request.cf.latitude,
    Longitude : request.cf.longitude,
    PostalCode : request.cf.postalCode,
    TimeZone : request.cf.timezone,
    UserAgent : request.headers.get('User-Agent'),
  }

  if (request.url.includes('json')) {
    return new Response(JSON.stringify(payload), { 
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      }
    });
  }
  else {
    return new Response(objToString(payload), { 
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      }
    });
  }
}

function objToString (obj) {
  let str = '';
  for (const [p, val] of Object.entries(obj)) {
      str += `${p}: ${val}\n`;
  }
  return str;
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
