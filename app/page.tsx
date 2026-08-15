'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const words = 'Beacon turns podcast performance into a story you can actually act on. See the moment listeners leave, understand why, compare every episode, and hand sponsors a report they can believe.'.split(' ')

function DashboardMock() {
  return <div className="hero-dashboard" aria-label="Beacon analytics dashboard preview">
    <div className="dashboard-ui">
      <aside className="dash-side"><strong>beacon</strong><div className="dash-item active">Overview</div><div className="dash-item">Episodes</div><div className="dash-item">Audience</div><div className="dash-item">Sponsors</div></aside>
      <div className="dash-main">
        <div className="dash-top"><div className="dash-title">The Signal / Episode 42</div><div className="dash-pill">LAST 30 DAYS</div></div>
        <div className="chart"><svg viewBox="0 0 800 220" preserveAspectRatio="none"><path d="M0 178 C75 165, 90 105, 160 120 S240 55, 315 88 S385 32, 460 72 S545 64, 615 108 S700 78, 800 118" fill="none" stroke="#d8ff3e" strokeWidth="4"/><path d="M0 178 C75 165, 90 105, 160 120 S240 55, 315 88 S385 32, 460 72 S545 64, 615 108 S700 78, 800 118 L800 220 L0 220Z" fill="rgba(216,255,62,.07)"/></svg></div>
        <div className="metrics"><div className="metric"><small>Listeners</small><b>18.4k</b></div><div className="metric"><small>Completion</small><b>71.8%</b></div><div className="metric"><small>Avg. listen</small><b>38:24</b></div></div>
      </div>
    </div>
  </div>
}

function FeatureBento() {
  return <div className="bento">
    <article className="bento-card">
      <div className="card-tag">Retention</div><h3>Find the exact second the room goes quiet.</h3><p>See listener retention as a living curve, with drop-off zones surfaced instead of buried in a spreadsheet.</p>
      <div className="retention-visual"><svg viewBox="0 0 600 220" preserveAspectRatio="none"><path d="M0 40 C80 45 110 58 150 65 S230 62 270 90 S330 105 370 122 S430 112 470 155 S540 172 600 188" fill="none" stroke="#11110f" strokeWidth="5"/><path d="M0 40 C80 45 110 58 150 65 S230 62 270 90 S330 105 370 122 S430 112 470 155 S540 172 600 188 L600 220 L0 220Z" fill="#d8d4c8" opacity=".55"/></svg></div>
    </article>
    <article className="bento-card">
      <div className="card-tag">Drop-off heatmap</div><h3>Patterns become visible.</h3><p>Episode moments with unusual exits surface automatically, so your team knows where to listen again.</p>
      <div className="heatmap">{Array.from({length: 72}).map((_,i)=><i key={i}/>)}</div>
    </article>
    <article className="bento-card"><div className="card-tag">Cross-platform</div><h3>One audience. Every platform.</h3><p>Spotify, Apple Podcasts and YouTube, finally in one view.</p></article>
    <article className="bento-card"><div className="card-tag">Episode comparison</div><h3>Know what changed, not just what happened.</h3><div className="compare-lines"><div className="compare-line"><b/></div><div className="compare-line"><b/></div><div className="compare-line"><b/></div></div></article>
    <article className="bento-card"><div className="card-tag">Sponsor reporting</div><h3>Turn performance into a media kit.</h3><p>Clean, shareable reports that make your numbers easy for sponsors to understand.</p></article>
    <article className="bento-card"><div className="card-tag">AI episode insights</div><h3>Ask why. Get the story behind the curve.</h3><div className="table-mock"><div className="table-row"><span>Moment</span><span>Drop</span><span>Context</span><span>Signal</span></div><div className="table-row"><span>14:32</span><span>-8.4%</span><span>Ad read</span><span>High</span></div><div className="table-row"><span>28:11</span><span>-4.1%</span><span>Topic shift</span><span>Med</span></div></div></article>
  </div>
}

function StorySection() {
  const sectionRef = useRef<HTMLElement>(null)
  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.story-card')
    cards.forEach((card) => {
      gsap.fromTo(card, { scale: .8, opacity: .45 }, { scale: 1, opacity: 1, ease: 'none', scrollTrigger: { trigger: card, start: 'top 90%', end: 'bottom 20%', scrub: true } })
    })
    gsap.fromTo('.scrub-word', { opacity: .1 }, { opacity: 1, stagger: .025, ease: 'none', scrollTrigger: { trigger: '.scrub-copy', start: 'top 80%', end: 'bottom 35%', scrub: true } })
  }, { scope: sectionRef })

  return <section ref={sectionRef} className="section desire">
    <div className="container">
      <div className="pin-layout">
        <div className="pin-title"><h2>Analytics that explain the episode.</h2><p>Beacon is built for the questions that appear after the download count: Where did we lose them? What worked? What should we do next?</p></div>
        <div className="story-stack">
          <article className="story-card"><h3>“The drop isn’t random. It happens 11 seconds into the ad read.”</h3><p>Beacon connects the curve to the episode timeline so your next edit starts with evidence.</p><div className="story-art"><img src="https://picsum.photos/seed/podcaststudio/1200/700" alt="Podcast studio atmosphere" /></div></article>
          <article className="story-card"><h3>“Episode 42 holds 19% better than your category benchmark.”</h3><p>Compare your show against similar podcasts without losing the context of your own audience.</p><div className="story-art"><img src="https://picsum.photos/seed/listener/1200/700" alt="Listener using headphones" /></div></article>
          <article className="story-card"><h3>“Your sponsor can see the result without opening your dashboard.”</h3><p>Export a clean report that makes campaign performance legible in one glance.</p><div className="story-art"><img src="https://picsum.photos/seed/report/1200/700" alt="Editorial report detail" /></div></article>
        </div>
      </div>
      <p className="scrub-copy">{words.map((word, i) => <span className="scrub-word" key={i}>{word}{i < words.length - 1 ? ' ' : ''}</span>)}</p>
    </div>
  </section>
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false)
  const heroRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    gsap.from('.hero-inner > *', { y: 30, opacity: 0, duration: 1, stagger: .09, ease: 'power3.out' })
    gsap.to('.hero-dashboard', { y: -18, ease: 'none', scrollTrigger: { trigger: heroRef.current, start: 'top top', end: 'bottom top', scrub: true } })
    ScrollTrigger.create({ trigger: '.pin-title', start: 'top 12%', endTrigger: '.story-stack', end: 'bottom bottom', pin: true, pinSpacing: false })
  }, { scope: heroRef })

  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSubmitted(true) }

  return <main className="site-shell">
    <header className="nav-wrap"><div className="container"><nav className="nav"><a href="#top" className="logo"><i className="logo-dot"/>beacon</a><div className="nav-links"><a href="#product">Product</a><a href="#why">Why Beacon</a><a href="#waitlist">Waitlist</a></div><a href="#waitlist" className="nav-cta">Join the waitlist</a></nav></div></header>

    <section ref={heroRef} id="top" className="hero">
      <div className="hero-grid"/>
      <div className="container hero-inner">
        <div className="eyebrow mono"><i/>Podcast analytics, without the guesswork</div>
        <h1>Know <span>why</span> listeners stay.</h1>
        <p className="hero-copy">Beacon brings every platform, every episode and every meaningful listener signal into one clear picture.</p>
        <div className="hero-actions"><a className="btn btn-primary" href="#waitlist">Get early access</a><a className="btn btn-secondary" href="#product">See what it reveals</a></div>
        <DashboardMock />
      </div>
    </section>

    <div className="marquee-wrap"><div className="marquee"><span>Spotify <strong>×</strong></span><span>Apple Podcasts <strong>×</strong></span><span>YouTube <strong>×</strong></span><span>Retention <strong>×</strong></span><span>Benchmarks <strong>×</strong></span><span>Sponsor reports <strong>×</strong></span><span>Spotify <strong>×</strong></span><span>Apple Podcasts <strong>×</strong></span><span>YouTube <strong>×</strong></span><span>Retention <strong>×</strong></span><span>Benchmarks <strong>×</strong></span><span>Sponsor reports <strong>×</strong></span></div></div>

    <section id="product" className="section"><div className="container"><div className="section-head"><h2>Everything your show needs to read the room.</h2><p>From the first play to the final export, Beacon turns scattered platform data into a single operating picture for your podcast.</p></div><FeatureBento /></div></section>

    <StorySection />

    <section id="waitlist" className="action"><div className="container action-inner"><h2>Make your next episode a little less mysterious.</h2><div className="waitlist"><p>Beacon is opening its first wave soon. Leave your email and we’ll send the invite when your spot is ready.</p><form className="form" onSubmit={submit}><input required type="email" placeholder="you@show.com" aria-label="Email address"/><button type="submit">Join waitlist</button></form>{submitted && <div className="success">You’re on the list. We’ll be in touch.</div>}</div></div></section>
    <footer className="container footer"><span>Beacon / Podcast intelligence</span><span>Built for people who care what happens after play.</span></footer>
  </main>
}
