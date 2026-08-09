export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#top" className="brand">
          shahban<span className="accent">.</span>ansari
        </a>
        <nav className="nav-links">
          <a href="#toolbox">Toolbox</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a className="resume-btn-sm" href="./resume.pdf" download>
            Résumé ↓
          </a>
        </nav>
      </div>
    </header>
  )
}