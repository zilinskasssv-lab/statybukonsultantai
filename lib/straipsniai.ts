import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const STRAIPSNIU_KATALOGAS = path.join(process.cwd(), 'content/straipsniai')

export interface StraipsnioMeta {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  image?: string
  readingTime: string
}

export interface Straipsnis extends StraipsnioMeta {
  content: string
}

function uztikrintiKataloga() {
  if (!fs.existsSync(STRAIPSNIU_KATALOGAS)) {
    fs.mkdirSync(STRAIPSNIU_KATALOGAS, { recursive: true })
  }
}

export function gautiVisusSlug(): string[] {
  uztikrintiKataloga()
  return fs
    .readdirSync(STRAIPSNIU_KATALOGAS)
    .filter((failas) => failas.endsWith('.mdx'))
    .map((failas) => failas.replace(/\.mdx$/, ''))
}

export function gautiStraipsni(slug: string): Straipsnis | null {
  uztikrintiKataloga()
  const failoKelias = path.join(STRAIPSNIU_KATALOGAS, `${slug}.mdx`)

  if (!fs.existsSync(failoKelias)) {
    return null
  }

  const failoTurinys = fs.readFileSync(failoKelias, 'utf8')
  const { data, content } = matter(failoTurinys)
  const skaitymas = readingTime(content)

  return {
    slug,
    title: data.title ?? '',
    description: data.description ?? '',
    date: data.date ?? '',
    author: data.author ?? 'MB Statybų konsultantai',
    category: data.category ?? 'Statyba',
    image: data.image ?? null,
    readingTime: `${Math.ceil(skaitymas.minutes)} min. skaitymo`,
    content,
  }
}

export function gautiVisusStraipsnius(): StraipsnioMeta[] {
  const slugai = gautiVisusSlug()

  const straipsniai = slugai
    .map((slug) => {
      const straipsnis = gautiStraipsni(slug)
      if (!straipsnis) return null
      const { content, ...meta } = straipsnis
      return meta
    })
    .filter((s): s is StraipsnioMeta => s !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return straipsniai
}