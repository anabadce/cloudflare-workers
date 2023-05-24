/**
* Respond with ip address
* @param {Request} request
*/
async function handleRequest(req) {
  const ip = req.headers.get('CF-Connecting-IP');
  const country = req.headers.get('Cf-Ipcountry');
  const asn = req.cf.asn;
  const asOrganization = req.cf.asOrganization;
  const colo = req.cf.colo; // https://en.wikipedia.org/wiki/IATA_airport_code

  response = `${ip} - ${country} - ASN: ${asn} (${asOrganization}) - Edge colo: ${colo}`;

  return new Response(response, {
      headers: {
          'content-type': 'text/plain',
      },
  })
}

module.exports = handleRequest;
