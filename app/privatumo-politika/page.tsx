import type { Metadata } from 'next'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: 'Privatumo politika',
  description: 'MB Statybų konsultantai privatumo politika ir asmens duomenų tvarkymo tvarka.',
  robots: { index: false, follow: false },
}

export default function PrivatumoPolika() {
  return (
    <main>
      <Nav />

      <section style={{ background: '#F5F2ED', padding: '64px 32px', minHeight: '70vh' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '32px', fontWeight: 600, color: '#1A1A1A', marginBottom: '8px' }}>Privatumo politika</h1>
          <p style={{ fontSize: '13px', color: '#999', marginBottom: '40px' }}>Atnaujinta: 2025-01-01</p>

          {[
            {
              title: '1. Duomenų valdytojas',
              text: 'MB Statybų konsultantai, įmonės kodas 307187566, adresas: T. Masiulio g. 11A, Kaunas. El. paštas: info@statybukonsultantai.lt, tel.: +370 638 79755.'
            },
            {
              title: '2. Kokie duomenys renkami',
              text: 'Per kontaktų formą renkami šie duomenys: vardas, pavardė, el. pašto adresas, telefono numeris, žinutės turinys. Duomenys renkami tik gavus jūsų sutikimą, užpildžius ir išsiuntus kontaktų formą.'
            },
            {
              title: '3. Duomenų naudojimo tikslas',
              text: 'Jūsų pateikti duomenys naudojami išskirtinai komunikacijai su jumis — atsakymui į užklausą, pasiūlymo parengimui ar konsultacijos suteikimui. Duomenys nėra perduodami trečiosioms šalims komerciniais tikslais.'
            },
            {
              title: '4. Duomenų saugojimas',
              text: 'El. pašto žinutės saugomos el. pašto sistemoje. Duomenys saugomi tol, kol reikalingi komunikacijos tikslais, bet ne ilgiau nei 2 metus nuo paskutinio kontakto.'
            },
            {
              title: '5. Duomenų perdavimas',
              text: 'Kontaktų formos pranešimai perduodami per Resend (resend.com) el. pašto siuntimo paslaugą. Resend veikia kaip duomenų tvarkytojas ir tvarko duomenis pagal savo privatumo politiką, atitinkančią BDAR reikalavimus.'
            },
            {
              title: '6. Jūsų teisės',
              text: 'Turite teisę: susipažinti su savo duomenimis, reikalauti juos ištaisyti ar ištrinti, apriboti duomenų tvarkymą, pateikti skundą Valstybinei duomenų apsaugos inspekcijai (vdai.lrv.lt).'
            },
            {
              title: '7. Slapukai',
              text: 'Ši svetainė nenaudoja rinkodaros ar stebėjimo slapukų. Techniniai slapukai, būtini svetainės veikimui, naudojami be atskiro sutikimo pagal BDAR 6 str. 1 d. f) punktą.'
            },
            {
              title: '8. Kontaktai',
              text: 'Klausimams dėl asmens duomenų tvarkymo rašykite: info@statybukonsultantai.lt'
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