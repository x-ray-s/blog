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
            const dayjs = require('dayjs')
            let prevTime, nextTime
            if (prev.frontmatter.date && next.frontmatter.date) {
              prevTime = prev.frontmatter.date
              nextTime = next.frontmatter.date
            } else {
              prevTime = prev.path.match(/\d{4}.\d{2}.\d{2}/gi)?.[0]
              nextTime = next.path.match(/\d{4}.\d{2}.\d{2}/gi)?.[0]
            }
            return dayjs(prevTime) - dayjs(nextTime) > 0 ? -1 : 1
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
