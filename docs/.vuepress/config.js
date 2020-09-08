module.exports = {
  dest: 'loader-vuejs',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Vue Loader 中文文档',
      description: '处理 Vue 单文件组件的 Webpack loader，Vue Loader 中文文档，Vue Loader 国内镜像，Vue Loader 中文网，Vue Loader 官网打不开，Vue Loader 官网打开慢'
    },
    '/en': {
      lang: 'en-US',
      title: 'Vue Loader',
      description: 'Webpack loader for single-file Vue components'
    },
    '/ru/': {
      lang: 'ru',
      title: 'Vue Loader',
      description: 'Webpack loader для однофайловых компонентов Vue'
    }
  },
  serviceWorker: true,
  theme: 'docmirror',
  themeConfig: {
    algolia: {
      apiKey: '3462ea4a6a56b94eba5b01497d6eb627',
      indexName: 'vue-loader'
    },
    repo: 'vuejs/vue-loader',
    docsDir: 'docs',
    serviceWorker: {
      updatePop: true
    },
    locales: {
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          {
            text: 'Guide',
            link: '/guide/'
          },
          {
            text: 'SFC Spec',
            link: '/spec.html'
          },
          {
            text: 'Options Reference',
            link: '/options.html'
          },
          {
            text: 'Migrating from v14',
            link: '/migrating.md'
          }
        ],
        sidebar: [
          '/',
          '/guide/',
          '/guide/asset-url',
          '/guide/pre-processors',
          '/guide/scoped-css',
          '/guide/css-modules',
          '/guide/hot-reload',
          '/guide/functional',
          '/guide/custom-blocks',
          '/guide/extract-css',
          '/guide/linting',
          '/guide/testing'
        ]
      },
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: '单文件组件规范',
            link: '/zh/spec.html'
          },
          {
            text: '选项参考',
            link: '/zh/options.html'
          },
          {
            text: '如何从 v14 迁移',
            link: '/zh/migrating.md'
          }
        ],
        sidebar: [
          '/zh/',
          '/zh/guide/',
          '/zh/guide/asset-url',
          '/zh/guide/pre-processors',
          '/zh/guide/scoped-css',
          '/zh/guide/css-modules',
          '/zh/guide/hot-reload',
          '/zh/guide/functional',
          '/zh/guide/custom-blocks',
          '/zh/guide/extract-css',
          '/zh/guide/linting',
          '/zh/guide/testing'
        ]
      },
      '/ru/': {
        label: 'Русский',
        selectText: 'Languages',
        editLinkText: 'Изменить эту страницу на GitHub',
        nav: [
          {
            text: 'Руководство',
            link: '/ru/guide/'
          },
          {
            text: 'Однофайловые компоненты',
            link: '/ru/spec.html'
          },
          {
            text: 'Настройки',
            link: '/ru/options.html'
          },
          {
            text: 'Миграция с версии v14',
            link: '/ru/migrating.md'
          }
        ],
        sidebar: [
          '/ru/',
          '/ru/guide/',
          '/ru/guide/asset-url',
          '/ru/guide/pre-processors',
          '/ru/guide/scoped-css',
          '/ru/guide/css-modules',
          '/ru/guide/hot-reload',
          '/ru/guide/functional',
          '/ru/guide/custom-blocks',
          '/ru/guide/extract-css',
          '/ru/guide/linting',
          '/ru/guide/testing'
        ]
      }
    }
  }
}
