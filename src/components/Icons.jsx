// Minimal hand-rolled icon set — keeps the project dependency-free.
// All icons are 20x20, 1.6px stroke, currentColor.

const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export const LinkedInIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <line x1="7.5" y1="9.5" x2="7.5" y2="17" />
    <circle cx="7.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
    <path d="M11.5 17v-4.5a2.5 2.5 0 0 1 5 0V17" />
    <line x1="11.5" y1="9.5" x2="11.5" y2="17" />
  </svg>
);

export const GitHubIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
  </svg>
);

export const PortfolioIcon = (props) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3c2.4 2.5 3.6 5.7 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.7-3.6-9S9.6 5.5 12 3Z" />
  </svg>
);

export const MailIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m4 6.5 8 6 8-6" />
  </svg>
);

export const BuildingIcon = (props) => (
  <svg {...base} {...props}>
    <rect x="5" y="3" width="14" height="18" rx="1.5" />
    <line x1="9" y1="7" x2="9" y2="7.01" />
    <line x1="12" y1="7" x2="12" y2="7.01" />
    <line x1="15" y1="7" x2="15" y2="7.01" />
    <line x1="9" y1="10.5" x2="9" y2="10.51" />
    <line x1="12" y1="10.5" x2="12" y2="10.51" />
    <line x1="15" y1="10.5" x2="15" y2="10.51" />
    <line x1="9" y1="14" x2="9" y2="14.01" />
    <line x1="12" y1="14" x2="12" y2="14.01" />
    <line x1="15" y1="14" x2="15" y2="14.01" />
    <path d="M10 21v-3.5h4V21" />
  </svg>
);

export const ExternalLinkIcon = (props) => (
  <svg {...base} width={14} height={14} {...props}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

export const DownloadIcon = (props) => (
  <svg {...base} {...props}>
    <path d="M12 4v11" />
    <path d="m7.5 11.5 4.5 4.5 4.5-4.5" />
    <path d="M5 19.5h14" />
  </svg>
);

export const PinIcon = (props) => (
  <svg {...base} width={15} height={15} {...props}>
    <path d="M12 21s-6.5-6.1-6.5-11A6.5 6.5 0 0 1 18.5 10c0 4.9-6.5 11-6.5 11Z" />
    <circle cx="12" cy="10" r="2.2" />
  </svg>
);
