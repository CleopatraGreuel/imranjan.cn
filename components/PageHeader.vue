<template>
  <div class="page-header-section">
    <!-- 顶部签名姓名 -->
    <header class="signature-header">
      <div class="signature-container">
        <!-- 使用您的数字签名图片 -->
        <img src="/images/signature.png" alt="您的签名" class="signature-img" />
        <!-- 文字版本已注释，使用数字签名 -->
        <!-- <h1 class="signature-name">您的姓名</h1> -->
      </div>
    </header>

    <!-- 水平导航菜单 -->
    <nav class="horizontal-navigation">
      <ul class="nav-menu-horizontal">
        <li class="nav-item-horizontal">
          <NuxtLink to="/" class="nav-link-horizontal group">
            <span class="nav-text-horizontal">首页</span>
          </NuxtLink>
        </li>
        <li class="nav-item-horizontal">
          <NuxtLink to="/about" class="nav-link-horizontal group">
            <span class="nav-text-horizontal">个人简介</span>
          </NuxtLink>
        </li>
        <li class="nav-item-horizontal">
          <NuxtLink to="/projects" class="nav-link-horizontal group">
            <span class="nav-text-horizontal">项目经历</span>
          </NuxtLink>
        </li>
        <li class="nav-item-horizontal">
          <NuxtLink to="/photography" class="nav-link-horizontal group">
            <span class="nav-text-horizontal">摄影作品</span>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
/* 页面头部区域 */
.page-header-section {
  @apply bg-white flex-shrink-0;
  @apply flex flex-col justify-center items-center;
  @apply py-6 w-full;
  @apply mx-auto; /* 确保在所有容器中都居中 */
}

/* 顶部签名样式 */
.signature-header {
  @apply mb-4 md:mb-6;
}

.signature-container {
  @apply text-center;
}

.signature-name {
  @apply text-4xl md:text-6xl font-signature text-black;
  @apply font-normal;
}

.signature-img {
  @apply max-h-20 md:max-h-32;
}

/* 水平导航样式 */
.horizontal-navigation {
  @apply mt-0 w-full flex justify-center;
}

.nav-menu-horizontal {
  @apply flex space-x-8 md:space-x-12 justify-center items-center;
  @apply w-full max-w-4xl mx-auto; /* 确保导航栏在所有页面中居中一致 */
  @apply text-center; /* 额外确保文本居中 */
}

.nav-item-horizontal {
  @apply relative;
}

.nav-link-horizontal {
  @apply text-black hover:text-primary-orange transition-colors duration-300;
  @apply text-lg md:text-xl font-clean font-normal;
  @apply relative inline-block;
}

.nav-text-horizontal {
  @apply block;
}

/* MrKriss风格的导航悬停效果 */
.nav-link-horizontal::after {
  @apply absolute w-0 h-0.5 bg-primary-orange;
  @apply transition-all duration-300;
  content: '';
  bottom: -4px;
  left: 50%;
  transform: translateX(-50%);
}

.nav-link-horizontal:hover::after {
  @apply w-full;
}

.nav-link-horizontal.router-link-active {
  @apply text-primary-orange;
}

.nav-link-horizontal.router-link-active::after {
  @apply w-full;
}

/* 响应式适配 */
@media (max-width: 768px) {
  .signature-name {
    @apply text-3xl;
  }

  .signature-img {
    @apply max-h-16;
  }

  .horizontal-navigation {
    @apply mt-0;
  }

  .nav-menu-horizontal {
    @apply space-x-6 flex-wrap justify-center items-center;
  }

  .nav-link-horizontal {
    @apply text-base;
  }
}


</style>
