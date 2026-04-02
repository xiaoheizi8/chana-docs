import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "ChaNa Registry",
  description: "超高性能服务注册中心 - 超越Consul/Zookeeper/Eureka/Nacos",
  base: "/chana-docs/",
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  themeConfig: {
    siteTitle: 'ChaNa Registry',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/guide/getting-started' },
      { text: 'API', link: '/api/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指南',
          items: [
            { text: '快速开始', link: '/guide/getting-started' },
            { text: '服务端部署', link: '/guide/server' },
            { text: '客户端集成', link: '/guide/client' },
          ]
        }
      ],
      '/api/': [
        {
          text: 'REST API',
          items: [
            { text: '服务管理', link: '/api/services' },
            { text: '监控管理', link: '/api/monitoring' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/xiaoheizi8/ChaNa' }
    ],
    footer: {
      message: 'MIT License',
      copyright: 'Copyright © 2026 一朝风月'
    }
  }
})
