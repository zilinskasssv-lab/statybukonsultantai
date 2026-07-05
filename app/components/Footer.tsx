export default function Footer() {
  return (
    <footer style={{ background: '#152d22', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
      <div>
        <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>MB Statybų konsultantai</div>
        <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.4)' }}>© {new Date().getFullYear()} Visos teisės saugomos</div>
      </div>
      <div style={{ display: 'flex', gap: '20px' }}>
        {[
          { label: 'Paslaugos', href: '/#paslaugos' },
          { label: 'Projektai', href: '/#projektai' },
          { label: 'Kontaktai', href: '/#kontaktai' },
          { label: 'Privatumo politika', href: '/privatumo-politika' },
        ].map(item => (
          <a key={item.label} href={item.href} style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>{item.label}</a>
        ))}
      </div>
      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>📘 Facebook</div>
    </footer>
  )
}