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
    
    <!-- 使用NuxtPicture获得最佳性能和兼容性 -->
    <NuxtPicture
      v-if="usePicture"
      ref="imageRef"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :quality="quality"
      :format="formats"
      :loading="loading"
      :sizes="responsiveSizes"
      :preset="preset"
      :class="imageClass"
      :style="imageStyle"
      :placeholder="placeholderSrc"
      @load="onImageLoad"
      @error="onImageError"
    />
    
    <!-- 或使用NuxtImg进行基础优化 -->
    <NuxtImg
      v-else
      ref="imageRef"
      :src="src"
      :alt="alt"
      :width="width"
      :height="height"
      :quality="quality"
      :format="preferredFormat"
      :loading="loading"
      :sizes="responsiveSizes"
      :preset="preset"
      :class="imageClass"
      :style="imageStyle"
      :placeholder="placeholderSrc"
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

// Props定义 - 增强版支持@nuxt/image所有功能
const props = defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  width: {
    type: [Number, String],
    default: null
  },
  height: {
    type: [Number, String],
    default: null
  },
  loading: {
    type: String,
    default: 'lazy',
    validator: (value) => ['lazy', 'eager'].includes(value)
  },
  quality: {
    type: Number,
    default: 85,
    validator: (value) => value >= 1 && value <= 100
  },
  format: {
    type: [String, Array],
    default: 'webp',
    validator: (value) => {
      const validFormats = ['webp', 'jpg', 'jpeg', 'png', 'avif', 'gif']
      if (Array.isArray(value)) {
        return value.every(f => validFormats.includes(f))
      }
      return validFormats.includes(value)
    }
  },
  fit: {
    type: String,
    default: 'cover',
    validator: (value) => ['cover', 'contain', 'fill', 'inside', 'outside'].includes(value)
  },
  placeholder: {
    type: Boolean,
    default: true
  },
  // 预设配置：hero, project, photo, thumbnail
  preset: {
    type: String,
    default: '',
    validator: (value) => ['', 'hero', 'project', 'photo', 'thumbnail'].includes(value)
  },
  // 响应式尺寸
  sizes: {
    type: String,
    default: ''
  },
  // 是否使用Picture元素（推荐用于关键图片）
  usePicture: {
    type: Boolean,
    default: false
  },
  // 模糊占位符
  blur: {
    type: [Boolean, Number],
    default: false
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

// 计算属性
const containerStyle = computed(() => {
  const styles = {}
  if (props.width) styles.width = typeof props.width === 'number' ? `${props.width}px` : props.width
  if (props.height) styles.height = typeof props.height === 'number' ? `${props.height}px` : props.height
  return styles
})

const placeholderStyle = computed(() => {
  const styles = {
    width: '100%',
    height: '100%'
  }
  if (props.width && props.height) {
    styles.aspectRatio = `${props.width} / ${props.height}`
  }
  return styles
})

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
    } else if (Array.isArray(props.class)) {
      classes.push(...props.class)
    } else {
      Object.keys(props.class).forEach(key => {
        if (props.class[key]) classes.push(key)
      })
    }
  }
  
  return classes.join(' ')
})

const imageStyle = computed(() => {
  const styles = {
    objectFit: props.fit,
    width: '100%',
    height: '100%'
  }
  
  if (!imageLoaded.value && props.placeholder) {
    styles.position = 'absolute'
    styles.top = '0'
    styles.left = '0'
  }
  
  return styles
})

// 格式配置
const preferredFormat = computed(() => {
  return Array.isArray(props.format) ? props.format[0] : props.format
})

const formats = computed(() => {
  if (Array.isArray(props.format)) {
    return props.format
  }
  // 为Picture元素提供多种格式以获得最佳兼容性
  return ['webp', props.format].filter((f, i, arr) => arr.indexOf(f) === i)
})

// 响应式尺寸配置
const responsiveSizes = computed(() => {
  if (props.sizes) return props.sizes
  
  // 根据预设自动生成sizes
  switch (props.preset) {
    case 'hero':
      return '100vw'
    case 'project':
      return '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
    case 'photo':
      return '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
    case 'thumbnail':
      return '(max-width: 768px) 50vw, 25vw'
    default:
      return props.width ? `${props.width}px` : '100vw'
  }
})

// 占位符图片
const placeholderSrc = computed(() => {
  if (!props.blur) return undefined
  
  // 生成模糊占位符
  const blurAmount = typeof props.blur === 'number' ? props.blur : 10
  return `${props.src}?blur=${blurAmount}&quality=20&width=100`
})

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