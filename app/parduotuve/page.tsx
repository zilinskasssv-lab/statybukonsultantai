import type { Metadata } from 'next'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Parduotuvė',
  description: 'Skaitmeniniai produktai statybų užsakovams: el. knyga „Kaip pasistatyti namą nuo A iki Z", statybų sąmatų kalkuliatorius. Praktinės žinios iš 25 metų patirties.',
}

export default function Parduotuve() {
  return (
    <main>
      <style>{`
        .product-card { display: grid; grid-template-columns: 280px 1fr; }
        .section-pad { padding: 64px 32px; }
        @media (max-width: 860px) {
          .product-card { grid-template-columns: 1fr; }
          .section-pad { padding: 40px 20px !important; }
        }
      `}</style>

      <Nav />

      <section className="section-pad" style={{ background: '#1C3A2F', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>Parduotuvė</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
          Skaitmeniniai produktai statybų užsakovams ir savarankiškiems statytojams.
        </p>
      </section>

      <section className="section-pad" style={{ background: '#F5F2ED' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div className="product-card" style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '16px', overflow: 'hidden' }}>
            <div style={{ background: '#1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '32px' }}>
              <img src="/knyga.png" alt="El. knyga: Kaip pasistatyti namą nuo A iki Z" style={{ width: '100%', maxWidth: '220px', height: 'auto', borderRadius: '4px', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }} />
            </div>
            <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ display: 'inline-block', background: 'rgba(28,58,47,0.08)', borderRadius: '20px', padding: '4px 14px', fontSize: '11px', color: '#1C3A2F', fontWeight: 500, marginBottom: '12px' }}>El. knyga · PDF</div>
                <h2 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A1A', lineHeight: 1.3, marginBottom: '10px' }}>Kaip pasistatyti namą nuo A iki Z</h2>
                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.7 }}>
                  Išsamus vadovas kaip tinkamai organizuoti statybų projektą – nuo leidimų gavimo iki darbų priėmimo. Praktiniai patarimai iš 25 metų patirties statybų srityje.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {[
                  'Leidimų gavimo procesas žingsnis po žingsnio',
                  'Rangovo parinkimo kriterijai ir sutarčių sąlygos',
                  'Kaip kontroliuoti statybos kokybę ir terminus',
                  'Darbų priėmimo tvarka ir dokumentacija',
                  '7 dažniausios klaidos ir kaip jų išvengti',
                ].map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '12px', color: '#444' }}>
                    <span style={{ color: '#1C3A2F', flexShrink: 0, fontWeight: 600 }}>✓</span>{f}
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '0.5px solid rgba(0,0,0,0.08)', paddingTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <div style={{ fontSize: '28px', fontWeight: 700, color: '#1C3A2F' }}>14.99 €</div>
                  <div style={{ fontSize: '11px', color: '#999', marginTop: '2px' }}>Momentinis pristatymas el. paštu</div>
                </div>
                <a href="https://payhip.com/b/Kium5" target="_blank" rel="noopener noreferrer" style={{ background: '#E8A020', color: '#1C3A2F', padding: '12px 20px', borderRadius: '8px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
                  Įsigyti dabar →
                </a>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '24px', background: '#1C3A2F', borderRadius: '12px', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '32px', flexShrink: 0 }}>🧮</div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>Statybų sąmatų kalkuliatorius</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.5 }}>Suveskite namo parametrus ir gaukite detalią sąmatą PDF formatu.</div>
            </div>
            <a href="https://prosamata.lt" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(232,160,32,0.15)', color: '#E8A020', border: '0.5px solid rgba(232,160,32,0.3)', padding: '10px 18px', borderRadius: '7px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
              Išbandyti →
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}