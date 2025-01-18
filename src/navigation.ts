import { rssSchema } from '@astrojs/rss';
import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';
import { getHomePermalink } from '~/utils/permalinks';

export const headerData = {
  links:[
    { text: 'Guide', href: getHomePermalink()+'#guide' },
    { text: 'Features', href: getHomePermalink()+'#features' },
    { text: 'FAQ', href: getHomePermalink()+'#faq' },
  ],
  actions:[
    {
      text: 'Download',
      href: getHomePermalink()+'#download',
    }
  ],
  position: "left",
  };

export const footerData = {
  links: [
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://aboutsvc.com/"> AboutService</a> · All rights reserved.
  `,
};
