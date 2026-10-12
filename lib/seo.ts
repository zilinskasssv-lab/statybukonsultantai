import type { Metadata } from 'next'

const SITE_NAME = 'Statybų konsultantai'
const DEFAULT_IMAGE = { url: '/og-image.jpg', width: 1200, height: 630, alt: SITE_NAME }

type PageSeo = {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  publishedTime?: string
  image?: string
}

export function pageMetadata({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
  image,
}: PageSeo): Metadata {
  const images = image ? [{ url: image, width: 1200, height: 630, alt: title }] : [DEFAULT_IMAGE]

  const base = {
    locale: 'lt_LT',
    siteName: SITE_NAME,
    url: path,
    title,
    description,
    images,
  }

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph:
      type === 'article'
        ? { ...base, type: 'article', publishedTime, authors: ['MB Statybų konsultantai'] }
        : { ...base, type: 'website' },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: images.map((i) => i.url),
    },
  }
}