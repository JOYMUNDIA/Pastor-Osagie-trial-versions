'use client';
import { useEffect, useRef } from 'react';
import styles from './AboutSection.module.css';

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add(styles.visible); observer.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    ref.current?.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.textCol} data-reveal>
            <span className="overline" style={{ display:'block', fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'0.75rem' }}>About</span>
            <h2 className={styles.heading}>Meet Pastor<br />Patrick D. Osagie</h2>
            <div className="gold-divider" style={{ margin: '1.25rem 0' }} />
            <p>Pastor Patrick D. Osagie serves under the <strong>RCCG Power Assembly Mega Church</strong> and is deeply passionate about youth ministry as the <strong>Continental Youth Pastor</strong>. Beyond his pastoral duties, he is a talented saxophonist and musician, sharing his gift of worship with congregations and audiences alike.</p>
            <p style={{ marginTop: '1rem' }}>He is also a devoted family man, committed to faith, family, and community. Pastor Patrick regularly hosts prayer sessions on his Facebook page and leads inspirational discussions through his radio podcast on <strong>HOTFM</strong>.</p>
            <div className={styles.statsRow}>
              {[
                { num: '15+', label: 'Years in Ministry' },
                { num: '10K+', label: 'Youth Mentored' },
                { num: '500+', label: 'Prayer Sessions' },
              ].map(s => (
                <div key={s.label} className={styles.stat}>
                  <span className={styles.statNum}>{s.num}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageCol} data-reveal>
            <div className={styles.imageFrame}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/Pastor_Osagie_2.jpg" alt="Pastor Patrick D. Osagie" className={styles.photo} />
              <div className={styles.frameBorder} />
              <div className={styles.goldAccent}>
                <span className={styles.accentText}>RCCG Power Assembly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
