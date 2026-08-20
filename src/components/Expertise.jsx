import { expertise } from '../data/profile';

export default function Expertise() {
  return (
    <section className="section" id="expertise" aria-labelledby="expertise-heading">
      <div className="page">
        <p className="eyebrow">Learning</p>
        <h2 className="section-title" id="expertise-heading">
          Areas of Learning
        </h2>

        <div className="expertise-grid">
          {expertise.map((item) => (
            <div className="expertise-card" key={item.title}>
              <p className="expertise-title">{item.title}</p>
              <p className="expertise-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
