import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import { useMDXComponents } from '../../../mdx-components'
import { gautiStraipsni, gautiVisusSlug } from '../../../lib/straipsniai'

export async function generateStaticParams() {
  return gautiVisusSlug().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const straipsnis = gautiStraipsni(slug)

  if (!straipsnis) {
    return { title: 'Straipsnis nerastas' }
  }

  return {
    title: straipsnis.title,
    description: straipsnis.description,
    openGraph: {
      type: 'article',
      title: straipsnis.title,
      description: straipsnis.description,
      publishedTime: straipsnis.date,
      authors: [straipsnis.author],
      images: straipsnis.image ? [straipsnis.image] : ['/og-image.jpg'],
    },
  }
}

export default async function StraipsnioPuslapis({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const straipsnis = gautiStraipsni(slug)

  if (!straipsnis) {
    notFound()
  }

  const components = useMDXComponents({})

  return (
    <main>
      <Nav />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": straipsnis.title,
            "description": straipsnis.description,
            "datePublished": straipsnis.date,
            "author": {
              "@type": "Organization",
              "name": straipsnis.author,
            },
            "publisher": {
              "@type": "Organization",
              "name": "MB Statybų konsultantai",
              "logo": {
                "@type": "ImageObject",
                "url": "https://statybukonsultantai.lt/logo_icon.png",
              },
            },
          }),
        }}
      />

      <article style={{ background: '#F5F2ED', padding: '56px 32px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <a href="/straipsniai" style={{ fontSize: '13px', color: '#1C3A2F', textDecoration: 'none', fontWeight: 500 }}>← Visi straipsniai</a>

          <div style={{ marginTop: '24px', marginBottom: '32px' }}>
            <div style={{ display: 'inline-block', background: 'rgba(28,58,47,0.08)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', color: '#1C3A2F', fontWeight: 500, marginBottom: '16px' }}>{straipsnis.category}</div>
            <h1 style={{ fontSize: '34px', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.25, marginBottom: '16px' }}>{straipsnis.title}</h1>
            <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#999' }}>
              <span>{new Date(straipsnis.date).toLocaleDateString('lt-LT', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>·</span>
              <span>{straipsnis.readingTime}</span>
            </div>
          </div>

          <div style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '12px', padding: '40px' }}>
            <MDXRemote source={straipsnis.content} components={components} />
          </div>

          <div style={{ marginTop: '40px', background: '#1C3A2F', borderRadius: '12px', padding: '32px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '20px', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>Reikia profesionalios pagalbos?</h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '20px' }}>Susisiekite dėl nemokamos konsultacijos.</p>
            <a href="/#kontaktai" style={{ background: '#E8A020', color: '#1C3A2F', padding: '12px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>Susisiekti →</a>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}