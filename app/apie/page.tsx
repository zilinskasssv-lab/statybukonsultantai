import type { Metadata } from 'next'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Apie mus',
  description: 'MB Statybų konsultantai – licencijuoti statybų inžinieriai su 25 metų patirtimi. Techninė priežiūra, statybos vadovas, pastatų priežiūra visoje Lietuvoje.',
}

export default function Apie() {
  return (
    <main>
      <style>{`
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .section-pad { padding: 64px 32px; }
        @media (max-width: 860px) {
          .about-grid { grid-template-columns: 1fr; gap: 32px; }
          .section-pad { padding: 40px 20px !important; }
        }
      `}</style>

      <Nav />

      <section className="section-pad" style={{ background: '#1C3A2F', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>Apie mus</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
          Statybų konsultantai – profesionali komanda, specializuojanti statybų konsultavimo paslaugose. Mūsų tikslas – užtikrinti aukštą statybų kokybę ir efektyvų projektų valdymą.
        </p>
      </section>

      <section className="section-pad" style={{ background: '#F5F2ED' }}>
        <div className="about-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 600, color: '#1A1A1A', marginBottom: '20px' }}>25 metų patirtis statybų srityje</h2>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '16px' }}>
              Mes dirbame su didžiausiu atidumu ir profesionalumu, siekdami užtikrinti, kad visi mūsų statybų projektai būtų atlikti aukščiausio lygio.
            </p>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '32px' }}>
              Mūsų darbai apima įvairius statybų objektus – nuo gyvenamųjų namų iki komercinių pastatų. Pasitikėkite mūsų patirtimi ir žiniomis.
            </p>
            <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
              {[
                { num: '120+', label: 'Įgyvendintų projektų' },
                { num: '25', label: 'Metų patirtis' },
                { num: '15', label: 'Pastovių partnerių' },
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ fontSize: '28px', fontWeight: 600, color: '#1C3A2F' }}>{item.num}</div>
                  <div style={{ fontSize: '12px', color: '#888', marginTop: '4px' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: '🏆', title: 'Profesionalumas', desc: 'Suteikiame aukštos kokybės statybų konsultavimo paslaugas, remdamiesi ilgamete patirtimi ir žiniomis.' },
              { icon: '🤝', title: 'Pasitikėjimas', desc: 'Užtikriname sąžiningą ir skaidrų bendradarbiavimą su klientais, siekdami ilgalaikės partnerystės.' },
              { icon: '💡', title: 'Inovacijos', desc: 'Nuolat sekiame naujausias statybų technologijas ir metodikas, siekdami efektyviai spręsti užduotis.' },
            ].map((p, i) => (
              <div key={i} style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '10px', padding: '20px', display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '24px', flexShrink: 0 }}>{p.icon}</div>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A1A', marginBottom: '6px' }}>{p.title}</div>
                  <div style={{ fontSize: '13px', color: '#666', lineHeight: 1.6 }}>{p.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad" style={{ background: '#1C3A2F', textAlign: 'center' }}>
        <h2 style={{ fontSize: '26px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Pasirengę pradėti?</h2>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>Susisiekite su mumis ir aptarkime jūsų projektą.</p>
        <a href="/#kontaktai" style={{ background: '#E8A020', color: '#1C3A2F', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
          Susisiekti →
        </a>
      </section>

      <Footer />
    </main>
  )
}