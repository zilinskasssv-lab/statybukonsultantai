'use client'

import { useState } from 'react'

export default function Apie() {
  const [meniuAtidarytas, setMeniuAtidarytas] = useState(false)

  return (
    <main>
      <style>{`
        .nav-links { display: flex; gap: 24px; flex: 1; justify-content: center; }
        .nav-right-tel { display: flex; }
        .hamburger { display: none; }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .section-pad { padding: 64px 32px; }

        @media (max-width: 860px) {
          .nav-links { display: none; }
          .nav-right-tel { display: none; }
          .hamburger { display: flex !important; }
          .about-grid { grid-template-columns: 1fr; gap: 32px; }
          .nav-wrap { padding: 10px 16px !important; }
          .section-pad { padding: 40px 20px !important; }
        }
      `}</style>

      <nav className="nav-wrap" style={{ background: '#1C3A2F', padding: '8px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none' }}>
          <img src="/logo_icon.png" alt="logo" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>Statybų konsultantai</div>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Statybų valdymas</div>
          </div>
        </a>
        <div className="nav-links">
          {[
            { label: 'Paslaugos', href: '/#paslaugos' },
            { label: 'Projektai', href: '/#projektai' },
            { label: 'Apie', href: '/apie' },
            { label: 'Parduotuvė', href: '/parduotuve' },
            { label: 'Kontaktai', href: '/#kontaktai' },
          ].map(item => (
            <a key={item.label} href={item.href} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', whiteSpace: 'nowrap' }}>{item.label}</a>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <a href="tel:+37063879755" className="nav-right-tel" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.12)', borderRadius: '6px', padding: '6px 12px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            📞 +370 638 79755
          </a>
          <a href="/#kontaktai" style={{ background: '#E8A020', color: '#1C3A2F', padding: '8px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Gauti pasiūlymą
          </a>
          <button className="hamburger" onClick={() => setMeniuAtidarytas(!meniuAtidarytas)} style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer', padding: '4px 8px' }}>
            {meniuAtidarytas ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {meniuAtidarytas && (
        <div style={{ background: '#1C3A2F', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '0.5px solid rgba(255,255,255,0.1)' }}>
          {[
            { label: 'Paslaugos', href: '/#paslaugos' },
            { label: 'Projektai', href: '/#projektai' },
            { label: 'Apie', href: '/apie' },
            { label: 'Parduotuvė', href: '/parduotuve' },
            { label: 'Kontaktai', href: '/#kontaktai' },
          ].map(item => (
            <a key={item.label} href={item.href} onClick={() => setMeniuAtidarytas(false)} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', padding: '10px 0', borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}>{item.label}</a>
          ))}
          <a href="tel:+37063879755" style={{ fontSize: '14px', color: '#E8A020', textDecoration: 'none', padding: '10px 0' }}>📞 +370 638 79755</a>
        </div>
      )}

      <section className="section-pad" style={{ background: '#1C3A2F', padding: '64px 32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>Apie mus</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
          Statybų konsultantai – profesionali komanda, specializuojanti statybų konsultavimo paslaugose. Mūsų tikslas – užtikrinti aukštą statybų kokybę ir efektyvų projektų valdymą.
        </p>
      </section>

      <section className="section-pad" style={{ background: '#F5F2ED', padding: '64px 32px' }}>
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

      <section className="section-pad" style={{ background: '#1C3A2F', padding: '48px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '26px', fontWeight: 600, color: '#fff', marginBottom: '12px' }}>Pasirengę pradėti?</h2>
        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>Susisiekite su mumis ir aptarkime jūsų projektą.</p>
        <a href="/#kontaktai" style={{ background: '#E8A020', color: '#1C3A2F', padding: '13px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
          Susisiekti →
        </a>
      </section>

      <footer style={{ background: '#152d22', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>MB Statybų konsultantai</div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>© 2025 Visos teisės saugomos</div>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          {[{ label: 'Paslaugos', href: '/#paslaugos' }, { label: 'Projektai', href: '/#projektai' }, { label: 'Kontaktai', href: '/#kontaktai' }].map(item => (
            <a key={item.label} href={item.href} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>{item.label}</a>
          ))}
        </div>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>📘 Facebook</div>
      </footer>
    </main>
  )
}