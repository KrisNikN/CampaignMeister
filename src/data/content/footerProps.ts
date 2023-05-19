import { FooterProps } from 'collections';

export const footerProps: FooterProps = {
  image: {
    src: '/imgs/logo.png',
    width: 193,
    height: 24.27,
    alt: 'logo',
  },
  quoteDestop:
    'Boost your campaign performance with over 25% by fixing your campaign data',
  quoteMobile: 'The art of Campaign Optimisation',

  columns: [
    {
      title: 'Navigation',
      links: [
        { text: 'The art of optimising', href: '/' },
        { text: 'Boost your campaigns', href: '/' },
        { text: 'Start optimising now', href: '/' },
        { text: 'CampaignMeisters building blocks', href: '/' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: '/' },
        { text: 'Cookie Policy', href: '/' },
        { text: 'Terms & Conditions', href: '/' },
      ],
    },
  ],

  /*navigationLiksDesktop: [
    { text: 'The art of optimising', href: '#' },
    { text: 'Boost your campaigns', href: '#' },
    { text: 'Start optimising now', href: '#' },
    { text: 'CampaignMeisters building blocks', href: '#' },
  ],
  navigationLiksMobile: [
    { text: 'The art of optimising', href: '#' },
    { text: 'Boost your campaigns', href: '#' },
    { text: 'Start optimising now', href: '#' },
  ],
  legalLinks: [
    { text: 'Privacy Policy', href: '#' },
    { text: 'Cookie Policy', href: '#' },
    { text: 'Terms & Conditions', href: '#' },
  ],*/
  copyRightDesktop:
    '© 2022, CampaignMeister is a product of <a href="#" style="color: #FCD130;border-bottom: 1px solid #FCD130; color: #FCD130; font-size: 12px; font-weight: 500;"> Human Data Associates </a> ',
  copyRightMobile:
    'CampaignMeister is a product of <br /> <a href="#"> <span style="color: #FCD130;border-bottom: 1px solid #FCD130; color: #FCD130; font-size: 12px; font-weight: 500;"> Human Data Associates</span> </a> <br /> <br />© 2022',
};
