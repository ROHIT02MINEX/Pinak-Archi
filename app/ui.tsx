'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowUpRight, Menu, X, Instagram, Phone, Mail } from 'lucide-react';

function BrandLogo(){return <span className="brand-mark"><img src="/images/logo.jpeg" alt="Pinak Architect"/></span>}
export function Header() { const [open,setOpen]=useState(false); const links=[['HOME','/'],['ABOUT','/about'],['FOUNDER','/founder'],['WHY CHOOSE US','/why-choose-us'],['SERVICES','/services'],['PROJECTS','/work'],['CONTACT','/contact']]; return <header className="header"><Link href="/" className="logo"><BrandLogo/></Link><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button><nav className={open?'nav open':'nav'}>{links.map(([label,href])=><Link key={href} href={href} onClick={()=>setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/contact" onClick={()=>setOpen(false)}>START YOUR PROJECT <ArrowUpRight size={16}/></Link></nav></header> }
export function Footer(){return <footer><div><div className="logo"><BrandLogo/></div><p className="footer-note">Spaces for a better tomorrow.</p></div><div className="footer-links"><Link href="/work">Selected work</Link><Link href="/about">The studio</Link><Link href="/contact">Get in touch</Link><a href="tel:+919808106529"><Phone size={15}/> Call</a><a href="mailto:pinakiarchitects@gmail.com"><Mail size={15}/> Email</a></div><div className="copyright">© {new Date().getFullYear()} PINAK ARCHITECT. All rights reserved.</div></footer>}
