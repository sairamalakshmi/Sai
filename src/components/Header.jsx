import { atikes } from '../data/profile';
import AtikesMark from './AtikesMark';

export default function Header() {
  return (
    <header className="site-header">
      <div className="page site-header-inner">
        <a
          href={atikes.website}
          target="_blank"
          rel="noopener noreferrer"
          className="brand-mark"
          aria-label="ATIKES website"
        >
          <AtikesMark size={30} />
          <span className="brand-name">ATIKES</span>
        </a>

      </div>
    </header>
  );
}
