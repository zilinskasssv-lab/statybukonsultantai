'use client'

import { useState } from 'react'

export default function ContactForm() {
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
            style={{ width: '100%', padding: '10px 14px', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '7px', fontSize: '13px', background: '#fff', outline: 'none', color: '#1A1A1A', boxSizing: 'border-box' }}
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
          style={{ width: '100%', padding: '10px 14px', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '7px', fontSize: '13px', background: '#fff', outline: 'none', resize: 'vertical', color: '#1A1A1A', fontFamily: 'inherit', boxSizing: 'border-box' }}
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
  )
}