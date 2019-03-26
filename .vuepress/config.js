module.exports = {
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicons/apple-icon-57x57.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicons/apple-icon-60x60.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicons/apple-icon-72x72.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicons/apple-icon-76x76.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicons/apple-icon-114x114.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicons/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicons/apple-icon-144x144.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicons/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-icon-180x180.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicons/android-icon-192x192.png', sizes: '192x192' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicons/favicon-32x32.png', sizes: '32x32' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicons/favicon-16x16.png', sizes: '16x16' }],
    ['link', { rel: 'manifest', href: '/favicons/manifest.json' }],
    ['link', { rel: 'shortcut icon', href: '/favicons/favicon.ico' }],
    ['meta', { name: 'msapplication-config', content: '/favicons/browserconfig.xml' }],
    ['meta', { name: 'theme-color', content: '#151515' }],
  ],
  base: '/',
  title: 'Guilds',
  description: 'The easiest way to make the most out of RPG on your servers.',
  themeConfig: {
    logo: '/logo-nav.jpg',
    nav: [
      { text: 'Spigot', link: 'https://www.spigotmc.org/resources/48920/' },
      { text: 'Discord', link: 'https://glaremasters.me/discord' },
      { text: 'GitHub', link: 'https://github.com/guilds-plugin' },
    ],
    sidebar: {
      '/': [
        {
          title: 'Project Introduction',
          collapsable: false,
          children: [
            '/project/introduction.md',
            '/project/about.md',
          ]
        },
        {
          title: 'Setup',
          collapsable: false,
          children: [
            '/install/install.md',
            '/install/configuration.md',
          ]
        }
      ],
    },
  },
}