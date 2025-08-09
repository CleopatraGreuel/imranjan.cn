<template>
  <div class="cv-page">
    <!-- 统一头部组件 -->
    <PageHeader />

    <!-- CV样式的个人简介页面 -->
    <main class="cv-container">
      <!-- 个人信息头部 -->
      <section class="cv-header">
        <div class="personal-info">
          <h1 class="full-name">依木热尼江·买买提明</h1>
          <h2 class="title-position">22岁 | 男</h2>

          <!-- 联系方式 -->
          <div class="contact-methods">
            <!-- 微信/QQ -->
            <div class="contact-method" @click="copyToClipboard('2437000215', 'wechat')">
              <div class="method-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 4.882-1.416 7.132.145-1.529-3.851-5.572-6.525-10.875-6.321z"/>
                </svg>
              </div>
              <div class="method-content">
                <span class="method-label">微信/QQ</span>
                <span class="method-value">2437000215</span>
              </div>
              <div class="copy-tooltip">点击复制</div>
            </div>

            <!-- 邮箱 -->
            <div class="contact-method" @click="copyToClipboard('imran924@qq.com', 'email')">
              <div class="method-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <div class="method-content">
                <span class="method-label">邮箱</span>
                <span class="method-value">imran924@qq.com</span>
              </div>
              <div class="copy-tooltip">点击复制</div>
            </div>

            <!-- 地址 -->
            <div class="contact-method" @click="copyToClipboard('四川省 成都市 电子科技大学清水河校区', 'address')">
              <div class="method-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              <div class="method-content">
                <span class="method-label">地址</span>
                <span class="method-value">四川省 成都市 电子科技大学清水河校区</span>
              </div>
              <div class="copy-tooltip">点击复制</div>
            </div>

            <!-- GitHub -->
            <div class="contact-method github-method" @click="openGithub">
              <div class="method-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div class="method-content">
                <span class="method-label">GitHub</span>
                <span class="method-action">查看代码作品</span>
              </div>
              <div class="external-link-icon">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div class="photo-section">
          <!-- 主要证件照区域 -->
          <div class="profile-photo-container">
            <div class="photo-wrapper group">
              <img
                src="/images/about/二寸证件照.png"
                alt="依木热尼江·买买提明的证件照"
                class="profile-photo"
                loading="lazy"
              />
              <!-- 动态边框 -->
              <div class="photo-border-animation"></div>
            </div>
          </div>

          <!-- 生活照展示区域 -->
          <div class="life-photos-container">
            <div class="life-photos-grid">
              <div class="life-photo-item" @click="openImageModal('/images/about/生活照1.png', '生活照片 1')">
                <img
                  src="/images/about/生活照1.png"
                  alt="生活照片 1"
                  class="life-photo"
                  loading="lazy"
                />
                <div class="life-photo-overlay">
                  <span class="overlay-icon">🔍</span>
                </div>
              </div>

              <div class="life-photo-item" @click="openImageModal('/images/about/生活照2.png', '生活照片 2')">
                <img
                  src="/images/about/生活照2.png"
                  alt="生活照片 2"
                  class="life-photo"
                  loading="lazy"
                />
                <div class="life-photo-overlay">
                  <span class="overlay-icon">🔍</span>
                </div>
              </div>

              <div class="life-photo-item" @click="openImageModal('/images/about/生活照3.png', '生活照片 3')">
                <img
                  src="/images/about/生活照3.png"
                  alt="生活照片 3"
                  class="life-photo"
                  loading="lazy"
                />
                <div class="life-photo-overlay">
                  <span class="overlay-icon">🔍</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- CV内容区域 -->
      <div class="cv-content">
        <!-- 个人简介 -->
        <section class="cv-section">
          <h3 class="section-title">个人简介</h3>
          <div class="section-content">
            <div class="profile-summary">
              <p>一个在单反相机和设计软件之间无缝切换的创造者。</p>

              <p>白天捕捉现实世界，晚上构建数字界面。也热衷于间歇性敲代码、搞搞单片机，在竞赛的痛苦与成就感中寻找刺激。</p>

              <p>遇到问题时先冷静分析，再加一点别人想不到的"私货"。既能跟团队一起脑力风暴，也能一个人专注地搞定工作。</p>

              <p>我热衷于做计划，但更擅长应对计划外的各种变化。</p>

              <p>除此之外？一个足球爱好者。</p>
            </div>
          </div>
        </section>

        <!-- 教育背景 -->
        <section class="cv-section">
          <h3 class="section-title">教育背景</h3>
          <div class="section-content">
            <div class="education-entry">
              <div class="education-header">
                <div class="education-main">
                  <h4 class="degree">学士学位 - 光电信息科学与工程</h4>
                  <p class="institution">电子科技大学（清水河校区）</p>
                  <p class="college">光电科学与工程学院</p>
                </div>
                <div class="education-period">2022 - 2026</div>
              </div>
              <div class="education-details">
                <p><strong>主修课程：</strong>显示技术基础、显示器件驱动技术、嵌入式系统设计、量子力学与统计物理、信号与系统、光电图像处理、固体与半导体物理、激光原理与技术、物理光学、应用光学、电子工程设计、数字电路与逻辑设计</p>
                <p><strong>选修课程：</strong>Python 数据分析、机器学习、大数据与未来计算</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 技能专长 -->
        <section class="cv-section">
          <h3 class="section-title">技能专长</h3>
          <div class="section-content">
            <div class="skills-grid">
              <div class="skill-category">
                <h4 class="skill-category-title">硬件开发</h4>
                <div class="skill-list">
                  <span class="skill-tag">STM32单片机开发</span>
                  <span class="skill-tag">Arduino项目设计</span>
                  <span class="skill-tag">PCB电路设计</span>
                  <span class="skill-tag">传感器集成应用</span>
                  <span class="skill-tag">嵌入式系统</span>
                </div>
              </div>

              <div class="skill-category">
                <h4 class="skill-category-title">软件技术</h4>
                <div class="skill-list">
                  <span class="skill-tag">C/C++编程</span>
                  <span class="skill-tag">Python数据分析</span>
                  <span class="skill-tag">Vue.js前端开发</span>
                  <span class="skill-tag">Swift和iOS开发</span>
                  <span class="skill-tag">Linux系统操作</span>
                </div>
              </div>

              <div class="skill-category">
                <h4 class="skill-category-title">工具软件</h4>
                <div class="skill-list">
                  <span class="skill-tag">MATLAB仿真</span>
                  <span class="skill-tag">Keil MDK</span>
                  <span class="skill-tag">Figma设计</span>
                  <span class="skill-tag">嘉立创EDA</span>
                  <span class="skill-tag">Altium Designer</span>
                  <span class="skill-tag">Blender建模（初学者）</span>
                </div>
              </div>

              <div class="skill-category">
                <h4 class="skill-category-title">兴趣特长</h4>
                <div class="skill-list">
                  <span class="skill-tag">数码摄影</span>
                  <span class="skill-tag">创新思维</span>
                  <span class="skill-tag">旅游放松</span>
                  <span class="skill-tag">踢踢足球</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 项目经历 -->
        <section class="cv-section">
          <h3 class="section-title">项目经历</h3>
          <div class="section-content">
            <div class="projects-redirect-card">
              <div class="redirect-card-inner">
                <div class="redirect-content">
                  <h4 class="redirect-title">查看我的项目作品集</h4>
                </div>
                <div class="redirect-action">
                  <NuxtLink to="/projects" class="view-projects-btn">
                    <span>查看项目详情</span>
                    <svg class="arrow-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </NuxtLink>
                </div>
              </div>
              <div class="redirect-background">
                <div class="bg-shape bg-shape-1"></div>
                <div class="bg-shape bg-shape-2"></div>
                <div class="bg-shape bg-shape-3"></div>
              </div>
            </div>
          </div>
        </section>

        <!-- 个人理念 -->
        <section class="cv-section">
          <h3 class="section-title">个人理念</h3>
          <div class="section-content">
            <blockquote class="philosophy-quote">
              敢想，敢做，敢坚持
            </blockquote>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>

// SEO配置
useHead({
  title: '个人简介 - 理工科学生个人网站',
  meta: [
    {
      name: 'description',
      content: '理工科学生个人简介，专业背景、技能专长、教育经历和个人理念的详细展示'
    },
    {
      name: 'keywords',
      content: '个人简介,理工科学生,技能专长,教育背景,光电专业,技术创新'
    }
  ]
})

// 页面进入动画和照片点击事件
onMounted(() => {
  const sections = document.querySelectorAll('.cv-section')
  sections.forEach((section, index) => {
    setTimeout(() => {
      section.classList.add('animate-in')
    }, index * 200)
  })

  // 照片点击放大功能
  const photoWrapper = document.querySelector('.photo-wrapper')
  if (photoWrapper) {
    photoWrapper.addEventListener('click', () => {
      openPhotoModal()
    })
  }
})

// 复制到剪贴板功能
const copyToClipboard = async (text, type) => {
  try {
    await navigator.clipboard.writeText(text)
    // 显示复制成功的反馈
    showCopyFeedback(type)
  } catch (err) {
    console.error('复制失败:', err)
    // 降级方案
    fallbackCopyTextToClipboard(text, type)
  }
}

// 降级复制方案
const fallbackCopyTextToClipboard = (text, type) => {
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.top = '0'
  textArea.style.left = '0'
  textArea.style.position = 'fixed'

  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    document.execCommand('copy')
    showCopyFeedback(type)
  } catch (err) {
    console.error('降级复制失败:', err)
  }

  document.body.removeChild(textArea)
}

// 显示复制反馈
const showCopyFeedback = (type) => {
  // 移除已存在的反馈
  const existingFeedback = document.querySelector('.copy-feedback')
  if (existingFeedback) {
    existingFeedback.remove()
  }

  const feedback = document.createElement('div')
  feedback.className = 'copy-feedback'

  let message = ''
  switch (type) {
    case 'email':
      message = '邮箱已复制到剪贴板'
      break
    case 'wechat':
      message = '微信/QQ号已复制到剪贴板'
      break
    case 'address':
      message = '地址已复制到剪贴板'
      break
    default:
      message = '内容已复制到剪贴板'
  }

  feedback.textContent = message

  // 设置样式
  feedback.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #059669;
    color: white;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    font-weight: 500;
    white-space: nowrap;
    opacity: 0;
    transition: all 0.3s ease;
  `

  document.body.appendChild(feedback)

  // 立即显示反馈
  setTimeout(() => {
    feedback.style.opacity = '1'
    feedback.style.transform = 'translate(-50%, -50%) scale(1.05)'
  }, 50)

  // 2秒后隐藏
  setTimeout(() => {
    feedback.style.opacity = '0'
    feedback.style.transform = 'translate(-50%, -50%) scale(0.95)'
    setTimeout(() => {
      if (document.body.contains(feedback)) {
        document.body.removeChild(feedback)
      }
    }, 300)
  }, 2000)
}

// GitHub跳转功能
const openGithub = () => {
  window.open('https://github.com/narmi924', '_blank')
}

// 照片模态框功能
const openPhotoModal = () => {
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 cursor-pointer'
  modal.onclick = () => modal.remove()

  const img = document.createElement('img')
  img.src = '/images/about/二寸证件照.png'
  img.className = 'max-w-full max-h-full object-contain rounded-lg shadow-2xl'
  img.style.maxWidth = '80vh'
  img.style.maxHeight = '80vh'

  // 添加关闭提示
  const closeHint = document.createElement('div')
  closeHint.className = 'absolute top-8 right-8 text-white text-lg'
  closeHint.innerHTML = `
    <div class="flex items-center gap-2 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
      <span>点击关闭</span>
    </div>
  `

  modal.appendChild(img)
  modal.appendChild(closeHint)
  document.body.appendChild(modal)

  // 添加进入动画
  setTimeout(() => {
    img.style.transform = 'scale(1)'
    img.style.opacity = '1'
  }, 50)

  img.style.transform = 'scale(0.8)'
  img.style.opacity = '0'
  img.style.transition = 'all 0.3s ease-out'
}
</script>

<style scoped>
/* CV风格的专业简历页面 */
.cv-page {
  @apply min-h-screen bg-gray-50;
}

.cv-container {
  @apply max-w-5xl mx-auto px-6 py-8;
  @apply bg-white shadow-lg;
  min-height: calc(100vh - 120px);
}

/* CV头部 - 个人信息区域 */
.cv-header {
  @apply border-b-2 border-primary-orange pb-8 mb-8;
  @apply flex flex-col md:flex-row gap-8 items-start;
}

.personal-info {
  @apply flex-grow order-2 md:order-1;
}

.photo-section {
  @apply flex-shrink-0 order-1 md:order-2;
  @apply mx-auto md:mx-0;
  @apply flex flex-col items-center space-y-2;
}

.profile-photo-container {
  @apply w-56 h-72 relative;
  @apply flex items-center justify-center;
}

.photo-wrapper {
  @apply relative w-full h-full rounded-lg overflow-hidden;
  @apply shadow-lg transition-all duration-500 ease-out;
  @apply cursor-pointer;
}

.photo-wrapper:hover {
  @apply shadow-2xl;
}

.profile-photo {
  @apply w-full h-full object-cover object-top;
  @apply transition-all duration-300 ease-out;
  transform: scale(1);
}

.photo-wrapper:hover .profile-photo {
  /* 悬停状态：稍微放大 */
  transform: scale(1.05);
}

.photo-border-animation {
  @apply absolute inset-0 rounded-lg;
  @apply border-2 border-transparent;
  @apply transition-all duration-500 ease-out;
}

.photo-wrapper:hover .photo-border-animation {
  @apply border-primary-orange;
  box-shadow:
    0 0 20px rgba(139, 69, 19, 0.3),
    inset 0 0 20px rgba(139, 69, 19, 0.1);
  animation: borderGlow 2s ease-in-out infinite alternate;
}

@keyframes borderGlow {
  0% {
    box-shadow:
      0 0 20px rgba(139, 69, 19, 0.3),
      inset 0 0 20px rgba(139, 69, 19, 0.1);
  }
  100% {
    box-shadow:
      0 0 30px rgba(139, 69, 19, 0.5),
      inset 0 0 30px rgba(139, 69, 19, 0.2);
  }
}

.full-name {
  @apply text-3xl md:text-4xl font-clean font-bold text-deep-black mb-2;
}

.title-position {
  @apply text-lg md:text-xl text-primary-orange font-medium mb-6;
}

/* 联系方式样式 */
.contact-methods {
  @apply space-y-3 max-w-xs;
}

.contact-method {
  @apply relative flex items-center gap-3 p-3 rounded-lg border border-gray-200;
  @apply hover:border-primary-orange hover:shadow-md transition-all duration-300 cursor-pointer;
  @apply bg-white hover:bg-orange-50;
}

.method-icon {
  @apply w-10 h-10 rounded-lg bg-primary-orange bg-opacity-10 flex items-center justify-center flex-shrink-0;
}

.method-icon svg {
  @apply w-5 h-5 text-primary-orange;
}

.method-content {
  @apply flex-1 min-w-0;
}

.method-label {
  @apply block text-sm font-medium text-gray-600 mb-1;
}

.method-value {
  @apply block text-gray-800 font-medium text-sm;
}

.method-action {
  @apply block text-primary-orange font-medium text-sm;
}

.github-method {
  @apply hover:bg-gray-50;
}

.external-link-icon {
  @apply flex-shrink-0;
}

.external-link-icon svg {
  @apply w-4 h-4 text-gray-400;
}

.copy-tooltip {
  @apply absolute right-3 top-1/2 transform -translate-y-1/2;
  @apply bg-gray-800 text-white text-xs px-2 py-1 rounded;
  @apply opacity-0 pointer-events-none transition-opacity duration-200;
}

.contact-method:hover .copy-tooltip {
  @apply opacity-100;
}

.github-method .copy-tooltip {
  @apply hidden;
}

/* 复制反馈样式 */
:global(.copy-feedback) {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #059669;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  opacity: 0;
  transition: all 0.3s ease;
  font-weight: 500;
  white-space: nowrap;
}

:global(.copy-feedback.show) {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1.05);
}

/* 生活照展示区域 */
.life-photos-grid {
  @apply grid grid-cols-3 gap-3;
}

.life-photo-item {
  @apply relative w-32 h-32 rounded-lg overflow-hidden cursor-pointer;
  @apply transition-all duration-300 hover:scale-105 hover:shadow-lg;
  @apply border-2 border-transparent hover:border-primary-orange;
}

.life-photo {
  @apply w-full h-full object-cover transition-transform duration-300;
}

.life-photo-overlay {
  @apply absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center;
  @apply transition-all duration-300;
}

.life-photo-item:hover .life-photo-overlay {
  @apply bg-opacity-40;
}

.overlay-icon {
  @apply text-white text-sm opacity-0 transition-opacity duration-300;
}

.life-photo-item:hover .overlay-icon {
  @apply opacity-100;
}

/* CV内容区域 */
.cv-content {
  @apply space-y-8;
}

.cv-section {
  @apply opacity-0 translate-y-4 transition-all duration-500;
}

.cv-section.animate-in {
  @apply opacity-100 translate-y-0;
}

.section-title {
  @apply text-xl font-clean font-bold text-deep-black mb-4;
  @apply border-l-4 border-primary-orange pl-4;
}

.section-content {
  @apply ml-6;
}

/* 个人简介样式 */
.profile-summary {
  @apply text-gray-700 leading-relaxed text-base space-y-4;
}

.profile-summary p {
  @apply text-justify;
}

.profile-summary p:first-child {
  @apply font-medium text-primary-orange;
}

/* 教育背景样式 */
.education-entry {
  @apply mb-6 last:mb-0;
}

.education-header {
  @apply flex flex-col md:flex-row md:justify-between md:items-start mb-3;
}

.education-main h4 {
  @apply text-lg font-semibold text-deep-black;
}

.institution {
  @apply text-gray-600 font-medium;
}

.college {
  @apply text-gray-500 text-sm font-medium;
}

.education-period {
  @apply text-primary-orange font-semibold;
  @apply md:text-right md:min-w-24;
}

.education-details {
  @apply space-y-2 text-gray-700 text-sm;
}

/* 技能专长样式 */
.skills-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.skill-category {
  @apply mb-6 last:mb-0;
}

.skill-category-title {
  @apply text-lg font-semibold text-deep-black mb-3;
}

.skill-list {
  @apply flex flex-wrap gap-2;
}

.skill-tag {
  @apply px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm;
  @apply transition-colors duration-200 hover:bg-primary-orange hover:text-white;
  @apply border border-gray-200;
}

/* 项目引导卡片样式 */
.projects-redirect-card {
  @apply relative bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg border border-gray-100 overflow-hidden;
  @apply hover:shadow-xl transition-all duration-500 ease-out;
}

.redirect-card-inner {
  @apply relative z-10 p-6 flex justify-between items-center;
}

.redirect-content {
  @apply flex-1;
}

.redirect-title {
  @apply text-xl font-clean font-bold text-deep-black;
}

.redirect-action {
  @apply flex items-center;
}

.view-projects-btn {
  @apply inline-flex items-center gap-3 bg-primary-orange text-white px-6 py-3 rounded-lg font-medium;
  @apply hover:bg-orange-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300;
}

.arrow-icon {
  @apply w-5 h-5 transition-transform duration-300;
}

.view-projects-btn:hover .arrow-icon {
  @apply translate-x-1;
}

.redirect-background {
  @apply absolute inset-0 overflow-hidden pointer-events-none;
}

.bg-shape {
  @apply absolute rounded-full opacity-5;
}

.bg-shape-1 {
  @apply w-32 h-32 bg-primary-orange -top-8 -right-8;
  animation: float 6s ease-in-out infinite;
}

.bg-shape-2 {
  @apply w-24 h-24 bg-blue-500 -bottom-6 left-8;
  animation: float 8s ease-in-out infinite reverse;
}

.bg-shape-3 {
  @apply w-20 h-20 bg-purple-500 top-1/2 left-1/4;
  animation: float 10s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* 个人理念样式 */
.philosophy-quote {
  @apply bg-gray-50 border-l-4 border-primary-orange p-4 rounded-r-lg;
  @apply text-gray-700 leading-relaxed italic mb-6;
}

.core-values {
  @apply space-y-3;
}

.value-item {
  @apply text-gray-700 leading-relaxed;
}

.value-item strong {
  @apply text-primary-orange font-semibold;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .cv-container {
    @apply px-4 py-6;
  }

  .cv-header {
    @apply text-center;
  }

  .profile-photo-container {
    @apply w-40 h-52 mx-auto;
  }

  .full-name {
    @apply text-2xl;
  }

  .title-position {
    @apply text-base;
  }

  .contact-row {
    @apply space-y-2;
  }

  .section-content {
    @apply ml-0;
  }

  .skills-grid {
    @apply grid-cols-1;
  }

  /* 项目引导卡片响应式 */
  .redirect-card-inner {
    @apply flex-col gap-4 p-4 text-center;
  }

  .redirect-action {
    @apply justify-center;
  }

  /* 联系方式移动端样式 */
  .contact-methods {
    @apply space-y-3 max-w-sm;
  }

  .contact-method {
    @apply p-3;
  }

  .method-icon {
    @apply w-10 h-10;
  }

  .method-icon svg {
    @apply w-5 h-5;
  }

  .method-label {
    @apply text-sm;
  }

  .method-value, .method-action {
    @apply text-sm;
  }

  /* 移动端照片 */
  .profile-photo-container {
    @apply w-40 h-52 mb-0;
  }

  /* 移动端生活照 */
  .life-photos-grid {
    @apply grid-cols-3 gap-2;
  }

  .life-photo-item {
    @apply w-20 h-20;
  }
}

/* 打印样式 */
@media print {
  .cv-page {
    @apply bg-white;
  }

  .cv-container {
    @apply shadow-none max-w-none mx-0 p-4;
  }

  .profile-photo-placeholder {
    @apply border-solid border-gray-400;
  }

  .section-title {
    @apply text-black;
  }

  .cv-section {
    @apply opacity-100 translate-y-0;
  }
}
</style>
