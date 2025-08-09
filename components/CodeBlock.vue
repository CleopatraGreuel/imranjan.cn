<template>
  <div class="code-block-container">
    <!-- 代码概述和切换按钮 -->
    <div class="code-summary">
      <div class="summary-content">
        <h4 class="code-title">{{ title }}</h4>
        <p v-if="description" class="code-description">{{ description }}</p>
        <div class="code-info">
          <span class="language-tag">{{ language }}</span>
          <span v-if="complexity" class="complexity-tag">{{ complexity }}</span>
        </div>
      </div>
      <button
        @click="toggleCode"
        class="code-toggle-btn"
        :class="{ expanded: isExpanded }"
      >
        <span>{{ isExpanded ? '收起代码' : '查看代码' }}</span>
        <svg class="toggle-icon" :class="{ rotated: isExpanded }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
    </div>

    <!-- 代码内容区域 -->
    <div v-show="isExpanded" class="code-content-wrapper">
      <div class="code-header">
        <span class="file-name">{{ fileName || 'code.' + language }}</span>
        <div class="code-actions">
          <button @click="copyCode" class="copy-btn" :class="{ copied: justCopied }">
            {{ justCopied ? '已复制' : '复制' }}
          </button>
          <a v-if="githubUrl" :href="githubUrl" target="_blank" class="github-btn">
            <svg class="github-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </div>
      </div>
      <div class="code-content">
        <pre class="code-pre"><code :class="`language-${language}`">{{ code }}</code></pre>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'text'
  },
  fileName: {
    type: String,
    default: ''
  },
  complexity: {
    type: String,
    default: ''
  },
  githubUrl: {
    type: String,
    default: ''
  }
})

const isExpanded = ref(false)
const justCopied = ref(false)

const toggleCode = () => {
  isExpanded.value = !isExpanded.value
}

const copyCode = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    justCopied.value = true
    setTimeout(() => {
      justCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}
</script>

<style scoped>
.code-block-container {
  @apply mb-8 border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm;
}

.code-summary {
  @apply p-6 bg-gray-50 border-b border-gray-200 flex justify-between items-start;
}

.summary-content {
  @apply flex-1 mr-4;
}

.code-title {
  @apply text-lg font-clean font-semibold text-gray-900 mb-2;
}

.code-description {
  @apply text-gray-600 mb-3 leading-relaxed;
}

.code-info {
  @apply flex gap-2;
}

.language-tag {
  @apply px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded;
}

.complexity-tag {
  @apply px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded;
}

.code-toggle-btn {
  @apply flex items-center gap-2 bg-primary-orange text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-all duration-200;
}

.toggle-icon {
  @apply w-4 h-4 transition-transform duration-200;
}

.toggle-icon.rotated {
  @apply rotate-180;
}

.code-content-wrapper {
  @apply bg-white;
}

.code-header {
  @apply flex justify-between items-center px-4 py-3 bg-gray-800 text-white;
}

.file-name {
  @apply text-sm font-mono text-gray-300;
}

.code-actions {
  @apply flex gap-2;
}

.copy-btn {
  @apply px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition-colors;
}

.copy-btn.copied {
  @apply bg-green-600;
}

.github-btn {
  @apply inline-flex items-center gap-1 px-3 py-1 bg-gray-700 hover:bg-gray-600 text-white text-sm rounded transition-colors;
}

.github-icon {
  @apply w-4 h-4;
}

.code-content {
  @apply max-h-96 overflow-y-auto;
}

.code-pre {
  @apply p-4 bg-gray-900 text-gray-100 text-sm font-mono leading-relaxed overflow-x-auto;
  @apply whitespace-pre-wrap;
}

/* 语法高亮样式 */
.language-matlab {
  color: #e6db74;
}

.language-cpp {
  color: #66d9ef;
}

.language-python {
  color: #a6e22e;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .code-summary {
    @apply flex-col gap-4;
  }

  .summary-content {
    @apply mr-0;
  }

  .code-header {
    @apply flex-col gap-2 items-start;
  }

  .code-actions {
    @apply w-full justify-end;
  }
}
</style>
