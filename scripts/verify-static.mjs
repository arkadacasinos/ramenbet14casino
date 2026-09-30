import assert from 'node:assert/strict'
import { readFile, stat } from 'node:fs/promises'

const html = await readFile('out/index.html', 'utf8')
const text = value => value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
const title = html.match(/<title>([\s\S]*?)<\/title>/)?.[1]
const description = html.match(/<meta name="description" content="([^"]*)"/)?.[1]
assert.equal(title.length, 80)
assert.equal(description.length, 200)
assert.ok(!/<script\b/i.test(html), 'Export must not load JavaScript')
assert.ok(!/<link\b[^>]*as="script"/i.test(html))
assert.ok(html.includes('rel="canonical" href="https://ramenbet14casino.vercel.app/"'))
assert.ok(html.includes('<html lang="ru"'))
const article = html.match(/<article\b[\s\S]*?<\/article>/)?.[0]
const words = text(article).split(/\s+/).length
assert.ok(words >= 400 && words <= 500, `Article contains ${words} words`)
const sections = [...article.matchAll(/<section\b[^>]*>([\s\S]*?)<\/section>/g)].map(match => match[1])
const keywords = ['Ramenbet', 'Раменбет', 'Ramenbet зеркало', 'Рамен бет', 'Ramen bet', 'Раменбет зеркало', 'Ramenbet официальный сайт', 'Раменбет официальный сайт', 'Раменбет рабочее зеркало', 'Ramenbet казино', 'Раменбет казино']
for (const keyword of keywords) {
  assert.ok(sections.some(section => {
    const heading = text(section.match(/<h2\b[^>]*>([\s\S]*?)<\/h2>/)?.[1] ?? '')
    const paragraphs = [...section.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/g)].map(match => text(match[1]))
    return heading.includes(keyword) && paragraphs.some(paragraph => paragraph.includes(keyword))
  }), `Missing heading and paragraph keyword: ${keyword}`)
}
const ids = new Set([...html.matchAll(/\bid="([^"]*)"/g)].map(match => match[1]))
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(match[1]), `Broken anchor: ${match[1]}`)
assert.ok(html.includes('src="/images/ramen-safety.webp"'))
assert.ok(/<img[^>]*src="\/images\/ramen-safety.webp"[^>]*loading="lazy"/.test(html))
assert.ok((await readFile('out/robots.txt', 'utf8')).includes('https://ramenbet14casino.vercel.app/sitemap.xml'))
assert.ok((await readFile('out/sitemap.xml', 'utf8')).includes('https://ramenbet14casino.vercel.app/'))
for (const image of ['ramen-gate.webp', 'ramen-gate-mobile.webp', 'ramen-safety.webp']) {
  const size = (await stat(`out/images/${image}`)).size
  assert.ok(size < 120000, `Image is too large: ${image}`)
  console.log(`${image}: ${(size / 1024).toFixed(1)} KB`)
}
console.log(`Passed: ${words} article words, all 11 keywords, 80/200 metadata, valid anchors, lazy loading, robots, sitemap and zero scripts.`)
