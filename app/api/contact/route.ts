import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()
  const { vardas, pavarde, email, telefonas, zinute } = body

  try {
    const result = await resend.emails.send({
      from: 'Svetainė <info@statybukonsultantai.lt>',
      to: 'info@statybukonsultantai.lt',
      subject: `Nauja žinutė nuo ${vardas} ${pavarde}`,
      html: `
        <h2>Nauja žinutė iš svetainės</h2>
        <p><strong>Vardas:</strong> ${vardas} ${pavarde}</p>
        <p><strong>El. paštas:</strong> ${email}</p>
        <p><strong>Telefonas:</strong> ${telefonas}</p>
        <p><strong>Žinutė:</strong></p>
        <p>${zinute}</p>
      `,
    })
    console.log('Resend rezultatas:', result)
    return Response.json({ success: true })
  } catch (error) {
    console.error('Resend klaida:', error)
    return Response.json({ success: false, error: String(error) }, { status: 500 })
  }
}