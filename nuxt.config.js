// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image', // 启用完整的@nuxt/image功能
    '@nuxt/content'
  ],

  // 图片优化配置 - 理工科学生专用高质量配置
  image: {
    formats: ['webp', 'jpg', 'png'],
    quality: 85,
    densities: [1, 2],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    // Sharp配置 - 获得最佳图片处理性能
    sharp: {
      // 启用所有Sharp优化选项
    },
    // 预设配置适合摄影作品展示
    presets: {
      hero: {
        modifiers: {
          format: 'webp',
          quality: 90,
          width: 2560,
          height: 1440
        }
      },
      project: {
        modifiers: {
          format: 'webp', 
          quality: 85,
          width: 800,
          height: 600
        }
      },
      photo: {
        modifiers: {
          format: 'webp',
          quality: 90,
          width: 1200,
          height: 800
        }
      },
      thumbnail: {
        modifiers: {
          format: 'webp',
          quality: 80,
          width: 400,
          height: 300
        }
      }
    }
  },

  // SEO配置 - 理工科学生专用
  app: {
    head: {
      title: '您的姓名 - 理工科学生个人网站',
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: '光电专业理工科大学生个人网站，展示技术项目、竞赛作品和摄影创作' 
        },
        { name: 'keywords', content: '理工科,单片机,STM32,软件开发,摄影,Vue.js,项目展示' },
        { property: 'og:title', content: '理工科学生个人网站' },
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