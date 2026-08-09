export default function Footer() {
  return (
    <footer>
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Shahban Ansari</span>
        <span className="mono">built with react + vite · hosted free</span>
      </div>
    </footer>
  )
}