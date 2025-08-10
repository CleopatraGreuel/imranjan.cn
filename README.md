# 🎓 依木然的个人网站

## ✨ 网站特色

### 🎯 核心功能
- 📱 **响应式设计** - 完美适配桌面、平板和移动设备
- 🖼️ **智能图片优化** - 自动WebP转换，多尺寸响应式处理
- 🎬 **动态视频背景** - 沉浸式首页体验，自动切换播放
- 🎨 **液态玻璃光标** - 独特的交互效果，提升用户体验
- ⚡ **性能优化** - 基于Nuxt.js 3，极速加载和SEO友好

### 🔧 技术亮点
- **现代化技术栈**：Nuxt.js 3 + Vue.js + Tailwind CSS
- **图片处理引擎**：Sharp + @nuxt/image，支持多格式优化
- **组件化架构**：模块化开发，易于维护和扩展
- **TypeScript支持**：类型安全的项目配置
- **SEO优化**：完整的meta标签和结构化数据

## 📁 项目结构

```
student-portfolio/
├── 📄 app.vue                 # 应用入口文件
├── 📄 nuxt.config.js          # Nuxt.js 配置文件
├── 📄 package.json            # 依赖管理
├── 📄 tailwind.config.js      # Tailwind CSS 配置
├── 📁 pages/                  # 页面组件
│   ├── 📄 index.vue           # 🏠 首页 - 动态视频背景
│   ├── 📄 about.vue           # 👤 关于我 - 个人介绍
│   ├── 📄 projects.vue        # 🚀 项目展示 - 技术作品集
│   ├── 📄 photography.vue     # 📷 摄影作品 - 创意展示
│   └── 📄 test-images.vue     # 🧪 图片测试页
├── 📁 components/             # 可复用组件
│   ├── 📄 TheNavigation.vue   # 导航栏组件
│   ├── 📄 GlassCursor.vue     # 液态玻璃光标效果
│   ├── 📄 OptimizedImage.vue  # 图片优化组件
│   ├── 📄 ProjectDetails.vue  # 项目详情组件
│   ├── 📄 ProjectTimeline.vue # 项目时间线
│   ├── 📄 PageHeader.vue      # 页面头部
│   ├── 📄 WelcomeMessage.vue  # 欢迎语组件
│   └── 📄 CodeBlock.vue       # 代码块展示
├── 📁 data/                   # 数据文件
│   └── 📄 projects.ts         # 项目数据配置
├── 📁 public/                 # 静态资源
│   ├── 📁 images/             # 图片资源
│   ├── 📁 videos/             # 视频资源
│   ├── 📁 files/              # 文档下载
│   └── 📁 downloads/          # 项目文件
└── 📁 assets/                 # 样式资源
    └── 📁 css/                # 全局样式
```

## 🚀 快速开始

### 环境要求
- **Node.js**: >= 18.0.0
- **npm**: >= 9.0.0
- **操作系统**: Windows/macOS/Linux

### 安装步骤

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd student-portfolio
   ```

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问网站**
   ```
   http://localhost:3000
   ```

### 构建部署

```bash
# 生成静态站点
npm run generate

# 构建生产版本
npm run build

# 预览生产版本
npm run preview
```

## 🛠️ 技术栈详解

### 核心框架
- **[Nuxt.js 3](https://nuxt.com/)** - Vue.js 全栈框架
- **[Vue.js 3](https://vuejs.org/)** - 响应式前端框架
- **[Tailwind CSS](https://tailwindcss.com/)** - 原子化CSS框架

### 核心模块
- **[@nuxt/image](https://image.nuxt.com/)** - 图片优化和响应式处理
- **[@nuxt/content](https://content.nuxtjs.org/)** - 内容管理系统
- **[Sharp](https://sharp.pixelplumbing.com/)** - 高性能图片处理
- **[PhotoSwipe](https://photoswipe.com/)** - 图片画廊组件
- **[Swiper](https://swiperjs.com/)** - 现代化轮播组件

### 开发工具
- **[@nuxt/devtools](https://github.com/nuxt/devtools)** - 开发调试工具
- **[Markdownlint](https://github.com/DavidAnson/markdownlint)** - Markdown规范检查

## 🎨 设计特色

### 视觉设计
- **现代简约风格** - 注重内容展示，减少视觉干扰
- **玻璃态设计** - 液态玻璃效果，营造科技感
- **响应式布局** - 完美适配各种屏幕尺寸
- **暗色主题** - 保护视力，突出作品展示

### 交互体验
- **流畅动画** - 页面切换和元素动画
- **智能加载** - 图片懒加载，性能优化
- **移动优先** - 触摸友好的移动端体验
- **无障碍设计** - 支持屏幕阅读器和键盘导航

## 📊 项目展示案例

网站已收录以下实际项目：

### 🎤 语音控制LED项目 (2025)
- **技术栈**: Arduino + 语音识别 + WS2812 LED
- **功能**: 语音控制彩色LED灯效
- **成果**: 完整的硬件+软件解决方案

### 🏆 盟升杯竞赛项目 (2024)
- **获奖**: 三等奖
- **技术**: STM32 + 信号处理 + Python分析
- **特色**: 硬件设计+软件算法完整解决方案

### 🇸🇬 新加坡NUS项目 (2024)
- **获奖**: Best Project Award + 个人A+成绩
- **技术**: 社交网络应用设计
- **成果**: 完整的用户体验设计方案

### 🍽️ 餐厅管理系统 (2025)
- **功能**: 财务管理 + 数据分析 + AI分析
- **特色**: 现代化桌面应用，智能数据洞察

### 👕 智能衣柜App (2025)
- **获奖**: 西南赛区二等奖
- **技术**: 移动应用 + 3D建模 + AI推荐
- **创新**: 虚拟试穿+个性化推荐

## 🔧 自定义配置

### 图片优化配置
```javascript
// nuxt.config.js
image: {
  formats: ['webp', 'jpg', 'png'],
  quality: 85,
  densities: [1, 2],
  // 预设配置适合不同场景
  presets: {
    hero: { quality: 90, width: 2560, height: 1440 },
    project: { quality: 85, width: 800, height: 600 },
    photo: { quality: 90, width: 1200, height: 800 }
  }
}
```

### SEO优化配置
```javascript
app: {
  head: {
    title: '依木然的个人网站',
    meta: [
      { 
        name: 'description', 
        content: '光电专业理工科大学生个人网站，展示技术项目、竞赛作品和摄影创作' 
      }
    ]
  }
}
```

## 📝 使用说明

### 添加新项目
1. 在 `data/projects.ts` 中添加项目信息
2. 将项目资源放入 `public/images/projects/[项目名]/`
3. 更新项目页面展示

### 更新个人信息
1. 修改 `nuxt.config.js` 中的SEO信息
2. 更新 `pages/about.vue` 个人介绍
3. 替换 `public/images/about/` 中的个人照片

### 添加摄影作品
1. 将作品放入 `public/images/photography/`
2. 在 `pages/photography.vue` 中配置展示

## 🔗 相关链接

- **项目演示**: [在线访问地址]
- **技术文档**: [Nuxt.js 文档](https://nuxt.com/docs)
- **设计参考**: [Tailwind CSS](https://tailwindcss.com/docs)
- **图片优化**: [@nuxt/image 文档](https://image.nuxt.com/)

## 📄 开源协议

本项目采用 MIT 协议开源，欢迎学习和参考。

## 👤 作者信息

**依木热尼江·买买提明**
- 专业：光电信息科学与工程
- 特长：硬件设计、软件开发、摄影创作
- 联系方式：[在about页面中设置]

---

*💡 如果这个项目对你有帮助，欢迎 ⭐ Star 支持！*
