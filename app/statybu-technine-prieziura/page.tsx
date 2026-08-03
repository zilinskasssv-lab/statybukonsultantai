import type { Metadata } from 'next'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Statybų techninė priežiūra',
  description: 'Statinio statybos techninė priežiūra pagal STR visoje Lietuvoje. Licencijuoti inžinieriai, 25 metų patirtis. Rangovų kontrolė, defektų fiksavimas, paslėptų darbų aktai. Nuo 150 €/mėn.',
  alternates: { canonical: '/statybu-technine-prieziura' },
}

const etapai = [
  { nr: '01', title: 'Dokumentacijos peržiūra', desc: 'Prieš pradedant darbus įvertiname projektą, rangos sutartį ir sąmatą. Ankstyvoje stadijoje pastebėtos spragos kainuoja mažiausiai.' },
  { nr: '02', title: 'Nuolatinė darbų kontrolė', desc: 'Reguliarūs vizitai objekte pagal statybos eigą. Tikriname darbų atitiktį projektui, medžiagų kokybę ir sertifikatus.' },
  { nr: '03', title: 'Paslėptų darbų fiksavimas', desc: 'Armavimas, hidroizoliacija, komunikacijos tikrinamos ir aktuojamos prieš uždengiant. Su matavimais ir fotofiksacija.' },
  { nr: '04', title: 'Defektų šalinimo kontrolė', desc: 'Nustatyti trūkumai fiksuojami aktais, o jų šalinimas kontroliuojamas iki rezultato, ne iki pažado.' },
  { nr: '05', title: 'Objekto priėmimas', desc: 'Statybos žurnalo tvarkymas, darbų priėmimo dokumentacija ir pasirengimas statybos užbaigimo procedūroms.' },
]

export default function StatybuTechninePrieziura() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Statybų techninė priežiūra",
            "name": "Statinio statybos techninė priežiūra",
            "description": "Statinio statybos techninė priežiūra pagal STR: rangovų kontrolė, defektų fiksavimas, paslėptų darbų aktai, objekto priėmimas.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "MB Statybų konsultantai",
              "telephone": "+37063879755",
              "url": "https://statybukonsultantai.lt"
            },
            "areaServed": { "@type": "Country", "name": "Lithuania" },
            "url": "https://statybukonsultantai.lt/statybu-technine-prieziura"
          })
        }}
      />

      <style>{`
        .svc-steps { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
        .svc-two { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
        @media (max-width: 860px) {
          .svc-steps { grid-template-columns: 1fr; }
          .svc-two { grid-template-columns: 1fr; gap: 28px; }
          .section-pad { padding: 40px 20px !important; }
        }
      `}</style>

      <Nav />

      <section className="section-pad" style={{ background: '#1C3A2F', padding: '64px 32px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: 'rgba(232,160,32,0.1)', border: '0.5px solid rgba(232,160,32,0.3)', borderRadius: '20px', padding: '5px 14px', fontSize: '11px', color: '#E8A020', fontWeight: 500, marginBottom: '20px' }}>Paslauga · Visoje Lietuvoje</div>
        <h1 style={{ fontSize: '38px', fontWeight: 600, color: '#fff', marginBottom: '18px', lineHeight: 1.2 }}>Statybų techninė priežiūra</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
          Nepriklausoma statybos darbų kontrolė, atstovaujanti užsakovui. Tikriname darbų atitiktį projektui, fiksuojame defektus ir užtikriname, kad objektas būtų pastatytas pagal reikalavimus.
        </p>
      </section>

      <section className="section-pad" style={{ background: '#F5F2ED', padding: '56px 32px' }}>
        <div className="svc-two" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#1A1A1A', marginBottom: '16px' }}>Kada priežiūra privaloma</h2>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '14px' }}>
              Pagal Statybos įstatymą techninė priežiūra privaloma ypatingiesiems ir neypatingiesiems statiniams – gyvenamiesiems namams, daugiabučiams, komerciniams pastatams ir rekonstrukcijos darbams.
            </p>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75 }}>
              Nesudėtingiems statiniams ji neprivaloma, tačiau rekomenduojama – būtent juose dažniausiai atsiranda neužfiksuotų defektų.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#1A1A1A', marginBottom: '16px' }}>Ką tai duoda užsakovui</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Nepriklausomą vertinimą, nesusijusį su rangovu',
                'Defektus, pastebėtus kol juos pigu taisyti',
                'Dokumentaciją, galiojančią ginčo atveju',
                'Kontrolę, kad būtų naudojamos sutartos medžiagos',
                'Terminų ir atsiskaitymų pagal etapus priežiūrą',
              ].map((t, i) => (
                <div key={i} style={{ display: 'flex', gap: '10px', fontSize: '14px', color: '#444', lineHeight: 1.6 }}>
                  <span style={{ color: '#1C3A2F', fontWeight: 600, flexShrink: 0 }}>✓</span>{t}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#fff', padding: '56px 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 600, color: '#1A1A1A', marginBottom: '28px', textAlign: 'center' }}>Ką apima paslauga</h2>
          <div className="svc-steps">
            {etapai.map((e, i) => (
              <div key={i} style={{ border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '12px', padding: '22px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#E8A020', marginBottom: '8px' }}>{e.nr}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#1A1A1A', marginBottom: '8px' }}>{e.title}</h3>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.65 }}>{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#F5F2ED', padding: '56px 32px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 600, color: '#1A1A1A', marginBottom: '20px' }}>Kaina</h2>
          <div style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '12px', padding: '28px', marginBottom: '20px' }}>
            <div style={{ fontSize: '30px', fontWeight: 700, color: '#1C3A2F', marginBottom: '6px' }}>nuo 0,6 % statybų vertės</div>
            <div style={{ fontSize: '14px', color: '#888' }}>arba nuo 150 €/mėn. – priklausomai nuo objekto</div>
          </div>
          <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75 }}>
            Galutinė kaina priklauso nuo objekto sudėtingumo, statybos trukmės ir reikiamo vizitų dažnumo. Sutartyje fiksuojama konkreti suma – be papildomų mokesčių eigoje. Daugiau apie kainodarą rašiau <a href="/straipsniai/statybu-technine-prieziura-kaina" style={{ color: '#E8A020' }}>atskirame straipsnyje</a>.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#1C3A2F', padding: '52px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Nemokama konsultacija dėl jūsų objekto</h2>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
          Aptarsime objektą, priežiūros apimtį ir pateiksime konkretų pasiūlymą.
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