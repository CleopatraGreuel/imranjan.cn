<template>
  <div class="photography-page">
    <!-- 统一头部组件 -->
    <PageHeader />

    <!-- 页面内容 -->
    <main class="main-content">
      <!-- 摄影作品分类 -->
      <section class="photography-section">

        <!-- 技术摄影作品 -->
        <div class="category-section">
          <h2 class="category-title">技术记录</h2>
          <div class="photo-grid">

            <article class="photo-card">
              <div class="photo-placeholder">
                <OptimizedImage
                  src="/images/photography/cr7.png"
                  alt="CR7"
                  preset="photo"
                  class="photo-image"
                />
              </div>
              <div class="photo-info">
                <h3 class="photo-title">深夜实验室</h3>
                <p class="photo-description">记录深夜在实验室调试电路的专注时光</p>
              </div>
            </article>

            <article class="photo-card">
              <div class="photo-placeholder">
                <div class="placeholder-content">
                  <p class="placeholder-text">电路板微距摄影</p>
                </div>
              </div>
              <div class="photo-info">
                <h3 class="photo-title">电路之美</h3>
                <p class="photo-description">微距镜头下精密电路板的几何美学</p>
              </div>
            </article>

            <article class="photo-card">
              <div class="photo-placeholder">
                <div class="placeholder-content">
                  <p class="placeholder-text">项目制作过程</p>
                </div>
              </div>
              <div class="photo-info">
                <h3 class="photo-title">创作过程</h3>
                <p class="photo-description">从概念设计到实物制作的完整记录</p>
              </div>
            </article>

          </div>
        </div>

        <!-- 校园生活摄影 -->
        <div class="category-section">
          <h2 class="category-title">校园时光</h2>
          <div class="photo-grid">

            <article class="photo-card">
              <div class="photo-placeholder">
                <div class="placeholder-content">
                  <p class="placeholder-text">教学楼晨光</p>
                </div>
              </div>
              <div class="photo-info">
                <h3 class="photo-title">晨光微熹</h3>
                <p class="photo-description">清晨第一缕阳光洒向教学楼的宁静时刻</p>
              </div>
            </article>

            <article class="photo-card">
              <div class="photo-placeholder">
                <div class="placeholder-content">
                  <p class="placeholder-text">图书馆夜景</p>
                </div>
              </div>
              <div class="photo-info">
                <h3 class="photo-title">书海夜归</h3>
                <p class="photo-description">深夜图书馆里依然在求知的身影</p>
              </div>
            </article>

            <article class="photo-card">
              <div class="photo-placeholder">
                <div class="placeholder-content">
                  <p class="placeholder-text">竞赛现场</p>
                </div>
              </div>
              <div class="photo-info">
                <h3 class="photo-title">竞技时刻</h3>
                <p class="photo-description">科技竞赛现场的紧张与专注</p>
              </div>
            </article>

          </div>
        </div>

        <!-- 自然风光 -->
        <div class="category-section">
          <h2 class="category-title">自然光影</h2>
          <div class="photo-grid">

            <article class="photo-card">
              <div class="photo-placeholder">
                <div class="placeholder-content">
                  <p class="placeholder-text">校园四季</p>
                </div>
              </div>
              <div class="photo-info">
                <h3 class="photo-title">四季轮回</h3>
                <p class="photo-description">用镜头记录校园中四季的变迁</p>
              </div>
            </article>

            <article class="photo-card">
              <div class="photo-placeholder">
                <div class="placeholder-content">
                  <p class="placeholder-text">城市天际线</p>
                </div>
              </div>
              <div class="photo-info">
                <h3 class="photo-title">都市剪影</h3>
                <p class="photo-description">现代都市天际线的几何构图</p>
              </div>
            </article>

          </div>
        </div>

      </section>
    </main>
  </div>
</template>

<script setup>
// SEO配置
useHead({
  title: '摄影作品 - 理工科学生个人网站',
  meta: [
    {
      name: 'description',
      content: '理工科学生的摄影作品集，技术与艺术的完美结合，记录校园生活、项目制作和自然风光'
    },
    {
      name: 'keywords',
      content: '摄影作品,技术摄影,校园摄影,理工科摄影,艺术创作,视觉记录'
    }
  ]
})

// 页面进入动画
onMounted(() => {
  const cards = document.querySelectorAll('.photo-card')
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('animate-in')
    }, index * 150)
  })
})
</script>

<style scoped>
/* MrKriss风格摄影页面样式 */
.photography-page {
  @apply min-h-screen bg-white;
}



/* 主要内容区域 */
.main-content {
  @apply max-w-6xl mx-auto px-8 py-16;
}

/* 页面标题区域 */
.page-header {
  @apply text-center mb-16 pt-8;
}

.page-title {
  @apply text-5xl md:text-6xl font-signature text-black mb-4;
}

.page-subtitle {
  @apply text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed;
}

/* 摄影作品区域 */
.photography-section {
  @apply space-y-16;
}

.category-section {
  @apply mb-16;
}

.category-title {
  @apply text-3xl font-clean font-medium text-black mb-8 text-center;
}

/* 照片网格布局 */
.photo-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
}

/* 照片卡片样式 */
.photo-card {
  @apply bg-white border border-gray-100 rounded-lg overflow-hidden;
  @apply transition-all duration-300 hover:shadow-xl hover:border-primary-orange;
  @apply opacity-0 translate-y-4;
}

.photo-card.animate-in {
  @apply opacity-100 translate-y-0;
}

.photo-placeholder {
  @apply bg-gray-100 relative overflow-hidden;
  padding-bottom: 75%; /* 4:3 aspect ratio */
  position: relative;
}

.placeholder-content {
  @apply absolute inset-0 flex items-center justify-center;
  @apply bg-gray-200 text-gray-500;
}

.placeholder-text {
  @apply text-center font-medium;
}

.photo-image {
  @apply w-full h-full object-cover transition-transform duration-300;
  @apply group-hover:scale-105;
}

.photo-info {
  @apply p-6;
}

.photo-title {
  @apply text-xl font-clean font-medium text-black mb-2;
}

.photo-description {
  @apply text-gray-600 text-sm leading-relaxed;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .main-content {
    @apply px-4 py-12;
  }

  .page-title {
    @apply text-4xl;
  }

  .page-subtitle {
    @apply text-base;
  }

  .category-title {
    @apply text-2xl;
  }

  .photo-grid {
    @apply grid-cols-1 gap-6;
  }


}

/* 动画效果 */
.photo-card {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* 悬停效果 */
.photo-card:hover .photo-image {
  @apply scale-105;
}
</style>
