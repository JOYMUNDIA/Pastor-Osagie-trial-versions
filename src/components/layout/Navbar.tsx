'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import styles from './Navbar.module.css';

interface NavUser {
  name: string;
  role: string;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState<NavUser | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    fetch('/api/auth/me').then(r => r.json()).then(d => {
      if (d.user) setUser(d.user);
    }).catch(() => {});
  }, [pathname]);

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    setUser(null);
    router.push('/');
  };

  const links = [
    { href: '/', label: 'Home' },
    { href: '/ministry', label: 'Ministry Hub' },
    { href: '/appointments', label: 'Appointments' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.inner}`}>
          <Link href="/" className={styles.logo}>
            Patrick D. Osagie
          </Link>
          <nav className={styles.nav}>
            {links.map(l => (
              <Link
                key={l.href}
                href={l.href}
                className={`nav-link ${pathname === l.href ? 'active' : ''} ${styles.navLink}`}
              >
                {l.label}
              </Link>
            ))}
            {user ? (
              <div className={styles.userMenu}>
                {(user.role === 'admin' || user.role === 'editor') && (
                  <Link href="/admin" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }}>
                    Admin
                  </Link>
                )}
                <button onClick={handleLogout} className={styles.logoutBtn}>
                  Sign Out
                </button>
              </div>
            ) : (
              <Link href="/auth/login" className="btn btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                Sign In
              </Link>
            )}
          </nav>
          <button className={styles.hamburger} onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <div className={`${styles.overlay} ${menuOpen ? styles.overlayActive : ''}`} onClick={() => setMenuOpen(false)} />
      <aside className={`${styles.sidebar} ${menuOpen ? styles.sidebarActive : ''}`}>
        <button className={styles.closeBtn} onClick={() => setMenuOpen(false)}>✕</button>
        <div className={styles.sidebarLogo}>Patrick D. Osagie</div>
        <nav className={styles.sidebarNav}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={styles.sidebarLink}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          {user ? (
            <>
              {(user.role === 'admin' || user.role === 'editor') && (
                <Link href="/admin" className={styles.sidebarLink} onClick={() => setMenuOpen(false)}>
                  Admin Dashboard
                </Link>
              )}
              <button onClick={() => { handleLogout(); setMenuOpen(false); }} className={styles.sidebarLogout}>
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/auth/login" className={styles.sidebarCta} onClick={() => setMenuOpen(false)}>
              Sign In
            </Link>
          )}
        </nav>
      </aside>
    </>
  );
}
