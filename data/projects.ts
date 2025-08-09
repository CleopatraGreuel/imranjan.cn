// 项目数据接口定义
export interface Project {
  id: number
  date: string
  title: string
  summary: string
  description: string
  thumbnail: string
  mainImage: string
  gallery: string[]
  technologies: string[]
  category: string
  status: string
  features: string[]
  award: string
  metrics: string
  impact: string
  github?: string
  demo?: string
  document?: string
}

// 示例项目数据 - 您可以根据实际情况修改
export const projectsData: Project[] = [
  {
    id: 1,
    date: '2024-03-15',
    title: '智能家居控制系统',
    summary: '基于STM32和ESP32的全套智能家居解决方案',
    description: '这是一个综合性的智能家居项目，包含环境监测、设备控制、语音识别等多个子系统。通过STM32作为主控制器，ESP32负责WiFi通信，实现了家电设备的远程控制和自动化管理。系统具有Web界面和手机APP两种控制方式，支持语音控制和场景模式切换。项目在全国大学生电子设计竞赛中获得省级一等奖，并申请了3项实用新型专利。',

    // 占位图片 - 您之后可以替换为实际项目图片
    thumbnail: 'https://picsum.photos/400/300?random=1',
    mainImage: 'https://picsum.photos/1200/800?random=11',
    gallery: [
      'https://picsum.photos/800/600?random=101',  // 系统架构图
      'https://picsum.photos/800/600?random=102',  // 硬件实物图
      'https://picsum.photos/800/600?random=103',  // 控制界面截图
      'https://picsum.photos/800/600?random=104',  // 安装效果图
      'https://picsum.photos/800/600?random=105',  // 获奖证书
      'https://picsum.photos/800/600?random=106'   // 团队合影
    ],

    technologies: ['STM32', 'ESP32', 'IoT', 'C/C++', 'Python', 'Vue.js'],
    category: '单片机开发',
    status: '已完成',

    features: [
      '支持15种不同类型的智能设备接入',
      '实现语音控制和手势识别双重交互',
      '自主研发的低功耗通信协议，续航提升40%',
      '具备学习能力的智能场景推荐算法',
      '完整的系统安全防护和数据加密机制'
    ],

    award: '全国大学生电子设计竞赛省级一等奖',
    metrics: '系统稳定性99.8%，响应时间<200ms',
    impact: '获得3项实用新型专利，被2家企业采用',

    github: 'https://github.com/你的用户名/smart-home-system',
    demo: 'https://demo.yoursite.com/smart-home',
    document: '/documents/smart-home-design.pdf'
  },

  {
    id: 2,
    date: '2024-01-20',
    title: 'AI图像识别摄影助手',
    summary: '基于深度学习的智能摄影构图建议系统',
    description: '结合计算机视觉和深度学习技术开发的智能摄影辅助工具。系统能够实时分析取景器中的画面构图，提供专业的拍摄建议，包括构图优化、光线调节、焦点选择等。支持多种摄影风格识别，能够根据场景自动推荐最佳拍摄参数。项目获得校级创新创业大赛金奖，已被校摄影社采用。',

    thumbnail: 'https://picsum.photos/400/300?random=2',
    mainImage: 'https://picsum.photos/1200/800?random=12',
    gallery: [
      'https://picsum.photos/800/600?random=201',
      'https://picsum.photos/800/600?random=202',
      'https://picsum.photos/800/600?random=203',
      'https://picsum.photos/800/600?random=204',
      'https://picsum.photos/800/600?random=205',
      'https://picsum.photos/800/600?random=206'
    ],

    technologies: ['Python', 'TensorFlow', 'OpenCV', 'NumPy', 'Flask', 'React'],
    category: '软件开发',
    status: '已完成',

    features: [
      '基于YOLOv5的实时物体检测和场景识别',
      '自训练的构图美学评估神经网络',
      '支持12种经典摄影构图法则智能识别',
      '实时HDR和色彩平衡参数推荐',
      '与主流相机品牌SDK完美集成'
    ],

    award: '校级创新创业大赛金奖',
    metrics: '构图建议准确率87%，处理速度30FPS',
    impact: '已被校摄影社采用，帮助200+同学提升摄影技能',

    github: 'https://github.com/你的用户名/ai-photography-assistant',
    demo: 'https://demo.yoursite.com/ai-camera',
    document: '/documents/ai-camera-thesis.pdf'
  },

  {
    id: 3,
    date: '2023-10-10',
    title: '无线环境监测网络',
    summary: '基于LoRa的大范围环境数据采集系统',
    description: '针对大面积环境监测需求设计的无线传感器网络系统。采用LoRa长距离通信技术，实现多个监测节点的数据采集和传输。系统包含温湿度、PM2.5、CO2、噪声等多参数监测，具备数据可视化和异常报警功能。技术方案被环保部门采用，部署于3个自然保护区。',

    thumbnail: 'https://picsum.photos/400/300?random=3',
    mainImage: 'https://picsum.photos/1200/800?random=13',
    gallery: [
      'https://picsum.photos/800/600?random=301',
      'https://picsum.photos/800/600?random=302',
      'https://picsum.photos/800/600?random=303',
      'https://picsum.photos/800/600?random=304',
      'https://picsum.photos/800/600?random=305',
      'https://picsum.photos/800/600?random=306'
    ],

    technologies: ['STM32', 'LoRa', 'Qt', 'C++', 'MySQL', 'Python'],
    category: '竞赛作品',
    status: '已完成',

    features: [
      '单节点通信距离达5公里，网络覆盖范围50平方公里',
      '低功耗设计，太阳能供电可持续运行6个月',
      '支持100个节点的大规模组网',
      '自适应数据传输频率，根据环境变化调整采集间隔',
      '具备故障自诊断和网络自愈能力'
    ],

    award: '挑战杯大学生课外学术科技作品竞赛省级二等奖',
    metrics: '数据准确率95%，网络可靠性99.5%',
    impact: '技术方案被环保部门采用，部署于3个自然保护区',

    github: 'https://github.com/你的用户名/lora-env-monitor',
    demo: 'https://monitor.yoursite.com',
    document: '/documents/env-monitor-report.pdf'
  },

  {
    id: 4,
    date: '2023-06-25',
    title: '校园二手交易平台',
    summary: '基于Vue.js的校园内二手物品交易Web应用',
    description: '专为大学生设计的二手物品交易平台，提供安全便捷的校园内交易环境。系统包含用户认证、商品发布、在线聊天、交易管理等完整功能。采用现代化的前后端分离架构，具有良好的用户体验和系统性能。累计注册用户2000+，促成交易5000+笔。',

    thumbnail: 'https://picsum.photos/400/300?random=4',
    mainImage: 'https://picsum.photos/1200/800?random=14',
    gallery: [
      'https://picsum.photos/800/600?random=401',
      'https://picsum.photos/800/600?random=402',
      'https://picsum.photos/800/600?random=403',
      'https://picsum.photos/800/600?random=404',
      'https://picsum.photos/800/600?random=405',
      'https://picsum.photos/800/600?random=406'
    ],

    technologies: ['Vue.js', 'Node.js', 'Express', 'MySQL', 'Element-UI', 'Socket.io'],
    category: '软件开发',
    status: '已完成',

    features: [
      '基于学号的实名认证系统，确保交易安全',
      '智能商品分类和搜索推荐算法',
      '实时在线聊天和图片传输功能',
      '完整的订单管理和评价反馈系统',
      '响应式设计，完美支持手机和电脑访问'
    ],

    award: '软件设计大赛优秀奖',
    metrics: '注册用户2000+，日活跃用户300+',
    impact: '累计促成交易5000+笔，交易金额达50万元',

    github: 'https://github.com/你的用户名/campus-trading-platform',
    demo: 'https://trade.yoursite.com',
    document: '/documents/campus-trade-design.pdf'
  },

  {
    id: 5,
    date: '2023-03-08',
    title: '自动浇花机器人',
    summary: '基于Arduino的智能植物护理系统',
    description: '集机械设计、电子控制、软件开发于一体的智能植物护理机器人。系统能够自动检测土壤湿度、光照强度和环境温度，根据不同植物的需求进行精准浇水。具备移动底盘，可以照顾多盆植物，真正实现无人值守的智能园艺。设计理念被园艺公司采纳，申请发明专利1项。',

    thumbnail: 'https://picsum.photos/400/300?random=5',
    mainImage: 'https://picsum.photos/1200/800?random=15',
    gallery: [
      'https://picsum.photos/800/600?random=501',
      'https://picsum.photos/800/600?random=502',
      'https://picsum.photos/800/600?random=503',
      'https://picsum.photos/800/600?random=504',
      'https://picsum.photos/800/600?random=505',
      'https://picsum.photos/800/600?random=506'
    ],

    technologies: ['Arduino', 'C++', '3D打印', '传感器', 'Python', 'PyQt'],
    category: '学术项目',
    status: '已完成',

    features: [
      '基于机器学习的植物健康状态识别',
      '精确的水量控制系统，误差小于5ml',
      '全自主导航和路径规划算法',
      '支持10种常见植物的个性化护理方案',
      '远程监控和手机App控制功能'
    ],

    award: '机器人设计大赛三等奖',
    metrics: '植物存活率提升至98%，节水率35%',
    impact: '设计理念被园艺公司采纳，申请发明专利1项',

    github: 'https://github.com/你的用户名/plant-care-robot',
    demo: 'https://plant.yoursite.com',
    document: '/documents/plant-robot-design.pdf'
  },

  {
    id: 6,
    date: '2025-01-15',
    title: 'Yigui - 虚拟试衣应用',
    summary: '基于CoreML和3D渲染的智能虚拟试衣移动应用',
        description: 'Yigui是一款将专业服装设计流程大众化、个性化的iOS应用。它打通了从"真实人体参数 → 智能3D建模 → 个性化服装设计 → 虚拟试穿"的全链路。其核心创新在于：1. **客户端CoreML预测**：通过独特的"迭代收敛"算法在本地精准预测身体比例，无需上传敏感数据。2. **后端高效装配**：基于Blender的"虚拟装配"流水线，通过原子化部件处理和智能重组，实现高效的3D模型生成与试穿。项目采用SwiftUI构建界面，FastAPI构建微服务后端，实现了完整的"创作者"体验闭环。',

    // 占位图片 - 您之后可以替换为实际项目图片和视频
    thumbnail: '/images/projects/yigui/yigui-thumbnail.jpg',
    mainImage: '/images/projects/yigui/yigui-main.jpg',
    gallery: [
      '/images/projects/yigui/yigui-architecture.jpg',  // 系统架构图
      '/images/projects/yigui/yigui-app-demo.jpg',      // 应用演示截图
      '/images/projects/yigui/yigui-3d-models.jpg',     // 3D模型展示
      '/images/projects/yigui/yigui-design-process.jpg', // 设计流程图
      '/images/projects/yigui/yigui-award.jpg',          // 获奖证书
      '/videos/projects/yigui/yigui-demo.webm'          // 完整操作演示视频
    ],

    technologies: ['SwiftUI', 'CoreML', 'SceneKit', 'FastAPI', 'Python', 'Blender', 'MySQL', 'JWT', 'Docker', 'Nginx'],
    category: '移动应用开发',
    status: '已完成',

    features: [
      '客户端CoreML预测：通过"迭代收敛"算法在本地精准预测身体比例，保护用户隐私。',
      '高效虚拟装配：后端基于Blender的"原子化"部件处理和智能重组，实现快速试穿。',
      '异步任务通信：客户端通过轮询检查后台任务状态，优化长时间操作的用户体验。',
      '完整的创作闭环：实现从数据输入、3D建模、服装设计到虚拟试穿的全流程。',
      '简洁直观的设计体验：提供"填色游戏"式的服装定制功能。',
      '云端衣柜系统：所有设计作品云端同步，随时管理和预览。',
      '微服务架构：用户、模型、设计三大服务解耦，易于维护和扩展。'
    ],

    award: '中国高校计算机大赛—移动应用创新赛 省级二等奖',
    metrics: '本地预测精度 >95%，模型生成时间 <15s',
    impact: '成功将专业3D建模技术应用于移动端，为个性化定制领域提供了创新解决方案。',

    github: 'https://github.com/你的用户名/yigui-app',
    demo: 'https://yiguiapp.xyz',
    document: '/documents/yigui-project-record.md'
  }
]

// 工具函数
export const getProjectById = (id: number): Project | undefined => {
  return projectsData.find(project => project.id === id)
}

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === '全部项目') return projectsData
  return projectsData.filter(project => project.category === category)
}

export const getProjectCategories = (): string[] => {
  const categories = ['全部项目']
  const uniqueCategories = [...new Set(projectsData.map(project => project.category))]
  return categories.concat(uniqueCategories)
}

export const formatProjectDate = (dateString: string): string => {
  const date = new Date(dateString)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  return `${year}年${month.toString().padStart(2, '0')}月`
}
