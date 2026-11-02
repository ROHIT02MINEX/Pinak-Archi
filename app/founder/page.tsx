import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, GraduationCap, BriefcaseBusiness } from 'lucide-react'

const education = [['2011–2016', 'DIT Dehradun', 'Bachelor of Architecture (B.Arch)'], ['2010', 'St. Paul School', 'Intermediate']]
const experience = [['2020–Present', 'Pinak Architect and Builder', 'Nainital'], ['2018–2020', 'Freelance Architect', 'Dehradun'], ['2016–2018', 'IDAZ Design Consultancy', 'Meghalaya']]
const philosophy = [['01', 'Creative Thinking', 'Exploring fresh ideas while respecting the character and purpose of every space.'], ['02', 'Functional Design', 'Balancing aesthetics with comfort, usability, and practical needs.'], ['03', 'Thoughtful Execution', 'Bringing concepts to life through careful planning and attention to detail.']]

export const metadata = { title: 'Ar. Siddharth Pathak | Founder – Pinak Architect', description: 'The founder portfolio of Ar. Siddharth Pathak, architect, builder, and interior designer.' }

export default function Founder() {
  return <main className="founder-redesign">
    <section className="founder-hero-new"><div className="founder-container founder-hero-grid"><div className="founder-identity"><span className="founder-kicker">THE FOUNDER</span><h1>Ar. Siddharth<br /><em>Pathak</em></h1><strong>Architect <i>|</i> Builder <i>|</i> Interior Designer</strong><div className="founder-portrait-new"><Image src="/images/founder-portrait.png" alt="Ar. Siddharth Pathak, founder of Pinak Architect" fill priority sizes="(max-width: 800px) 100vw, 48vw" /></div></div><div className="founder-bio-new"><span className="founder-kicker">THE VISION BEHIND THE PRACTICE</span><h2>DESIGNING SPACES<br />WITH <em>PURPOSE.</em></h2><p>Ar. Siddharth Pathak is an architect, builder, and interior designer passionate about creating inspiring spaces.</p><p>Combining architectural expertise with hands-on construction experience, he develops spaces that balance visual appeal, functionality, and practical execution.</p><p>His design philosophy is rooted in creativity, precision, sustainability, and a commitment to bringing meaningful ideas to life.</p><blockquote>Great architecture is not just about how a space looks, but how it makes people feel.</blockquote></div></div></section>

    <section className="founder-timelines-new"><div className="founder-container founder-timeline-grid"><Timeline title="Education" icon={<GraduationCap size={25} />} entries={education} /><Timeline title="Professional Experience" icon={<BriefcaseBusiness size={25} />} entries={experience} /></div></section>

    <section className="founder-philosophy-new"><div className="founder-container"><span className="founder-kicker">THE DESIGN PHILOSOPHY</span><h2>CREATIVITY.<br />PRECISION.<br /><em>PURPOSE.</em></h2><p className="founder-philosophy-intro">Every project begins with a vision. Through thoughtful planning, technical understanding, and attention to detail, that vision becomes a space designed for real life.</p><div className="founder-philosophy-grid">{philosophy.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="founder-cta-new"><div className="founder-container"><span className="founder-kicker">WORK WITH PINAK ARCHITECT</span><h2>LET'S BRING YOUR<br /><em>VISION TO LIFE.</em></h2><p>From the first sketch to the final detail, let's create a space that reflects your aspirations.</p><div className="founder-actions"><Link className="founder-primary" href="/contact">START YOUR PROJECT <ArrowUpRight size={16} /></Link><Link className="founder-secondary" href="/work">EXPLORE OUR WORK <ArrowUpRight size={16} /></Link></div></div></section>
  </main>
}

function Timeline({ title, icon, entries }: { title: string; icon: React.ReactNode; entries: string[][] }) {
  return <div className="founder-timeline"><div className="founder-timeline-heading"><span>{icon}</span><h2>{title}</h2></div><div className="founder-timeline-list">{entries.map(([period, place, detail]) => <article key={period + place}><b>{period}</b><strong>{place}</strong><small>{detail}</small></article>)}</div></div>
}
