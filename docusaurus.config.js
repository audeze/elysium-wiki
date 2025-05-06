// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ElysiumSMP Wiki',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './config/sidebars.js',
          editUrl:
            'https://github.com/audeze/elysium-wiki.git',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/Logo_low.png',
      navbar: {
        title: 'ElysiumSMP WIki',
        logo: {
          alt: 'ElysiumSMP Logo',
          src: 'img/Logo_low.png',
        },
        items: [
          {
            label: 'Tutorial',
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
          },
          {
            label: 'Commands',
            type: 'docSidebar',
            sidebarId: 'commandsSidebar',
            position: 'left',
          },
          {
            href: 'https://discord.gg/HnNAGNKuqP',
            label: 'Discord',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Tutorial',
                to: 'tutorial/firsttutorial',
              },
              {
                label: 'Commands',
                to: 'commands/testcommand',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/HnNAGNKuqP',
              },
              {
                label: 'Website',
                href: 'https://elysiumsmp.net/',
              },
              {
                label: 'Store',
                href: 'https://store.elysiumsmp.net/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Elysium Wiki, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
    themes: [
      [
          require.resolve('@easyops-cn/docusaurus-search-local'),
        ({
          indexBlog: false,
          hashed: true,
          docsRouteBasePath: "/"
        })
      ],
    ]
};

export default config;
