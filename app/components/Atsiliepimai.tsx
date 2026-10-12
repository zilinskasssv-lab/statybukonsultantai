const PROFILIO_URL = 'https://paslaugos.lt/paulius-zilinskas-pi216'

const atsiliepimai = [
  {
    vardas: 'Audrius',
    paslauga: 'Inžinieriaus konsultacija',
    data: '2026 m. gegužė',
    tekstas: `Konkrečiai pakonsultavo pamatų-laiptų klausimais, nurodė sprendimus. Atsiuntė techninį brėžinį. Konsultacija išsklaidė mūsų dvejones dėl pamato ir leido lengviau apsispręsti, ką daryti. Labai operatyviai gavau atsakymus į rūpimus klausimus.`,
  },
  {
    vardas: 'Laurynas Gecevičius',
    paslauga: 'Konsultacija ir akto parengimas',
    data: '2025 m. balandis',
    tekstas: `Puiki patirtis – rekomenduoju!
Ieškojau specialisto, kuris galėtų profesionaliai pakonsultuoti dėl laikančiųjų sienų griovimo ir grindų betonavimo. Nuo pat pirmo laiško Paulius Žilinskas reagavo labai operatyviai, aiškiai atsakė į visus klausimus ir greitai įvertino situaciją.`,
  },
  {
    vardas: 'Arvydas',
    paslauga: 'Pastatų techninė priežiūra',
    data: '2025 m. gegužė',
    tekstas: `Tobulumui ribų nėra. Bet visumoje paslaugą gavau tokią , kokios ir reikėjo. Savo srities specialistas, išsako savo argumentuotas pastabas, patarimus, objektyviai vertina situaciją. Abipusis supratimas, labai tikėtinas tolimesnis bendravimas.`,
  },
]

export default function Atsiliepimai() {
  return (
    <section id="atsiliepimai" className="section-pad" style={{ background: '#F5F2ED', padding: '64px 32px' }}>
      <style>{`
        .reviews-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        @media (max-width: 860px) {
          .reviews-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ display: 'inline-block', background: 'rgba(28,58,47,0.1)', borderRadius: '20px', padding: '5px 16px', fontSize: '11px', color: '#1C3A2F', fontWeight: 500, marginBottom: '16px' }}>Klientų atsiliepimai</div>
        <h2 className="section-title" style={{ fontWeight: 600, color: '#1A1A1A', lineHeight: 1.2, marginBottom: '16px' }}>Ką sako užsakovai</h2>

        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '10px', padding: '10px 18px' }}>
          <span style={{ fontSize: '24px', fontWeight: 700, color: '#1C3A2F' }}>4,9</span>
          <div style={{ textAlign: 'left' }}>
            <div style={{ fontSize: '13px', color: '#E8A020', letterSpacing: '1px' }}>★★★★★</div>
            <div style={{ fontSize: '11px', color: '#888' }}>pagal 17 atsiliepimų</div>
          </div>
        </div>
      </div>
      <div className="reviews-grid" style={{ maxWidth: '980px', margin: '0 auto' }}>
        {atsiliepimai.map((a, i) => (
          <div key={i} style={{ background: '#fff', border: '0.5px solid rgba(0,0,0,0.08)', borderRadius: '12px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ fontSize: '13px', color: '#E8A020', letterSpacing: '1px' }}>★★★★★</div>
            <p style={{ fontSize: '14px', color: '#444', lineHeight: 1.7, flex: 1, fontStyle: 'italic' }}>
              {'\u201E'}{a.tekstas}{'\u201C'}
            </p>
            <div style={{ borderTop: '0.5px solid rgba(0,0,0,0.06)', paddingTop: '12px' }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#1A1A1A' }}>{a.vardas}</div>
              <div style={{ fontSize: '11px', color: '#888', marginTop: '3px' }}>{a.paslauga} · {a.data}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '32px' }}>
        
          <a href={PROFILIO_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: '#1C3A2F', color: '#fff', padding: '13px 26px', borderRadius: '8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', display: 'inline-block' }}
        >
          Skaityti visus 17 atsiliepimų paslaugos.lt →
        </a>
        <div style={{ fontSize: '11px', color: '#999', marginTop: '12px' }}>
          Atsiliepimai iš nepriklausomos platformos paslaugos.lt
        </div>
      </div>
    </section>
  )
}