// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image', // 启用完整的@nuxt/image功能
    '@nuxt/content'
  ],

  // 图片优化配置 - 简化版本修复加载问题
  image: {
    // 基础配置
    quality: 85,
    format: ['webp', 'jpg'],

    // 预设配置
    presets: {
      photo: {
        modifiers: {
          format: 'webp',
          quality: 90,
          fit: 'inside'
        }
      },
      lightbox: {
        modifiers: {
          format: 'webp',
          quality: 95,
          fit: 'inside'
        }
      },
      project: {
        modifiers: {
          format: 'webp',
          quality: 85,
          fit: 'inside'
        }
      },
      hero: {
        modifiers: {
          format: 'webp',
          quality: 90,
          fit: 'cover'
        }
      }
    }
  },

  // SEO配置
  app: {
    head: {
      title: '依木然的个人网站',
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: '依木然的个人网站，展示技术项目、竞赛作品和摄影创作'
        },
        { name: 'keywords', content: '理工科,单片机,STM32,软件开发,摄影,Vue.js,项目展示' },
        { property: 'og:title', content: '依木然的个人网站' },
        { property: 'og:description', content: '专注技术项目开发和摄影创作的理工科学生' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: '/images/og-image.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preload', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600&family=Kalam:wght@300;400&family=Ma+Shan+Zheng&family=ZCOOL+XiaoWei&display=swap', as: 'style' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600&family=Kalam:wght@300;400&family=Ma+Shan+Zheng&family=ZCOOL+XiaoWei&display=swap' }
      ]
    }
  },

  // CSS配置
  css: ['~/assets/css/main.css'],

  // 组件自动导入
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  // 添加兼容性日期
  compatibilityDate: '2025-07-28'
}
