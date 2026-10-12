import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = pageMetadata({
  title: 'Pastatų techninė priežiūra',
  description: 'Pastatų techninė priežiūra pagal STR 1.12.07:2010 visoje Lietuvoje. Kasmetinės ir sezoninės apžiūros, techninės būklės vertinimo aktai, priežiūros dokumentacija. Nuo 120 €/metus.',
  path: '/pastatu-technine-prieziura',
})

const apziuros = [
  { nr: '01', title: 'Nuolatinė stebėsena', desc: 'Kasdienis pastato būklės sekimas, leidžiantis pastebėti pokyčius anksti – dar prieš jiems tapus defektu.' },
  { nr: '02', title: 'Kasmetinė apžiūra', desc: 'Išsami visų konstrukcijų ir inžinerinių sistemų patikra kartą per metus su rašytiniu vertinimu.' },
  { nr: '03', title: 'Sezoninės apžiūros', desc: 'Pastato būklės vertinimas prieš ir po žiemos sezono – kai išryškėja drėgmės ir šalčio poveikis.' },
  { nr: '04', title: 'Neeilinės apžiūros', desc: 'Patikra po stichinių nelaimių, avarijų ar bet kokio įvykio, galėjusio paveikti konstrukcijas.' },
]

export default function PastatuTechninePrieziura() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Pastatų techninė priežiūra",
            "name": "Pastatų techninė priežiūra pagal STR 1.12.07:2010",
            "description": "Eksploatuojamų pastatų techninė priežiūra: kasmetinės ir sezoninės apžiūros, defektų fiksavimas, techninės būklės vertinimo aktai ir priežiūros dokumentacija.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "MB Statybų konsultantai",
              "telephone": "+37063879755",
              "url": "https://statybukonsultantai.lt"
            },
            "areaServed": { "@type": "Country", "name": "Lithuania" },
            "url": "https://statybukonsultantai.lt/pastatu-technine-prieziura"
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
        <div style={{ display: 'inline-block', background: 'rgba(232,160,32,0.1)', border: '0.5px solid rgba(232,160,32,0.3)', borderRadius: '20px', padding: '5px 14px', fontSize: '11px', color: '#E8A020', fontWeight: 500, marginBottom: '20px' }}>Paslauga · Pagal STR 1.12.07:2010</div>
        <h1 style={{ fontSize: '38px', fontWeight: 600, color: '#fff', marginBottom: '18px', lineHeight: 1.2 }}>Pastatų techninė priežiūra</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
          Eksploatuojamų pastatų būklės stebėsena ir vertinimas. Reguliarios apžiūros, defektų fiksavimas ir tvarkinga dokumentacija, užtikrinanti saugią bei ekonomišką pastato eksploataciją.
        </p>
      </section>

      <section className="section-pad" style={{ background: '#F5F2ED', padding: '56px 32px' }}>
        <div className="svc-two" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#1A1A1A', marginBottom: '16px' }}>Kam ši paslauga</h2>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '14px' }}>
              Priežiūra privaloma daugumai eksploatuojamų statinių – gyvenamiesiems namams, daugiabučiams, komerciniams, administraciniams ir gamybiniams pastatams.
            </p>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75 }}>
              Atsakomybė tenka savininkui arba valdytojui. Daugiabučiuose – administratoriui ar bendrijai. Apžiūras atlieka kvalifikuoti specialistai.
            </p>
          </div>
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#1A1A1A', marginBottom: '16px' }}>Ką tikriname</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Laikančiąsias konstrukcijas: pamatus, sienas, perdangas, stogą',
                'Fasadų būklę ir hidroizoliaciją',
                'Inžinerines sistemas: šildymą, vandentiekį, ventiliaciją',
                'Elektros instaliacijos saugumą',
                'Evakuacijos kelius ir priešgaisrinės saugos atitiktį',
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
          <h2 style={{ fontSize: '26px', fontWeight: 600, color: '#1A1A1A', marginBottom: '28px', textAlign: 'center' }}>Apžiūrų tipai</h2>
          <div className="svc-steps">
            {apziuros.map((e, i) => (
              <div key={i} style={{ border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '12px', padding: '22px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#E8A020', marginBottom: '8px' }}>{e.nr}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#1A1A1A', marginBottom: '8px' }}>{e.title}</h3>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.65 }}>{e.desc}</p>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.7, marginTop: '24px', textAlign: 'center' }}>
            Kiekviena apžiūra dokumentuojama – susidaro pastato techninės būklės vaizdas laike. Plačiau apie savininko pareigas rašiau <a href="/straipsniai/pastatu-technine-prieziura-savininkui" style={{ color: '#E8A020' }}>atskirame straipsnyje</a>.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#F5F2ED', padding: '56px 32px' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 600, color: '#1A1A1A', marginBottom: '20px' }}>Kaina</h2>
          <div style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '12px', padding: '28px', marginBottom: '20px' }}>
            <div style={{ fontSize: '30px', fontWeight: 700, color: '#1C3A2F', marginBottom: '6px' }}>nuo 120 €/metus</div>
            <div style={{ fontSize: '14px', color: '#888' }}>arba 0,2–0,5 % pastato vertės – priklausomai nuo objekto</div>
          </div>
          <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75 }}>
            Kaina priklauso nuo pastato dydžio, paskirties ir apžiūrų dažnumo. Priežiūros nevykdymas rizikingesnis nei jos kaina – laiku nepašalintas defektas tampa brangesniu remontu, o įvykus nelaimei kyla teisinė atsakomybė.
          </p>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#1C3A2F', padding: '52px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Aptarkime jūsų pastatą</h2>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '24px', maxWidth: '480px', margin: '0 auto 24px' }}>
          Įvertinsime reikiamą priežiūros apimtį ir pateiksime konkretų pasiūlymą.
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