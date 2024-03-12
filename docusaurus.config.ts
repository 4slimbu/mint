import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Mint Docs',
  tagline: 'Collective api documentations for Mint Projects',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://4slimbu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mintdocs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '4slimbu', // Usually your GitHub org/user name.
  projectName: 'mintdocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  // plugins: [
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'mpay',
  //       path: 'mpay',
  //       routeBasePath: 'mpay',
  //       sidebarPath: 'sidebars.ts',
  //     },
  //   ],
  //   [
  //     '@docusaurus/plugin-content-docs',
  //     {
  //       id: 'eft',
  //       path: 'eft',
  //       routeBasePath: 'eft',
  //       sidebarPath: 'sidebars.ts',
  //     },
  //   ],
  // ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: '',
      logo: {
        alt: 'Mint Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mpaySidebar',
          position: 'left',
          label: 'Mint mPay API',
        },
        {
          type: 'docSidebar',
          sidebarId: 'eftSidebar',
          position: 'left',
          label: 'Mint EFT API',
        },
        {
          type: 'docSidebar',
          sidebarId: 'kuggarSidebar',
          position: 'left',
          label: 'Kuggar API',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} Mint`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
