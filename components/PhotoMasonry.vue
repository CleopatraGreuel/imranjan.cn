<template>
  <div class="photo-masonry-container" ref="masonryContainer">
    <div class="photo-grid" ref="photoGrid">
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="photo-item animate-in"
        :class="[
          `photo-${photo.size || 'small'}`,
          `photo-${photo.orientation || 'portrait'}`,
          { 'photo-featured': photo.featured }
        ]"
        :style="{
          animationDelay: `${index * 0.1}s`,
          ...getPhotoStyle(photo, index)
        }"
        @click="openLightbox(photo, index)"
      >
        <img
          :src="photo.src"
          :alt="photo.alt"
          class="photo-image"
          :style="{ objectPosition: photo.objectPosition || 'center' }"
          loading="lazy"
          @load="onImageLoad($event, photo, index)"
          @error="onImageError"
        />
        <div class="photo-overlay">
          <div class="photo-info">
            <p class="photo-title">{{ photo.alt }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 灯箱模态框 -->
  <div
    v-if="lightboxOpen"
    class="lightbox-overlay"
    @click="closeLightbox"
  >
    <div class="lightbox-content" @click.stop>
      <button
        class="lightbox-close"
        @click="closeLightbox"
      >
        ×
      </button>
      <img
        v-if="currentPhoto?.src"
        :src="currentPhoto.src"
        :alt="currentPhoto.alt || '照片'"
        class="lightbox-image"
        loading="eager"
      />
      <div class="lightbox-nav">
        <button
          class="nav-btn prev"
          @click="previousPhoto"
          :disabled="currentIndex === 0"
        >
          ←
        </button>
        <button
          class="nav-btn next"
          @click="nextPhoto"
          :disabled="currentIndex === photos.length - 1"
        >
          →
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, computed } from 'vue'

const props = defineProps({
  photos: {
    type: Array,
    required: true
  }
})

const masonryContainer = ref(null)
const photoGrid = ref(null)
const lightboxOpen = ref(false)
const currentPhoto = ref(null)
const currentIndex = ref(0)
const loadedImages = ref(new Set())
const gridLayout = ref([])

// 智能布局配置
const layoutConfig = ref({
  columns: 3,
  gap: 16,
  baseHeight: 280,
  aspectRatios: {
    square: 1,
    portrait: 0.75,
    landscape: 1.6,
    wide: 2.2
  }
})

// 响应式布局配置
const updateLayoutConfig = () => {
  if (!masonryContainer.value) return

  const containerWidth = masonryContainer.value.offsetWidth

  if (containerWidth < 640) {
    // 移动端
    layoutConfig.value = {
      columns: 1,
      gap: 12,
      baseHeight: 250,
      aspectRatios: { square: 1, portrait: 0.75, landscape: 1.3, wide: 1.8 }
    }
  } else if (containerWidth < 1024) {
    // 平板端
    layoutConfig.value = {
      columns: 2,
      gap: 16,
      baseHeight: 280,
      aspectRatios: { square: 1, portrait: 0.75, landscape: 1.5, wide: 2 }
    }
  } else if (containerWidth < 1280) {
    // 桌面端
    layoutConfig.value = {
      columns: 3,
      gap: 18,
      baseHeight: 300,
      aspectRatios: { square: 1, portrait: 0.75, landscape: 1.6, wide: 2.2 }
    }
  } else {
    // 大屏幕
    layoutConfig.value = {
      columns: 4,
      gap: 20,
      baseHeight: 320,
      aspectRatios: { square: 1, portrait: 0.75, landscape: 1.7, wide: 2.4 }
    }
  }
}

// 计算图片布局样式
const getPhotoStyle = (photo, index) => {
  if (!loadedImages.value.has(index)) {
    return {}
  }

  const layout = gridLayout.value[index]
  if (!layout) return {}

  return {
    position: 'absolute',
    left: `${layout.x}px`,
    top: `${layout.y}px`,
    width: `${layout.width}px`,
    height: `${layout.height}px`,
    zIndex: layout.zIndex || 1
  }
}

// 智能布局算法
const calculateLayout = () => {
  if (!photoGrid.value || props.photos.length === 0) return

  // 更新布局配置
  updateLayoutConfig()

  const containerWidth = photoGrid.value.offsetWidth
  const config = layoutConfig.value
  const columnWidth = (containerWidth - (config.columns - 1) * config.gap) / config.columns
  const columnHeights = new Array(config.columns).fill(0)
  const newLayout = []

  props.photos.forEach((photo, index) => {
    // 确定图片尺寸和跨度
    const { width, height, columnSpan } = calculatePhotoSize(photo, columnWidth)

    // 找到最适合的列位置
    const position = findBestPosition(columnHeights, columnSpan, width, height)

    // 计算实际位置
    const x = position.column * (columnWidth + config.gap)
    const y = position.y

    // 更新列高度
    for (let i = position.column; i < position.column + columnSpan; i++) {
      columnHeights[i] = position.y + height + config.gap
    }

    // 添加到布局数组
    newLayout[index] = {
      x,
      y,
      width,
      height,
      columnSpan,
      zIndex: photo.size === 'large' ? 2 : 1
    }
  })

  gridLayout.value = newLayout

  // 更新容器高度
  const maxHeight = Math.max(...columnHeights)
  if (photoGrid.value) {
    photoGrid.value.style.height = `${maxHeight}px`
  }
}

// 计算单张图片的尺寸
const calculatePhotoSize = (photo, columnWidth) => {
  const config = layoutConfig.value
  let columnSpan = 1

  // 根据图片特性确定跨度
  if (photo.size === 'large') {
    // 大图片策略：横向图片跨2列，竖向图片保持单列
    if (photo.orientation === 'landscape') {
      columnSpan = Math.min(2, config.columns)
    } else {
      columnSpan = 1
    }
  } else if (photo.size === 'medium') {
    if (photo.orientation === 'landscape') {
      // 中等横向图片：在有空间时跨2列
      columnSpan = config.columns >= 3 ? 2 : 1
    } else {
      columnSpan = 1
    }
  } else {
    // 小图片：保持单列
    columnSpan = 1
  }

  // 确保不超出网格
  columnSpan = Math.min(columnSpan, config.columns)

  const width = columnSpan * columnWidth + (columnSpan - 1) * config.gap

  // 使用图片的实际长宽比
  let aspectRatio
  if (photo.naturalWidth && photo.naturalHeight) {
    // 如果有实际尺寸信息，使用实际长宽比
    aspectRatio = photo.naturalWidth / photo.naturalHeight
  } else {
    // 回退到预设比例
    aspectRatio = photo.orientation === 'landscape'
      ? config.aspectRatios.landscape
      : config.aspectRatios.portrait
  }

  const height = width / aspectRatio

  return { width, height, columnSpan, aspectRatio }
}

// 找到最佳放置位置
const findBestPosition = (columnHeights, columnSpan, width, height) => {
  const config = layoutConfig.value
  let bestColumn = 0
  let bestY = Infinity

  // 尝试每个可能的起始列
  for (let col = 0; col <= config.columns - columnSpan; col++) {
    // 找到这个跨度范围内的最高点
    let maxHeight = 0
    for (let i = col; i < col + columnSpan; i++) {
      maxHeight = Math.max(maxHeight, columnHeights[i])
    }

    // 选择最低的位置
    if (maxHeight < bestY) {
      bestY = maxHeight
      bestColumn = col
    }
  }

  return {
    column: bestColumn,
    y: bestY
  }
}

// 图片加载处理
const onImageLoad = (event, photo, index) => {
  const img = event.target

  // 保存图片的实际尺寸信息
  photo.naturalWidth = img.naturalWidth
  photo.naturalHeight = img.naturalHeight

  loadedImages.value.add(index)

  // 当所有图片加载完成后重新计算布局
  if (loadedImages.value.size === props.photos.length) {
    nextTick(() => {
      calculateLayout()
    })
  }
}

const onImageError = (event) => {
  console.error('Image failed to load:', event.target.src)
}

// 灯箱功能
const openLightbox = (photo, index) => {
  console.log('Opening lightbox for photo:', photo)
  currentPhoto.value = photo
  currentIndex.value = index
  lightboxOpen.value = true
  // 防止背景滚动
  document.body.style.overflow = 'hidden'
  document.body.style.paddingRight = '15px' // 补偿滚动条宽度
}

const closeLightbox = () => {
  lightboxOpen.value = false
  currentPhoto.value = null
  // 恢复背景滚动
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
}

const previousPhoto = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    currentPhoto.value = props.photos[currentIndex.value]
  }
}

const nextPhoto = () => {
  if (currentIndex.value < props.photos.length - 1) {
    currentIndex.value++
    currentPhoto.value = props.photos[currentIndex.value]
  }
}

// 键盘导航
const handleKeydown = (event) => {
  if (!lightboxOpen.value) return

  switch (event.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      previousPhoto()
      break
    case 'ArrowRight':
      nextPhoto()
      break
  }
}

// 响应式处理
const handleResize = () => {
  // 防抖处理
  clearTimeout(window.resizeTimer)
  window.resizeTimer = setTimeout(() => {
    if (loadedImages.value.size === props.photos.length) {
      nextTick(() => {
        calculateLayout()
      })
    }
  }, 150)
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)

  // 添加窗口大小变化监听
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', handleResize)
  }

  // 初始化布局
  nextTick(() => {
    if (photoGrid.value) {
      calculateLayout()
    }
  })

  // 触发进入动画
  setTimeout(() => {
    const items = masonryContainer.value?.querySelectorAll('.photo-item')
    items?.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('visible')
      }, index * 100)
    })
  }, 100)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeydown)

  // 清理响应式监听
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize)
  }

  // 确保恢复滚动状态
  document.body.style.overflow = ''
  document.body.style.paddingRight = ''
})
</script>

<style scoped>
/* 智能网格布局容器 */
.photo-masonry-container {
  @apply w-full;
}

.photo-grid {
  @apply relative w-full;
  min-height: 400px;
}

/* 响应式网格配置 */
@media (max-width: 640px) {
  .photo-grid {
    /* 移动端使用简单的单列布局 */
    @apply flex flex-col space-y-4;
  }

  .photo-item {
    @apply relative;
    position: relative !important;
    width: 100% !important;
    height: auto !important;
    left: auto !important;
    top: auto !important;
  }

  .photo-image {
    width: 100% !important;
    height: auto !important;
    object-fit: contain !important;
  }
}

/* 照片项目基础样式 */
.photo-item {
  @apply overflow-hidden rounded-lg cursor-pointer;
  @apply transition-all duration-300;
  @apply opacity-0 translate-y-4;
  @apply bg-gray-100;

  /* 智能网格布局的默认样式 */
  @media (min-width: 641px) {
    position: absolute;
  }
}

/* 尺寸变体样式 */
.photo-large {
  @apply shadow-xl;
}

.photo-medium {
  @apply shadow-lg;
}

.photo-small {
  @apply shadow-md;
}

/* 横向图片特殊处理 */
.photo-landscape {
  /* 横向图片的特殊样式 */
}

.photo-portrait {
  /* 竖向图片的特殊样式 */
}

/* 特色图片 */
.photo-featured {
  @apply ring-2 ring-blue-500 ring-opacity-50;
}

.photo-item.visible {
  @apply opacity-100 translate-y-0;
}

.photo-image {
  @apply w-full transition-transform duration-300;
  @apply block;
  /* 智能网格布局中，图片需要填满容器 */
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Hover效果 */
.photo-item:hover {
  @apply shadow-2xl;
  transform: translateY(-2px);
}

.photo-item:hover .photo-image {
  transform: scale(1.05);
}

/* 大尺寸图片的hover效果调整 */
.photo-large:hover .photo-image {
  transform: scale(1.02);
}

.photo-medium:hover .photo-image {
  transform: scale(1.03);
}

/* 照片覆盖层 */
.photo-overlay {
  @apply absolute inset-0 bg-black bg-opacity-0 transition-all duration-300;
  @apply flex items-end justify-start p-4;
}

.photo-item:hover .photo-overlay {
  @apply bg-opacity-30;
}

.photo-info {
  @apply text-white opacity-0 transition-opacity duration-300 transform translate-y-2;
}

.photo-item:hover .photo-info {
  @apply opacity-100 translate-y-0;
}

.photo-title {
  @apply text-sm font-medium;
}

/* 灯箱样式 */
.lightbox-overlay {
  @apply fixed inset-0 bg-black bg-opacity-90;
  @apply flex items-center justify-center p-4;
  z-index: 9999 !important;
  animation: fadeIn 0.3s ease-out;
}

.lightbox-content {
  @apply relative max-w-full max-h-full;
  @apply flex items-center justify-center;
}

.lightbox-image {
  @apply object-contain;
  @apply rounded-lg shadow-2xl;
  /* 确保图片正确显示 */
  max-width: 90vw;
  max-height: 90vh;
  width: auto;
  height: auto;
  display: block;
  /* 确保图片可见 */
  opacity: 1 !important;
  z-index: 10;
}

.lightbox-close {
  @apply absolute top-4 right-4 text-white text-4xl;
  @apply hover:text-gray-300 transition-colors duration-200;
  @apply z-10 cursor-pointer;
  @apply w-12 h-12 flex items-center justify-center;
  @apply rounded-full hover:bg-white hover:bg-opacity-20;
}

.lightbox-nav {
  @apply absolute inset-y-0 left-0 right-0;
  @apply flex items-center justify-between px-4;
  @apply pointer-events-none;
}

.nav-btn {
  @apply text-white text-3xl font-bold;
  @apply hover:text-gray-300 transition-colors duration-200;
  @apply w-12 h-12 flex items-center justify-center;
  @apply rounded-full hover:bg-white hover:bg-opacity-20;
  @apply pointer-events-auto cursor-pointer;
  @apply disabled:opacity-30 disabled:cursor-not-allowed;
}

.nav-btn:disabled:hover {
  @apply text-white bg-transparent;
}

/* 动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-in {
  animation: slideInUp 0.6s ease-out forwards;
}

@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 响应式调整 */
@media (max-width: 640px) {
  .photo-masonry {
    @apply space-y-3;
  }

  .photo-item {
    @apply mb-3;
  }

  .lightbox-close {
    @apply text-3xl top-2 right-2;
  }

  .nav-btn {
    @apply text-2xl w-10 h-10;
  }
}
</style>
