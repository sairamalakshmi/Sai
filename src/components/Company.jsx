import { atikes } from '../data/profile';
import { ExternalLinkIcon } from './Icons';
import AtikesMark from './AtikesMark';

export default function Company() {
  return (
    <section className="section" id="atikes" aria-labelledby="atikes-heading">
      <div className="page">
        <p className="eyebrow">Company</p>
        <h2 className="section-title" id="atikes-heading">
          About ATIKES
        </h2>

        <div className="card atikes-card">
          <div className="atikes-card-head">
            <AtikesMark size={34} />
            <div>
              <p className="atikes-name">{atikes.name}</p>
              <p className="atikes-tagline">{atikes.tagline}</p>
            </div>
          </div>

          <p className="atikes-desc">{atikes.description}</p>

          <div className="pill-group">
            {atikes.focusAreas.map((area) => (
              <span className="pill" key={area}>
                {area}
              </span>
            ))}
          </div>

          <a
            href={atikes.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-block atikes-cta"
          >
            Visit ATIKES Website
            <ExternalLinkIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
