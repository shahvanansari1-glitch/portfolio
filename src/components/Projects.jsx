import { projects } from '../data/projects.js'
import Reveal from './Reveal.jsx'

export default function Projects() {
  return (
    <section className="section container" id="projects">
      <div className="section-head">
        <p className="label">05 — Projects</p>
        <h2>Tools I&rsquo;ve built</h2>
      </div>

      {projects.map((p, i) => (
        <Reveal key={p.id} delay={i * 60}>
          <article className="project">
            <div className="project-term">
              <span className="dot-close" />
              <span className="dot-min" />
              <span className="dot-max" />
              <span className="path">~/projects/{p.repo}</span>
            </div>
            <div className="project-body">
              <span className="project-num">0{i + 1}</span>
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.stack.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <a className="project-link" href={p.url} target="_blank" rel="noreferrer">
                View on GitHub →
              </a>
            </div>
          </article>
        </Reveal>
      ))}
    </section>
  )
}