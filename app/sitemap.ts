import { MetadataRoute } from 'next'
import { gautiVisusStraipsnius } from '../lib/straipsniai'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://statybukonsultantai.lt'

  const statiniaiPuslapiai: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/apie`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/parduotuve`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/straipsniai`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  const straipsniuPuslapiai: MetadataRoute.Sitemap = gautiVisusStraipsnius().map((s) => ({
    url: `${baseUrl}/straipsniai/${s.slug}`,
    lastModified: new Date(s.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...statiniaiPuslapiai, ...straipsniuPuslapiai]
}