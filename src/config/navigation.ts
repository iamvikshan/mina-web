/**
 * Navigation Configuration
 * ========================
 * Centralized navigation links for header and footer.
 * Uses permalinks.ts for URL generation.
 */

import { URLS } from './site';
import { getInviteUrl, getSocialUrl } from './permalinks';

export interface NavLink {
  name: string;
  url: string;
  target?: '_blank';
  rel?: string;
}

export interface FooterSection {
  section: string;
  links: NavLink[];
}

export interface SocialLinks {
  discord: string;
  x: string;
  github: string;
}

/**
 * Navigation links for the header navbar
 */
export const navBarLinks: NavLink[] = [
  { name: 'Home', url: '/' },
  { name: 'Docs', url: URLS.docs, target: '_blank' },
];

/**
 * Footer navigation sections
 */
export const footerLinks: FooterSection[] = [
  {
    section: 'Arsenal',
    links: [
      {
        name: 'Documentation',
        url: URLS.docs,
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      {
        name: 'Recruit Amina',
        url: getInviteUrl(),
      },
      { name: 'Command Center', url: '/dash' },
    ],
  },
  {
    section: 'Alliance',
    links: [
      {
        name: 'GitHub',
        url: URLS.github,
        rel: 'noopener noreferrer',
        target: '_blank',
      },
      {
        name: 'Support Server',
        url: URLS.support,
        rel: 'noopener noreferrer',
        target: '_blank',
      },
    ],
  },
];

/**
 * Social media links
 */
export const socialLinks: SocialLinks = {
  discord: getSocialUrl('discord'),
  x: getSocialUrl('x'),
  github: getSocialUrl('github'),
};

/**
 * Get all navigation data (for components that need everything)
 */
export function getNavigation() {
  return {
    navBarLinks,
    footerLinks,
    socialLinks,
  };
}
