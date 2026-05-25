export default function Home() {
  return (
    <>
      <div className="content">
        <img src="/logo.png" alt="Stainless Bending 2016 Limited" className="logo" />
        <div className="divider">
          <div className="divider-dot" />
        </div>
        <div className="eyebrow">Auckland's Stainless Specialists</div>
        <h1>
          Coming<br />
          <span>Soon.</span>
        </h1>
        <p>We're working on something great.<br />In the meantime, get in touch.</p>
        <a href="mailto:stainlessbending@xtra.co.nz" className="email-btn">
          stainlessbending@xtra.co.nz
        </a>
      </div>
      <footer>© {new Date().getFullYear()} Stainless Bending (2016) Limited · Penrose, Auckland NZ</footer>
    </>
  )
}
