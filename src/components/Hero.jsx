const stats = [
  { value: '4+', label: 'years in Linux administration' },
  { value: '20+', label: 'tickets resolved a day' },
  { value: '95%', label: 'SLA compliance' },
  { value: '1500+', label: 'tickets handled' },
]

export default function Hero() {
  return (
    <section className="hero container" id="top">
      <p className="label">linux_administrator / automation / tool_builder</p>
      <h1>
        Shahban <span className="accent">Ansari</span>
      </h1>
      <p className="tagline">I keep servers running — and build tools to do it faster.</p>
      <p className="bio">
        Linux Administrator with 4+ years managing Red Hat, CentOS, and Ubuntu environments —
        LDAP &amp; Active Directory, patching, monitoring, firewall support, and shell automation.
        20+ tickets a day at 95% SLA.
      </p>
      <div className="status">
        <span className="status-dot" />
        Open to Linux Admin / DevOps roles
      </div>
      <div className="hero-stats">
        {stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
