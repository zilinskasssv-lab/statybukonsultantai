'use client'

import { useState } from 'react'
import Image from 'next/image'

const SAMPLES = [
  {
    id: 'f2',
    tab: 'Aktas F-2',
    src: '/aktavimas/aktas-f2-pavyzdys.png',
    width: 2265,
    height: 982,
    alt: 'Atliktų darbų akto F-2 pavyzdys: sutartiniai kiekiai, darbai nuo statybos pradžios, iki ataskaitinio mėnesio ir per ataskaitinį mėnesį',
  },
  {
    id: 'f3',
    tab: 'Pažyma F-3',
    src: '/aktavimas/pazyma-f3-pavyzdys.png',
    width: 2269,
    height: 907,
    alt: 'Atliktų darbų ir išlaidų apmokėjimo pažymos F-3 pavyzdys su sumomis pagal sąmatos skyrius ir PVM',
  },
  {
    id: 'saskaita',
    tab: 'Sąskaita faktūra',
    src: '/aktavimas/saskaita-pavyzdys.png',
    width: 1513,
    height: 1348,
    alt: 'Sąskaitos faktūros pavyzdys pagal atliktų darbų aktą su suma žodžiais',
  },
] as const

export default function DocumentSamples() {
  const [active, setActive] = useState<(typeof SAMPLES)[number]['id']>('f2')
  const sample = SAMPLES.find((s) => s.id === active) ?? SAMPLES[0]

  return (
    <div>
      <div role="tablist" aria-label="Dokumentų pavyzdžiai" style={{ display: 'flex', gap: '8px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}>
        {SAMPLES.map((s) => {
          const selected = s.id === active
          return (
            <button
              key={s.id}
              type="button"
              role="tab"
              id={`tab-${s.id}`}
              aria-selected={selected}
              aria-controls="dokumento-pavyzdys"
              onClick={() => setActive(s.id)}
              style={{
                padding: '9px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                border: selected ? '1px solid #1C3A2F' : '1px solid rgba(0,0,0,0.15)',
                background: selected ? '#1C3A2F' : '#fff',
                color: selected ? '#fff' : '#1C3A2F',
              }}
            >
              {s.tab}
            </button>
          )
        })}
      </div>

      <div id="dokumento-pavyzdys" role="tabpanel" aria-labelledby={`tab-${sample.id}`}>
        <a
          href={sample.src}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'block', border: '0.5px solid rgba(0,0,0,0.12)', borderRadius: '10px', overflow: 'hidden', background: '#fff', maxWidth: sample.id === 'saskaita' ? '640px' : '100%', margin: '0 auto' }}
        >
          <Image
            key={sample.id}
            src={sample.src}
            alt={sample.alt}
            width={sample.width}
            height={sample.height}
            sizes="(max-width: 960px) 100vw, 960px"
            priority={sample.id === 'f2'}
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </a>
      </div>
    </div>
  )
}
