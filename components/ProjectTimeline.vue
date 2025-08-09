<template>
  <section class="project-timeline-section py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-5xl font-light text-center mb-20">项目历程</h2>
      
      <!-- 时间轴主体 -->
      <div class="timeline-container relative max-w-4xl mx-auto">
        <!-- 中央时间线 -->
        <div class="timeline-line absolute left-1/2 transform -translate-x-1/2 w-1 bg-primary-orange h-full"></div>
        
        <!-- 时间节点 -->
        <div 
          v-for="(project, index) in projects" 
          :key="project.id"
          :class="timelineItemClass(index)"
          class="timeline-item relative mb-16 cursor-pointer group"
          @click="scrollToProject(project.id)"
        >
          <!-- 时间节点圆圈 -->
          <div class="timeline-dot absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-orange rounded-full border-4 border-white shadow-lg z-10 group-hover:scale-125 transition-transform"></div>
          
          <!-- 项目卡片 -->
          <div :class="projectCardClass(index)" class="timeline-card bg-white rounded-lg shadow-md p-6 max-w-md group-hover:shadow-xl transition-shadow">
            <!-- 时间标签 -->
            <div class="project-date text-primary-orange font-medium mb-3">
              {{ formatDate(project.date) }}
            </div>
            
            <!-- 项目图片 -->
            <div class="project-image mb-4 overflow-hidden rounded-lg">
              <img
                :src="project.thumbnail"
                :alt="project.title"
                class="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            
            <!-- 项目信息 -->
            <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 text-sm mb-3">{{ project.summary }}</p>
            
            <!-- 项目类型标签 -->
            <div class="project-tags flex flex-wrap gap-2">
              <span 
                v-for="tag in project.technologies.slice(0, 3)"
                :key="tag"
                class="bg-primary-orange bg-opacity-10 text-primary-orange px-3 py-1 rounded-full text-xs font-medium"
              >
                {{ tag }}
              </span>
              <span 
                v-if="project.technologies.length > 3"
                class="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
              >
                +{{ project.technologies.length - 3 }}
              </span>
            </div>
            
            <!-- 点击提示 -->
            <div class="click-hint text-center mt-4 text-primary-orange text-sm opacity-0 group-hover:opacity-100 transition-opacity">
              点击查看详情 ↓
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projectsData, formatProjectDate } from '~/data/projects'

// 项目数据
const projects = ref(projectsData)

// 计算时间轴项目的位置类名
const timelineItemClass = (index) => {
  return index % 2 === 0 ? 'timeline-right' : 'timeline-left'
}

// 计算项目卡片的位置类名
const projectCardClass = (index) => {
  return index % 2 === 0 
    ? 'ml-auto timeline-card-right' 
    : 'mr-auto timeline-card-left'
}

// 格式化日期显示
const formatDate = (dateString) => {
  return formatProjectDate(dateString)
}

// 滚动到对应项目详情
const scrollToProject = (projectId) => {
  const targetElement = document.getElementById(`project-detail-${projectId}`)
  if (targetElement) {
    // 计算导航栏的高度偏移
    const navHeight = 80
    const elementPosition = targetElement.offsetTop - navHeight
    
    // 平滑滚动到目标位置
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    })
    
    // 添加高亮效果
    setTimeout(() => {
      targetElement.classList.add('highlight-project')
      setTimeout(() => {
        targetElement.classList.remove('highlight-project')
      }, 2000)
    }, 800)
  }
}

// 页面加载时的动画效果
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up')
      }
    })
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  })
  
  // 观察所有时间轴项目
  const timelineItems = document.querySelectorAll('.timeline-item')
  timelineItems.forEach((item) => {
    observer.observe(item)
  })
  
  onUnmounted(() => {
    observer.disconnect()
  })
})
</script>

<style scoped>
/* 响应式适配 */
@media (max-width: 768px) {
  .timeline-left,
  .timeline-right {
    @apply text-center px-8;
  }
  
  .timeline-card-left,
  .timeline-card-right {
    @apply mx-auto;
  }
  
  .timeline-line {
    @apply left-4;
  }
  
  .timeline-dot {
    @apply left-4;
  }
}
</style> 