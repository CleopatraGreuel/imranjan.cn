<template>
  <div 
    ref="glassCursor"
    class="glass-cursor"
    :class="{ 'is-hovering': isHovering, 'is-nav-link': isNavLink }"
    :style="cursorStyle"
  >
    <!-- 玻璃主体 - 现在在底层或隐藏 -->
    <div class="glass-inner"></div>
    <!-- 8个彩虹点围绕分布 - 在最上层 -->
    <div class="rainbow-dots">
      <div class="rainbow-dot dot-red"></div>
      <div class="rainbow-dot dot-orange"></div>
      <div class="rainbow-dot dot-yellow"></div>
      <div class="rainbow-dot dot-green"></div>
      <div class="rainbow-dot dot-cyan"></div>
      <div class="rainbow-dot dot-blue"></div>
      <div class="rainbow-dot dot-purple"></div>
      <div class="rainbow-dot dot-magenta"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const glassCursor = ref(null)
const mouseX = ref(0)
const mouseY = ref(0)
const isVisible = ref(false)
const isHovering = ref(false)
const isNavLink = ref(false)

// 性能优化：限制检测频率
let detectThrottle = false

const cursorStyle = computed(() => ({
  transform: `translate(${mouseX.value - 20}px, ${mouseY.value - 20}px)`,
  opacity: isVisible.value ? 1 : 0
}))

const updateCursorPosition = (e) => {
  // 更新鼠标位置（高频率）
  mouseX.value = e.clientX
  mouseY.value = e.clientY
  if (!isVisible.value) {
    isVisible.value = true
  }
  
  // 检测悬停状态（限制频率）
  if (!detectThrottle) {
    detectThrottle = true
    
    const element = document.elementFromPoint(e.clientX, e.clientY)
    if (element) {
      // 查找最近的可交互元素
      const interactiveElement = element.closest('a, button, [role="button"], input, textarea, select, .nav-link-horizontal')
      const navigationElement = element.closest('.nav-link-horizontal')
      
      isHovering.value = !!interactiveElement
      isNavLink.value = !!navigationElement
    } else {
      isHovering.value = false
      isNavLink.value = false
    }
    
    // 重置throttle
    setTimeout(() => {
      detectThrottle = false
    }, 16) // ~60fps
  }
}

const hideCursor = () => {
  isVisible.value = false
}

const showCursor = () => {
  isVisible.value = true
}

onMounted(() => {
  // 只在支持精确指针的设备上启用（桌面设备）
  if (window.matchMedia('(pointer: fine)').matches) {
    // 隐藏原生鼠标
    document.body.style.cursor = 'none'
    
    // 监听鼠标移动
    document.addEventListener('mousemove', updateCursorPosition)
    document.addEventListener('mouseenter', showCursor)
    
    // 监听鼠标离开窗口
    document.addEventListener('mouseleave', hideCursor)
    document.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget || e.relatedTarget === null) {
        hideCursor()
      }
    })
  }
})

onUnmounted(() => {
  // 恢复原生鼠标
  document.body.style.cursor = 'auto'
  
  // 清理事件监听器
  document.removeEventListener('mousemove', updateCursorPosition)
  document.removeEventListener('mouseenter', showCursor)
  document.removeEventListener('mouseleave', hideCursor)
  document.removeEventListener('mouseout', hideCursor)
})
</script>

<style scoped>
.glass-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  pointer-events: none;
  z-index: 9999;
  transition: opacity 0.3s ease;
  will-change: transform;
}

/* 8个彩虹点围绕分布 - 确保在最上层 */
.rainbow-dots {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 10; /* 确保在玻璃主体之上 */
  animation: rotateRainbow 8s linear infinite; /* 8秒旋转一圈 */
}

.rainbow-dot {
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  opacity: 0.9;
  transition: all 0.1s ease-out;
  will-change: transform;
  /* 发光效果 */
  filter: blur(1px);
}

/* 8个彩虹点的精确圆周分布 - 以鼠标中心为圆心，半径18px */
.dot-red {
  background-color: #ff0000;
  box-shadow: 0 0 8px rgba(255, 0, 0, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateY(-18px); /* 顶部 */
}

.dot-orange {
  background-color: #ffa500;
  box-shadow: 0 0 8px rgba(255, 165, 0, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(13px) translateY(-13px); /* 右上角 */
}

.dot-yellow {
  background-color: #ffff00;
  box-shadow: 0 0 8px rgba(255, 255, 0, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(18px); /* 右侧 */
}

.dot-green {
  background-color: #00ff00;
  box-shadow: 0 0 8px rgba(0, 255, 0, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(13px) translateY(13px); /* 右下角 */
}

.dot-cyan {
  background-color: #00ffff;
  box-shadow: 0 0 8px rgba(0, 255, 255, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateY(18px); /* 底部 */
}

.dot-blue {
  background-color: #0000ff;
  box-shadow: 0 0 8px rgba(0, 0, 255, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(-13px) translateY(13px); /* 左下角 */
}

.dot-purple {
  background-color: #800080;
  box-shadow: 0 0 8px rgba(128, 0, 128, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(-18px); /* 左侧 */
}

.dot-magenta {
  background-color: #ff00ff;
  box-shadow: 0 0 8px rgba(255, 0, 255, 0.8);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateX(-13px) translateY(-13px); /* 左上角 */
}

/* 旋转动画关键帧 */
@keyframes rotateRainbow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 玻璃主体 - 保留模糊效果，但移除边框线 */
.glass-inner {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 1; /* 确保在彩虹点下方 */
  
  /* iOS风格的液态玻璃效果 - 保留模糊 */
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(2px) saturate(110%);
  -webkit-backdrop-filter: blur(2px) saturate(110%);
  
  /* 移除边框，但保留内阴影营造深度感 */
  border: none;
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 0 20px rgba(255, 255, 255, 0.1);
  
  /* 平滑动画 */
  transition: all 0.1s ease-out;
}

/* 鼠标悬停在可交互元素上时的效果 */
.glass-cursor.is-hovering .rainbow-dot {
  transform: translate(-50%, -50%) scale(1.3);
  filter: blur(1.5px);
}

/* 保持每个点的相对位置 */
.glass-cursor.is-hovering .dot-red {
  transform: translate(-50%, -50%) translateY(-18px) scale(1.3);
}

.glass-cursor.is-hovering .dot-orange {
  transform: translate(-50%, -50%) translateX(13px) translateY(-13px) scale(1.3);
}

.glass-cursor.is-hovering .dot-yellow {
  transform: translate(-50%, -50%) translateX(18px) scale(1.3);
}

.glass-cursor.is-hovering .dot-green {
  transform: translate(-50%, -50%) translateX(13px) translateY(13px) scale(1.3);
}

.glass-cursor.is-hovering .dot-cyan {
  transform: translate(-50%, -50%) translateY(18px) scale(1.3);
}

.glass-cursor.is-hovering .dot-blue {
  transform: translate(-50%, -50%) translateX(-13px) translateY(13px) scale(1.3);
}

.glass-cursor.is-hovering .dot-purple {
  transform: translate(-50%, -50%) translateX(-18px) scale(1.3);
}

.glass-cursor.is-hovering .dot-magenta {
  transform: translate(-50%, -50%) translateX(-13px) translateY(-13px) scale(1.3);
}

/* 悬停时玻璃主体增强模糊效果，但无边框 */
.glass-cursor.is-hovering .glass-inner {
  transform: scale(1.2);
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(15px) saturate(120%);
  -webkit-backdrop-filter: blur(15px) saturate(120%);
  border: none;
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    0 0 30px rgba(255, 255, 255, 0.2);
}

/* 在暗色背景上的玻璃效果 - 无边框 */
.dark .glass-inner {
  background: rgba(255, 255, 255, 0.08);
  border: none;
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 0 20px rgba(255, 255, 255, 0.05);
}

.dark .glass-cursor.is-hovering .glass-inner {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(18px) saturate(125%);
  -webkit-backdrop-filter: blur(18px) saturate(125%);
  border: none;
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 0 30px rgba(255, 255, 255, 0.15);
}

/* 在导航链接上的橙色主题色散效果 */
.glass-cursor.is-nav-link .rainbow-dot {
  filter: blur(2px);
  transform: translate(-50%, -50%) scale(1.5);
}

/* 所有点变成棕色主题色调 */
.glass-cursor.is-nav-link .dot-red,
.glass-cursor.is-nav-link .dot-orange,
.glass-cursor.is-nav-link .dot-yellow,
.glass-cursor.is-nav-link .dot-green,
.glass-cursor.is-nav-link .dot-cyan,
.glass-cursor.is-nav-link .dot-blue,
.glass-cursor.is-nav-link .dot-purple,
.glass-cursor.is-nav-link .dot-magenta {
  background-color: #8B4513; /* 统一的棕色主题色 */
  box-shadow: 0 0 12px rgba(139, 69, 19, 0.9);
}

/* 保持各点的相对位置但应用缩放 */
.glass-cursor.is-nav-link .dot-red {
  transform: translate(-50%, -50%) translateY(-18px) scale(1.5);
}

.glass-cursor.is-nav-link .dot-orange {
  transform: translate(-50%, -50%) translateX(13px) translateY(-13px) scale(1.5);
}

.glass-cursor.is-nav-link .dot-yellow {
  transform: translate(-50%, -50%) translateX(18px) scale(1.5);
}

.glass-cursor.is-nav-link .dot-green {
  transform: translate(-50%, -50%) translateX(13px) translateY(13px) scale(1.5);
}

.glass-cursor.is-nav-link .dot-cyan {
  transform: translate(-50%, -50%) translateY(18px) scale(1.5);
}

.glass-cursor.is-nav-link .dot-blue {
  transform: translate(-50%, -50%) translateX(-13px) translateY(13px) scale(1.5);
}

.glass-cursor.is-nav-link .dot-purple {
  transform: translate(-50%, -50%) translateX(-18px) scale(1.5);
}

.glass-cursor.is-nav-link .dot-magenta {
  transform: translate(-50%, -50%) translateX(-13px) translateY(-13px) scale(1.5);
}

/* 导航链接状态时的棕色玻璃效果 - 无边框 */
.glass-cursor.is-nav-link .glass-inner {
  background: rgba(139, 69, 19, 0.1); /* 棕色主题色 */
  transform: scale(1.2);
  backdrop-filter: blur(15px) saturate(130%);
  -webkit-backdrop-filter: blur(15px) saturate(130%);
  border: none;
  box-shadow: 
    inset 0 1px 0 rgba(255, 255, 255, 0.4),
    0 0 30px rgba(139, 69, 19, 0.3);
}

/* 高性能动画优化 */
@media (prefers-reduced-motion: reduce) {
  .glass-cursor {
    transition: none;
  }
  
  .glass-inner {
    transition: none;
  }
  
  .rainbow-dots {
    animation: none;
  }
  
  .rainbow-dot {
    transition: none;
  }
}

/* 移动设备和触摸设备隐藏 */
@media (pointer: coarse), (hover: none) {
  .glass-cursor {
    display: none !important;
  }
}

/* 玻璃主体增强效果 */
.glass-cursor .glass-inner {
  /* 轻微增强对比度和亮度 */
  filter: contrast(1.05) brightness(1.02);
}



/* 降级方案：不支持 backdrop-filter 的浏览器 */
@supports not (backdrop-filter: blur(2px)) {
  .glass-inner {
    background: rgba(255, 255, 255, 0.15);
    border: none;
    box-shadow: 
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }
  
  .glass-cursor.is-hovering .glass-inner {
    background: rgba(255, 255, 255, 0.2);
  }
  
  .glass-cursor.is-nav-link .glass-inner {
    background: rgba(255, 120, 0, 0.15);
  }
  
  /* 保持彩虹点的基本效果，但简化发光 */
  .rainbow-dot {
    filter: none; /* 移除模糊效果 */
    opacity: 0.8;
  }
}
</style> 