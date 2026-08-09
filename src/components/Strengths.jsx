// EDIT THIS LIST as you grow — these are your headline strengths.
const strengths = [
  'Linux Server Administration & Troubleshooting',
  'Shell Scripting & Automation',
  'LDAP & Active Directory Administration',
  'High-volume Ticket Handling & SLA Compliance',
  'Strong Analytical & Problem-solving Skills',
  'Excellent Communication & Team Collaboration',
]

export default function Strengths() {
  return (
    <section className="section container" id="strengths">
      <div className="section-head">
        <p className="label">03 — Key Strengths</p>
        <h2>What I&rsquo;m good at</h2>
      </div>
      <ul className="strengths-list">
        {strengths.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  )
}