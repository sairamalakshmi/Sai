import { social } from '../data/profile';
import { LinkedInIcon, GitHubIcon, MailIcon } from './Icons';
import SaveContact from './SaveContact';

export default function Connect() {
  return (
    <section className="section connect" id="connect" aria-labelledby="connect-heading">
      <div className="page">
        <p className="eyebrow">Networking</p>
        <h2 className="section-title" id="connect-heading">
          Let's Connect
        </h2>
        <p className="section-sub">
          Interested in IAM, Identity Governance or enterprise security? Let's connect.
        </p>

        <div className="link-grid">
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="link-tile"
          >
            <LinkedInIcon className="icon" />
            <span className="label">LinkedIn</span>
          </a>
          <a href={social.email} className="link-tile">
            <MailIcon className="icon" />
            <span className="label">Email</span>
          </a>
          <SaveContact variant="tile" />
        </div>
      </div>
    </section>
  );
}
