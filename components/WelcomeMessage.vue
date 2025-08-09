<template>
  <div class="welcome-message-container">
    <div class="typewriter-container">
      <div class="welcome-text">
        <span 
          v-for="(char, index) in welcomeChars" 
          :key="`char-${index}`"
          class="welcome-char"
          :class="{ 
            'visible': visibleChars[index],
            'chinese-elegant': index < 4
          }"
        >
          {{ char }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

// 欢迎语文字
const welcomeText = '欢迎访问imranjan.cn'
const welcomeChars = ref([...welcomeText])
const visibleChars = ref(new Array(welcomeText.length).fill(false))
const animationRunning = ref(false)

// 启动打字机动画
const startTypingAnimation = () => {
  if (animationRunning.value) return
  
  animationRunning.value = true
  
  // 重置所有字符
  visibleChars.value = new Array(welcomeText.length).fill(false)
  
  // 逐字显示动画
  welcomeChars.value.forEach((_, index) => {
    setTimeout(() => {
      visibleChars.value[index] = true
      
      // 最后一个字符动画完成后
      if (index === welcomeChars.value.length - 1) {
        setTimeout(() => {
          animationRunning.value = false
        }, 500)
      }
    }, index * 100) // 稍微加快字符间隔
  })
}

// 页面可见性变化监听
const handleVisibilityChange = () => {
  if (!document.hidden) {
    setTimeout(() => {
      startTypingAnimation()
    }, 300)
  }
}

onMounted(async () => {
  await nextTick()
  
  // 等待字体加载完成再启动动画
  if (document.fonts) {
    await document.fonts.ready
  }
  
  // 页面加载时启动动画 - 减少延迟
  setTimeout(() => {
    startTypingAnimation()
  }, 200)
  
  // 监听页面可见性变化
  document.addEventListener('visibilitychange', handleVisibilityChange)
  
  // 监听路由变化
  const router = useRouter()
  const route = useRoute()
  
  watch(() => route.path, (newPath) => {
    if (newPath === '/') {
      setTimeout(() => {
        startTypingAnimation()
      }, 300)
    }
  })
})

onUnmounted(() => {
  document.removeEventListener('visibilitychange', handleVisibilityChange)
})
</script>

<style scoped>
.welcome-message-container {
  @apply absolute inset-0 flex items-center justify-center z-20;
  @apply pointer-events-none;
}

.typewriter-container {
  @apply relative;
}

.welcome-text {
  @apply text-center;
  @apply text-3xl md:text-4xl lg:text-5xl xl:text-6xl;
  @apply text-primary-orange;
  /* 添加文字阴影增强可读性 */
  text-shadow: 
    2px 2px 4px rgba(0, 0, 0, 0.7),
    0 0 8px rgba(139, 69, 19, 0.4),
    0 0 16px rgba(139, 69, 19, 0.2);
  
  line-height: 1.2;
}

.welcome-char {
  @apply inline-block;
  @apply opacity-0 transform translate-y-4;
  @apply transition-all duration-200 ease-out;
  @apply font-signature;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.welcome-char.chinese-elegant {
  @apply font-chinese-elegant;
  font-weight: 400;
  letter-spacing: 0.08em;
  transform-origin: center;
  /* 增强中文字体的曲线美感 */
  font-style: italic;
  text-rendering: optimizeLegibility;
  /* 轻微倾斜和旋转增加曲线感 */
  transform: skewY(-3deg) rotate(-1deg);
}

.welcome-char.visible {
  @apply opacity-100 translate-y-0;
  animation: typeIn 0.2s ease-out forwards;
}



/* 打字动画 */
@keyframes typeIn {
  0% {
    opacity: 0;
    transform: translateY(8px) scale(0.8);
  }
  50% {
    opacity: 0.8;
    transform: translateY(-2px) scale(1.05);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}



/* 响应式调整 */
@media (max-width: 1024px) {
  .welcome-text {
    @apply text-2xl md:text-3xl lg:text-4xl;
  }
}

@media (max-width: 768px) {
  .welcome-text {
    @apply text-xl md:text-2xl;
  }
}

@media (max-width: 480px) {
  .welcome-text {
    @apply text-lg;
    letter-spacing: 0.01em;
  }
}

/* 确保在视频上方显示 */
.welcome-message-container {
  z-index: 20;
}
</style> 