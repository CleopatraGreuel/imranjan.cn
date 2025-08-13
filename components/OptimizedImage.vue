<template>
  <div class="optimized-image-container" :style="containerStyle">
    <!-- 占位符 -->
    <div
      v-if="!imageLoaded && placeholder"
      class="image-placeholder animate-pulse bg-gray-200"
      :style="placeholderStyle"
    >
      <div class="flex items-center justify-center h-full">
        <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
      </div>
    </div>

    <!-- 简化版本的NuxtImg -->
    <NuxtImg
      ref="imageRef"
      :src="src"
      :alt="alt"
      :preset="preset"
      :class="imageClass"
      :style="imageStyle"
      :loading="loading"
      @load="onImageLoad"
      @error="onImageError"
    />

    <!-- 错误状态 -->
    <div
      v-if="imageError"
      class="image-error bg-gray-100 border-2 border-dashed border-gray-300 flex items-center justify-center"
      :style="placeholderStyle"
    >
      <div class="text-center text-gray-500">
        <svg class="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
        </svg>
        <p class="text-sm">图片加载失败</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue'

// Props定义 - 简化版本
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  loading: {
    type: String,
    default: 'lazy'
  },
  placeholder: {
    type: Boolean,
    default: true
  },
  preset: {
    type: String,
    default: 'photo'
  },
  class: {
    type: [String, Array, Object],
    default: ''
  }
})

// 响应式状态
const imageLoaded = ref(false)
const imageError = ref(false)
const imageRef = ref(null)

// 简化的计算属性
const containerStyle = computed(() => ({}))

const placeholderStyle = computed(() => ({
  width: '100%',
  height: '100%'
}))

const imageClass = computed(() => {
  const classes = ['optimized-image', 'transition-opacity', 'duration-300']

  if (imageLoaded.value) {
    classes.push('opacity-100')
  } else {
    classes.push('opacity-0')
  }

  // 添加用户自定义类
  if (props.class) {
    if (typeof props.class === 'string') {
      classes.push(props.class)
    }
  }

  return classes.join(' ')
})

const imageStyle = computed(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover'
}))

// 事件处理
const onImageLoad = () => {
  imageLoaded.value = true
  imageError.value = false
}

const onImageError = () => {
  imageLoaded.value = false
  imageError.value = true
}
</script>

<style scoped>
.optimized-image-container {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.image-placeholder {
  border-radius: inherit;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.optimized-image {
  border-radius: inherit;
  position: relative;
  z-index: 2;
}

.image-error {
  border-radius: inherit;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
}

/* 响应式图片 */
.optimized-image {
  max-width: 100%;
  height: auto;
}

/* 渐入动画 */
.optimized-image {
  transition: opacity 0.3s ease-in-out;
}

/* 为摄影作品优化的样式 */
.optimized-image[data-preset="photo"] {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

/* 项目截图样式 */
.optimized-image[data-preset="project"] {
  border: 1px solid rgba(0, 0, 0, 0.1);
}

/* Hero图片样式 */
.optimized-image[data-preset="hero"] {
  object-position: center;
}
</style>
