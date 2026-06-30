export default function Apie() {
  return (
    <main>
      <nav style={{ background: '#1C3A2F', padding: '8px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <img src="/logo_icon.png" alt="logo" style={{ height: '48px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>Statybų konsultantai</div>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Statybų valdymas</div>
          </div>
        </a>
        <div style={{ display: 'flex', gap: '24px', flex: 1, justifyContent: 'center' }}>
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
          <a href="tel:+37063879755" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.12)', borderRadius: '6px', padding: '6px 12px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            📞 +370 638 79755
          </a>
          <a href="/#kontaktai" style={{ background: '#E8A020', color: '#1C3A2F', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Gauti pasiūlymą
          </a>
        </div>
      </nav>

      <section style={{ background: '#1C3A2F', padding: '64px 32px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 600, color: '#fff', marginBottom: '16px' }}>Apie mus</h1>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
          Statybų konsultantai – profesionali komanda, specializuojanti statybų konsultavimo paslaugose. Mūsų tikslas – užtikrinti aukštą statybų kokybę ir efektyvų projektų valdymą.
        </p>
      </section>

      <section style={{ background: '#F5F2ED', padding: '64px 32px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: '28px', fontWeight: 600, color: '#1A1A1A', marginBottom: '20px' }}>25 metų patirtis statybų srityje</h2>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '16px' }}>
              Mes dirbame su didžiausiu atidumu ir profesionalumu, siekdami užtikrinti, kad visi mūsų statybų projektai būtų atlikti aukščiausio lygio.
            </p>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: 1.75, marginBottom: '32px' }}>
              Mūsų darbai apima įvairius statybų objektus – nuo gyvenamųjų namų iki komercinių pastatų. Pasitikėkite mūsų patirtimi ir žiniomis.
            </p>
            <div style={{ display: 'flex', gap: '32px' }}>
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

      <section style={{ background: '#1C3A2F', padding: '48px 32px', textAlign: 'center' }}>
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
