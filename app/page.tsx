'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const videos = ['/videos/scene-1-arrival.mp4', '/videos/scene-2-lounge.mp4', '/videos/scene-3-horizon.mp4']
const chapters = [
  ['PINAK ARCHITECT', 'WE DESIGN SPACES THAT INSPIRE.', 'Architecture. Interiors. Innovation.'],
  ['DESIGNED WITH PURPOSE', 'EVERY DETAIL MATTERS.', 'Thoughtful design, crafted with precision.'],
  ['FROM VISION TO REALITY', 'CREATING EXCEPTIONAL SPACES.', 'Spaces that inspire the way we live.'],
] as const
const featured = [
  { title: 'Hillside Residence', category: 'RESIDENTIAL ARCHITECTURE', image: '/images/portfolio-hillside.png', alt: 'Luxury hillside residence surrounded by green mountains', href: '/work/hillside-residence' },
  { title: 'Studio Interiors', category: 'STUDIO ENVIRONMENT', image: '/images/portfolio-studio.png', alt: 'Architects collaborating on drawings in a design studio', href: '/work/studio-interiors' },
  { title: 'Architectural Detail', category: 'DESIGN EXPLORATION', image: '/images/portfolio-detail.png', alt: 'Architectural floor plans, models, stone and timber samples', href: '/work/architectural-detail' },
  { title: 'Meet Our Founder', category: 'THE FOUNDER', image: '/images/portfolio-founder.png', alt: 'Ar. Siddharth Pathak in his architectural studio', href: '/founder' },
]

export default function Home() {
  const [chapter, setChapter] = useState(0)
  useEffect(() => { const timer = window.setInterval(() => setChapter(current => (current + 1) % chapters.length), 8000); return () => window.clearInterval(timer) }, [])
  const copy = chapters[chapter]
  return <main className="home-page">
    <section className="home-hero" aria-label="Pinak Architect cinematic introduction">
      <video key={videos[chapter]} className="home-hero-video" src={videos[chapter]} muted playsInline autoPlay loop />
      <div className="home-hero-overlay" />
      <div className="home-hero-copy"><span>{copy[0]}</span><h1>{copy[1]}</h1><p>{copy[2]}</p></div>
      <div className="home-hero-progress">{chapters.map((_, index) => <button key={index} aria-label={`Show chapter ${index + 1}`} className={index === chapter ? 'active' : ''} onClick={() => setChapter(index)} />)}</div>
    </section>

    <section className="home-about" id="about"><div className="home-container home-about-grid"><div className="home-about-image"><div className="home-about-photo group"><Image src="/images/studio-top.png" alt="Architect working on architectural blueprints" fill sizes="(max-width: 800px) 100vw, 48vw" /></div><div className="home-about-photo group"><Image src="/images/studio-bottom.png" alt="Architectural drawing and design process" fill sizes="(max-width: 800px) 100vw, 48vw" /></div></div><div className="home-about-copy"><span className="home-eyebrow">THE STUDIO</span><h2>ARCHITECTURE WITH PURPOSE.</h2><p>At Pinak Architect, we believe great architecture begins with understanding people, places, and possibilities.</p><p>We create residential, commercial, and interior spaces that bring together thoughtful design, functionality, and lasting quality.</p><p>From the first concept to the final details, our approach combines creativity, technical precision, and a commitment to turning ideas into meaningful spaces.</p><div className="home-expertise"><span>Architectural Design</span><span>Interior Design</span><span>Construction Expertise</span></div><Link className="home-link" href="/about">DISCOVER OUR STUDIO <ArrowUpRight size={16} /></Link></div></div></section>

    <section className="home-work" id="work"><div className="home-container"><div className="home-section-heading"><span className="home-eyebrow">OUR PORTFOLIO</span><h2>SPACES THAT SPEAK<br />FOR THEMSELVES.</h2><p>Explore a selection of architectural concepts, built environments, and interior spaces shaped by thoughtful design.</p></div><div className="home-project-grid">{featured.map((item, index) => <Link className="home-project-card group" href={item.href} key={item.title}><div className="home-project-image"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 50vw" /></div><span>0{index + 1} · {item.category}</span><strong>{item.title}<ArrowUpRight size={18} /></strong>{item.title === 'Meet Our Founder' && <span className="founder-card-cta">MEET THE FOUNDER <ArrowUpRight size={14} /></span>}</Link>)}</div><Link className="home-link" href="/work">EXPLORE ALL PROJECTS <ArrowUpRight size={16} /></Link></div></section>

    <section className="home-contact"><div className="home-container home-contact-inner"><span className="home-eyebrow">LET'S COLLABORATE</span><h2>LET'S BUILD<br /><em>YOUR VISION.</em></h2><p>Whether you're planning a new home, reimagining an interior, or developing a commercial space, our team is ready to bring your ideas to life.</p><div><Link className="home-contact-primary" href="/contact">START YOUR PROJECT <ArrowUpRight size={16} /></Link><Link className="home-contact-secondary" href="/services">EXPLORE OUR SERVICES <ArrowUpRight size={16} /></Link></div></div></section>
  </main>
}
