<template>
  <section class="project-details-section py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-5xl font-light text-center mb-20">项目详情</h2>
      
      <!-- 项目详情列表 -->
      <div class="project-details-list space-y-32">
        <div 
          v-for="project in projects"
          :key="project.id"
          :id="`project-detail-${project.id}`"
          class="project-detail-item max-w-6xl mx-auto transition-all duration-300"
        >
          <!-- 项目标题区域 -->
          <div class="project-header text-center mb-12">
            <div class="project-date text-primary-orange font-medium text-lg mb-2">
              {{ formatDate(project.date) }}
            </div>
            <h3 class="text-4xl font-light mb-4">{{ project.title }}</h3>
            <div class="project-meta flex justify-center items-center flex-wrap gap-4 text-gray-600">
              <span class="category-tag bg-gray-100 px-4 py-1 rounded-full">{{ project.category }}</span>
              <span :class="getStatusClass(project.status)" class="status-tag px-4 py-1 rounded-full">{{ project.status }}</span>
              <span class="award-tag bg-yellow-100 text-yellow-800 px-4 py-1 rounded-full">{{ project.award }}</span>
            </div>
          </div>
          
          <!-- 项目主要内容 -->
          <div class="project-content grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                         <!-- 左侧：项目图片展示 -->
             <div class="project-images">
               <div class="main-image mb-6">
                 <img
                   :src="project.mainImage"
                   :alt="project.title + ' 主图'"
                   class="w-full h-80 object-cover rounded-lg shadow-lg"
                   loading="lazy"
                 />
               </div>
               
               <!-- 项目图片画廊 -->
               <div class="image-gallery grid grid-cols-3 gap-4">
                 <img
                   v-for="(image, index) in project.gallery"
                   :key="index"
                   :src="image"
                   :alt="`${project.title} 图片 ${index + 1}`"
                   class="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
                   loading="lazy"
                   @click="openLightbox(image)"
                 />
               </div>
             </div>
            
            <!-- 右侧：项目信息 -->
            <div class="project-info">
              <!-- 项目简介 -->
              <div class="project-description mb-8">
                <h4 class="text-2xl font-medium mb-4 text-gray-800">项目简介</h4>
                <p class="text-gray-600 leading-relaxed text-lg">{{ project.description }}</p>
              </div>
              
              <!-- 技术栈 -->
              <div class="tech-stack mb-8">
                <h4 class="text-2xl font-medium mb-4 text-gray-800">技术栈</h4>
                <div class="tech-tags flex flex-wrap gap-3">
                  <span 
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="bg-tech-blue bg-opacity-10 text-tech-blue px-4 py-2 rounded-full font-medium"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <!-- 项目特色 -->
              <div class="project-features mb-8">
                <h4 class="text-2xl font-medium mb-4 text-gray-800">项目特色</h4>
                <ul class="feature-list space-y-3">
                  <li 
                    v-for="feature in project.features"
                    :key="feature"
                    class="flex items-start"
                  >
                    <span class="text-primary-orange mr-3 text-xl flex-shrink-0">✓</span>
                    <span class="text-gray-600">{{ feature }}</span>
                  </li>
                </ul>
              </div>
              
              <!-- 项目链接 -->
              <div class="project-links flex flex-wrap gap-4">
                <a 
                  v-if="project.github"
                  :href="project.github"
                  target="_blank"
                  class="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center"
                >
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"></path>
                  </svg>
                  GitHub代码
                </a>
                <a 
                  v-if="project.demo"
                  :href="project.demo"
                  target="_blank"
                  class="bg-primary-orange text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  在线演示
                </a>
                <a 
                  v-if="project.document"
                  :href="project.document"
                  target="_blank"
                  class="bg-tech-blue text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center"
                >
                  <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  设计文档
                </a>
              </div>
            </div>
          </div>
          
          <!-- 项目成果展示 -->
          <div class="project-achievements bg-gray-50 rounded-lg p-8">
            <h4 class="text-2xl font-medium mb-6 text-center text-gray-800">项目成果与荣誉</h4>
            <div class="achievements-grid grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="achievement-item text-center">
                <div class="achievement-icon text-4xl mb-3">🏆</div>
                <h5 class="font-medium mb-2">获奖情况</h5>
                <p class="text-gray-600 text-sm">{{ project.award }}</p>
              </div>
              <div class="achievement-item text-center">
                <div class="achievement-icon text-4xl mb-3">📊</div>
                <h5 class="font-medium mb-2">技术指标</h5>
                <p class="text-gray-600 text-sm">{{ project.metrics }}</p>
              </div>
              <div class="achievement-item text-center">
                <div class="achievement-icon text-4xl mb-3">🌟</div>
                <h5 class="font-medium mb-2">项目影响</h5>
                <p class="text-gray-600 text-sm">{{ project.impact }}</p>
              </div>
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

// 格式化日期显示
const formatDate = (dateString) => {
  return formatProjectDate(dateString)
}

// 获取状态样式类
const getStatusClass = (status) => {
  const statusMap = {
    '已完成': 'bg-green-100 text-green-800',
    '进行中': 'bg-blue-100 text-blue-800',
    '计划中': 'bg-yellow-100 text-yellow-800'
  }
  return statusMap[status] || 'bg-gray-100 text-gray-800'
}

// 打开图片灯箱（简单实现，实际项目中可以使用PhotoSwipe等库）
const openLightbox = (imageSrc) => {
  // 创建简单的模态框显示大图
  const modal = document.createElement('div')
  modal.className = 'fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer'
  modal.onclick = () => modal.remove()
  
  const img = document.createElement('img')
  img.src = imageSrc
  img.className = 'max-w-full max-h-full object-contain'
  
  modal.appendChild(img)
  document.body.appendChild(modal)
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
    rootMargin: '0px 0px -100px 0px'
  })
  
  // 观察所有项目详情项目
  const detailItems = document.querySelectorAll('.project-detail-item')
  detailItems.forEach((item, index) => {
    item.classList.add(`stagger-${Math.min(index + 1, 5)}`)
    observer.observe(item)
  })
  
  onUnmounted(() => {
    observer.disconnect()
  })
})
</script> 