/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Inforiver Documentation',
  tagline: 'Low code/No code Analytics Custom Visual',
  url: 'https://github.com/visualbis/inforiverdocs/',
  baseUrl: '/inforiver/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/inforiver-logo.svg',
  organizationName: 'visualbis', // Usually your GitHub org/user name.
  projectName: 'inforiverdocs', // Usually your repo name.
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: 'Inforiver',
      logo: {
        alt: 'Inforiver Documentation',
        src: 'img/inforiver-logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'references/formula-list',
          position: 'left',
          label: 'Functions',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} VisualBI, Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
