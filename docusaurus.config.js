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
      logo: {
        alt: 'Inforiver Docs',
        src: 'img/inforiver-logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'learningpaths/ExportandImport',
          position: 'left',
          label: 'Learning Path',
        },
        {
          type: 'doc',
          docId: 'notes/Notes',
          position: 'left',
          label: 'Annotation and Notes',
        },
        {
          type: 'doc',
          docId: 'build/Templates',
          position: 'left',
          label: 'Build',
        },
        {
          type: 'doc',
          docId: 'visual/Insert row',
          position: 'left',
          label: 'Visual Calculations'
        },
        {
          type: 'doc',
          docId: 'analyze/Conditional Formatting',
          position: 'left',
          label: 'Analyze'
        },  
        {          
          label: 'Display',
          position: 'left',
          items: [
            {
              to: 'settings/backuprestore-config',
              docId: 'settings/backuprestore-config',
              label: 'Backup / Restore Config',
              activeSidebarClassName: 'navbar__link--active',
            },
            {
              to: 'settings/display-settings---general',
              docId: 'settings/display-settings---general',
              label: 'Display Settings - General',
              activeSidebarClassName: 'navbar__link--active',
            },
            {
              to: 'settings/display-settings---hierarchy',
              docId: 'settings/display-settings---hierarchy',
              label: 'Display Settings - Hierarchy',
              activeSidebarClassName: 'navbar__link--active',
            },
            {
              to: 'settings/display-settings---numbers',
              docId: 'settings/display-settings---numbers',
              label: 'Display Settings - Numbers',
              activeSidebarClassName: 'navbar__link--active',
            },
          ]
        },
        {
          type: 'doc',
          docId: 'enterprise/Commenting',
          position: 'left',
          label: 'Enterprise',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Lumel, Inc.`,
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
