import { vcard } from '../data/profile';
import { downloadVCard } from '../utils/generateVCard';
import { DownloadIcon } from './Icons';

export default function SaveContact({ variant = 'button', className = '' }) {
  const handleClick = () => downloadVCard(vcard);

  if (variant === 'tile') {
    return (
      <button type="button" className={`link-tile link-tile-btn ${className}`} onClick={handleClick}>
        <DownloadIcon className="icon" />
        <span className="label">Save My Contact</span>
      </button>
    );
  }

  return (
    <button type="button" className={`btn btn-secondary ${className}`} onClick={handleClick}>
      <DownloadIcon width={16} height={16} />
      Save Contact
    </button>
  );
}
