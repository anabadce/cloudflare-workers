
async function handleRequest(request) {
  const clientUA = request.headers.get('User-Agent');
  const clientIP = request.headers.get('CF-Connecting-IP');
  const clientASN = request.cf.asn;
  const clientISP = request.cf.asOrganization;
  const clientCO = request.cf.country;
  const clientCI = request.cf.city;
  const clientRE = request.cf.region;
  const clientLAT = request.cf.latitude;
  const clientLON = request.cf.longitude;
  const clientPC = request.cf.postalCode;
  const clientTZ = request.cf.timezone;
	const clientColo = request.cf.colo;

  return new Response("Public IP: " + clientIP + "\n" + 
  "ASN: " + clientASN + "\n" + 
  "ISP: " + clientISP + "\n" + 
  "Country: " + clientCO + "\n" + 
  "City: " + clientCI + "\n" + 
  "Region: " + clientRE + "\n" + 
  "Latitude, Longitude: " + clientLAT + "," + clientLON + "\n" + 
  "Postal Code: " + clientPC + "\n" + 
  "Timezone: " + clientTZ + "\n" + 
  "User Agent: " + clientUA + "\n" +
	"Cloudflare Colo: " + clientColo + "\n"
  );
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});
