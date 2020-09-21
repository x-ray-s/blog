const path = require('path')
const blogs = path.resolve('.', './docs/api/blogs.json')
const daily = path.resolve('.', './docs/api/daily.json')
const notes = path.resolve('.', './docs/api/notes.json')
const interview = path.resolve('.', './docs/api/daily-interview-question.json')

delete require.cache[blogs]
delete require.cache[daily]
delete require.cache[notes]
delete require.cache[interview]

function getResult(json, key) {
  const { list } = require(json)
  const result = list
    .filter(item => !/index\.md$/.test(item))
    .map(item => `/${key}/` + item.replace(/\.md$/, '.html'))
    .reverse()
  result.unshift('')
  return result
}
module.exports = {
  title: 'Halo world',
  themeConfig: {
    nav: [
      { text: 'Blogs', link: '/blogs/' },
      { text: 'Daily', link: '/daily/' },
      { text: 'Notes', link: '/notes/' },
      { text: 'Interview Question', link: '/daily-interview-question/' },
      { text: 'Share', link: '/share/' },
      { text: 'Github', link: 'https://github.com/x-ray-s' },
    ],
    sidebar: {
      '/blogs/': getResult(blogs, 'blogs'),
      '/daily/': getResult(daily, 'daily'),
      '/notes/': getResult(notes, 'notes'),
      '/daily-interview-question/': getResult(interview, 'daily-interview-question'),
    },
  },
  plugins: [require('./voice'), '@vuepress/last-updated'],
}
