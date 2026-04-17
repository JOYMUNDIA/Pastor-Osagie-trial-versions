'use client';
import Link from 'next/link';
import styles from './MinistryCards.module.css';

const cards = [
  {
    icon: '🙏',
    title: 'Lunch Hour Prayers',
    desc: 'Join daily midday intercession sessions on Facebook — Monday through Friday. Come as you are, pray as you mean it.',
    link: '/ministry?tab=prayer',
    cta: 'Join Prayer',
  },
  {
    icon: '⛪',
    title: 'Sunday Services',
    desc: 'Experience the full Sunday service at RCCG Power Assembly Mega Church. Watch live or catch the replay.',
    link: '/ministry?tab=service',
    cta: 'Watch Services',
  },
  {
    icon: '🎙',
    title: 'HOTFM Podcast',
    desc: 'Inspiring teachings, interviews, and faith discussions on Pastor Patrick\'s weekly radio podcast.',
    link: '/ministry?tab=podcast',
    cta: 'Listen Now',
  },
  {
    icon: '📖',
    title: 'Faith Articles',
    desc: 'Deepen your walk with thought-provoking articles on faith, family, leadership and spiritual growth.',
    link: '/ministry?tab=article',
    cta: 'Read Articles',
  },
  {
    icon: '👥',
    title: 'Youth Ministry',
    desc: 'As Continental Youth Pastor, Pastor Patrick equips the next generation through conferences and mentorship.',
    link: '/ministry',
    cta: 'Learn More',
  },
  {
    icon: '📅',
    title: 'Book a Meeting',
    desc: 'Schedule a personal appointment with Pastor Osagie for counselling, prayer, or ministry consultation.',
    link: '/appointments',
    cta: 'Book Now',
  },
];

export default function MinistryCards() {
  return (
    <section id="ministry" className={styles.section}>
      <div className="container">
        <div className="section-heading">
          <span className="overline" style={{ display:'block', fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'0.75rem' }}>What We Do</span>
          <h2>Ministry & Outreach</h2>
          <div className="gold-divider" />
          <p>Connecting faith, community and transformation through multiple channels of ministry.</p>
        </div>
        <div className={styles.grid}>
          {cards.map((c, i) => (
            <Link href={c.link} key={c.title} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={styles.icon}>{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <span className={styles.cta}>{c.cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
