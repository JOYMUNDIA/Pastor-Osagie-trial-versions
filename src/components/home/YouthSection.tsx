import styles from './YouthSection.module.css';

const cards = [
  { img: '/images/youth-event1.jpg', title: 'Youth Conferences', desc: 'Engaging conferences to equip youth with spiritual and leadership skills for life and ministry.' },
  { img: '/images/youth-mentorship.jpg', title: 'Mentorship Programs', desc: 'One-on-one and group mentorship for guidance, career development, and spiritual growth.' },
  { img: '/images/youth-service.jpg', title: 'Youth Services', desc: 'Weekly youth gatherings that foster vibrant community and deep spiritual development.' },
];

export default function YouthSection() {
  return (
    <section id="youth" className={styles.section}>
      <div className="container">
        <div className="section-heading">
          <span style={{ display:'block', fontSize:'0.75rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--gold)', marginBottom:'0.75rem' }}>Next Generation</span>
          <h2>Youth Ministry & Leadership</h2>
          <div className="gold-divider" />
          <p>As Continental Youth Pastor, Pastor Patrick D. Osagie inspires, mentors, and empowers youth across Africa — building a generation of faith-driven leaders.</p>
        </div>
        <div className={styles.cards}>
          {cards.map((c, i) => (
            <div key={c.title} className={styles.card} style={{ animationDelay: `${i * 0.15}s` }}>
              <div className={styles.imgWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.img} alt={c.title} />
              </div>
              <div className={styles.body}>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
