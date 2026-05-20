'use client'
import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch('https://formspree.io/f/xzdwdyny', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    if (res.ok) setSubmitted(true)
  }

  const services = [
    {
      num: '01',
      icon: '⟳',
      name: 'Custom Tube Bending',
      desc: 'Precision bends to your exact specifications. We work from a pattern, sketch, or drawing and use specialised bending equipment to get it right every time.',
    },
    {
      num: '02',
      icon: '⊞',
      name: 'Supreme Grab Rails',
      desc: 'Our signature stainless steel grab rails for residential, commercial, and accessible design applications. Strong, hygienic, and built to last.',
    },
    {
      num: '03',
      icon: '◈',
      name: 'Rolling & Forming',
      desc: 'Section rolling and forming for curves, arcs, and radius bends across stainless steel tube in a range of sizes and wall thicknesses.',
    },
    {
      num: '04',
      icon: '⬡',
      name: 'Stainless Fabrication',
      desc: 'Custom stainless fabrication for commercial kitchens, marine, construction, and industrial applications. One-offs or small runs welcome.',
    },
    {
      num: '05',
      icon: '◎',
      name: 'Pool & Marine Rails',
      desc: 'Pool ladders, pool rails, and marine-grade stainless fittings designed for corrosive environments using T316 grade stainless steel.',
    },
    {
      num: '06',
      icon: '⬢',
      name: 'Trade Supply',
      desc: 'Butt weld bends in T304 and T316 stainless, aluminium, and mild steel. Available on 2D and 1.5D radius. Ask about our seconds bin.',
    },
  ]

  const workItems = [
    { title: 'Grab Rail Installation', sub: 'Residential • Auckland', hasImage: false },
    { title: 'Custom Tube Bending', sub: 'Commercial • Stainless T316', hasImage: false },
    { title: 'Pool Ladder Rails', sub: 'Marine Grade • T316', hasImage: false },
    { title: 'Trade Bend Supply', sub: 'Batch Production', hasImage: false },
  ]

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <a href="/" className="nav-logo">
          <img src="/images/logo.png" alt="Stainless Bending 2016 Limited" style={{ height: '42px', width: 'auto' }} />
        </a>
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Our Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" className="nav-cta">Get a Quote</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-stripes" />

        <div className="hero-content">
          <div className="hero-eyebrow">Auckland's Stainless Specialists</div>
          <h1>
            Precision<br />
            <span className="accent">Stainless</span><br />
            <span className="dim">Bending.</span>
          </h1>
          <p className="hero-desc">
            Custom tube bending, grab rails, and stainless fabrication from our Penrose workshop. Over 20 years of experience. Send us your drawings and we'll get it done.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Get a Quote</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">20+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat">
            <div className="stat-num">T316</div>
            <div className="stat-label">Grade Stainless</div>
          </div>
          <div className="stat">
            <div className="stat-num">NZ</div>
            <div className="stat-label">Made & Owned</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="services-header">
          <div>
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Everything in<br />Stainless Steel.</h2>
          </div>
          <p className="section-desc">
            From a single custom bend to a full run of grab rails — if it's stainless, we bend it. Several tube bending machines and a rolling machine on site.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.num} className="service-card">
              <div className="service-num">{s.num}</div>
              <div className="service-icon">{s.icon}</div>
              <div className="service-name">{s.name}</div>
              <p className="service-desc">{s.desc}</p>
              <a href="#contact" className="service-arrow">Enquire →</a>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work">
        <div className="work-header">
          <div>
            <div className="section-label">Recent Work</div>
            <h2 className="section-title">Built to<br />Last.</h2>
          </div>
          <p className="section-desc">
            Every job is finished to a high standard. Photos coming soon — reach out to discuss your project.
          </p>
        </div>
        <div className="work-grid">
          {workItems.map((item, i) => (
            <div key={i} className="work-item">
              <div className="work-placeholder">
                <div className="work-placeholder-icon">⬡</div>
                <div className="work-placeholder-text">Image Coming Soon</div>
              </div>
              <div className="work-label">
                <div className="work-label-title">{item.title}</div>
                <div className="work-label-sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about">
        <div className="about-grid">
          <div className="about-img-wrap">
            <div className="about-img-placeholder">
              {/* Replace with <img src="/images/workshop.jpg" alt="Our workshop" /> */}
              <span>🏭</span>
              <p>Workshop Photo Coming Soon</p>
            </div>
            <div className="about-accent-box">
              <div className="about-accent-num">2016</div>
              <div className="about-accent-label">Est. Auckland</div>
            </div>
          </div>
          <div className="about-content">
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">Owned &<br />Operated.</h2>
            <p className="section-desc">
              Stainless Bending (2016) Limited is owned and operated by Brett Mills and Michelle Keesing. Brett has over 20 years of experience in the field and was a shareholder in Stainless Bending Limited before purchasing the company outright in June 2016.
            </p>
            <p className="section-desc" style={{ marginTop: '1rem' }}>
              We are committed to producing excellent service and quality workmanship at all times. Based in Penrose, Auckland, we service clients across New Zealand.
            </p>
            <ul className="about-list">
              <li>Several tube bending machines on site</li>
              <li>Rolling machine for curves and arcs</li>
              <li>T304 and T316 grade stainless steel</li>
              <li>Work from patterns, sketches, or drawings</li>
              <li>One-off and batch production welcome</li>
            </ul>
            <a href="#contact" className="btn-primary">Start a Project</a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-grid">
          <div className="contact-info">
            <div>
              <div className="section-label">Get In Touch</div>
              <h2 className="section-title">Request<br />a Quote.</h2>
            </div>
            <div className="contact-item">
              <div className="contact-item-label">Email</div>
              <div className="contact-item-value">
                <a href="mailto:stainlessbending@xtra.co.nz">stainlessbending@xtra.co.nz</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-item-label">Location</div>
              <div className="contact-item-value">Penrose, Auckland<br />New Zealand</div>
            </div>
            <div className="contact-item">
              <div className="contact-item-label">Postal Address</div>
              <div className="contact-item-value">P O Box 112086<br />Penrose, Auckland</div>
            </div>
            <div className="contact-item">
              <div className="contact-item-label">Response Time</div>
              <div className="contact-item-value">We aim to respond within 1 business day.</div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', gap: '1rem' }}>
                <div style={{ fontFamily: 'var(--font-head)', fontSize: '2rem', color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Enquiry Sent.</div>
                <p style={{ color: 'var(--text-dim)', maxWidth: '400px' }}>Thanks for getting in touch. Brett will review your enquiry and get back to you shortly.</p>
                <button className="btn-outline" onClick={() => setSubmitted(false)} style={{ width: 'fit-content', marginTop: '1rem' }}>Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name *</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="form-group">
                    <label>Service</label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select a service</option>
                      <option>Custom Tube Bending</option>
                      <option>Supreme Grab Rails</option>
                      <option>Rolling & Forming</option>
                      <option>Stainless Fabrication</option>
                      <option>Pool & Marine Rails</option>
                      <option>Trade Supply</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Project Details *</label>
                  <textarea
                    placeholder="Tell us about your project. Include dimensions, quantities, material grade if known, and any drawings or references you have."
                    required
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: 'fit-content' }}>
                  Send Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-left">
          © {new Date().getFullYear()} Stainless Bending (2016) Limited · Penrose, Auckland NZ
        </div>
        <ul className="footer-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="mailto:stainlessbending@xtra.co.nz">Email Us</a></li>
        </ul>
      </footer>
    </>
  )
}
