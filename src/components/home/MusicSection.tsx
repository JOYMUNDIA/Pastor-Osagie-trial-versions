import styles from './MusicSection.module.css';

export default function MusicSection() {
  return (
    <section id="music" className={styles.section}>
      <div className="container">
        <div className="section-heading">
          <span style={{ display:'block', fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'0.75rem' }}>Worship Through Music</span>
          <h2>Music & Saxophone</h2>
          <div className="gold-divider" />
          <p>Pastor Patrick uses music as a powerful vessel of worship and spiritual expression.</p>
        </div>
        <div className={styles.bento}>
          <div className={`${styles.item} ${styles.tall}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/playing_Saxophone.jpg" alt="Playing Saxophone" />
            <div className={styles.caption}>Saxophone Ministry</div>
          </div>
          <div className={styles.item}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/on_knees.jpg" alt="Worship" />
            <div className={styles.caption}>In Worship</div>
          </div>
          <div className={styles.item}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/singing.jpg" alt="Singing" />
            <div className={styles.caption}>In Song</div>
          </div>
          <div className={`${styles.item} ${styles.video}`}>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Saxophone Performance"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className={styles.caption}>Live Performance</div>
          </div>
          <div className={styles.item}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/playing_saxophone2.jpg" alt="Saxophone Performance" />
            <div className={styles.caption}>Praise Set</div>
          </div>
        </div>
      </div>
    </section>
  );
}
