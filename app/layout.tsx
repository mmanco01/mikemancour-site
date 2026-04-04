import './globals.css';
import Link from 'next/link';
import { contactEmail } from '@/data/media';

export const metadata = {
  title: 'Mike Mancour',
  description: 'Musician, performer, songwriter, and artist legacy archive.',
};

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/listen', label: 'Listen' },
  { href: '/watch', label: 'Watch' },
  { href: '/timeline', label: 'Timeline' },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="siteHeader">
          <div className="container navShell">
            <Link href="/" className="brand">Mike Mancour</Link>
            <nav>
              <ul className="navList">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <a className="navButton" href={`mailto:${contactEmail}?subject=Message from MikeMancour.com`}>Email Mike</a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="siteFooter">
          <div className="container footerGrid">
            <div>
              <h3>Mike Mancour</h3>
              <p>Guitarist • Singer • Songcatcher</p>
              <p className="muted">A public home for the recordings, videos, archive photos, and story.</p>
            </div>
            <div>
              <h4>Explore</h4>
              <ul className="footerLinks">
                {navItems.map((item) => (
                  <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Connect</h4>
              <p className="muted">For booking, collaboration, media, or a simple hello.</p>
              <a className="buttonPrimary footerButton" href={`mailto:${contactEmail}?subject=Message from MikeMancour.com`}>Email Mike</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
