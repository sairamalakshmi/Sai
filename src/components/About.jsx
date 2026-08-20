import { about } from '../data/profile';

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="page">
        <p className="eyebrow">Profile</p>
        <h2 className="section-title" id="about-heading">
          About Me
        </h2>
        <p className="about-bio">{about.bio}</p>
      </div>
    </section>
  );
}
