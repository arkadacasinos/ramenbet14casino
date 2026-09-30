import { readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

async function stripScripts(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const location = path.join(directory, entry.name)
    if (entry.isDirectory()) {
      await stripScripts(location)
    } else if (entry.name.endsWith('.html')) {
      const html = await readFile(location, 'utf8')
      const clean = html
        .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<link\b(?=[^>]*(?:as=["']script["']|rel=["']modulepreload["']))[^>]*>/gi, '')
      await writeFile(location, clean)
    }
  }
}

await stripScripts('out')
console.log('Static export ready: semantic HTML and CSS, no browser scripts.')
