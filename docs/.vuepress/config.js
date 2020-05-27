module.exports = {
  title: "hehuiting's blog",
  description: "人生苦短，怎么灿烂怎么闪",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/logo.jpg" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: "/", // 这是部署到github相关的配置
  markdown: {
    lineNumbers: true, // 代码块显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      // { text: "主页", link: "/" },
      {
        text: "📝前端",
        link: "/frontEnd/",
      },
      {
        text: "📖精进",
        link: "/life/",
      },
    ],
    sidebar: {
      "/frontEnd/": [
        {
          title: "JS基础",
          collapsable: false, // 可折叠
          children: ["/frontEnd/js/原型.html", "/frontEnd/js/数组.html"],
        },
        {
          title: "Vue", // 侧边栏名称
          collapsable: false, // 可折叠
          children: [
            "/frontEnd/vue/编码规范.html",
            "/frontEnd/vue/webpack与vue-cli.html",
          ],
        },
      ],
      "/life/": [
        {
          title: "早课",
          collapsable: false, // 可折叠
          children: ["/life/morning/day1.html"],
        },
        {
          title: "晚间",
          collapsable: false, // 可折叠
          children: ["/life/night/quotations.html"],
        },
      ],
    }, // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    // navbar: true,
    // displayAllHeaders: true, // 默认值：false
    // activeHeaderLinks: false, // 设置导航是否随标题改变，默认值：true
    lastUpdated: "Last Updated", // string | boolean
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: "hehuiting/vuepressBlog",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "🔗GitHub",

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "hehuiting/vuepressBlog",
    // 假如文档不是放在仓库的根目录下：
    docsDir: "docs",
    // 假如文档放在一个特定的分支下：
    docsBranch: "master",
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: "在GitHub上编辑此页",

    // smoothScroll: true,
    // serviceWorker: true,
  },
};
