<template>
  <div id="app">
    <NuxtPage />
    <!-- 液态玻璃鼠标效果 -->
    <GlassCursor />
  </div>
</template>

<script setup>
// 全局SEO设置
useHead({
  htmlAttrs: {
    lang: 'zh-CN'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ]
})
</script>

<style>
/* 全局样式已在 assets/css/main.css 中定义 */
</style> 