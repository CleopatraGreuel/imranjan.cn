<template>
  <nav class="fixed top-0 w-full bg-pure-white z-50 px-6 py-4 border-b border-gray-100">
    <div class="flex items-center justify-between max-w-7xl mx-auto">
      <!-- 个人签名Logo -->
      <NuxtLink to="/" class="signature-logo">
        <div class="signature-text">
          <span class="signature-name">您的姓名</span>
          <span class="signature-title">理工科 · 开发者 · 摄影师</span>
        </div>
      </NuxtLink>

      <!-- 桌面端导航菜单 -->
      <ul class="hidden md:flex space-x-8">
        <li>
          <NuxtLink to="/about" class="nav-link">个人简介</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" class="nav-link">项目经历</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/photography" class="nav-link">摄影作品</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/contact" class="nav-link">联系方式</NuxtLink>
        </li>
      </ul>

      <!-- 移动端菜单按钮 -->
      <button
        @click="toggleMobileMenu"
        class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        :class="{ 'bg-gray-100': isMobileMenuOpen }"
      >
        <div class="w-6 h-6 flex flex-col justify-center">
          <span
            class="block w-full h-0.5 bg-deep-black transition-all duration-200"
            :class="{ 'rotate-45 translate-y-1': isMobileMenuOpen }"
          ></span>
          <span
            class="block w-full h-0.5 bg-deep-black mt-1 transition-all duration-200"
            :class="{ 'opacity-0': isMobileMenuOpen }"
          ></span>
          <span
            class="block w-full h-0.5 bg-deep-black mt-1 transition-all duration-200"
            :class="{ '-rotate-45 -translate-y-1': isMobileMenuOpen }"
          ></span>
        </div>
      </button>
    </div>

    <!-- 移动端菜单 -->
    <div
      class="md:hidden overflow-hidden transition-all duration-300"
      :class="{ 'max-h-64 mt-4': isMobileMenuOpen, 'max-h-0': !isMobileMenuOpen }"
    >
      <ul class="bg-white rounded-lg border border-gray-100 shadow-lg p-4 space-y-3">
        <li>
          <NuxtLink
            to="/about"
            class="block py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
          >
            关于我
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/projects"
            class="block py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
          >
            项目经历
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/photography"
            class="block py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
          >
            摄影作品
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/contact"
            class="block py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
            @click="closeMobileMenu"
          >
            联系方式
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
// 移动端菜单状态管理
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// 监听路由变化，自动关闭移动端菜单
const route = useRoute()
watch(() => route.path, () => {
  closeMobileMenu()
})

// 监听窗口大小变化，大屏幕时自动关闭移动端菜单
onMounted(() => {
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      closeMobileMenu()
    }
  }

  window.addEventListener('resize', handleResize)

  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
})
</script>
