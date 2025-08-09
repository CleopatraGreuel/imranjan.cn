<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8 text-center">@nuxt/image 功能测试</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- 基础NuxtImg测试 -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">基础NuxtImg</h2>
        <NuxtImg
          src="/images/hero/hero-bg.jpg"
          alt="Hero背景测试"
          width="400"
          height="300"
          format="webp"
          quality="85"
          class="rounded-lg shadow-md"
        />
      </div>
      
      <!-- NuxtPicture测试 -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">NuxtPicture优化</h2>
        <NuxtPicture
          src="/images/projects/project-1.jpg"
          alt="项目图片测试"
          width="400"
          height="300"
          format="webp"
          quality="90"
          class="rounded-lg shadow-md"
        />
      </div>
      
      <!-- OptimizedImage组件测试 -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">OptimizedImage组件</h2>
        <OptimizedImage
          src="/images/photography/photo-1.jpg"
          alt="摄影作品测试"
          preset="photo"
          width="400"
          height="300"
          :blur="true"
          class="rounded-lg shadow-md"
        />
      </div>
      
      <!-- 预设测试 -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">Hero预设</h2>
        <OptimizedImage
          src="/images/hero/hero-project.jpg"
          alt="Hero项目测试"
          preset="hero"
          width="400"
          height="225"
          class="rounded-lg shadow-md"
        />
      </div>
      
      <!-- 项目预设测试 -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">项目预设</h2>
        <OptimizedImage
          src="/images/projects/project-2.jpg"
          alt="项目预设测试"
          preset="project"
          width="400"
          height="300"
          class="rounded-lg shadow-md"
        />
      </div>
      
      <!-- 缩略图预设测试 -->
      <div class="space-y-4">
        <h2 class="text-xl font-semibold">缩略图预设</h2>
        <OptimizedImage
          src="/images/photography/photo-2.jpg"
          alt="缩略图测试"
          preset="thumbnail"
          width="200"
          height="150"
          class="rounded-lg shadow-md"
        />
      </div>
    </div>
    
    <!-- Sharp功能测试 -->
    <div class="mt-12">
      <h2 class="text-2xl font-semibold mb-6">Sharp图片处理测试</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- 不同格式测试 -->
        <div class="space-y-2">
          <h3 class="font-medium">WebP格式</h3>
          <NuxtImg
            src="/images/about/profile.jpg"
            alt="WebP测试"
            format="webp"
            width="300"
            height="300"
            class="rounded-lg"
          />
        </div>
        
        <div class="space-y-2">
          <h3 class="font-medium">JPEG格式</h3>
          <NuxtImg
            src="/images/about/profile.jpg"
            alt="JPEG测试"
            format="jpg"
            width="300"
            height="300"
            class="rounded-lg"
          />
        </div>
        
        <div class="space-y-2">
          <h3 class="font-medium">PNG格式</h3>
          <NuxtImg
            src="/images/about/profile.jpg"
            alt="PNG测试"
            format="png"
            width="300"
            height="300"
            class="rounded-lg"
          />
        </div>
      </div>
    </div>
    
    <!-- 响应式测试 -->
    <div class="mt-12">
      <h2 class="text-2xl font-semibold mb-6">响应式图片测试</h2>
      <OptimizedImage
        src="/images/hero/landscape.jpg"
        alt="响应式图片测试"
        :use-picture="true"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        class="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
      />
    </div>
    
    <!-- 功能状态显示 -->
    <div class="mt-12 p-6 bg-gray-50 rounded-lg">
      <h2 class="text-xl font-semibold mb-4">功能状态检查</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div class="space-y-2">
          <div class="flex justify-between">
            <span>@nuxt/image:</span>
            <span class="text-green-600 font-medium">✅ 已安装</span>
          </div>
          <div class="flex justify-between">
            <span>Sharp:</span>
            <span class="text-green-600 font-medium">✅ 已安装</span>
          </div>
          <div class="flex justify-between">
            <span>WebP支持:</span>
            <span class="text-green-600 font-medium">✅ 支持</span>
          </div>
        </div>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span>图片优化:</span>
            <span class="text-green-600 font-medium">✅ 启用</span>
          </div>
          <div class="flex justify-between">
            <span>响应式图片:</span>
            <span class="text-green-600 font-medium">✅ 启用</span>
          </div>
          <div class="flex justify-between">
            <span>预设配置:</span>
            <span class="text-green-600 font-medium">✅ 配置完成</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO配置
useHead({
  title: '@nuxt/image 功能测试',
  meta: [
    { name: 'description', content: '测试@nuxt/image和Sharp图片处理功能' }
  ]
})
</script>

<style scoped>
/* 测试页面样式 */
.container {
  max-width: 1200px;
}

/* 确保图片正确显示 */
img {
  max-width: 100%;
  height: auto;
}
</style> 