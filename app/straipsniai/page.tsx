import type { Metadata } from 'next'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { gautiVisusStraipsnius } from '../../lib/straipsniai'

export const metadata: Metadata = {
  title: 'Straipsniai',
  description: 'Praktiniai patarimai apie statybų techninę priežiūrą, statybos vadovo paslaugas, pastatų priežiūrą ir statybų procesų valdymą Lietuvoje.',
}

export default function StraipsniuSarasas() {
  const straipsniai = gautiVisusStraipsnius()

  return (
    <main>
      <Nav />

      <section style={{ background: '#1C3A2F', padding: '64px 32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>Straipsniai</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
          Praktiniai patarimai apie statybų procesą, techninę priežiūrą ir projektų valdymą.
        </p>
      </section>

      <section style={{ background: '#F5F2ED', padding: '64px 32px', minHeight: '50vh' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          {straipsniai.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#999', fontSize: '15px' }}>Straipsnių dar nėra. Netrukus pasirodys.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {straipsniai.map((s) => (
                <a
                  key={s.slug}
                  href={`/straipsniai/${s.slug}`}
                  style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '12px', padding: '28px', textDecoration: 'none', display: 'block' }}
                >
                  <div style={{ display: 'inline-block', background: 'rgba(28,58,47,0.08)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', color: '#1C3A2F', fontWeight: 500, marginBottom: '12px' }}>{s.category}</div>
                  <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.3, marginBottom: '10px' }}>{s.title}</h2>
                  <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.65, marginBottom: '16px' }}>{s.description}</p>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '12px', color: '#999' }}>
                    <span>{new Date(s.date).toLocaleDateString('lt-LT', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    <span>·</span>
                    <span>{s.readingTime}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}