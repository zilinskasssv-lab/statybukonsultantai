'use client'

import { useState } from 'react'

const navLinks = [
  { label: 'Paslaugos', href: '/#paslaugos' },
  { label: 'Projektai', href: '/#projektai' },
  { label: 'Straipsniai', href: '/straipsniai' },
  { label: 'Apie', href: '/apie' },
  { label: 'Parduotuvė', href: '/parduotuve' },
  { label: 'Kontaktai', href: '/#kontaktai' },
]

export default function Nav() {
  const [meniuAtidarytas, setMeniuAtidarytas] = useState(false)

  return (
    <>
      <style>{`
        .nav-links { display: flex; gap: 24px; flex: 1; justify-content: center; }
        .nav-right-tel { display: flex; }
        .hamburger { display: none; }
        @media (max-width: 860px) {
          .nav-links { display: none; }
          .nav-right-tel { display: none; }
          .hamburger { display: flex !important; }
          .nav-wrap { padding: 10px 16px !important; }
        }
      `}</style>

      <nav className="nav-wrap" style={{ background: '#1C3A2F', padding: '8px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', position: 'sticky', top: 0, zIndex: 100 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0, textDecoration: 'none' }}>
          <img src="/logo_icon.png" alt="Statybų konsultantai logotipas" style={{ height: '40px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
          <div>
            <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>Statybų konsultantai</div>
            <div style={{ fontSize: '9px', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Statybų valdymas</div>
          </div>
        </a>

        <div className="nav-links">
          {navLinks.map(item => (
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
          <button
            className="hamburger"
            onClick={() => setMeniuAtidarytas(!meniuAtidarytas)}
            aria-label="Atidaryti meniu"
            style={{ background: 'transparent', border: 'none', color: '#fff', fontSize: '24px', cursor: 'pointer', padding: '4px 8px' }}
          >
            {meniuAtidarytas ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {meniuAtidarytas && (
        <div style={{ background: '#1C3A2F', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '4px', borderTop: '0.5px solid rgba(255,255,255,0.1)' }}>
          {navLinks.map(item => (
            <a key={item.label} href={item.href} onClick={() => setMeniuAtidarytas(false)} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', textDecoration: 'none', padding: '10px 0', borderBottom: '0.5px solid rgba(255,255,255,0.08)' }}>{item.label}</a>
          ))}
          <a href="tel:+37063879755" style={{ fontSize: '14px', color: '#E8A020', textDecoration: 'none', padding: '10px 0' }}>📞 +370 638 79755</a>
        </div>
      )}
    </>
  )
}