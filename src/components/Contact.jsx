// EDIT: fill in your LinkedIn URL, and check the phone number format.
const EMAIL = 'Shahvanansari1@gmail.com'
const PHONE_DISPLAY = '+91 88404 24155'
const PHONE_TEL = '+918840424155'
const LINKEDIN = 'https://www.linkedin.com/in/shahban-ansari-58b6a2a7/'

export default function Contact() {
  return (
    <section className="section container" id="contact">
      <div className="section-head">
        <p className="label">06 — Contact</p>
      </div>
      <p className="contact-big">
        Need a Linux admin who can <span className="accent">fix it</span> and{' '}
        <a href={`mailto:${EMAIL}`}>automate it</a>?
      </p>
      <a className="resume-btn" href="./resume.pdf" download>
        ↓ Download resume
      </a>
      <div className="contact-links">
        <a href="https://github.com/shahvanansari1-glitch" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={LINKEDIN} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${EMAIL}`}>Email</a>
        <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
      </div>
    </section>
  )
}