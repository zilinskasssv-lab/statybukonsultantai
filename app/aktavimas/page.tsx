import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import ProductLink from '../components/ProductLink'
import DocumentSamples from './DocumentSamples'

const APP_URL = 'https://aktavimas.statybukonsultantai.lt'

export const metadata: Metadata = pageMetadata({
  title: 'Atliktų darbų aktai F-2, F-3 ir sąskaita rangovams',
  description:
    'Internetinė programa rangovams: įkelkite sąmatą, įveskite arba nufotografuokite atliktus darbus ir gaukite aktą F-2, pažymą F-3 ir sąskaitą faktūrą viename Excel faile. 6,99 € už aktą, registracija nemokama.',
  path: '/aktavimas',
})

const zingsniai = [
  {
    nr: '1',
    title: 'Įkelkite sąmatą',
    desc: 'Excel (.xlsx, .xls), CSV arba PDF failą. Neturite failo – sąmatos eilutes galite įvesti ranka.',
  },
  {
    nr: '2',
    title: 'Įveskite atliktus darbus',
    desc: 'Kiekius įveskite ranka arba nufotografuokite meistro darbų lapą – programa suras eilutes sąmatoje. Kiekvieną eilutę patvirtinate jūs.',
  },
  {
    nr: '3',
    title: 'Gaukite dokumentus',
    desc: 'Aktas F-2, pažyma F-3 ir sąskaita faktūra viename Excel faile, paruoštame spausdinti ir pasirašyti.',
  },
]

const privalumai = [
  'Ankstesni aktai ir likučiai skaičiuojami automatiškai',
  'Kiekis negali viršyti sąmatoje numatyto kiekio',
  'Papildomi darbai tame pačiame akte',
  'PVM mokėtojams, atvirkštiniam PVM ir ne PVM mokėtojams',
  'Veikia naršyklėje – nieko diegti nereikia',
]

const duk = [
  {
    q: 'Kiek kainuoja?',
    a: '6,99 € už kiekvieną sugeneruotą objekto mėnesio aktą. Registracija, sąmatos įkėlimas ir darbų įvedimas nemokami, prenumeratos nėra. Mokate tik tada, kai generuojate aktą.',
  },
  {
    q: 'Kokio dydžio PDF sąmatą galima įkelti?',
    a: 'Iki 40 puslapių. Excel ir CSV sąmatos nuskaitomos be dirbtinio intelekto, todėl joms šis apribojimas netaikomas.',
  },
  {
    q: 'Ar galiu patikrinti duomenis prieš generuodamas aktą?',
    a: 'Taip. Importuotą sąmatą ir kiekvieną darbų eilutę patvirtinate patys. Programa tik paruošia – sprendžiate jūs.',
  },
  {
    q: 'Kas mato mano duomenis?',
    a: 'Jūsų sąmatos, objektai ir aktai matomi tik jūsų įmonės paskyroje – jums ir jūsų pakviestiems įmonės nariams. Daugiau – programos privatumo politikoje.',
  },
]

const ctaStyle = {
  background: '#E8A020',
  color: '#1C3A2F',
  padding: '15px 28px',
  borderRadius: '10px',
  fontSize: '16px',
  fontWeight: 700,
  textDecoration: 'none',
  display: 'inline-block',
} as const

export default function Aktavimas() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'Aktavimas',
            applicationCategory: 'BusinessApplication',
            operatingSystem: 'Web',
            description:
              'Atliktų darbų akto F-2, pažymos F-3 ir sąskaitos faktūros generavimas iš sąmatos rangovams.',
            offers: { '@type': 'Offer', price: '6.99', priceCurrency: 'EUR' },
            url: 'https://statybukonsultantai.lt/aktavimas',
          }),
        }}
      />

      <style>{`
        .akt-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .akt-sticky { display: none; }
        @media (max-width: 860px) {
          .akt-steps { grid-template-columns: 1fr; }
          .section-pad { padding: 36px 20px !important; }
          .akt-h1 { font-size: 28px !important; }
          .akt-sticky {
            display: block; position: fixed; left: 0; right: 0; bottom: 0; z-index: 50;
            background: #1C3A2F; padding: 10px 16px calc(10px + env(safe-area-inset-bottom));
            box-shadow: 0 -4px 16px rgba(0,0,0,0.15);
          }
          .akt-page { padding-bottom: 76px; }
        }
      `}</style>

      <div className="akt-page">
        <Nav />

        <section className="section-pad" style={{ background: '#1C3A2F', padding: '56px 32px', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', background: 'rgba(232,160,32,0.1)', border: '0.5px solid rgba(232,160,32,0.3)', borderRadius: '20px', padding: '5px 14px', fontSize: '12px', color: '#E8A020', fontWeight: 500, marginBottom: '18px' }}>
            Internetinė programa rangovams
          </div>
          <h1 className="akt-h1" style={{ fontSize: '38px', fontWeight: 700, color: '#fff', marginBottom: '16px', lineHeight: 1.2, maxWidth: '760px', marginLeft: 'auto', marginRight: 'auto' }}>
            Aktas F-2, pažyma F-3 ir sąskaita faktūra iš jūsų sąmatos
          </h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 24px', lineHeight: 1.65 }}>
            Mėnesio pabaigoje nebereikia rankomis perkelti meistrų lapelių į sąmatos eilutes. Įveskite arba nufotografuokite atliktus darbus – dokumentus programa sudės pati.
          </p>
          <ProductLink produktas="aktavimas" href={APP_URL} target="_blank" rel="noopener noreferrer" style={ctaStyle}>
            Pradėti – registracija nemokama →
          </ProductLink>
          <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginTop: '12px' }}>
            6,99 € už aktą · be prenumeratos
          </div>
        </section>

        <section className="section-pad" style={{ background: '#fff', padding: '48px 32px' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '22px', fontWeight: 600, color: '#1A1A1A', marginBottom: '6px', textAlign: 'center' }}>Taip atrodo sugeneruoti dokumentai</h2>
            <p style={{ fontSize: '13px', color: '#888', marginBottom: '18px', textAlign: 'center', lineHeight: 1.6 }}>
              Visi trys – viename Excel faile, atskiruose lapuose. Pavyzdžiai su išgalvotais duomenimis; paspaudę atidarysite didesnį vaizdą.
            </p>
            <DocumentSamples />
          </div>
        </section>

        <section className="section-pad" style={{ background: '#F5F2ED', padding: '48px 32px' }}>
          <div style={{ maxWidth: '960px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#1A1A1A', marginBottom: '24px', textAlign: 'center' }}>Kaip tai veikia</h2>
            <div className="akt-steps">
              {zingsniai.map((z) => (
                <div key={z.nr} style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '12px', padding: '22px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#1C3A2F', color: '#E8A020', fontWeight: 700, fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    {z.nr}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#1A1A1A', marginBottom: '8px' }}>{z.title}</h3>
                  <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65 }}>{z.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" style={{ background: '#fff', padding: '48px 32px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#1A1A1A', marginBottom: '18px' }}>Ką programa skaičiuoja už jus</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {privalumai.map((t) => (
                <div key={t} style={{ display: 'flex', gap: '10px', fontSize: '15px', color: '#444', lineHeight: 1.6 }}>
                  <span style={{ color: '#1C3A2F', fontWeight: 700, flexShrink: 0 }}>✓</span>
                  {t}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" style={{ background: '#F5F2ED', padding: '48px 32px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#1A1A1A', marginBottom: '18px' }}>Kaina</h2>
            <div style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '12px', padding: '26px' }}>
              <div style={{ fontSize: '32px', fontWeight: 700, color: '#1C3A2F' }}>
                6,99 € <span style={{ fontSize: '15px', fontWeight: 500, color: '#666' }}>už aktą</span>
              </div>
              <div style={{ fontSize: '14px', color: '#666', marginTop: '8px', lineHeight: 1.6 }}>
                Registracija, sąmatos įkėlimas ir darbų įvedimas – nemokami. Mokate tik generuodami objekto mėnesio aktą. Prenumeratos nėra.
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad" style={{ background: '#fff', padding: '48px 32px' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#1A1A1A', marginBottom: '18px' }}>Dažni klausimai</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {duk.map((d) => (
                <details key={d.q} style={{ border: '0.5px solid rgba(0,0,0,0.1)', borderRadius: '10px', padding: '14px 18px' }}>
                  <summary style={{ fontSize: '15px', fontWeight: 600, color: '#1A1A1A', cursor: 'pointer' }}>{d.q}</summary>
                  <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.65, marginTop: '10px' }}>
                    {d.a}
                    {d.q === 'Kas mato mano duomenis?' && (
                      <>
                        {' '}
                        <a href={`${APP_URL}/privatumas`} target="_blank" rel="noopener noreferrer" style={{ color: '#1C3A2F', fontWeight: 600 }}>
                          Privatumo politika →
                        </a>
                      </>
                    )}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad" style={{ background: '#1C3A2F', padding: '48px 32px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Išbandykite su savo objekto sąmata</h2>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', maxWidth: '480px', margin: '0 auto 22px', lineHeight: 1.6 }}>
            Registracija ir sąmatos įkėlimas nemokami. Klausimų – skambinkite +370 638 79755.
          </p>
          <ProductLink produktas="aktavimas" href={APP_URL} target="_blank" rel="noopener noreferrer" style={ctaStyle}>
            Pradėti →
          </ProductLink>
        </section>

        <Footer />
      </div>

      <div className="akt-sticky">
        <ProductLink
          produktas="aktavimas"
          href={APP_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ ...ctaStyle, display: 'block', textAlign: 'center', padding: '13px 16px', fontSize: '15px' }}
        >
          Pradėti – registracija nemokama
        </ProductLink>
      </div>
    </main>
  )
}
