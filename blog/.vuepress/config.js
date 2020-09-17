const path = require("path");

module.exports = {
  title: "Colaboradados",
  description:
    "Somos uma iniciativa colaborativa que busca reunir, demonstrar, investigar e monitorar o acesso à informação no Brasil.",
  theme: "@vuepress/theme-blog", // OR shortcut: @vuepress/blog
  permalink: "/:regular",
  locales: {
    "/": {
      lang: "pt-BR",
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./theme/components"),
        "@helpers": path.resolve(__dirname, "./theme/helpers"),
        "@utils": path.resolve(__dirname, "./theme/utils"),
      },
    },
  },
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions;
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: "Bases de Dados",
        link: "/bases/",
        target: "_self",
      },
      {
        text: "Podcast",
        link: "/podcast/",
        target: "_self",
      },
      {
        text: "Newsletter",
        link: "/newsletter/",
        target: "_self",
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/ulivz",
        },
        {
          type: "twitter",
          link: "https://twitter.com/_ulivz",
        },
      ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US",
        },
        {
          text: "MIT Licensed | Copyright © 2018-present Vue.js",
          link: "",
        },
      ],
    },
  },
};
