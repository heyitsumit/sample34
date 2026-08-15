'use client'

import { CSSProperties, FormEvent, ReactNode, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const words = 'Beacon turns scattered podcast data into a visual operating system for your show. Find the exact moment attention shifts, understand why, compare episodes, and turn performance into sponsor-ready proof.'.split(' ')

const images = {
  hero: 'https://picsum.photos/seed/beacon-studio/1800/1100',
  studio: 'https://picsum.photos/seed/podcast-mic/1000/1200',
  listener: 'https://picsum.photos/seed/headphones-night/1000/1200',
  report: 'https://picsum.photos/seed/editorial-report/1000/1200',
}

function Magnetic({ children, className = '', href }: { children: ReactNode; className?: string; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null)
  useGSAP(() => {
    const el = ref.current
    if (!el) return
    const move = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (event.clientX - (rect.left + rect.width / 2)) * 0.16
      const y = (event.clientY - (rect.top + rect.height / 2)) * 0.16
      gsap.to(el, { x, y, duration: 0.35, ease: 'power3.out' })
    }
    const leave = () => gsap.to(el, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, .45)' })
    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave) }
  }, { scope: ref })
  return <a ref={ref} href={href} className={className}>{children}</a>
}

function DashboardMock() {
  const ref = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    gsap.fromTo('.dashboard-window', { y: 70, rotateX: 8, opacity: 0 }, { y: 0, rotateX: 0, opacity: 1, duration: 1.35, ease: 'power4.out', delay: .25 })
    gsap.fromTo('.dash-stat', { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: .65, stagger: .08, delay: .8, ease: 'power3.out' })
    gsap.fromTo('.hero-curve', { strokeDashoffset: 1200 }, { strokeDashoffset: 0, duration: 2.2, delay: .9, ease: 'power2.out' })
    gsap.to('.dashboard-glow', { xPercent: 18, yPercent: -10, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut' })
  }, { scope: ref })

  return <div ref={ref} className="dashboard-stage">
    <div className="dashboard-glow" />
    <div className="dashboard-window">
      <div className="dash-chrome"><span /><span /><span /><b>beacon / episode 42</b><i>LIVE</i></div>
      <div className="dash-body">
        <aside className="dash-side"><strong>beacon</strong><a className="active">Overview</a><a>Episodes</a><a>Audience</a><a>Sponsors</a><small>Connected</small><div className="platforms"><em>SP</em><em>AP</em><em>YT</em></div></aside>
        <div className="dash-main">
          <div className="dash-header"><div><small>EPISODE PERFORMANCE</small><h3>The Signal / 42</h3></div><button>Last 30 days</button></div>
          <div className="chart-wrap">
            <div className="chart-grid" />
            <svg viewBox="0 0 900 300" preserveAspectRatio="none"><path className="hero-curve" d="M0 55 C90 58 110 82 175 86 S270 60 330 102 S400 128 470 113 S545 55 610 94 S700 130 760 168 S825 174 900 214" fill="none" stroke="currentColor" strokeWidth="6" pathLength="1200" /></svg>
            <span className="drop-pin pin-one">14:32</span><span className="drop-pin pin-two">28:11</span>
          </div>
          <div className="dash-stats"><div className="dash-stat"><small>Listeners</small><b>18.4k</b><span>+12.8%</span></div><div className="dash-stat"><small>Completion</small><b>71.8%</b><span>+6.4%</span></div><div className="dash-stat"><small>Avg. listen</small><b>38:24</b><span>+3:11</span></div></div>
        </div>
      </div>
    </div>
  </div>
}

function ProductBento() {
  const ref = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.feature-card')
    cards.forEach((card, i) => {
      gsap.fromTo(card, { y: 90, opacity: 0, rotate: i % 2 ? 1.5 : -1.5 }, { y: 0, opacity: 1, rotate: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: card, start: 'top 86%', toggleActions: 'play none none reverse' } })
    })
    gsap.fromTo('.heat-cell', { scale: .2, opacity: 0 }, { scale: 1, opacity: 1, duration: .45, stagger: { each: .012, from: 'random' }, ease: 'back.out(1.7)', scrollTrigger: { trigger: '.heatmap', start: 'top 80%' } })
    gsap.fromTo('.compare-fill', { width: 0 }, { width: 'var(--fill)', duration: 1.15, stagger: .14, ease: 'power3.out', scrollTrigger: { trigger: '.compare', start: 'top 82%' } })
  }, { scope: ref })

  return <div ref={ref} className="bento-grid">
    <article className="feature-card feature-large feature-light">
      <div className="card-copy"><span>RETENTION</span><h3>See the exact second attention changes.</h3><p>Not a line on a chart. A timeline you can interrogate, compare and act on.</p></div>
      <div className="retention-art"><svg viewBox="0 0 800 250" preserveAspectRatio="none"><path d="M0 44 C110 50 135 62 210 68 S300 45 355 98 S420 102 500 124 S570 94 625 156 S700 156 800 201" fill="none" stroke="currentColor" strokeWidth="5" /></svg><div className="timeline-labels"><span>0:00</span><span>14:32</span><span>28:11</span><span>42:04</span></div></div>
    </article>
    <article className="feature-card feature-image">
      <img src={images.studio} alt="Podcast studio microphone" /><div className="image-wash" /><div className="image-copy"><span>EPISODE CONTEXT</span><h3>Performance with the room still attached.</h3></div>
    </article>
    <article className="feature-card feature-heat"><div className="card-copy"><span>DROP-OFF HEATMAP</span><h3>Patterns become impossible to miss.</h3><p>Beacon surfaces unusual exits so you know exactly what deserves another listen.</p></div><div className="heatmap">{Array.from({ length: 80 }).map((_, i) => <i className="heat-cell" key={i} />)}</div></article>
    <article className="feature-card feature-dark"><div className="card-copy"><span>CROSS-PLATFORM</span><h3>One audience. Every platform.</h3><p>Spotify, Apple Podcasts and YouTube finally share the same visual language.</p></div><div className="platform-orbit"><b>SP</b><b>AP</b><b>YT</b><span>18.4k</span></div></article>
    <article className="feature-card feature-report"><div className="card-copy"><span>SPONSOR REPORTING</span><h3>Numbers sponsors can understand in one glance.</h3><p>Export a clean performance story instead of another spreadsheet.</p></div><div className="report-card"><div className="report-top"><b>BEACON</b><span>MEDIA KIT</span></div><strong>71.8%</strong><small>episode completion</small><div className="report-bars"><i /><i /><i /><i /></div></div></article>
    <article className="feature-card feature-compare"><div className="card-copy"><span>EPISODE COMPARISON</span><h3>Know what changed.</h3></div><div className="compare"><div><span>Episode 42</span><b className="compare-fill" style={{ '--fill': '86%' } as CSSProperties} /></div><div><span>Episode 41</span><b className="compare-fill" style={{ '--fill': '67%' } as CSSProperties} /></div><div><span>Category</span><b className="compare-fill" style={{ '--fill': '54%' } as CSSProperties} /></div></div></article>
  </div>
}

function StorySection() {
  const ref = useRef<HTMLElement>(null)
  useGSAP(() => {
    const mm = gsap.matchMedia()
    mm.add('(min-width: 901px)', () => {
      const cards = gsap.utils.toArray<HTMLElement>('.story-card')
      cards.forEach((card, i) => {
        gsap.fromTo(card, { scale: .86, y: 70, opacity: .35 }, { scale: 1, y: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: card, start: 'top 88%', end: 'top 22%', scrub: true } })
        gsap.set(card, { marginTop: i > 0 ? -80 * i : 0 })
      })
      gsap.to('.story-title', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.story-section', start: 'top bottom', end: 'bottom top', scrub: true } })
    })
    gsap.to('.story-image img', { scale: 1.08, ease: 'none', scrollTrigger: { trigger: '.story-stack', start: 'top bottom', end: 'bottom top', scrub: true } })
    gsap.fromTo('.scrub-word', { opacity: .13, y: 8 }, { opacity: 1, y: 0, stagger: .02, ease: 'none', scrollTrigger: { trigger: '.scrub-copy', start: 'top 78%', end: 'bottom 38%', scrub: true } })
    return () => mm.revert()
  }, { scope: ref })

  return <section ref={ref} id="why" className="section desire story-section">
    <div className="container story-grid">
      <div className="story-title"><span>WHY BEACON</span><h2>Analytics that explain the episode.</h2><p>Beacon is built for the questions that appear after the download count: where did we lose them, what worked, and what should happen next?</p></div>
      <div className="story-stack">
        <article className="story-card"><h3>“The drop isn't random. It happens 11 seconds into the ad read.”</h3><p>Beacon connects the curve to the episode timeline so your next edit starts with evidence.</p><div className="story-image"><img src={images.listener} alt="Listener wearing headphones" /></div></article>
        <article className="story-card"><h3>“Episode 42 holds 19% better than your category benchmark.”</h3><p>Compare your show against similar podcasts without losing the context of your own audience.</p><div className="story-image"><img src={images.report} alt="Editorial report on a desk" /></div></article>
        <article className="story-card"><h3>“Your sponsor can see the result without opening your dashboard.”</h3><p>Export a clean report that makes campaign performance legible in one glance.</p><div className="story-image"><img src={images.hero} alt="Warm podcast recording studio" /></div></article>
      </div>
    </div>
    <div className="container scrub-wrap"><p className="scrub-copy">{words.map((word, i) => <span className="scrub-word" key={i}>{word}{i < words.length - 1 ? ' ' : ''}</span>)}</p></div>
  </section>
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const intro = gsap.timeline({ defaults: { ease: 'power4.out' } })
    intro.from('.nav', { y: -30, opacity: 0, duration: .8 })
      .from('.hero-eyebrow', { y: 22, opacity: 0, duration: .65 }, '-=.4')
      .from('.hero-title', { y: 70, opacity: 0, duration: 1 }, '-=.35')
      .from('.hero-copy, .hero-actions', { y: 28, opacity: 0, duration: .7, stagger: .12 }, '-=.55')
    gsap.to('.hero-media', { yPercent: -7, ease: 'none', scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true } })
  }, { scope: heroRef })

  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSubmitted(true) }

  return <main className="site-shell">
    <header className="nav-wrap"><div className="container"><nav className="nav"><a href="#top" className="logo"><i className="logo-dot" />beacon</a><div className="nav-links"><a href="#product">Product</a><a href="#why">Why Beacon</a><a href="#waitlist">Waitlist</a></div><Magnetic href="#waitlist" className="nav-cta">Join the waitlist</Magnetic></nav></div></header>

    <section ref={heroRef} id="top" className="hero">
      <div className="hero-noise" /><div className="hero-media"><img src={images.hero} alt="Podcast recording studio" /><div className="hero-media-wash" /></div>
      <div className="container hero-inner">
        <div className="hero-eyebrow"><i /> PODCAST INTELLIGENCE / BUILT FOR THE MOMENT AFTER PLAY</div>
        <h1 className="hero-title">Know <span className="hero-inline-image" aria-hidden="true" style={{ backgroundImage: `url(${images.hero})` }} /> <span>why</span> listeners stay.</h1>
        <p className="hero-copy">Beacon brings every platform, every episode and every meaningful listener signal into one clear picture.</p>
        <div className="hero-actions"><Magnetic href="#waitlist" className="btn btn-primary">Get early access <span>↗</span></Magnetic><Magnetic href="#product" className="btn btn-secondary">See what it reveals <span>↓</span></Magnetic></div>
        <DashboardMock />
      </div>
    </section>

    <div className="marquee-wrap"><div className="marquee"><span>Spotify <b>×</b></span><span>Apple Podcasts <b>×</b></span><span>YouTube <b>×</b></span><span>Retention <b>×</b></span><span>Benchmarks <b>×</b></span><span>Sponsor reports <b>×</b></span><span>Spotify <b>×</b></span><span>Apple Podcasts <b>×</b></span><span>YouTube <b>×</b></span><span>Retention <b>×</b></span><span>Benchmarks <b>×</b></span><span>Sponsor reports <b>×</b></span></div></div>

    <section id="product" className="section product-section"><div className="container"><div className="section-head"><div><span>THE PRODUCT</span><h2>Everything your show needs to read the room.</h2></div><p>From the first play to the final export, Beacon turns scattered platform data into a single operating picture for your podcast.</p></div><div className="product-accordion" aria-label="Beacon capabilities"><div className="accordion-item is-active"><b>01</b><span>Retention</span><small>Find the exact moment attention shifts.</small></div><div className="accordion-item"><b>02</b><span>Benchmarks</span><small>Know how your show compares.</small></div><div className="accordion-item"><b>03</b><span>AI Insights</span><small>Understand why listeners leave.</small></div><div className="accordion-item"><b>04</b><span>Sponsor Proof</span><small>Turn performance into a clean report.</small></div></div><ProductBento /></div></section>

    <StorySection />

    <section id="waitlist" className="action"><div className="action-orb" /><div className="container action-inner"><div><span>FIRST WAVE</span><h2>Make your next episode a little less mysterious.</h2></div><div className="waitlist"><p>Beacon is opening its first wave soon. Leave your email and we’ll send the invite when your spot is ready.</p><form className="form" onSubmit={submit}><input required type="email" placeholder="you@show.com" aria-label="Email address" /><button type="submit">Join waitlist <span>↗</span></button></form>{submitted && <div className="success">You’re on the list. We’ll be in touch.</div>}</div></div></section>
    <footer className="container footer"><span>Beacon / Podcast intelligence</span><span>Built for people who care what happens after play.</span></footer>
  </main>
}
