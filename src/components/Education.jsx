// EDIT THIS LIST with any new certifications or degrees.
const education = [
  { degree: 'B.Sc.', school: 'Bundelkhand University', year: '2018' },
  { degree: 'O Level Certification', school: 'NIELIT', year: '2022' },
  { degree: 'Higher Secondary (PCM + CS)', school: 'JNV', year: '2015' },
]

export default function Education() {
  return (
    <section className="section container" id="education">
      <div className="section-head">
        <p className="label">04 — Education</p>
        <h2>Where I studied</h2>
      </div>
      <div className="education-list">
        {education.map((e) => (
          <div className="edu-row" key={e.degree}>
            <div>
              <h3>{e.degree}</h3>
              <p className="edu-school">{e.school}</p>
            </div>
            <span className="edu-year mono">{e.year}</span>
          </div>
        ))}
      </div>
    </section>
  )
}