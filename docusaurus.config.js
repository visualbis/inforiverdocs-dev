/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Inforiver Documentation',
  tagline: 'Low code/No code Analytics Custom Visual',
  url: 'http://docs.inforiver.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/inforiver-logo.svg',
  organizationName: process.env.CIRCLE_PROJECT_USERNAME || "visualbis", // Usually your GitHub org/user name.
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
          docId: 'formula-list',
          position: 'left',
          label: 'Functions',
        },
        {
          type: 'doc',
          docId: 'writeback',
          position: 'left',
          label: 'Docs',
        },
        {
          
          label: 'Add-ons',
          position: 'left',
          items: [
            {
              to: 'writeback/overview',
              docId: 'writeback/overview',
              label: 'Writeback',
              activeSidebarClassName: 'navbar__link--active',
            },
          ]
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} VisualBI, Inc.`,
    },
  },
  plugins: [require.resolve('docusaurus-lunr-search')],
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
