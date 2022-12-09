const fs = require('fs-extra')
const util = require('util')
const path = require('path')
const readdir = util.promisify(fs.readdir)

async function postApi(_path) {
  const posts = await readdir(path.resolve('./', `./docs/${_path}`))
  const markdowns = posts.filter((fs) => /\.md$/.test(fs))
  const data = {
    list: markdowns,
  }
  fs.writeFile(path.resolve('./', `./docs/api/${_path}.json`), JSON.stringify(data), (err) => {
    if (err) {
      throw err
    }
  })
}
postApi('blogs')
postApi('daily')
postApi('notes')
postApi('daily-interview-question')
