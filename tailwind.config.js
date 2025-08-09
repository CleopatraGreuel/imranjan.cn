/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        // 继承MrKriss.com的核心配色
        'primary-orange': '#8B4513',     // 优雅棕色品牌色 (SaddleBrown)
        'pure-white': '#ffffff',         // 极简白色背景
        'deep-black': '#000000',         // 纯黑文字
        'soft-gray': '#f8f9fa',         // 浅灰辅助色
        'tech-blue': '#2563eb',         // 技术蓝色补充
        'success-green': '#10b981',     // 成功状态色
        'warning-yellow': '#f59e0b',    // 警告状态色
      },
      fontFamily: {
        // 字体配置
        'signature': ['Kalam', 'Dancing Script', 'cursive'],  // 清晰手写签名风格
        'clean': ['Inter', 'system-ui', 'sans-serif'], // 现代简洁字体
        'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'], // 代码字体
        'chinese-elegant': ['Ma Shan Zheng', 'ZCOOL XiaoWei', 'cursive'] // 中文优雅字体
      },
      animation: {
        // 自定义动画
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-gentle': 'pulseGentle 2s infinite',
        'scale-hover': 'scaleHover 0.2s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        scaleHover: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        }
      },
      spacing: {
        // 自定义间距
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      screens: {
        // 响应式断点
        'xs': '475px',
        '3xl': '1600px',
      }
    },
  },
  plugins: [],
} 