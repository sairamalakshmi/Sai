/**
 * PROFILE DATA
 * ------------------------------------------------------------------
 * Every value here is either placeholder personal content (marked
 * "// TODO") or a professional summary of ATIKES's public positioning.
 * Update the TODOs before publishing — nothing else in the codebase
 * needs to change.
 * ------------------------------------------------------------------
 */

export const profile = {
  name: 'Diddi Sai Rama Lakshmi', // TODO: your full name
  designation: 'ISC Trainee', // TODO
  company: 'ATIKES',
  intro:
    'A dedicated IAM trainee building practical expertise in SailPoint Identity Security Cloud, Identity Governance, access management, and identity security.', // TODO
  location: 'Hyderabad,India', // TODO
  photo: '/profile-photo.jpg', // TODO: replace with your professional headshot (square, min 500x500px)
  email: 'sai@atikes.com', // TODO
};

export const atikes = {
  name: 'ATIKES',
  logo: '/atikes-logo.png',
  tagline: 'Secure. Streamline. Automate. Govern.',
  description:
    'ATIKES is a global Identity & Access Management services firm helping enterprises automate onboarding and offboarding, enforce least-privilege access, and stay audit-ready across cloud and SaaS ecosystems.',
  focusAreas: [
    'Identity Lifecycle Management',
    'Access Governance',
    'Role-Based Access Control',
    'Privileged Access Management',
    'Cloud & SaaS Integrations',
    'Compliance & Audit Readiness',
    'IAM Automation',
  ],
  website: 'https://atikes.com/',
  linkedin: 'https://www.linkedin.com/company/atikes/',
};

export const about = {
  bio: 'A dedicated ISC (Identity Security Cloud) trainee currently learning SailPoint Identity Security Cloud. Eager to gain practical knowledge of identity governance, access management, and security best practices. Committed to enhancing technical skills and building a successful career in identity and cybersecurity.', // TODO
};

export const expertise = [
  { title: 'SailPoint ISC', desc: 'Identity Security Cloud & Identity Governance.' },
  { title: 'Identity Governance', desc: 'Access, roles, entitlements & governance.' },
  { title: 'Identity Lifecycle', desc: 'Joiner, mover & leaver processes.' },
  { title: 'Directory Services', desc: 'LDAP/OpenLDAP & directory integration' },
  { title: 'IAM Platforms', desc: 'SailPoint / midPoint' },
  { title: 'IAM & Cybersecurity', desc: 'Identity security & access management' },
]; // TODO: adjust to reflect your actual expertise

export const technologies = [
  'SailPoint',
  'midPoint',
  'OpenLDAP',
  'Microsoft Azure',
  'REST APIs',
  'Java',
  'Python',
  'SQL',
  'React',
]; // TODO: keep only the technologies you actually provide

export const social = {
  linkedin: 'https://www.linkedin.com/in/diddi-sairamalakshmi-837b0628a/', // TODO
  email: 'mailto:diddisairamalakshmi@gmail.com', // TODO
  website: atikes.website,
};

export const vcard = {
  firstName: 'Sai Rama Lakshmi', // TODO
  lastName: 'Diddi', // TODO
  org: atikes.name,
  title: profile.designation,
  email: profile.email,
  phone: profile.phone,
  website: atikes.website,
  linkedin: social.linkedin,
};
