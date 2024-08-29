
## What is my ip

Cloudflare worker that returns info about connecting IP

DEMO: [ip.abadcer.com](https://ip.abadcer.com/)

## Usage

http://ip.abadcer.com
- Returns text

http://ip.abadcer.com/json
- Returns JSON

Also works with https

```
# simple
curl ip.abadcer.com

# pretty
curl -s ip.abadcer.com/json | jq
```

## Source of inspiration

- Cloudflare headers: https://developers.cloudflare.com/workers/runtime-apis/request/#incomingrequestcfproperties
- Original source: https://niksec.com/creating-a-simple-ip-check-tool-with-cloudflare-workers/

# Apendix

```
npm create cloudflare\@2 -- whatismyip

npm run dev

npm run deploy

```
