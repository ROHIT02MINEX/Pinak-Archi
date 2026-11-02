import type { Metadata } from 'next';
import './globals.css';
import { Header, Footer } from './ui';

export const metadata: Metadata = { title: 'PINAK ARCHITECT — Deal With The Best', description: 'Architecture, interiors and building by Ar. Siddharth Pathak.' };
export default function Layout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><Header />{children}<Footer /></body></html>; }
