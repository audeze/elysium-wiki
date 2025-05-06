// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
 const sidebars = {
  mainSidebar: [
    {
      type: 'doc',
      label: 'Home',
      id: 'index'
    },
    {
      type: 'doc',
      label: 'Frequently Asked Questions',
      id: 'faq',
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Installation',
      link: {
        type: 'doc',
        id: 'installation/index'
      },
      items: [
        {
          type: 'doc',
          label: 'Initial Setup',
          id: 'installation/initial-setup',
        },
        {
          type: 'doc',
          label: 'Sync Setup',
          id: 'installation/sync-setup',
        },
        {
          type: 'doc',
          label: 'Voice Setup',
          id: 'installation/voice-setup',
        },
        {
          type: 'doc',
          label: 'Link to Join Setup',
          id: 'installation/link-to-join-setup',
        },
      ],
    },
    {
      type: 'category',
      collapsed: false,
      label: 'Configs',
      items: [
        {
          label: 'alerts.yml',
          id: 'alerts',
          type: 'doc'
        },
        {
          label: 'config.yml',
          id: 'config',
          type: 'doc'
        },
        {
          label: 'linking.yml',
          id: 'linking',
          type: 'doc'
        },
        {
          label: 'messages.yml',
          id: 'messages',
          type: 'doc'
        },
        {
          label: 'synchronization.yml',
          id: 'synchronization',
          type: 'doc'
        },
        {
          label: 'voice.yml',
          id: 'voice',
          type: 'doc'
        },
      ],
    },
  ],
  // By default, Docusaurus generates a sidebar from the docs folder structure

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
