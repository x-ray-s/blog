module.exports = {
  title: 'Halo world',
  theme: '@vuepress/blog',
  themeConfig: {
    nav: [
      { text: 'Blogs', link: '/' },
      { text: 'Daily', link: '/daily/' },
      { text: 'Notes', link: '/notes/' },
      { text: 'Interview Question', link: '/daily-interview-question/' },
      { text: 'Github', link: 'https://github.com/x-ray-s' },
      // { text: 'About', link: '/about' },
    ],
  },
  plugins: [
    [require('./voice')],
    ['@vuepress/nprogress'],
    [
      '@vuepress/medium-zoom',
      {
        selector: '#vuepress-theme-blog__post-layout :not(a) > img',
      },
    ],
    [
      '@vuepress/blog',
      {
        directories: [
          {
            id: 'blogs',
            dirname: 'blogs',
            path: '/',
          },
          {
            id: 'daily',
            dirname: 'daily',
            path: '/daily/',
          },
          {
            id: 'notes',
            dirname: 'notes',
            path: '/notes/',
          },
          {
            id: 'interview',
            dirname: 'daily-interview-question',
            path: '/daily-interview-question/',
          },
        ],
        globalPagination: {
          sorter: (prev, next) => {
            return -1
          },
        },
      },
    ],
  ],
  markdown: {
    extendMarkdown: (md) => {
      md.use(require('markdown-it-imsize')).use(require('markdown-it-task-lists'))
    },
  },
}
