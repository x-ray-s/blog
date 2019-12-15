const path = require("path");
const blogs = path.resolve(".", "./docs/api/blogs.json");
const daily = path.resolve(".", "./docs/api/daily.json");
const notes = path.resolve(".", "./docs/api/notes.json");
delete require.cache[blogs];
delete require.cache[daily];
function getResult(json, key) {
  const { list } = require(json);
  const result = list
    .filter(item => !/index\.md$/.test(item))
    .map(item => `/${key}/` + item.replace(/\.md$/, ".html"))
    .reverse();
  result.unshift("");
  return result;
}
module.exports = {
  title: "Halo world",
  themeConfig: {
    nav: [
      { text: "Blogs", link: "/blogs/" },
      { text: "Daily", link: "/daily/" },
      { text: "Notes", link: "/notes/" },
      { text: "Github", link: "https://github.com/KennyWho" }
    ],
    sidebar: {
      "/blogs/": getResult(blogs, "blogs"),
      "/daily/": getResult(daily, "daily"),
      "/notes/": getResult(notes, "notes")
    }
  },
  plugins: [
    require('./voice')
  ]
};
