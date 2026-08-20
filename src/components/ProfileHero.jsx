import { profile, social } from '../data/profile';
import { LinkedInIcon, PinIcon } from './Icons';
import SaveContact from './SaveContact';

export default function ProfileHero() {
  return (
    <section className="hero">
      <div className="page hero-inner">
        <div className="hero-photo-frame">
          <img
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width="112"
            height="112"
          />
        </div>

        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-role">
          {profile.designation}
          <span className="hero-at">
            {' '}
            at <strong>{profile.company}</strong>
          </span>
        </p>

        <p className="hero-intro">{profile.intro}</p>

        <p className="hero-location">
          <PinIcon /> {profile.location}
        </p>

        <div className="btn-row hero-actions">
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <LinkedInIcon width={16} height={16} />
            LinkedIn
          </a>
          <SaveContact />
        </div>
      </div>
    </section>
  );
}
