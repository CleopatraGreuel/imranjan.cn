// 摄影作品自动化管理组合式函数
import { ref, onMounted } from 'vue'

export const usePhotography = () => {
  const photoCategories = ref([])
  const loading = ref(true)
  const error = ref(null)

  // 定义摄影作品分类及其照片数据
  const initializePhotography = () => {
    try {
      // 根据实际文件夹结构定义照片分类
      photoCategories.value = [
        {
          id: 'portrait-indoor',
          title: '街头风(室内)',
          description: '室内人像，捕捉自然光影下的真实瞬间',
          photos: [
            // orientation: 'portrait' 9:16
            // orientation: 'landscape' 4:3
            {
              src: '/images/photography/街头风室内/1.webp',
              alt: 'Imran',
              orientation: 'portrait',
              size: 'medium'
            },
            {
              src: '/images/photography/街头风室内/2.webp',
              alt: 'Imran',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/街头风室内/3.webp',
              alt: 'Imran',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/街头风室内/4.webp',
              alt: 'Imran',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/街头风室内/5.webp',
              alt: 'Nabi',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/街头风室内/6.webp',
              alt: 'Imran',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/街头风室内/7.webp',
              alt: 'Rifat',
              orientation: 'landscape',
              size: 'large'
            },
            {
              src: '/images/photography/街头风室内/8.webp',
              alt: 'Jasur',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/街头风室内/9.webp',
              alt: 'Jasur',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/街头风室内/10.webp',
              alt: 'Dilyar',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/街头风室内/11.webp',
              alt: 'Dilyar',
              orientation: 'landscape',
              size: 'large'
            },
            {
              src: '/images/photography/街头风室内/12.webp',
              alt: 'Nabi',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/街头风室内/13.webp',
              alt: 'Imran',
              orientation: 'portrait'
            }
          ]
        },
        {
          id: 'portrait-outdoor',
          title: '街头风(室外)',
          description: '室外街头风人像摄影',
          photos: [
            {
              src: '/images/photography/街头风室外/1.webp',
              alt: 'Jasur',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/街头风室外/2.webp',
              alt: 'Dilyar',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/街头风室外/3.webp',
              alt: 'Dilyar',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/街头风室外/4.webp',
              alt: 'Dilyar',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/街头风室外/5.webp',
              alt: 'Dilyar',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/街头风室外/6.webp',
              alt: 'Dilyar',
              orientation: 'portrait'
            }
          ]
        },
        {
          id: 'night-football',
          title: '夜晚足球场·UESTC',
          description: '夜幕下的足球场，运动与光影的完美结合',
          photos: [
            {
              src: '/images/photography/夜晚足球场/1.webp',
              alt: '夜晚足球场',
              orientation: 'landscape',
              size: 'large'
            },
            {
              src: '/images/photography/夜晚足球场/2.webp',
              alt: '夜晚足球场',
              orientation: 'landscape',
            },
            {
              src: '/images/photography/夜晚足球场/3.webp',
              alt: '夜晚足球场',
              orientation: 'landscape',
            },
            {
              src: '/images/photography/夜晚足球场/4.webp',
              alt: '夜晚足球场',
              orientation: 'landscape'
            },
            {
              src: '/images/photography/夜晚足球场/5.webp',
              alt: '夜晚足球场',
              orientation: 'landscape'
            },
            {
              src: '/images/photography/夜晚足球场/6.webp',
              alt: '夜晚足球场',
              orientation: 'landscape'
            },
            {
              src: '/images/photography/夜晚足球场/7.webp',
              alt: '夜晚足球场',
              orientation: 'landscape'
            },
            {
              src: '/images/photography/夜晚足球场/8.webp',
              alt: '夜晚足球场',
              orientation: 'landscape',
              size: 'medium'
            }
          ]
        },
        {
          id: 'singapore',
          title: '游学·新加坡',
          description: '狮城印象，现代都市与自然美景的交融',
          photos: [
            {
              src: '/images/photography/新加坡/1.webp',
              alt: 'The Capitol Kempinski Hotel',
              orientation: 'portrait',
              size: 'large'
            },
            {
              src: '/images/photography/新加坡/2.webp',
              alt: 'Raffles Marina',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/新加坡/3.webp',
              alt: 'Sentosa',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/新加坡/4.webp',
              alt: 'NUS',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/新加坡/5.webp',
              alt: 'NUS',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/新加坡/6.webp',
              alt: 'NUS',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/新加坡/7.webp',
              alt: 'Marina Bay Sands',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/新加坡/8.webp',
              alt: 'Marina Bay Sands',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/新加坡/9.webp',
              alt: 'Marina Bay Sands',
              orientation: 'portrait'
            }
          ]
        },
        {
          id: 'campus',
          title: '校园·UESTC',
          description: '春夏秋冬，花草树木，曲直之美',
          photos: [
            {
              src: '/images/photography/校园/1.webp',
              alt: '校园生活',
              orientation: 'landscape',
              size: 'large'
            },
            {
              src: '/images/photography/校园/2.webp',
              alt: '校园生活',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/校园/3.webp',
              alt: '校园生活',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/校园/4.webp',
              alt: '校园生活',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/校园/5.webp',
              alt: '校园生活',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/校园/6.webp',
              alt: '校园生活',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/校园/7.webp',
              alt: '校园生活',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/校园/8.webp',
              alt: '校园生活',
              orientation: 'portrait'
            },
            // {
            //   src: '/images/photography/校园/9.webp',
            //   alt: '校园生活',
            //   orientation: 'portrait'
            // },
            {
              src: '/images/photography/校园/10.webp',
              alt: '校园生活',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/校园/11.webp',
              alt: '校园生活',
              orientation: 'landscape',
              size: 'large'
            },
            {
              src: '/images/photography/校园/12.webp',
              alt: '校园生活',
              orientation: 'landscape',
              size: 'large'
            },
            {
              src: '/images/photography/校园/13.webp',
              alt: '校园生活',
              orientation: 'landscape',
              size: 'large'
            },
            {
              src: '/images/photography/校园/14.webp',
              alt: '校园生活',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/校园/15.webp',
              alt: '校园生活',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/校园/16.webp',
              alt: '校园生活',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/校园/17.webp',
              alt: '校园生活',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/校园/18.webp',
              alt: '校园生活',
              orientation: 'portrait'
            }
          ]
        },
        {
          id: 'old-teahouse',
          title: '老茶馆·成都',
          description: '传统茶文化的温馨角落，时光沉淀的人文情怀',
          photos: [
            {
              src: '/images/photography/老茶馆/1.webp',
              alt: '老茶馆',
              orientation: 'portrait',
            },
            {
              src: '/images/photography/老茶馆/2.webp',
              alt: '老茶馆',
              orientation: 'portrait',
            },
            {
              src: '/images/photography/老茶馆/3.webp',
              alt: '老茶馆',
              orientation: 'portrait',
            },
            {
              src: '/images/photography/老茶馆/4.webp',
              alt: '老茶馆',
              orientation: 'portrait',
            }
          ]
        },
        {
          id: 'chongqing-yangtze',
          title: '重庆',
          description: '山城重庆与长江的壮美交融，城市风光与自然人文的完美结合',
          photos: [
            {
              src: '/images/photography/重庆/1.webp',
              alt: '城市',
              orientation: 'landscape',
            },
            {
              src: '/images/photography/重庆/2.webp',
              alt: '千厮门大桥',
              orientation: 'landscape',
              size: 'medium'
            },
            {
              src: '/images/photography/重庆/3.webp',
              alt: '千厮门大桥',
              orientation: 'landscape',
              size: 'medium'
            },
            {
              src: '/images/photography/重庆/4.webp',
              alt: '长江',
              orientation: 'landscape'
            },
            {
              src: '/images/photography/重庆/5.JPG',
              alt: '长江游泳者',
              orientation: 'landscape',
              size: 'large'
            },
            {
              src: '/images/photography/重庆/6.webp',
              alt: '重庆城景',
              orientation: 'landscape',
              size: 'medium',
              objectPosition: 'center'
            },
            {
              src: '/images/photography/重庆/7.webp',
              alt: '重庆城景',
              orientation: 'landscape',
              size: 'medium',
              objectPosition: 'center'
            }
          ]
        },
        {
          id: 'haikou',
          title: '海口',
          description: '海口风光，椰风海韵，热带风情',
          photos: [
            {
              src: '/images/photography/海口/1.webp',
              alt: '海口风光',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/海口/2.webp',
              alt: '海口风光',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/海口/3.webp',
              alt: '海口风光',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/海口/4.webp',
              alt: '海口风光',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/海口/5.webp',
              alt: '海口风光',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/海口/6.webp',
              alt: '海口风光',
              orientation: 'portrait'
            }
          ]
        },
        {
          id: 'rosy-cloud',
          title: '火烧云·乌鲁木齐',
          description: '18:45',
          photos: [
            {
              src: '/images/photography/火烧云/1.webp',
              alt: '晚霞',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/火烧云/2.webp',
              alt: '晚霞',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/火烧云/3.webp',
              alt: '晚霞',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/火烧云/4.webp',
              alt: '晚霞',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/火烧云/5.webp',
              alt: '晚霞',
              orientation: 'portrait'
            },
            {
              src: '/images/photography/火烧云/6.webp',
              alt: '火烧云',
              orientation: 'portrait'
            }
          ]
        }
      ]

      loading.value = false
    } catch (err) {
      error.value = err.message
      loading.value = false
    }
  }

  onMounted(() => {
    initializePhotography()
  })

  return {
    photoCategories,
    loading,
    error
  }
}
