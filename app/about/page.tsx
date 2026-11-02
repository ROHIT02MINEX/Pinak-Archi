import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Building2, Home, Ruler } from 'lucide-react'

export const metadata = { title: 'About Pinak Architect', description: 'The studio behind thoughtful architecture, interiors and construction.' }

const expertise = [
  ['01', 'ARCHITECTURAL DESIGN', 'Thoughtful architectural solutions that combine aesthetics, functionality, and a deep understanding of the surrounding environment.', Building2],
  ['02', 'INTERIOR DESIGN', 'Beautifully considered interiors that reflect individual lifestyles, enhance comfort, and make every space meaningful.', Home],
  ['03', 'CONSTRUCTION & EXECUTION', 'From planning to execution, we focus on quality, precision, and practical solutions that bring architectural visions to life.', Ruler],
] as const

export default function About() {
  return <main className="about-redesign">
    <section className="about-hero-new"><div className="about-container"><span className="about-kicker">THE STUDIO / ESTABLISHED WITH PURPOSE</span><h1>WE BELIEVE GREAT<br />SPACES BEGIN<br /><em>WITH GREAT IDEAS.</em></h1><div className="about-hero-meta"><strong>PINAK ARCHITECT</strong><p>An architecture, interior design, and construction studio creating thoughtful spaces that balance beauty, functionality, and purpose.</p></div><i className="about-rule" /></div></section>

    <section className="about-story-new"><div className="about-container about-story-grid"><div className="about-story-images"><div className="about-photo-new"><Image src="/images/studio-top.png" alt="Architect working on blueprints inside the studio" fill sizes="(max-width: 800px) 100vw, 30vw" /></div><div className="about-photo-new"><Image src="/images/portfolio-hillside.png" alt="Completed hillside architectural residence" fill sizes="(max-width: 800px) 100vw, 30vw" /></div></div><div className="about-story-copy"><span className="about-kicker">WHO WE ARE</span><h2>TRANSFORMING IDEAS INTO EXCEPTIONAL SPACES.</h2><p>At Pinak Architect, we believe architecture is more than designing buildings. It is about understanding people, their aspirations, and the spaces they call their own.</p><p>Our studio brings together architectural design, interior planning, and practical construction expertise to create spaces that are beautiful, functional, and built with purpose.</p><p>From residential homes to commercial environments, we approach every project with creativity, precision, and attention to detail. Our goal is to turn each client's vision into a space that inspires everyday living.</p><blockquote>Every space tells a story. We design spaces worth remembering.</blockquote><Link className="about-gold-link" href="/founder">MEET OUR FOUNDER <ArrowUpRight size={16} /></Link></div></div></section>

    <section className="about-expertise-new"><div className="about-container"><span className="about-kicker">WHAT WE DO</span><h2>DESIGNING BEYOND EXPECTATIONS.</h2><div className="about-expertise-grid">{expertise.map(([number, title, description, Icon]) => <Link className="about-expertise-card" href="/services" key={number}><span>{number}</span><Icon size={28} strokeWidth={1.3} /><h3>{title}</h3><p>{description}</p><ArrowUpRight className="about-card-arrow" size={18} /></Link>)}</div></div></section>

    <section className="about-glance-new"><div className="about-container"><span className="about-kicker">STUDIO AT A GLANCE</span><h2>A PRACTICE BUILT AROUND PURPOSE.</h2><div className="about-glance-grid"><div><strong>Design-led</strong><span>Architecture shaped around people and place.</span></div><div><strong>End-to-end</strong><span>From first concept through practical execution.</span></div><div><strong>Detail-focused</strong><span>Material, proportion and light considered together.</span></div><div><strong>Built to last</strong><span>Spaces made for everyday life and longevity.</span></div></div></div></section>

    <section className="about-philosophy-new"><Image src="/images/portfolio-hillside.png" alt="Pinak Architect completed mountain residence" fill sizes="100vw" /><div className="about-philosophy-overlay" /><div className="about-container about-philosophy-copy"><span className="about-kicker">OUR PHILOSOPHY</span><h2>DESIGNED WITH PURPOSE.<br /><em>BUILT TO INSPIRE.</em></h2><p>We believe exceptional architecture is created where thoughtful design, technical expertise, and human experience come together.</p></div></section>

    <section className="about-contact-new"><div className="about-container"><span className="about-kicker">YOUR VISION, OUR EXPERTISE</span><h2>LET'S CREATE SOMETHING<br /><em>EXTRAORDINARY.</em></h2><p>Have a project in mind? Let's explore how thoughtful design can bring your vision to life.</p><div className="about-contact-actions"><Link className="about-primary-button" href="/contact">START YOUR PROJECT <ArrowUpRight size={16} /></Link><Link className="about-secondary-button" href="/work">EXPLORE OUR WORK <ArrowUpRight size={16} /></Link></div></div></section>
  </main>
}
