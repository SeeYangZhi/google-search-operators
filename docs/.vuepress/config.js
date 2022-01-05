module.exports = {
  base: '/google-search-operators/',
  head: [['link', { rel: 'icon', href: 'assets/images/logo.svg' }]],
  lang: 'en-US', // this will be set as the lang attribute on <html>
  title: 'Google Search Operators',
  description:
    'This is an archive of website links, tools and programs that I find useful or interesting over the years of my software engineer journey.',
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: 'assets/images/logo.svg',
    darkMode: true,
    sidebar: 'false',
  },
};
