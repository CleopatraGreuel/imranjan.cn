<template>
  <div class="photography-page">
    <!-- 统一头部组件 -->
    <PageHeader />

    <!-- 左侧悬浮导航 -->
    <aside class="floating-nav" v-show="!loading && !error">
      <div class="floating-nav-content">
        <div class="floating-nav-title">导航</div>
        <nav class="floating-nav-items">
          <a
            v-for="category in photoCategories"
            :key="category.id"
            :href="`#${category.id}`"
            @click="scrollToSection(category.id, $event)"
            :class="['floating-nav-card', { active: currentSection === category.id }]"
          >
            {{ category.title.split('·')[0] }}
          </a>
        </nav>
      </div>
    </aside>

    <!-- 页面内容 -->
    <main class="main-content">
      <!-- 加载状态 -->
      <div v-if="loading" class="loading-state">
        <div class="loading-spinner"></div>
        <p class="loading-text">正在加载摄影作品...</p>
      </div>

      <!-- 错误状态 -->
      <div v-else-if="error" class="error-state">
        <p class="error-text">加载失败：{{ error }}</p>
      </div>

      <!-- 摄影作品展示 -->
      <div v-else class="photography-content">
        <div
          v-for="category in photoCategories"
          :key="category.id"
          :id="category.id"
          class="category-section"
        >
          <div class="category-header">
            <h2 class="category-title">{{ category.title }}</h2>
            <p class="category-description">{{ category.description }}</p>
          </div>

          <!-- 使用瀑布流组件展示照片 -->
          <PhotoMasonry :photos="category.photos" />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// 导入组合式函数
import { usePhotography } from '~/composables/usePhotography'
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

// SEO配置
useHead({
  title: '摄影作品-imranjan mamtimin',
  meta: [
    {
      name: 'description',
      content: 'My photography collection - capturing moments where technology meets art, from campus life to project documentation and natural landscapes.'
    }
  ]
})

// 使用摄影作品数据
const { photoCategories, loading, error } = usePhotography()

// 当前激活的导航项
const currentSection = ref('')

// 平滑滚动到指定区域
const scrollToSection = (sectionId, event) => {
  event.preventDefault()

  const targetElement = document.getElementById(sectionId)
  if (targetElement) {
    // 更新当前选中的节
    currentSection.value = sectionId

    // 使用scrollIntoView，但添加适当的偏移
    const yOffset = -100 // 偏移量，确保不被导航栏遮挡
    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset

    // 平滑滚动到目标位置
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    })

    // 保持平滑滚动，不添加高亮效果
  }
}

// 滚动监听函数，自动更新当前激活的导航项
const updateCurrentSection = () => {
  const sections = [
    'portrait-indoor',
    'portrait-outdoor',
    'night-football',
    'singapore',
    'campus',
    'old-teahouse',
    'chongqing-yangtze',
    'haikou',
    'rosy-cloud'
  ]

  let activeSection = ''

  // 从上到下遍历，找到第一个进入视口上半部分的section
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const rect = element.getBoundingClientRect()
      // 如果section的顶部在视口上半部分以上，且底部还在视口中
      if (rect.top <= 200 && rect.bottom > 200) {
        activeSection = sectionId
      }
    }
  }

  if (activeSection && activeSection !== currentSection.value) {
    currentSection.value = activeSection
  }
}

// 页面挂载后添加滚动监听
onMounted(() => {
  // 添加滚动监听
  const handleScroll = () => {
    updateCurrentSection()
  }
  window.addEventListener('scroll', handleScroll)

  // 初始化当前section
  nextTick(() => {
    updateCurrentSection()
  })

  // 组件卸载时清理事件监听器
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
})
</script>

<style scoped>
/* MrKriss风格摄影页面样式 */
.photography-page {
  @apply min-h-screen bg-white;
}

/* 左侧悬浮导航样式 */
.floating-nav {
  @apply fixed left-4 top-1/2 transform -translate-y-1/2 z-30;
  @apply hidden lg:block;
}

.floating-nav-content {
  @apply bg-white/90 backdrop-blur-md rounded-xl shadow-xl border border-gray-200;
  @apply p-3 w-[120px];
}

.floating-nav-title {
  @apply text-sm font-medium text-gray-600 mb-3 text-center;
  @apply border-b border-gray-200 pb-2;
}

.floating-nav-items {
  @apply space-y-1;
}

.floating-nav-card {
  @apply block px-2 py-2 rounded-lg text-xs font-medium text-center;
  @apply text-gray-600 hover:text-primary-orange hover:bg-orange-50;
  @apply transition-all duration-200 no-underline;
  @apply border border-transparent hover:border-orange-200;
  @apply leading-tight;
}

.floating-nav-card.active {
  @apply bg-primary-orange text-white;
  @apply shadow-sm border-primary-orange;
}





/* 响应式隐藏导航 */
@media (max-width: 1024px) {
  .floating-nav {
    @apply hidden;
  }
}

/* 主要内容区域 */
.main-content {
  @apply max-w-7xl mx-auto px-8 py-16;
}

/* 加载状态 */
.loading-state {
  @apply flex flex-col items-center justify-center py-20;
}

.loading-spinner {
  @apply w-8 h-8 border-4 border-gray-200 border-t-primary-orange rounded-full animate-spin mb-4;
}

.loading-text {
  @apply text-gray-600 text-lg;
}

/* 错误状态 */
.error-state {
  @apply flex items-center justify-center py-20;
}

.error-text {
  @apply text-red-600 text-lg;
}

/* 摄影作品内容 */
.photography-content {
  @apply space-y-20;
}

.category-section {
  @apply mb-20;
}

.category-header {
  @apply text-center mb-12;
}

.category-title {
  @apply text-4xl md:text-5xl font-signature text-black mb-4;
  @apply bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent;
}

.category-description {
  @apply text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed;
  @apply opacity-0 animate-fade-in-up;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    @apply px-4 py-12;
  }

  .category-title {
    @apply text-3xl;
  }

  .category-description {
    @apply text-base;
  }

  .photography-content {
    @apply space-y-16;
  }

  .category-section {
    @apply mb-16;
  }

  .category-header {
    @apply mb-8;
  }
}

/* 动画效果 */
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fade-in-up 0.6s ease-out;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400;
}
</style>
