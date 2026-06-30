'use client'

import { useState } from 'react'

export default function Home() {
  const [forma, setForma] = useState({ vardas: '', pavarde: '', email: '', telefonas: '', zinute: '' })
  const [busena, setBusena] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const siusti = async () => {
    setBusena('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(forma),
      })
      const data = await res.json()
      setBusena(data.success ? 'success' : 'error')
    } catch {
      setBusena('error')
    }
  }

  return (
    <main>
      <nav style={{ background: '#1C3A2F', padding: '8px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none' }}>
          <img src="/logo_icon.png" alt="logo" style={{ height: '48px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap' }}>Statybų konsultantai</div>
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          <a href="tel:+37063879755" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.12)', borderRadius: '6px', padding: '6px 12px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
            📞 +370 638 79755
          </a>
          <a href="/#kontaktai" style={{ background: '#E8A020', color: '#1C3A2F', padding: '8px 16px', borderRadius: '6px', fontSize: '13px', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}>
            Gauti pasiūlymą
          </a>
        </div>
      </nav>

      <div style={{ background: '#1C3A2F', display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '420px' }}>
        <div style={{ padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(232,160,32,0.1)', border: '0.5px solid rgba(232,160,32,0.3)', borderRadius: '20px', padding: '5px 14px', width: 'fit-content' }}>
            <span style={{ fontSize: '11px', color: '#E8A020', fontWeight: 500 }}>✓ Licencijuoti statybų inžinieriai · Visoje Lietuvoje</span>
          </div>
          <h1 style={{ fontSize: '36px', fontWeight: 600, color: '#fff', lineHeight: 1.2 }}>
            <span style={{ color: '#E8A020' }}>25 metų patirtis,</span><br />
            kuri apsaugo<br />
            jūsų investiciją
          </h1>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, maxWidth: '380px' }}>
            Kontroliuojame rangovus, fiksuojame defektus ir užtikriname, kad statybos vyktų pagal projektą, laiku ir pagal biudžetą.
          </p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <a href="/#kontaktai" style={{ background: '#E8A020', color: '#1C3A2F', padding: '13px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
              📅 Nemokama konsultacija
            </a>
            <a href="/#projektai" style={{ background: '#fff', color: '#1C3A2F', padding: '13px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
              📁 Peržiūrėti projektus
            </a>
          </div>
          <div style={{ display: 'flex', gap: '0', paddingTop: '8px' }}>
            {[
              { num: '120+', label: 'Įgyvendintų projektų' },
              { num: '25', label: 'Metų patirtis' },
              { num: '15', label: 'Pastovių partnerių' },
            ].map((item, i) => (
              <div key={i} style={{ paddingRight: '24px', marginRight: i < 2 ? '24px' : 0, borderRight: i < 2 ? '0.5px solid rgba(255,255,255,0.12)' : 'none' }}>
                <div style={{ fontSize: '24px', fontWeight: 600, color: '#fff' }}>{item.num}</div>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.4 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="/hero.jpg" alt="Daugiabučio gyvenamojo namo statyba" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(28,58,47,0.4) 0%, rgba(28,58,47,0) 30%)' }} />
          <div style={{ position: 'absolute', bottom: '20px', left: '16px', background: 'rgba(20,46,35,0.95)', border: '0.5px solid rgba(232,160,32,0.25)', borderRadius: '8px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '30px', height: '30px', background: 'rgba(232,160,32,0.15)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#E8A020' }}>✓</div>
            <div>
              <div style={{ fontSize: '12px', color: '#fff', fontWeight: 500 }}>Paskutinis objektas priimtas</div>
              <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)' }}>Daugiabučio statybos priežiūra · Kaunas</div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: '#152d22', borderTop: '0.5px solid rgba(255,255,255,0.07)', padding: '14px 32px', display: 'flex', alignItems: 'center' }}>
        {[
          '📋 Statinio statybos techninė priežiūra pagal STR',
          '🏠 Pastatų techninė priežiūra pagal STR 1.12.07:2010',
          '📍 Darbas visoje Lietuvoje',
          '🛡 Fiksuota kaina sutartyje',
        ].map((item, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', color: 'rgba(255,255,255,0.55)', borderRight: i < 3 ? '0.5px solid rgba(255,255,255,0.1)' : 'none', padding: '0 16px', textAlign: 'center' }}>
            {item}
          </div>
        ))}
      </div>

      <section id="paslaugos" style={{ background: '#F5F2ED', padding: '64px 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(28,58,47,0.1)', borderRadius: '20px', padding: '5px 16px', fontSize: '11px', color: '#1C3A2F', fontWeight: 500, marginBottom: '16px' }}>Mūsų paslaugos</div>
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.2, marginBottom: '12px' }}>Profesionali pagalba visuose<br />statybų etapuose</h2>
          <p style={{ fontSize: '15px', color: '#666', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>Nuo idėjos ir projekto iki darbų priėmimo ir defektų šalinimo – esame šalia kiekviename žingsnyje.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '16px' }}>
          {[
            { icon: '👁', title: 'Statybų techninė priežiūra', desc: 'Kontroliuojame statybos procesą nuo pradžios iki pabaigos – fiksuojame defektus, tikriname medžiagas ir atstovaujame užsakovui.', features: ['Statybos darbų atitikties tikrinimas', 'Defektų fiksavimas ir šalinimo kontrolė', 'Terminų ir biudžeto priežiūra', 'Objekto priėmimas ir žurnalo pildymas'], price: '0,6% statybų vertės', priceNote: 'arba nuo 150 €/mėn.' },
            { icon: '📊', title: 'Projektų valdymas', desc: 'Pilnai valdome statybos projektą – koordinuojame rangovus, kontroliuojame biudžetą ir terminus.', features: ['Projekto grafikas (Gantt) ir atsakomybių matrica', 'Rangovų koordinavimas ir užduočių paskirstymas', 'Biudžeto kontrolė ir išlaidų ataskaitos', 'Reguliarūs progreso pranešimai užsakovui'], price: '2,5–4% projekto vertės', priceNote: '' },
            { icon: '🏢', title: 'Pastatų techninė priežiūra', desc: 'Atliekame pastatų techninę priežiūrą pagal STR 1.12.07:2010 – užtikriname saugią ir ekonomišką eksploataciją.', features: ['Kasmetinės ir sezoninės pastato apžiūros', 'Defektų fiksavimas ir šalinimo rekomendacijos', 'Pastato techninės būklės vertinimo aktas', 'Periodinių tikrinimų grafikas ir dokumentacija'], price: '120 €/metus', priceNote: 'arba 0,2–0,5% pastato vertės' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#1C3A2F', borderRadius: '12px', padding: '28px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ width: '44px', height: '44px', background: 'rgba(232,160,32,0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>{s.icon}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#ffffff', lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, flex: 1 }}>{s.desc}</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {s.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', gap: '8px', fontSize: '12px', color: 'rgba(255,255,255,0.75)' }}>
                    <span style={{ color: '#E8A020', flexShrink: 0 }}>✓</span>{f}
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '0.5px solid rgba(255,255,255,0.12)', paddingTop: '14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <div style={{ fontSize: '13px', color: '#E8A020', fontWeight: 600 }}>nuo {s.price}</div>
                  {s.priceNote && <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.45)' }}>{s.priceNote}</div>}
                </div>
                <a href="/#kontaktai" style={{ color: '#E8A020', fontSize: '13px', fontWeight: 600, textDecoration: 'none' }}>Plačiau →</a>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {[
            { icon: '🪖', title: 'Statinio statybos vadovas', desc: 'Valdome visą statybos procesą – nuo pamatų iki stogo.', price: '450 €/mėn.' },
            { icon: '💬', title: 'Konsultacija prieš statybą', desc: '60 min. profesionali konsultacija – veiksmų planas ir kainų orientyrai.', price: '59 € / 60 min.' },
            { icon: '🧮', title: 'Sąmatų skaičiavimas', desc: 'Pilna darbų ir medžiagų sąmata visiems statybų etapams.', price: '149 € už namą' },
            { icon: '🚚', title: 'Statybinių medžiagų tiekimas', desc: 'Organizuojame medžiagų tiekimą į objektą pagal sąmatą.', price: '0–5% nuo užsakymo' },
            { icon: '📄', title: 'Statybų dokumentacijos paruošimas', desc: 'Parengiam ir atnaujinam statybų dokumentaciją.', price: '49 € už dokumentą' },
            { icon: '🔍', title: 'Projektų auditavimas', desc: 'Nepriklausomas specialistas peržiūri esamą projektą.', price: '149 € / objektui' },
          ].map((s, i) => (
            <div key={i} style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', background: 'rgba(28,58,47,0.07)', borderRadius: '7px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>{s.icon}</div>
              <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.3 }}>{s.title}</h3>
              <p style={{ fontSize: '12px', color: '#666', lineHeight: 1.55, flex: 1 }}>{s.desc}</p>
              <div style={{ borderTop: '0.5px solid rgba(0,0,0,0.06)', paddingTop: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '12px', color: '#1C3A2F', fontWeight: 600 }}>nuo {s.price}</div>
                <a href="/#kontaktai" style={{ color: '#1C3A2F', fontSize: '12px', fontWeight: 600, textDecoration: 'none' }}>Plačiau →</a>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <a href="/#kontaktai" style={{ background: '#1C3A2F', color: '#fff', padding: '14px 28px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}>
            📅 Gauti individualų pasiūlymą
          </a>
        </div>
      </section>

      <section id="projektai" style={{ background: '#fff', padding: '64px 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-block', background: 'rgba(28,58,47,0.1)', borderRadius: '20px', padding: '5px 16px', fontSize: '11px', color: '#1C3A2F', fontWeight: 500, marginBottom: '16px' }}>Įgyvendinti projektai</div>
          <h2 style={{ fontSize: '32px', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.2, marginBottom: '12px' }}>Mūsų darbai kalba<br />patys už save</h2>
          <p style={{ fontSize: '15px', color: '#666', maxWidth: '480px', margin: '0 auto', lineHeight: 1.6 }}>Kiekvienas projektas – tai atsakomybė prieš užsakovą.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {[
            { img: '/portfolio/vilnius_namo_statybos_ranga.avif', tag: 'Statybos vadovavimas', title: 'Vienbučio gyvenamojo namo statybų valdymas', meta: ['Vilnius'] },
            { img: '/portfolio/masiulo_gelzbetonio_montavimo_ranga.avif', tag: 'Projektų valdymas', title: 'Daugiabučio gelžbetonio konstrukcijų montavimo darbų valdymas', meta: ['Kaunas, T. Masiulio g.'] },
            { img: '/portfolio/lampedziai-dvibuciai-A1.avif', tag: 'Techninė priežiūra', title: 'Dvibučių gyvenamųjų namų statybų techninė priežiūra', meta: ['Kaunas, Lampėdžiai'] },
            { img: '/portfolio/liu-tauro-akl_1.avif', tag: 'Techninė priežiūra', title: 'Statybų techninė priežiūra', meta: ['Kaunas, Liutauro g. akligatvis'] },
            { img: '/portfolio/palomene-1-.avif', tag: 'Techninė priežiūra', title: 'Statybų techninė priežiūra', meta: ['Kaišiadorių raj., Palomenė'] },
            { img: '/portfolio/kreves-pr_1.avif', tag: 'Techninė priežiūra', title: 'Statybų techninė priežiūra', meta: ['Kaunas, Krėvės pr.'] },
          ].map((p, i) => (
            <div key={i} style={{ border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ height: '220px', background: '#1C3A2F', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <img src={p.img} alt={p.title} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }} />
              </div>
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'inline-block', background: 'rgba(28,58,47,0.08)', borderRadius: '20px', padding: '4px 12px', fontSize: '10.5px', color: '#1C3A2F', fontWeight: 500, marginBottom: '10px' }}>{p.tag}</div>
                <h3 style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.35, marginBottom: '10px' }}>{p.title}</h3>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '11px', color: '#999' }}>
                  📍 {p.meta[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: '#1C3A2F', padding: '64px 32px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 600, color: '#fff', lineHeight: 1.25, marginBottom: '16px' }}>
          Pradėkite su nemokama<br />konsultacija
        </h2>
        <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.6)', maxWidth: '480px', margin: '0 auto 32px', lineHeight: 1.65 }}>
          Per 60 minučių gausite veiksmų planą, kainų orientyrus ir atsakymus į visus klausimus.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:+37063879755" style={{ background: '#E8A020', color: '#1C3A2F', padding: '14px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>
            📞 Skambinti dabar
          </a>
          <a href="#kontaktai" style={{ color: '#E8A020', padding: '14px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, textDecoration: 'none' }}>
            Rašyti žinutę →
          </a>
        </div>
      </section>

      <section id="kontaktai" style={{ background: '#F5F2ED', padding: '64px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', maxWidth: '900px', margin: '0 auto' }}>
          <div>
            <div style={{ display: 'inline-block', background: 'rgba(28,58,47,0.1)', borderRadius: '20px', padding: '5px 16px', fontSize: '11px', color: '#1C3A2F', fontWeight: 500, marginBottom: '16px' }}>Kontaktai</div>
            <h2 style={{ fontSize: '28px', fontWeight: 600, color: '#1A1A1A', lineHeight: 1.25, marginBottom: '24px' }}>Susisiekite su mumis</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {[
                { icon: '📞', label: 'Telefonas', value: '+370 638 79755' },
                { icon: '📧', label: 'El. paštas', value: 'info@statybukonsultantai.lt' },
                { icon: '📍', label: 'Adresas', value: 'T. Masiulio g. 11A, Kaunas' },
                { icon: '🏢', label: 'Įmonė', value: 'MB Statybų konsultantai, j.k. 307187566' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', background: 'rgba(28,58,47,0.08)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <div style={{ fontSize: '11px', color: '#999', marginBottom: '2px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{c.label}</div>
                    <div style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 500 }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#1A1A1A', marginBottom: '24px' }}>Parašykite mums</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { label: 'Vardas', key: 'vardas', placeholder: 'Jūsų vardas', type: 'text' },
                { label: 'Pavardė', key: 'pavarde', placeholder: 'Jūsų pavardė', type: 'text' },
                { label: 'El. paštas *', key: 'email', placeholder: 'Jūsų el. pašto adresas', type: 'email' },
                { label: 'Telefonas', key: 'telefonas', placeholder: '+370', type: 'tel' },
              ].map((f) => (
                <div key={f.key}>
                  <label style={{ fontSize: '12px', color: '#555', fontWeight: 500, display: 'block', marginBottom: '6px' }}>{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    value={forma[f.key as keyof typeof forma]}
                    onChange={e => setForma(prev => ({ ...prev, [f.key]: e.target.value }))}
                    style={{ width: '100%', padding: '10px 14px', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '7px', fontSize: '13px', background: '#fff', outline: 'none', color: '#1A1A1A' }}
                  />
                </div>
              ))}
              <div>
                <label style={{ fontSize: '12px', color: '#555', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Žinutė *</label>
                <textarea
                  placeholder="Aprašykite savo projektą ar klausimą..."
                  rows={4}
                  value={forma.zinute}
                  onChange={e => setForma(prev => ({ ...prev, zinute: e.target.value }))}
                  style={{ width: '100%', padding: '10px 14px', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '7px', fontSize: '13px', background: '#fff', outline: 'none', resize: 'vertical', color: '#1A1A1A', fontFamily: 'inherit' }}
                />
              </div>
              <button
                onClick={siusti}
                disabled={busena === 'sending'}
                style={{ background: '#1C3A2F', color: '#fff', border: 'none', padding: '13px 24px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', width: '100%', opacity: busena === 'sending' ? 0.7 : 1 }}
              >
                {busena === 'sending' ? 'Siunčiama...' : busena === 'success' ? '✓ Žinutė išsiųsta!' : busena === 'error' ? 'Klaida, bandykite dar kartą' : 'Siųsti žinutę →'}
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: '#152d22', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>MB Statybų konsultantai</div>
          <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>© 2025 Visos teisės saugomos</div>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          {[
            { label: 'Paslaugos', href: '#paslaugos' },
            { label: 'Projektai', href: '#projektai' },
            { label: 'Kontaktai', href: '#kontaktai' },
          ].map(item => (
            <a key={item.label} href={item.href} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>{item.label}</a>
          ))}
        </div>
        <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>📘 Facebook</div>
      </footer>
    </main>
  )
}