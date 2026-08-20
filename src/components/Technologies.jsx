import { technologies } from '../data/profile';

export default function Technologies() {
  return (
    <section className="section" id="technologies" aria-labelledby="tech-heading">
      <div className="page">
        <p className="eyebrow">Technology</p>
        <h2 className="section-title" id="tech-heading">
          Technology Experience
        </h2>

        <div className="pill-group">
          {technologies.map((tech) => (
            <span className="pill" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
