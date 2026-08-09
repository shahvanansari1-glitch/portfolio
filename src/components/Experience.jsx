import Reveal from './Reveal.jsx'

// EDIT THIS LIST as your career moves forward — newest role first.
const roles = [
  {
    title: 'Senior Analyst',
    org: 'HCLTech',
    location: 'Patna',
    period: 'Oct 2025 — Present',
    note: '20+ tickets/day · 95% SLA · 1 DSAT across 1500+ tickets. Linux & Windows administration, LDAP/AD account management, DNS/DHCP/VPN troubleshooting on ServiceNow & Jira.',
  },
  {
    title: 'Desktop Support Engineer (L1)',
    org: 'CTDI',
    location: 'Vapi',
    period: 'Sep 2024 — Sep 2025',
    note: 'Linux server & Windows support, SonicWall firewall migration and rule validation, patching and user management via Freshdesk & Jira.',
  },
  {
    title: 'IT Support Technician',
    org: 'Value Point Systems',
    location: 'Patna',
    period: 'Nov 2023 — Aug 2024',
    note: 'L1/L2 support, system deployment and imaging, server maintenance, backup verification, access management via IBM Maximo.',
  },
  {
    title: 'Junior Desktop Support Engineer',
    org: 'Software Academy',
    location: 'Jhansi',
    period: 'Jul 2022 — Sep 2023',
    note: 'Linux & Windows desktop installs, user onboarding, network/firewall basics, and troubleshooting documentation.',
  },
]

export default function Experience() {
  return (
    <section className="section container" id="experience">
      <div className="section-head">
        <p className="label">02 — Experience</p>
        <h2>Where I&rsquo;ve worked</h2>
      </div>
      <div className="experience-list">
        {roles.map((r, i) => (
          <Reveal key={`${r.org}-${i}`} delay={i * 60}>
            <div className="exp-row">
              <div className="exp-main">
                <h3>{r.title}</h3>
                <p className="exp-org">
                  {r.org} <span className="exp-sep">·</span> {r.location}
                </p>
                <p className="exp-note">{r.note}</p>
              </div>
              <div className="exp-period mono">{r.period}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}