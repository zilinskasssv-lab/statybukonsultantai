import type { Metadata } from 'next'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Statybų konsultavimo paslaugos',
  description: 'Statybų konsultavimo paslaugos visoje Lietuvoje: techninė priežiūra, projektų valdymas, statinio statybos vadovas, sąmatų skaičiavimas, projektų auditavimas. 25 metų patirtis.',
  alternates: { canonical: '/statybu-konsultavimo-paslaugos' },
}

const pagrindines = [
  {
    title: 'Statybų techninė priežiūra',
    href: '/statybu-technine-prieziura',
    desc: 'Nepriklausoma statybos darbų kontrolė, atstovaujanti užsakovui: rangovų priežiūra, defektų fiksavimas, paslėptų darbų aktai, objekto priėmimas.',
    price: 'nuo 0,6 % statybų vertės',
  },
  {
    title: 'Pastatų techninė priežiūra',
    href: '/pastatu-technine-prieziura',
    desc: 'Eksploatuojamų pastatų priežiūra pagal STR 1.12.07:2010: kasmetinės ir sezoninės apžiūros, techninės būklės vertinimas, dokumentacija.',
    price: 'nuo 120 €/metus',
  },
]

const papildomos = [
  { title: 'Projektų valdymas', desc: 'Pilnas statybos projekto valdymas: rangovų koordinavimas, biudžeto ir terminų kontrolė, ataskaitos užsakovui.', price: '2,5–4 % projekto vertės' },
  { title: 'Statinio statybos vadovas', desc: 'Statybos darbų organizavimas ir vadovavimas objekte nuo pamatų iki darbų užbaigimo.', price: 'nuo 450 €/mėn.' },
  { title: 'Konsultacija prieš statybą', desc: '60 min. konsultacija su veiksmų planu, kainų orientyrais ir atsakymais į konkrečius klausimus.', price: '59 € / 60 min.' },
  { title: 'Sąmatų skaičiavimas', desc: 'Pilna darbų ir medžiagų sąmata visiems statybos etapams – pagrindas deryboms su rangovais.', price: 'nuo 149 €' },
  { title: 'Projektų auditavimas', desc: 'Nepriklausomas esamo projekto ar sąmatos vertinimas prieš pasirašant sutartį su rangovu.', price: 'nuo 149 €' },
  { title: 'Dokumentacijos paruošimas', desc: 'Statybų dokumentacijos parengimas ir atnaujinimas, aktų surašymas, žurnalo tvarkymas.', price: 'nuo 49 €' },
]

export default function StatybuKonsultavimoPaslaugos() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Statybų konsultavimo paslaugos",
            "name": "Statybų konsultavimo paslaugos",
            "description": "Statybų konsultavimas: techninė priežiūra, pastatų priežiūra, projektų valdymas, statinio statybos vadovas, sąmatos ir projektų auditavimas.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "MB Statybų konsultantai",
              "telephone": "+37063879755",
              "url": "https://statybukonsultantai.lt"
            },
            "areaServed": { "@type": "Country", "name": "Lithuania" },
            "url": "https://statybukonsultantai.lt/statybu-konsultavimo-paslaugos"
          })
        }}
      />

      <style>{`
        .hub-main { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .hub-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
        @media (max-width: 860px) {
          .hub-main { grid-template-columns: 1fr; }
          .hub-grid { grid-template-columns: 1fr; }
          .section-pad { padding: 40px 20px !important; }
        }
      `}</style>

      <Nav />

      <section className="section-pad" style={{ background: '#1C3A2F', padding: '64px 32px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: 'rgba(232,160,32,0.1)', border: '0.5px solid rgba(232,160,32,0.3)', borderRadius: '20px', padding: '5px 14px', fontSize: '11px', color: '#E8A020', fontWeight: 500, marginBottom: '20px' }}>25 metų patirtis · Visoje Lietuvoje</div>
        <h1 style={{ fontSize: '38px', fontWeight: 600, color: '#fff', marginBottom: '18px', lineHeight: 1.2 }}>Statybų konsultavimo paslaugos</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
          Licencijuoti statybų inžinieriai, atstovaujantys užsakovui visuose statybos etapuose – nuo projekto vertinimo iki objekto priėmimo ir eksploatacijos priežiūros.
        </p>
      </section>

      <section className="section-pad" style={{ background: '#F5F2ED', padding: '56px 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 600, color: '#1A1A1A', marginBottom: '24px' }}>Pagrindinės paslaugos</h2>
          <div className="hub-main">
            {pagrindines.map((s, i) => (
              <a key={i} href={s.href} style={{ background: '#1C3A2F', borderRadius: '12px', padding: '28px 24px', textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, flex: 1 }}>{s.desc}</p>
                <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.12)', paddingTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '13px', color: '#E8A020', fontWeight: 600 }}>{s.price}</span>
                  <span style={{ fontSize: '13px', color: '#E8A020', fontWeight: 600 }}>Plačiau →</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#fff', padding: '56px 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 600, color: '#1A1A1A', marginBottom: '24px' }}>Kitos paslaugos</h2>
          <div className="hub-grid">
            {papildomos.map((s, i) => (
              <div key={i} style={{ border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.3 }}>{s.title}</h3>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.65, flex: 1 }}>{s.desc}</p>
                <div style={{ borderTop: '0.5px solid rgba(0,0,0,0.06)', paddingTop: '10px', fontSize: '12px', color: '#1C3A2F', fontWeight: 600 }}>{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#F5F2ED', padding: '56px 32px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 600, color: '#1A1A1A', marginBottom: '18px' }}>Kaip dirbame</h2>
          <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '14px' }}>
            Pradedame nuo nemokamos konsultacijos, kurios metu aptariame objektą ir jūsų situaciją. Po jos pateikiame konkretų pasiūlymą su fiksuota kaina – be papildomų mokesčių darbų eigoje.
          </p>
          <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75 }}>
            Visais atvejais atstovaujame užsakovui, ne rangovui. Tai principinė nuostata: nepriklausomumas yra vienintelė sąlyga, kuriai esant kontrolė turi prasmę. Kaip tai atrodo praktikoje – <a href="/straipsniai/defektinis-aktas-atvejis-durys" style={{ color: '#E8A020' }}>atvejis iš objekto</a>.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#1C3A2F', padding: '52px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Nemokama konsultacija</h2>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
          Aptarsime jūsų objektą ir pasiūlysime tinkamiausią sprendimą.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:+37063879755" style={{ background: '#E8A020', color: '#1C3A2F', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>📞 +370 638 79755</a>
          <a href="/#kontaktai" style={{ background: 'rgba(255,255,255,0.08)', color: '#fff', border: '0.5px solid rgba(255,255,255,0.2)', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>Rašyti žinutę →</a>
        </div>
      </section>

      <Footer />
    </main>
  )
}