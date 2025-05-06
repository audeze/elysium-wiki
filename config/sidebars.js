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
      type: 'category',
      collapsed: false,
      label: 'Tutorial',
      link: {
        type: 'doc',
        id: 'tutorial/index'
      },
      items: [
        {
          type: 'doc',
          label: 'first tutorial',
          id: 'tutorial/firsttutorial',
        },
      ],
    },
  ],
  commandsSidebar: [
      {
        type: 'category',
        collapsed: false,
        label: 'Commands',
        link: {
          type: 'doc',
          id: 'commands/index'
        },
        items: [
          {
            type: 'doc',
            label: 'Test command',
            id: 'commands/testcommand',
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
