# 摄影作品页面技术文档

## 📋 项目概述

本文档详细介绍了摄影作品页面的技术实现、图片自动布局算法、以及如何进行内容管理和维护。

## 🏗️ 系统架构

### 核心文件结构
```
student-portfolio/
├── pages/photography.vue              # 主页面组件
├── components/PhotoMasonry.vue        # 瀑布流布局组件
├── composables/usePhotography.js      # 数据管理组合函数
└── public/images/photography/         # 图片资源目录
    ├── 街头风室内/
    ├── 街头风室外/
    ├── 夜晚足球场/
    ├── 新加坡/
    ├── 校园/
    ├── 老茶馆/
    ├── 重庆/
    ├── 海口/
    └── 火烧云/
```

## 🎨 图片自动布局系统

### 1. 智能瀑布流算法

#### 布局原理
- **多列网格系统**: 根据屏幕尺寸动态调整列数（1-4列）
- **智能列高度平衡**: 使用贪心算法找到最低的列进行放置
- **自适应间距**: 根据设备类型调整图片间距
- **实时重排**: 窗口大小变化时自动重新计算布局

#### 响应式配置
```javascript
// 断点配置
< 640px  : 1列，间距12px，基础高度250px  (移动端)
< 1024px : 2列，间距16px，基础高度280px  (平板端)
< 1280px : 3列，间距18px，基础高度300px  (桌面端)
≥ 1280px : 4列，间距20px，基础高度320px  (大屏幕)
```

### 2. 图片尺寸分类系统

#### 尺寸等级
- **large**: 大图片，横向图片跨2列，竖向图片保持单列
- **medium**: 中等图片，在有空间时横向图片跨2列
- **small**: 小图片，始终保持单列（默认）

#### 方向分类
- **portrait**: 竖向图片 (3:4 比例)
- **landscape**: 横向图片 (4:3 或 16:9 比例)
- **square**: 正方形图片 (1:1 比例)

### 3. 布局算法详解

#### 核心算法流程
1. **初始化网格**: 创建列数组，记录每列当前高度
2. **遍历图片**: 按顺序处理每张图片
3. **计算尺寸**: 根据图片属性确定宽度和高度
4. **寻找最佳位置**: 找到能容纳图片的最低位置
5. **更新列高度**: 放置图片后更新相关列的高度
6. **应用样式**: 设置图片的绝对定位样式

#### 位置计算公式
```javascript
// 列宽计算
columnWidth = (containerWidth - (columns - 1) * gap) / columns

// 图片宽度（考虑跨列）
photoWidth = columnSpan * columnWidth + (columnSpan - 1) * gap

// 图片高度（基于长宽比）
photoHeight = photoWidth / aspectRatio

// X坐标
x = column * (columnWidth + gap)

// Y坐标（找到跨列范围内的最高点）
y = Math.max(...columnHeights.slice(column, column + columnSpan))
```

## 📁 数据管理系统

### 1. 分类数据结构

```javascript
{
  id: 'category-id',           // 分类唯一标识符
  title: '分类标题',            // 显示标题
  description: '分类描述',      // 分类说明
  photos: [...]               // 照片数组
}
```

### 2. 照片数据结构

```javascript
{
  src: '/images/photography/分类文件夹/图片文件名',  // 图片路径
  alt: '图片描述',                                // 替代文本
  orientation: 'portrait|landscape',              // 图片方向
  size: 'small|medium|large',                    // 图片尺寸等级
  objectPosition: 'center',                       // 图片对齐方式（可选）
  featured: true                                  // 是否为特色图片（可选）
}
```

## 🛠️ 内容管理操作指南

### 1. 添加新的摄影分类

#### 步骤 1: 创建图片文件夹
```bash
# 在以下目录创建新文件夹
student-portfolio/public/images/photography/新分类名称/
```

#### 步骤 2: 上传图片文件
- 将图片文件放入新创建的文件夹中
- 建议使用数字命名：1.JPG, 2.JPG, 3.JPG...
- 支持格式：JPG, PNG, JPEG

#### 步骤 3: 更新数据配置
在 `composables/usePhotography.js` 中添加新分类：

```javascript
{
  id: 'new-category-id',        // 使用kebab-case命名
  title: '新分类标题',
  description: '分类描述文字',
  photos: [
    {
      src: '/images/photography/新分类名称/1.JPG',
      alt: '图片描述',
      orientation: 'portrait',   // 或 'landscape'
      size: 'medium'            // 可选：'small', 'medium', 'large'
    }
    // ... 更多图片
  ]
}
```

#### 步骤 4: 更新导航配置
在 `pages/photography.vue` 中的 `updateCurrentSection` 函数中添加新的section ID：

```javascript
const sections = [
  'portrait-indoor',
  'portrait-outdoor',
  // ... 其他现有分类
  'new-category-id'  // 添加新分类ID
]
```

### 2. 删除摄影分类

#### 步骤 1: 删除图片文件夹
```bash
# 删除对应的图片文件夹
rm -rf student-portfolio/public/images/photography/要删除的分类/
```

#### 步骤 2: 移除数据配置
在 `composables/usePhotography.js` 中删除对应的分类对象

#### 步骤 3: 更新导航配置
从 `pages/photography.vue` 的 `sections` 数组中移除对应的ID

### 3. 修改分类标题

#### 更新显示标题
在 `composables/usePhotography.js` 中修改 `title` 字段：

```javascript
{
  id: 'category-id',
  title: '新的标题',  // 修改这里
  description: '描述',
  photos: [...]
}
```

#### 导航标题显示规则
- 完整标题：`夜晚足球场·UESTC`
- 导航显示：`夜晚足球场` (自动截取圆点前的部分)
- 如果标题中没有圆点，则显示完整标题

### 4. 添加/删除/修改照片

#### 添加照片
1. 将新图片文件放入对应分类文件夹
2. 在 `usePhotography.js` 中的相应分类的 `photos` 数组中添加新对象

#### 删除照片
1. 删除图片文件
2. 从 `photos` 数组中移除对应对象

#### 修改照片属性
```javascript
{
  src: '/images/photography/分类/图片.JPG',
  alt: '修改图片描述',
  orientation: 'landscape',     // 修改方向
  size: 'large',               // 修改尺寸等级
  objectPosition: 'top center' // 修改对齐方式
}
```

## 🎯 图片优化建议

### 1. 图片命名规范
- 使用数字序号：`1.JPG`, `2.JPG`, `3.JPG`
- 保持文件扩展名大写：`.JPG`, `.PNG`
- 避免使用中文文件名和特殊字符

### 2. 图片尺寸建议
- **移动端**: 宽度建议 800-1200px
- **桌面端**: 宽度建议 1200-2000px
- **文件大小**: 单张图片建议小于 2MB

### 3. 图片格式选择
- **JPG**: 适用于照片，文件小
- **PNG**: 适用于需要透明背景的图片
- **WebP**: 现代浏览器支持，更好的压缩率

## 🔧 高级配置

### 1. 自定义布局参数

在 `PhotoMasonry.vue` 中修改 `layoutConfig`:

```javascript
layoutConfig.value = {
  columns: 3,           // 列数
  gap: 16,             // 间距(px)
  baseHeight: 280,     // 基础高度(px)
  aspectRatios: {      // 长宽比配置
    square: 1,
    portrait: 0.75,
    landscape: 1.6,
    wide: 2.2
  }
}
```

### 2. 自定义动画效果

修改进入动画延迟：
```javascript
// 在 PhotoMasonry.vue 中
animationDelay: `${index * 0.1}s`  // 每张图片延迟0.1秒
```

### 3. 自定义图片加载行为

```javascript
// 懒加载配置
loading="lazy"        // 启用懒加载

// 错误处理
@error="onImageError" // 图片加载失败处理
```

## 🚀 性能优化

### 1. 图片懒加载
- 自动启用 `loading="lazy"` 属性
- 只加载进入视口的图片

### 2. 响应式布局
- 移动端使用简化的单列布局
- 减少复杂计算，提升性能

### 3. 事件节流
- 窗口大小变化事件使用 150ms 节流
- 避免频繁重新计算布局

## 🐛 常见问题解决

### 1. 图片不显示
- 检查图片路径是否正确
- 确认图片文件是否存在
- 检查文件扩展名大小写

### 2. 布局错乱
- 确认图片的 `orientation` 属性设置正确
- 检查图片实际尺寸比例
- 尝试刷新页面重新计算布局

### 3. 导航跳转不准确
- 确认分类 `id` 与 `sections` 数组中的值一致
- 检查HTML中的元素 `id` 属性

### 4. 移动端显示异常
- 移动端自动切换为简化布局
- 如有问题，检查CSS媒体查询

## 📝 更新日志

### 最新优化 (2024)
- ✅ 移除导航跳转的脉冲高亮和缩放效果，保持纯净的平滑滚动
- ✅ 优化导航栏宽度和文字显示，减少对照片内容的遮挡
- ✅ 导航标题自动截取，只显示圆点前的部分
- ✅ 导航文字居中对齐，提升视觉效果

### 核心特性
- ✅ 智能瀑布流布局算法
- ✅ 响应式设计，支持所有设备
- ✅ 图片懒加载和错误处理
- ✅ 灯箱查看功能
- ✅ 平滑滚动导航
- ✅ 自动布局重排

---

**维护建议**: 定期备份图片文件，在修改配置前先测试，确保所有图片路径正确。如遇到问题，可以参考本文档进行排查。
