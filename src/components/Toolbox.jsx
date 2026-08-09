// EDIT THIS LIST if you pick up new tools — it's your skills wall.
const groups = [
  {
    title: 'Operating Systems',
    items: ['Red Hat', 'CentOS', 'Ubuntu', 'Windows Server 2016/2019', 'Windows 10/11'],
  },
  {
    title: 'Linux Administration',
    items: ['User & Group Mgmt', 'File Permissions', 'Package Management', 'Cron Jobs', 'System Monitoring'],
  },
  {
    title: 'Scripting & Automation',
    items: ['Bash / Shell', 'Python Automation'],
  },
  {
    title: 'Directory & Access',
    items: ['LDAP', 'Active Directory', 'User Provisioning', 'Access Control'],
  },
  {
    title: 'Networking',
    items: ['TCP/IP', 'DNS', 'DHCP', 'VPN', 'SSH', 'LAN/WAN'],
  },
  {
    title: 'Tools & Security',
    items: ['ServiceNow', 'Jira', 'Freshdesk', 'SonicWall', 'Fortinet', 'VMware'],
  },
]

export default function Toolbox() {
  return (
    <section className="section container" id="toolbox">
      <div className="section-head">
        <p className="label">01 — Toolbox</p>
        <h2>What I work with</h2>
      </div>
      <div className="toolbox-grid">
        {groups.map((g) => (
          <div className="toolbox-item" key={g.title}>
            <p className="t-title">{g.title}</p>
            <ul>
              {g.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}