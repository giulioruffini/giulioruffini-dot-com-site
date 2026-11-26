// Adds the GoatCounter visit counter to every HTML page of the built site.
//
// Runs after `vite build` (see the build script in package.json), so it covers the
// prerendered app routes and the standalone essay pages copied from public/blogs/ alike,
// including pages added later. The counter is therefore absent from `npm run dev`, from
// the page sources, and from any copy of a source page deposited elsewhere.
//
// Dashboard: https://giulioruffini.goatcounter.com (account and setup notes in README.md).
// Client-side navigations inside the app are counted by the hook in src/router.tsx.

import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

const ROOT = 'dist/client'

// The path callback counts only the production hosts, so local previews (k.local, LAN
// addresses) send nothing. It also strips the trailing slash that GitHub Pages adds to
// prerendered routes (/kt -> /kt/), so a direct visit and a client-side navigation to the
// same page are counted under one path.
const SETTINGS = `window.goatcounter = {
  path: function (p) {
    if (!/(^|\\.)giulioruffini\\.com$/.test(location.hostname)) return null
    var i = p.search(/[?#]/), path = i < 0 ? p : p.slice(0, i)
    return (path.replace(/\\/+$/, '') || '/') + (i < 0 ? '' : p.slice(i))
  }
}`

const SNIPPET = `<script>${SETTINGS}</script>
<script data-goatcounter="https://giulioruffini.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
`

async function* htmlFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* htmlFiles(path)
    else if (entry.name.endsWith('.html')) yield path
  }
}

let added = 0
for await (const file of htmlFiles(ROOT)) {
  const html = await readFile(file, 'utf8')
  if (html.includes('data-goatcounter=')) continue
  const at = html.indexOf('</head>')
  if (at < 0) {
    console.warn(`goatcounter: no </head> in ${file}; not counted`)
    continue
  }
  await writeFile(file, html.slice(0, at) + SNIPPET + html.slice(at))
  added++
}
console.log(`goatcounter: counter added to ${added} page(s) in ${ROOT}`)
