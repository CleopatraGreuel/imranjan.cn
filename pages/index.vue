<template>
  <div class="homepage">
    <!-- 统一头部组件 -->
    <PageHeader />



    <!-- 下半部分：宽幅视频区域 -->
    <div class="video-section">
      <!-- 视频容器 -->
      <div class="video-container">
        <!-- 宽幅项目展示视频 -->
        <video
          ref="video1"
          autoplay
          muted
          playsinline
          preload="auto"
          class="hero-video active"
        >
          <source src="/videos/hero-video.webm" type="video/webm">
          <source src="/videos/hero-video.mp4" type="video/mp4">
          您的浏览器不支持视频播放，请升级浏览器或使用现代浏览器访问
        </video>

        <video
          ref="video2"
          muted
          playsinline
          preload="auto"
          class="hero-video"
        >
          <source src="/videos/hero-video2.webm" type="video/webm">
          您的浏览器不支持视频播放，请升级浏览器或使用现代浏览器访问
        </video>

        <!-- 欢迎语组件 -->
        <div class="welcome-overlay">
          <WelcomeMessage />
        </div>

        <!-- 占位符已注释，视频正常播放 -->
        <!-- <div class="video-placeholder">
          <div class="placeholder-content">
            <div class="placeholder-text">
              <h2 class="text-white text-2xl md:text-4xl font-clean mb-4">
                您的项目展示视频
              </h2>
              <p class="text-gray-300 text-lg">
                建议视频尺寸：1920x1080 (16:9比例)
              </p>
            </div>
          </div>
        </div> -->
      </div>
    </div>

    <!-- 底部版权信息 -->
    <footer class="bottom-copyright">
      <p class="copyright-text">© 2025 依木热尼江·买买提明. 个人网站</p>
    </footer>
  </div>
</template>

<script setup>

// 视频引用
const video1 = ref(null)
const video2 = ref(null)
let currentVideo = 1
let isTransitioning = false

// SEO配置
useHead({
  title: '首页 - 理工科学生个人网站',
  meta: [
    {
      name: 'description',
      content: '专为理工科大学生设计的个人品牌网站，展示技术项目历程、竞赛作品和摄影创作'
    }
  ]
})

// 切换视频函数
const switchVideo = async () => {
  if (isTransitioning) return
  isTransitioning = true

  const activeVideo = currentVideo === 1 ? video1.value : video2.value
  const nextVideo = currentVideo === 1 ? video2.value : video1.value

  // 预加载下一个视频
  if (nextVideo.readyState < 2) {
    nextVideo.load()
    await new Promise(resolve => {
      nextVideo.addEventListener('loadeddata', resolve, { once: true })
    })
  }

  // 开始淡出当前视频，淡入下一个视频
  activeVideo.classList.remove('active')
  nextVideo.classList.add('active')

  // 播放下一个视频
  nextVideo.currentTime = 0
  await nextVideo.play().catch(console.error)

  // 暂停当前视频
  setTimeout(() => {
    activeVideo.pause()
    activeVideo.currentTime = 0
  }, 1000) // 等待切换动画完成

  // 更新当前视频索引
  currentVideo = currentVideo === 1 ? 2 : 1
  isTransitioning = false
}

// 防止页面滚动和视频控制
onMounted(() => {
  document.body.style.overflow = 'hidden'

  // 初始化视频
  const initVideo = (video) => {
    if (!video) return

    // 强制静音以确保自动播放
    video.muted = true
    video.preload = 'auto'

    // 监听视频可以播放时设置正确的样式
    video.addEventListener('canplay', () => {
      if (video.classList.contains('active')) {
        video.style.opacity = '1'
      }
    })

    // 监听视频结束事件，切换到下一个视频
    video.addEventListener('ended', () => {
      switchVideo()
    })

    // 监听视频加载完成
    video.addEventListener('loadeddata', () => {
      if (video === video1.value && currentVideo === 1) {
        video.play().catch(console.error)
      }
    })
  }

  // 初始化两个视频
  if (video1.value) {
    initVideo(video1.value)
  }
  if (video2.value) {
    initVideo(video2.value)
  }

  // 页面可见时确保视频播放
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
      const activeVideo = currentVideo === 1 ? video1.value : video2.value
      if (activeVideo && activeVideo.paused) {
        activeVideo.play().catch(console.error)
      }
    }
  })
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})

</script>

<style scoped>
/* MrKriss精确复制布局 */
.homepage {
  @apply fixed inset-0 w-full h-full flex flex-col;
}



/* 下半部分：视频区域 */
.video-section {
  @apply flex-grow relative overflow-hidden;
  @apply bg-gray-900; /* 黑色背景作为视频加载前的背景 */
}

.video-container {
  @apply w-full h-full relative;
}

.hero-video {
  @apply w-full h-full object-cover absolute inset-0;
  /* @apply filter grayscale; 黑白效果，模仿MrKriss */
  opacity: 0;
  transition: opacity 1s ease-in-out;
  z-index: 1;
}

.hero-video.active {
  opacity: 1;
  z-index: 2;
}

.welcome-overlay {
  @apply absolute inset-0;
  z-index: 10;
  pointer-events: none;
}

.welcome-overlay > * {
  pointer-events: auto;
}

/* 临时占位符样式 */
.video-placeholder {
  @apply w-full h-full relative;
  @apply bg-gray-800; /* 深灰背景 */
  background: linear-gradient(135deg, #1f2937 0%, #374151 50%, #1f2937 100%);
}

.placeholder-content {
  @apply absolute inset-0 flex items-center justify-center;
  @apply bg-black bg-opacity-40;
}

.placeholder-text {
  @apply text-center px-8;
}

/* 底部版权 */
.bottom-copyright {
  @apply flex-shrink-0 w-full;
  @apply bg-white;
  @apply py-4;
  height: 8vh; /* 固定高度，与上面的计算对应 */
  @apply flex items-center justify-center;
}

.copyright-text {
  @apply text-gray-700 text-center text-sm;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .bottom-copyright {
    height: 10vh; /* 移动端版权区域稍大 */
  }

  .placeholder-text h2 {
    @apply text-xl;
  }

  .placeholder-text p {
    @apply text-base;
  }
}



/* 进入动画 */
.video-container {
  animation: fadeIn 1.5s ease-out 0.6s both;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
