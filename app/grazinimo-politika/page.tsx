import type { Metadata } from 'next'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Pirkimo ir grąžinimo taisyklės',
  description: 'MB Statybų konsultantai pirkimo sąlygos ir skaitmeninių produktų grąžinimo politika.',
  robots: { index: false, follow: false },
}

export default function GrazinomoPolika() {
  return (
    <main>
      <Nav />

      <section style={{ background: '#F5F2ED', padding: '64px 32px', minHeight: '70vh' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 600, color: '#1A1A1A', marginBottom: '8px' }}>Pirkimo ir grąžinimo taisyklės</h1>
          <p style={{ fontSize: '13px', color: '#999', marginBottom: '40px' }}>Atnaujinta: 2025-01-01</p>

          {[
            {
              title: '1. Pardavėjas',
              text: 'MB Statybų konsultantai, įmonės kodas 307187566, adresas: T. Masiulio g. 11A, Kaunas. El. paštas: info@statybukonsultantai.lt, tel.: +370 638 79755.'
            },
            {
              title: '2. Produktai',
              text: 'Parduotuvėje parduodami skaitmeniniai produktai — elektroninės knygos (PDF formatu). Produktai pristatomi momentaliai po apmokėjimo į pirkėjo el. pašto adresą.'
            },
            {
              title: '3. Kainos ir mokėjimas',
              text: 'Visos kainos nurodytos eurais (€) su PVM. Mokėjimai apdorojami per Payhip (payhip.com) mokėjimų platformą, kuri priima kredito/debeto korteles ir PayPal.'
            },
            {
              title: '4. Pristatymas',
              text: 'Skaitmeniniai produktai pristatomi automatiškai į pirkėjo el. pašto adresą iš karto po sėkmingo apmokėjimo. Jei negavote produkto per 30 minučių — patikrinkite spam aplanką arba susisiekite su mumis.'
            },
            {
              title: '5. Atsisakymo teisė ir grąžinimas',
              text: 'Pagal ES direktyvą 2011/83/ES dėl vartotojų teisių, atsisakymo teisė netaikoma skaitmeniniams produktams, kurie buvo pristatyti internetu ir pirkėjas prieš pirkimą patvirtino, kad netenka 14 dienų atsisakymo teisės. Kadangi produktai pristatomi momentaliai ir pirkėjas gauna neatšaukiamą prieigą — grąžinimai negalimi. Išimtis: jei produktas yra techniškai sugedęs ar neprieinamas — susisiekite per 48 val. ir problema bus išspręsta arba grąžinsime pinigus.'
            },
            {
              title: '6. Intelektinė nuosavybė',
              text: 'Visi parduodami skaitmeniniai produktai yra MB Statybų konsultantai intelektinė nuosavybė. Draudžiama juos kopijuoti, platinti, perparduoti ar viešai skelbti be raštiško leidimo.'
            },
            {
              title: '7. Atsakomybės ribojimas',
              text: 'Produktuose pateikiama informacija yra bendro pobūdžio ir negali pakeisti individualios profesinės konsultacijos. MB Statybų konsultantai neatsako už žalą, atsiradusią dėl produkto turinio taikymo be profesionalios priežiūros.'
            },
            {
              title: '8. Ginčų sprendimas',
              text: 'Ginčai sprendžiami derybų keliu. Jei susitarti nepavyksta — kreiptis į Valstybinę vartotojų teisių apsaugos tarnybą (vvtat.lt) arba naudotis ES ginčų sprendimo platforma (ec.europa.eu/consumers/odr).'
            },
            {
              title: '9. Kontaktai',
              text: 'Klausimams dėl pirkimo ar produktų rašykite: info@statybukonsultantai.lt arba skambinkite +370 638 79755.'
            },
          ].map((section, i) => (
            <div key={i} style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '16px', fontWeight: 600, color: '#1C3A2F', marginBottom: '10px' }}>{section.title}</h2>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: 1.75 }}>{section.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}