<template>
  <div class="projects-page">
    <!-- 统一头部组件 -->
    <PageHeader />

    <!-- 页面内容 -->
    <main class="main-content">
      <!-- 项目概览卡片 -->
      <section v-if="!selectedProject" class="projects-overview">
        <!-- 分类选择器 -->
        <div class="category-selector">
          <div class="category-buttons">
            <button
              @click="selectedCategory = 'all'"
              :class="['category-btn', { active: selectedCategory === 'all' }]"
            >
              全部
            </button>
            <button
              @click="selectedCategory = 'completed'"
              :class="['category-btn', { active: selectedCategory === 'completed' }]"
            >
              已完成
            </button>
            <button
              @click="selectedCategory = 'ongoing'"
              :class="['category-btn', { active: selectedCategory === 'ongoing' }]"
            >
              进行中
            </button>
          </div>
        </div>

        <div class="projects-grid" v-if="filteredProjects.length > 0">
          <!-- 动态渲染项目卡片 -->
          <article
            v-for="project in filteredProjects"
            :key="project.id"
            class="project-card"
            @click="selectProject(project.id)"
          >
            <div class="card-image">
              <NuxtImg
                v-if="project.coverImage"
                :src="project.coverImage"
                :alt="project.title + '项目封面'"
                preset="project"
                class="card-cover"
              />
              <div v-else class="placeholder-image">
                <div class="placeholder-icon">{{ project.icon }}</div>
                <span class="placeholder-text">{{ project.category }}</span>
              </div>
              <div class="card-overlay">
                <span class="view-details">{{ project.hasDetails ? '查看详情' : '敬请期待' }}</span>
              </div>
            </div>
            <div class="card-content">
              <div class="card-header">
                <h3 class="card-title">{{ project.title }}</h3>
                <span class="card-year">{{ project.year }}年</span>
              </div>
              <p class="card-description">
                {{ project.description }}
              </p>
              <div class="card-badges">
                <span
                  v-for="badge in project.badges"
                  :key="badge.text"
                  :class="['badge', badge.type]"
                >
                  {{ badge.text }}
                </span>
              </div>
              <div v-if="project.stats" class="card-stats">
                <div
                  v-for="stat in project.stats"
                  :key="stat.label"
                  class="stat"
                >
                  <span class="stat-value">{{ stat.value }}</span>
                  <span class="stat-label">{{ stat.label }}</span>
                </div>
              </div>
              <div v-if="!project.hasDetails" class="card-status">
                <span class="status-coming">详情即将更新</span>
              </div>
            </div>
          </article>
        </div>

        <!-- 空状态提示 -->
        <div v-else class="empty-state">
          <div class="empty-icon">📋</div>
          <h3 class="empty-title">暂无{{ getCategoryName() }}项目</h3>
          <p class="empty-description">该分类下暂时没有项目，请选择其他分类查看</p>
        </div>
      </section>

      <!-- Yigui / 依柜 移动应用创新赛 详情页面 -->
      <section v-if="selectedProject === 'mobile-app-2025'" class="project-detail">
        <!-- 返回按钮 -->
        <div class="back-button-container">
          <button @click="goBackToOverview" class="back-button">
            <svg class="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            返回项目概览
          </button>
        </div>

        <!-- 悬浮导航栏 -->
        <aside class="floating-nav" v-show="selectedProject === 'mobile-app-2025'">
          <div class="floating-nav-content">
            <div class="floating-nav-title">导航</div>
            <nav class="floating-nav-items">
              <a href="#team-info" @click="scrollToSection('team-info', $event)" :class="['floating-nav-card', { active: currentSection === 'team-info' }]">团队信息</a>
              <a href="#project-background" @click="scrollToSection('project-background', $event)" :class="['floating-nav-card', { active: currentSection === 'project-background' }]">项目背景</a>
              <a href="#ui-design" @click="scrollToSection('ui-design', $event)" :class="['floating-nav-card', { active: currentSection === 'ui-design' }]">界面设计</a>
              <a href="#model-assets" @click="scrollToSection('model-assets', $event)" :class="['floating-nav-card', { active: currentSection === 'model-assets' }]">3D建模</a>
              <a href="#system-architecture" @click="scrollToSection('system-architecture', $event)" :class="['floating-nav-card', { active: currentSection === 'system-architecture' }]">系统架构</a>
              <a href="#algorithm-ml" @click="scrollToSection('algorithm-ml', $event)" :class="['floating-nav-card', { active: currentSection === 'algorithm-ml' }]">AI算法</a>
              <a href="#backend-api" @click="scrollToSection('backend-api', $event)" :class="['floating-nav-card', { active: currentSection === 'backend-api' }]">后端API</a>
              <a href="#demo-video" @click="scrollToSection('demo-video', $event)" :class="['floating-nav-card', { active: currentSection === 'demo-video' }]">演示视频</a>
              <a href="#achievements" @click="scrollToSection('achievements', $event)" :class="['floating-nav-card', { active: currentSection === 'achievements' }]">竞赛成果</a>
              <a href="#project-summary" @click="scrollToSection('project-summary', $event)" :class="['floating-nav-card', { active: currentSection === 'project-summary' }]">项目总结</a>
            </nav>
          </div>
        </aside>

        <!-- 项目英雄区域 -->
        <div class="hero-section">
          <div class="hero-content">
            <div class="hero-text">
              <span class="project-date">2025年</span>
              <h1 class="hero-title">中国高校计算机大赛—移动应用创新赛</h1>
              <h2 class="hero-subtitle">Yigui / 依柜：个性化服装设计与虚拟试穿应用</h2>
              <div class="hero-badges">
                <span class="badge badge-primary">iOS开发</span>
                <span class="badge badge-info">3D建模</span>
                <span class="badge badge-accent">服务器运维</span>
              </div>
            </div>
            <div class="hero-image" @click="openImageModal('/images/projects/yigui-app-2025/项目封面图.png', 'Yigui应用界面展示')">
              <NuxtImg
                src="/images/projects/yigui-app-2025/项目封面图.png"
                alt="Yigui应用界面展示"
                preset="hero"
                class="cover-image clickable-image"
                :style="{ objectFit: 'contain' }"
              />
              <div class="image-overlay">
                <span class="overlay-text">点击查看大图</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 团队信息 -->
        <div id="team-info" class="section">
          <div class="section-header"><h3 class="section-title">团队信息</h3></div>
          <div class="team-info-content">
            <div class="team-info-grid">
              <div class="info-card">
                <div class="info-header">
                  <h4>指导老师</h4>
                </div>
                <div class="info-content">
                  <p>杨远望教授（School of Information and Communication Engineering, UESTC）</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-header">
                  <h4>团队成员</h4>
                </div>
                <ul class="team-members-list">
                  <li>我 <span class="leader-badge">队长</span> - 产品设计、UI/UX、iOS开发、AI算法、后端系统、3D建模</li>
                  <li>吴𤨪羽（Glasgow College, UESTC） - 产品构思，宣传海报制作</li>
                  <li>杜橙（Glasgow College, UESTC） - 产品构思，作品文档撰写</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 项目背景 -->
        <div id="project-background" class="section">
          <div class="section-header">
            <h3 class="section-title">项目背景与创新</h3>
          </div>
          <div class="background-content">
            <div class="background-main-content">
              <div class="background-description">
                <p>
                  Yigui/依柜是一款旨在将专业服装设计流程大众化、个性化的iOS应用。它打通了从"真实人体参数 → 智能3D建模 → 个性化服装设计 → 虚拟试穿"的全链路，
                  让每一位用户都能基于自己独一无二的身体，成为自己"虚拟分身"的专属服装设计师。该项目致力于解决"审美多元化"时代下普通消费者难以参与服装创作、
                  成衣尺码不符、线上试衣体验不佳等痛点。
                </p>

                <div class="innovation-highlights">
                  <div class="highlight-card">
                    <div class="highlight-icon">🧠</div>
                    <h5>隐私优先的CoreML推断</h5>
                    <p>本地化身体比例预测，数据不离开设备，支持离线使用</p>
                  </div>
                  <div class="highlight-card">
                    <div class="highlight-icon">🔄</div>
                    <h5>迭代收敛算法</h5>
                    <p>3轮循环计算解决人体比例循环依赖，实现精确建模</p>
                  </div>
                  <div class="highlight-card">
                    <div class="highlight-icon">🎛️</div>
                    <h5>虚拟装配技术</h5>
                    <p>原子化部件处理+智能重组，实现高效的虚拟试穿</p>
                  </div>
                  <div class="highlight-card">
                    <div class="highlight-icon">⚡</div>
                    <h5>微服务架构</h5>
                    <p>三个独立FastAPI服务：用户、模型、设计分离部署</p>
                  </div>
                </div>
              </div>

              <div class="research-analysis">
                <div class="analysis-grid">
                  <div class="analysis-card">
                    <h5>用户需求洞察</h5>
                    <div class="gallery-item" @click="openImageModal('/images/projects/yigui-app-2025/同理心地图.png', '用户需求洞察 - 同理心地图')">
                      <NuxtImg
                        src="/images/projects/yigui-app-2025/同理心地图.png"
                        alt="用户需求洞察 - 同理心地图"
                        preset="photo"
                        class="analysis-image clickable-image"
                        :style="{ objectFit: 'contain' }"
                      />
                      <span class="gallery-caption">同理心地图分析</span>
                    </div>
                  </div>

                  <div class="analysis-card">
                    <h5>竞品分析定位</h5>
                    <div class="gallery-item" @click="openImageModal('/images/projects/yigui-app-2025/竞品雷达图.png', '竞品分析 - 产品定位雷达图')">
                      <NuxtImg
                        src="/images/projects/yigui-app-2025/竞品雷达图.png"
                        alt="竞品分析 - 产品定位雷达图"
                        preset="photo"
                        class="analysis-image clickable-image"
                        :style="{ objectFit: 'contain' }"
                      />
                      <span class="gallery-caption">竞品雷达图</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 界面设计 -->
        <div id="ui-design" class="section">
          <div class="section-header">
            <h3 class="section-title">界面设计与用户体验</h3>
          </div>
          <div class="ui-design-content">
            <div class="ui-main-content">
              <div class="ui-description">
                <p>
                  Yigui的界面设计注重用户体验的流畅性和功能的直观性。采用现代化的设计语言，
                  结合iOS设计规范，为用户提供简洁、优雅的虚拟试穿体验。从初始原型到最终实现，
                  每个界面元素都经过精心设计和用户测试优化。
                </p>

                <!-- Figma 原型展示 - 突出显示 -->
                <div class="figma-showcase">
                  <div class="info-header text-center mb-8"><h4>Figma 原型与流程设计</h4></div>
                  <div class="figma-image-container">
                    <div class="gallery-item max-w-4xl mx-auto" @click="openImageModal('/images/projects/yigui-app-2025/Figma初步原型设计.png', 'Figma 初步原型')">
                      <NuxtImg src="/images/projects/yigui-app-2025/Figma初步原型设计.png" alt="Figma 初步原型" preset="project" class="feature-image clickable-image rounded-xl border border-gray-200 shadow-lg w-full" :style="{ objectFit: 'contain' }" />
                      <span class="gallery-caption text-center">Figma 初步原型设计 - 完整的用户界面设计与交互流程</span>
                    </div>
                  </div>
                  <div class="figma-highlights max-w-4xl mx-auto mt-6">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div class="figma-feature">
                        <h6>导航设计</h6>
                        <p>Tab导航 + 分步流程，清晰的信息架构</p>
                      </div>
                      <div class="figma-feature">
                        <h6>状态管理</h6>
                        <p>进度指示、按钮状态、草稿自动保存</p>
                      </div>
                      <div class="figma-feature">
                        <h6>组件复用</h6>
                        <p>色板、图案库、参数面板统一设计</p>
                      </div>
                    </div>
                  </div>
                </div>


                <!-- App截图展示 -->
                <div class="app-screenshots-showcase mt-12">
                  <div class="info-header text-center mb-8"><h4>App界面展示</h4></div>
                  <div class="screenshots-grid">
                    <div class="screenshot-item" @click="openImageModal('/images/projects/yigui-app-2025/App截图/注册后输入信息页.PNG', '注册后输入信息页')">
                      <NuxtImg src="/images/projects/yigui-app-2025/App截图/注册后输入信息页.PNG" alt="注册后输入信息页" preset="project" class="screenshot-image rounded-lg shadow-lg" />
                      <span class="screenshot-caption">注册后输入信息页</span>
                    </div>
                    <div class="screenshot-item" @click="openImageModal('/images/projects/yigui-app-2025/App截图/设计页1_设计名称和服装类型.PNG', '设计名称和服装类型')">
                      <NuxtImg src="/images/projects/yigui-app-2025/App截图/设计页1_设计名称和服装类型.PNG" alt="设计名称和服装类型" preset="project" class="screenshot-image rounded-lg shadow-lg" />
                      <span class="screenshot-caption">设计名称和服装类型</span>
                    </div>
                    <div class="screenshot-item" @click="openImageModal('/images/projects/yigui-app-2025/App截图/设计页2_颜色类型_纯色.PNG', '颜色类型选择')">
                      <NuxtImg src="/images/projects/yigui-app-2025/App截图/设计页2_颜色类型_纯色.PNG" alt="颜色类型选择" preset="project" class="screenshot-image rounded-lg shadow-lg" />
                      <span class="screenshot-caption">颜色类型选择</span>
                    </div>
                    <div class="screenshot-item" @click="openImageModal('/images/projects/yigui-app-2025/App截图/设计页3_设计结果展示.PNG', '设计结果展示')">
                      <NuxtImg src="/images/projects/yigui-app-2025/App截图/设计页3_设计结果展示.PNG" alt="设计结果展示" preset="project" class="screenshot-image rounded-lg shadow-lg" />
                      <span class="screenshot-caption">设计结果展示</span>
                    </div>
                    <div class="screenshot-item" @click="openImageModal('/images/projects/yigui-app-2025/App截图/模型展示页_试穿展示.PNG', '试穿展示页面')">
                      <NuxtImg src="/images/projects/yigui-app-2025/App截图/模型展示页_试穿展示.PNG" alt="试穿展示页面" preset="project" class="screenshot-image rounded-lg shadow-lg" />
                      <span class="screenshot-caption">试穿展示页面</span>
                    </div>
                    <div class="screenshot-item" @click="openImageModal('/images/projects/yigui-app-2025/App截图/衣柜页.PNG', '衣柜页面')">
                      <NuxtImg src="/images/projects/yigui-app-2025/App截图/衣柜页.PNG" alt="衣柜页面" preset="project" class="screenshot-image rounded-lg shadow-lg" />
                      <span class="screenshot-caption">衣柜页面</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 3D建模与资源制作 -->
        <div id="model-assets" class="section">
          <div class="section-header">
            <h3 class="section-title">3D建模与资源制作</h3>
          </div>
          <div class="hardware-content">
            <div class="hardware-description">
              <p>
                3D建模系统采用Blender作为核心建模工具，结合Python脚本实现自动化处理流程。
                整个建模管线包括人体基础模型制作、服装模型设计、材质节点编辑、以及移动端性能优化等关键环节。
              </p>
              <p>
                通过标准化的GLB格式输出和模块化的部件设计，实现了高效的"虚拟装配"技术，
                支持实时的服装更换和试穿效果预览。所有模型均针对移动设备进行了深度优化，
                确保在iOS设备上的流畅渲染表现。
              </p>
            </div>

            <!-- 人体基础模型制作 -->
            <div class="hardware-section">
              <h4>人体基础模型制作</h4>
              <div class="hardware-layout left-image">
                <div class="hardware-image-container">
                  <div class="gallery-item" @click="openImageModal('/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认男模型.png', '默认男模型')">
                    <NuxtImg
                      src="/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认男模型.png"
                      alt="默认男模型"
                      preset="photo"
                      class="hardware-image"
                      :style="{ objectFit: 'contain' }"
                    />
                    <span class="gallery-caption">默认男模型 - 基础人体拓扑结构</span>
                  </div>
                </div>
                <div class="hardware-specs">
                  <ul>
                    <li>低多边形拓扑设计，面数控制在5000以内</li>
                    <li>标准人体比例，支持CoreML参数化缩放</li>
                    <li>优化的UV展开，纹理分辨率1024x1024</li>
                    <li>模块化部件设计：头部、身体、四肢独立处理</li>
                    <li>GLB格式导出，支持PBR材质和动画</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 材质节点系统 -->
            <div class="hardware-section">
              <h4>材质节点系统</h4>
              <div class="hardware-layout right-image">
                <div class="hardware-specs">
                  <ul>
                    <li>基于节点的程序化材质制作流程</li>
                    <li>PBR物理渲染，支持金属度和粗糙度</li>
                    <li>动态颜色和纹理替换系统</li>
                    <li>移动端着色器优化，减少计算复杂度</li>
                    <li>支持实时材质参数调节和预览</li>
                  </ul>
                </div>
                <div class="hardware-image-container">
                  <div class="gallery-item" @click="openImageModal('/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认男模型材质节点.png', '男模型材质节点')">
                    <NuxtImg
                      src="/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认男模型材质节点.png"
                      alt="男模型材质节点"
                      preset="photo"
                      class="hardware-image"
                      :style="{ objectFit: 'contain' }"
                    />
                    <span class="gallery-caption">材质节点编辑器 - 复杂材质制作流程</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 女性模型优化 -->
            <div class="hardware-section">
              <h4>女性模型优化处理</h4>
              <div class="hardware-layout left-image">
                <div class="hardware-image-container">
                  <div class="gallery-item" @click="openImageModal('/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认女模型_简化后.png', '默认女模型简化后')">
                    <NuxtImg
                      src="/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认女模型_简化后.png"
                      alt="默认女模型简化后"
                      preset="photo"
                      class="hardware-image"
                      :style="{ objectFit: 'contain' }"
                    />
                    <span class="gallery-caption">女性模型 - 移动端性能优化版本</span>
                  </div>
                </div>
                <div class="hardware-specs">
                  <ul>
                    <li>针对移动端的多边形简化处理</li>
                    <li>保持关键特征的减面算法优化</li>
                    <li>LOD（Level of Detail）层级设计</li>
                    <li>纹理贴图压缩，支持多种分辨率</li>
                    <li>实时渲染性能达到60FPS@1080p</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 材质优化流程 -->
            <div class="hardware-section">
              <h4>材质优化流程</h4>
              <div class="hardware-layout right-image">
                <div class="hardware-specs">
                  <ul>
                    <li>着色器复杂度分析和优化</li>
                    <li>纹理通道合并，减少采样次数</li>
                    <li>移动端GPU适配优化</li>
                    <li>批处理渲染和实例化支持</li>
                    <li>内存占用控制在设备限制内</li>
                  </ul>
                </div>
                <div class="hardware-image-container">
                  <div class="gallery-item" @click="openImageModal('/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认女模型材质节点_简化后.png', '女模型材质节点简化后')">
                    <NuxtImg
                      src="/images/projects/yigui-app-2025/Blender手动调整默认模型的截图/默认女模型材质节点_简化后.png"
                      alt="女模型材质节点简化后"
                      preset="photo"
                      class="hardware-image"
                      :style="{ objectFit: 'contain' }"
                    />
                    <span class="gallery-caption">简化材质节点 - 移动端性能优化</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 技术规格总览 -->
            <div class="tech-specs-section">
              <h4>技术规格总览</h4>
              <div class="specs-overview">
                <div class="specs-category">
                  <h5>🎯 建模精度</h5>
                  <div class="specs-list">
                    <span class="spec-item">基础模型: ≤5000面</span>
                    <span class="spec-item">纹理分辨率: 1024²</span>
                    <span class="spec-item">UV利用率: >90%</span>
                  </div>
                </div>
                <div class="specs-category">
                  <h5>📱 移动端性能</h5>
                  <div class="specs-list">
                    <span class="spec-item">渲染帧率: 60FPS</span>
                    <span class="spec-item">内存占用: <50MB</span>
                    <span class="spec-item">加载时间: <2秒</span>
                  </div>
                </div>
                <div class="specs-category">
                  <h5>🔧 技术栈</h5>
                  <div class="specs-list">
                    <span class="spec-item">Blender 3.6.5</span>
                    <span class="spec-item">Python脚本自动化</span>
                    <span class="spec-item">GLB/GLTF格式</span>
                  </div>
                </div>
                <div class="specs-category">
                  <h5>🎨 材质系统</h5>
                  <div class="specs-list">
                    <span class="spec-item">PBR材质流程</span>
                    <span class="spec-item">程序化纹理</span>
                    <span class="spec-item">实时材质切换</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 系统架构设计 -->
        <div id="system-architecture" class="section">
          <div class="section-header">
            <h3 class="section-title">系统架构设计</h3>
          </div>
          <div class="hardware-content">
            <div class="hardware-description">
              <p>
                系统采用前后端分离的混合架构设计，前端基于SwiftUI+CoreML实现本地推理与隐私保护，
                后端采用微服务架构部署于Ubuntu服务器，提供用户认证、设计管理、3D模型处理等核心服务。
              </p>
              <p>
                整个架构遵循"隐私优先、性能优化、弹性扩展"的设计原则，通过合理的技术栈选型和模块化拆分，
                实现了高可用、高性能的虚拟试穿服务平台。所有关键数据传输均采用HTTPS加密和JWT认证机制。
              </p>
            </div>

            <!-- iOS前端架构 -->
            <div class="hardware-section">
              <h4>iOS前端架构</h4>
              <div class="hardware-description">
                <p>
                  iOS前端采用SwiftUI构建现代化界面，集成CoreML框架实现设备端AI推理，
                  确保用户隐私的同时提供流畅的交互体验。系统架构遵循MVVM模式，
                  通过Combine框架实现响应式数据绑定。
                </p>
                <div class="hardware-specs">
                  <ul>
                    <li>SwiftUI声明式UI框架，现代化界面构建</li>
                    <li>CoreML本地推理，支持离线AI模型运行</li>
                    <li>Combine响应式编程，状态管理和数据绑定</li>
                    <li>SceneKit 3D渲染引擎，支持实时模型展示</li>
                    <li>Vision框架集成，人体检测和图像处理</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 微服务后端架构 -->
            <div class="hardware-section">
              <h4>微服务后端架构</h4>
              <div class="hardware-layout right-image">
                <div class="hardware-specs">
                  <ul>
                    <li>FastAPI异步框架，高性能RESTful API</li>
                    <li>三服务分离：用户认证、模型处理、设计管理</li>
                    <li>Dramatiq+Redis异步任务队列管理</li>
                    <li>SQLite+MySQL混合数据存储策略</li>
                    <li>Nginx反向代理，SSL/HTTPS安全传输</li>
                  </ul>
                </div>
                <div class="hardware-image-container">
                  <div class="gallery-item" @click="openImageModal('/images/projects/yigui-app-2025/虚拟装配流水线示意图.png', '虚拟装配流水线示意图')">
                    <NuxtImg
                      src="/images/projects/yigui-app-2025/虚拟装配流水线示意图.png"
                      alt="虚拟装配流水线示意图"
                      preset="photo"
                      class="hardware-image"
                      :style="{ objectFit: 'contain' }"
                    />
                    <span class="gallery-caption">虚拟装配流水线 - 微服务架构图</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 数据流与安全 -->
            <div class="hardware-section">
              <h4>数据流与安全机制</h4>
              <div class="hardware-description">
                <p>
                  系统采用多层安全机制保护用户数据和业务逻辑，从JWT令牌认证、HTTPS加密传输，
                  到CoreML本地推理避免敏感数据上传。数据流设计遵循最小权限原则，
                  确保系统安全性与用户隐私保护的最佳平衡。
                </p>
                <div class="hardware-specs">
                  <ul>
                    <li>JWT令牌认证，无状态会话管理</li>
                    <li>HTTPS全链路加密，数据传输安全</li>
                    <li>CoreML本地推理，敏感数据不上传</li>
                    <li>Redis缓存机制，提升响应性能</li>
                    <li>异步任务队列，避免长时间阻塞</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 技术栈总览 -->
            <div class="tech-specs-section">
              <h4>技术栈总览</h4>
              <div class="specs-overview">
                <div class="specs-category">
                  <h5>📱 iOS前端</h5>
                  <div class="specs-list">
                    <span class="spec-item">SwiftUI + Combine</span>
                    <span class="spec-item">CoreML + Vision</span>
                    <span class="spec-item">SceneKit 3D</span>
                  </div>
                </div>
                <div class="specs-category">
                  <h5>🐍 Python后端</h5>
                  <div class="specs-list">
                    <span class="spec-item">FastAPI + Dramatiq</span>
                    <span class="spec-item">SQLite + MySQL</span>
                    <span class="spec-item">Blender Python</span>
                  </div>
                </div>
                <div class="specs-category">
                  <h5>🔧 基础设施</h5>
                  <div class="specs-list">
                    <span class="spec-item">Ubuntu 20.04</span>
                    <span class="spec-item">Nginx + SSL</span>
                    <span class="spec-item">Redis 缓存</span>
                  </div>
                </div>
                <div class="specs-category">
                  <h5>🔒 安全机制</h5>
                  <div class="specs-list">
                    <span class="spec-item">JWT 认证</span>
                    <span class="spec-item">HTTPS 加密</span>
                    <span class="spec-item">本地推理</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 算法与模型（CoreML） -->
        <div id="algorithm-ml" class="section">
          <div class="section-header">
            <h3 class="section-title">算法与模型（CoreML）</h3>
          </div>
          <div class="hardware-content">
            <div class="hardware-description">
              <p>
                CoreML算法系统采用轻量级神经网络架构，专门针对移动端推理进行深度优化。
                系统通过三轮迭代收敛算法解决人体比例预测中的循环依赖问题，在保证推理精度的同时实现毫秒级响应。
              </p>
              <p>
                整个算法模块遵循"隐私优先、本地推理、参数驱动"的核心原则，将用户偏好与体型信息映射为可解释、
                可复现的参数化设计方案，确保数据不离开设备的同时提供个性化的虚拟试穿体验。
              </p>
            </div>

            <!-- CoreML身体比例预测 -->
            <div class="hardware-section">
              <h4>CoreML身体比例预测引擎</h4>
              <div class="hardware-description">
                <p>
                  CoreML身体比例预测引擎采用三轮迭代收敛算法，通过分析用户身高体重等基础数据，
                  智能预测胸围、腰围、臀围等关键身体比例参数。整个预测过程完全在设备本地完成，
                  确保用户隐私的同时提供毫秒级的响应速度。
                </p>
                <div class="hardware-specs">
                  <ul>
                    <li>三轮迭代收敛算法，解决循环依赖问题</li>
                    <li>本地推理处理，用户数据不上传云端</li>
                    <li>毫秒级响应速度，支持实时预览</li>
                    <li>A12仿生芯片Neural Engine硬件加速</li>
                    <li>量化压缩模型，内存占用<30MB</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 参数化设计引擎 -->
            <div class="hardware-section">
              <h4>参数化设计引擎</h4>
              <div class="hardware-layout right-image">
                <div class="hardware-specs">
                  <ul>
                    <li>HSV色彩空间智能颜色匹配算法</li>
                    <li>基于纹理库的图案智能检索系统</li>
                    <li>多维度体型数据参数化处理</li>
                    <li>协同过滤+内容过滤混合推荐</li>
                    <li>可解释性参数输出，支持调试</li>
                  </ul>
                </div>
                <div class="hardware-image-container">
                  <div class="gallery-item" @click="openImageModal('/images/projects/yigui-app-2025/Figma初步原型设计.png', '参数化设计流程')">
                    <NuxtImg
                      src="/images/projects/yigui-app-2025/Figma初步原型设计.png"
                      alt="参数化设计流程"
                      preset="photo"
                      class="hardware-image"
                      :style="{ objectFit: 'contain' }"
                    />
                    <span class="gallery-caption">参数化设计流程与界面原型</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 移动端优化策略 -->
            <div class="hardware-section">
              <h4>移动端性能优化</h4>
              <div class="hardware-layout left-image">
                <div class="hardware-image-container">
                  <div class="gallery-item" @click="openImageModal('/images/projects/yigui-app-2025/同理心地图.png', '用户体验优化分析')">
                    <NuxtImg
                      src="/images/projects/yigui-app-2025/同理心地图.png"
                      alt="用户体验优化分析"
                      preset="photo"
                      class="hardware-image"
                      :style="{ objectFit: 'contain' }"
                    />
                    <span class="gallery-caption">用户体验分析与性能优化策略</span>
                  </div>
                </div>
                <div class="hardware-specs">
                  <ul>
                    <li>模型权重量化压缩，模型大小<15MB</li>
                    <li>Metal Performance Shaders渲染加速</li>
                    <li>智能缓存策略，推理结果复用</li>
                    <li>异步渲染队列，避免UI阻塞</li>
                    <li>多级LOD优化，适配不同设备性能</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 算法性能指标 -->
            <div class="tech-specs-section">
              <h4>算法性能指标</h4>
              <div class="specs-overview">
                <div class="specs-category">
                  <h5>⚡ 推理性能</h5>
                  <div class="specs-list">
                    <span class="spec-item">推理时间: <50ms</span>
                    <span class="spec-item">内存占用: <30MB</span>
                    <span class="spec-item">CPU利用率: <20%</span>
                  </div>
                </div>
                <div class="specs-category">
                  <h5>📱 设备兼容</h5>
                  <div class="specs-list">
                    <span class="spec-item">A12芯片及以上</span>
                    <span class="spec-item">iOS 14.0+</span>
                    <span class="spec-item">离线运行支持</span>
                  </div>
                </div>
                <div class="specs-category">
                  <h5>🎯 算法精度</h5>
                  <div class="specs-list">
                    <span class="spec-item">比例预测: 95%+</span>
                    <span class="spec-item">收敛率: >99%</span>
                    <span class="spec-item">推荐准确: 87%+</span>
                  </div>
                </div>
                <div class="specs-category">
                  <h5>🔒 隐私保护</h5>
                  <div class="specs-list">
                    <span class="spec-item">本地推理</span>
                    <span class="spec-item">数据不上传</span>
                    <span class="spec-item">设备端加密</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <!-- 后端系统与API设计 -->
        <div id="backend-api" class="section">
          <div class="section-header">
            <h3 class="section-title">后端系统与API设计</h3>
          </div>
          <div class="hardware-content">
            <div class="hardware-description">
              <p>
                后端系统基于Python FastAPI框架构建，采用微服务架构和RESTful API设计原则，提供完整的用户管理、
                3D模型处理、虚拟试穿等核心服务。系统支持异步任务处理，通过Redis任务队列管理耗时的AI推理和Blender渲染操作。
              </p>
              <p>
                部署在Ubuntu 20.04服务器上，采用Nginx反向代理和Gunicorn WSGI服务器，
                具备良好的扩展性、稳定性和高并发处理能力。整个后端架构遵循模块化设计，便于维护和功能扩展。
              </p>
            </div>

            <!-- FastAPI微服务架构 -->
            <div class="hardware-section">
              <h4>FastAPI微服务架构</h4>
              <div class="hardware-description">
                <p>
                  FastAPI微服务架构采用三服务分离设计：用户认证服务、模型处理服务和设计管理服务。
                  每个服务独立部署，通过标准RESTful API进行通信，支持水平扩展和独立维护。
                  框架基于Python异步特性，提供优异的并发处理能力。
                </p>
                <div class="hardware-specs">
                  <ul>
                    <li>FastAPI异步框架，支持高并发API请求处理</li>
                    <li>三服务分离：用户认证、模型处理、设计管理</li>
                    <li>RESTful API设计，标准化接口规范</li>
                    <li>自动生成API文档，支持Swagger UI交互测试</li>
                    <li>异步请求处理，提升系统响应性能</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 数据库与缓存系统 -->
            <div class="hardware-section">
              <h4>数据库与缓存系统</h4>
              <div class="hardware-description">
                <p>
                  数据库与缓存系统采用SQLite本地存储和Redis内存缓存的混合架构，
                  通过SQLAlchemy ORM简化数据操作，连接池优化并发性能。
                  系统设计遵循数据一致性原则，确保缓存与数据库的同步更新。
                </p>
                <div class="hardware-specs">
                  <ul>
                    <li>SQLite本地数据库，存储用户信息和设计数据</li>
                    <li>Redis缓存系统，加速频繁访问的数据读取</li>
                    <li>SQLAlchemy ORM框架，简化数据库操作</li>
                    <li>数据库连接池，优化并发访问性能</li>
                    <li>定期备份机制，确保数据安全性</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 异步任务队列 -->
            <div class="hardware-section">
              <h4>异步任务队列系统</h4>
              <div class="hardware-description">
                <p>
                  异步任务队列系统基于Dramatiq和Redis构建，专门处理3D渲染、AI推理等耗时操作。
                  通过将重任务从主线程分离，确保API响应速度的同时提供强大的后台处理能力。
                  系统支持任务优先级调度、失败重试和进度监控等企业级特性。
                </p>
                <div class="hardware-specs">
                  <ul>
                    <li>Dramatiq+Redis异步任务队列，处理耗时操作</li>
                    <li>Blender 3D渲染任务，支持后台批量处理</li>
                    <li>AI模型推理任务，避免阻塞主线程</li>
                    <li>任务状态跟踪，实时监控处理进度</li>
                    <li>失败重试机制，确保任务执行可靠性</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 部署与运维 -->
            <div class="hardware-section">
              <h4>部署与运维系统</h4>
              <div class="hardware-layout right-image">
                <div class="hardware-specs">
                  <ul>
                    <li>Ubuntu 20.04 LTS服务器，稳定的生产环境</li>
                    <li>Nginx反向代理，SSL/HTTPS安全传输</li>
                    <li>Gunicorn WSGI服务器，多进程并发处理</li>
                    <li>systemd守护进程，自动重启和服务管理</li>
                    <li>完整日志记录，错误追踪和性能监控</li>
                  </ul>
                </div>
                <div class="hardware-image-container">
                  <div class="gallery-item" @click="openImageModal('/images/projects/yigui-app-2025/同理心地图.png', '系统运维监控')">
                    <NuxtImg
                      src="/images/projects/yigui-app-2025/同理心地图.png"
                      alt="系统运维监控"
                      preset="photo"
                      class="hardware-image"
                      :style="{ objectFit: 'contain' }"
                    />
                    <span class="gallery-caption">系统运维与监控策略</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 后端技术栈 -->
            <div class="tech-specs-section">
              <h4>后端技术栈规格</h4>
              <div class="specs-overview">
                <div class="specs-category">
                  <h5>🐍 Python框架</h5>
                  <div class="specs-list">
                    <span class="spec-item">FastAPI 0.104+</span>
                    <span class="spec-item">SQLAlchemy ORM</span>
                    <span class="spec-item">Pydantic验证</span>
                  </div>
                </div>
                <div class="specs-category">
                  <h5>🗄️ 数据存储</h5>
                  <div class="specs-list">
                    <span class="spec-item">SQLite数据库</span>
                    <span class="spec-item">Redis缓存</span>
                    <span class="spec-item">文件存储系统</span>
                  </div>
                </div>
                <div class="specs-category">
                  <h5>⚡ 异步处理</h5>
                  <div class="specs-list">
                    <span class="spec-item">Dramatiq队列</span>
                    <span class="spec-item">Redis消息代理</span>
                    <span class="spec-item">后台任务管理</span>
                  </div>
                </div>
                <div class="specs-category">
                  <h5>🚀 部署运维</h5>
                  <div class="specs-list">
                    <span class="spec-item">Ubuntu 20.04</span>
                    <span class="spec-item">Nginx + SSL</span>
                    <span class="spec-item">Gunicorn WSGI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>















        <!-- 演示视频 -->
        <div id="demo-video" class="section">
          <div class="section-header"><h3 class="section-title">完整功能演示</h3></div>
          <div class="work-content space-y-8">

            <!-- 视频介绍 -->
            <div class="info-card">
              <div class="info-header text-center"><h4>产品核心流程演示</h4></div>
              <div class="info-content max-w-4xl mx-auto text-center">
                <p class="text-lg leading-relaxed mb-0">以下视频展示了 Yigui / 依柜 App 的完整操作流程，从用户登录、设计创建、参数调整到最终的 3D 试穿效果。演示在 iOS 模拟器中进行，展现了真实的用户体验和流畅的交互设计。</p>
              </div>
            </div>

            <!-- 视频播放器 -->
            <div class="modeling-video-section">
              <div class="video-item">
                <video
                  controls="controls"
                  preload="metadata"
                  class="video-player"
                  poster="/images/projects/yigui-app-2025/项目封面图.png"
                >
                  <source src="/videos/projects/yigui-app-2025/在模拟机完整操作视频.webm" type="video/webm" />
                  <p>您的浏览器不支持视频播放。<a href="/videos/projects/yigui-app-2025/在模拟机完整操作视频.webm" target="_blank" style="color: #ff6b35;">点击下载视频</a></p>
                </video>
                <div class="video-caption">Yigui / 依柜 - 完整功能演示：从登录到虚拟试穿的完整流程</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 文档下载 -->
        <div id="docs" class="section">
          <div class="section-header"><h3 class="section-title">文档与素材下载</h3></div>
          <div class="center-content">
            <div class="center-description">
              <p>
                提供完整的项目技术报告、设计文档和宣传材料下载。这些文档详细记录了项目的技术实现过程、设计思路和创新点，供学习参考使用。
              </p>
              <div class="requirements-docs">
                <h4>项目文档</h4>
                <div class="document-buttons">
                  <a href="/files/yigui-app-2025/Yigui初赛报告.pdf" download="Yigui初赛报告.pdf" class="project-doc-button">
                    📄 初赛报告 (2.5MB)
                  </a>
                  <a href="/files/yigui-app-2025/Yigui复赛报告.pdf" download="Yigui复赛报告.pdf" class="project-doc-button">
                    📄 复赛报告 (3.8MB)
                  </a>
                  <a href="/files/yigui-app-2025/App宣传海报.pdf" download="App宣传海报.pdf" class="project-doc-button">
                    🎨 宣传海报 (61MB)
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 结果与证书 -->
        <div id="achievements" class="section">
          <div class="section-header"><h3 class="section-title">竞赛成果与荣誉</h3></div>
          <div class="center-content">
            <!-- 竞赛成绩 -->
            <div class="competition-results">
              <div class="result-center">
                <h4>竞赛成绩</h4>
                <p>西南赛区二等奖（中国高校计算机大赛—移动应用创新赛）</p>
                <div class="award-image-container-large">
                  <div class="gallery-item" @click="openImageModal('/images/projects/yigui-app-2025/西南赛区二等奖证书.jpg', '西南赛区二等奖证书')">
                    <NuxtImg
                      src="/images/projects/yigui-app-2025/西南赛区二等奖证书.jpg"
                      alt="西南赛区二等奖证书"
                      preset="photo"
                      class="award-certificate-image-large"
                      :style="{ objectFit: 'contain' }"
                    />
                  </div>
                  <a
                    v-if="showMobileAppCertificates"
                    href="/images/projects/yigui-app-2025/西南赛区二等奖证书.jpg"
                    target="_blank"
                    download="移动应用创新赛二等奖证书.jpg"
                    class="download-button"
                  >
                    下载证书
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 项目总结 -->
        <div id="project-summary" class="project-summary-section">
          <div class="section-header"><h3 class="section-title">项目总结</h3></div>
          <div class="summary-content-wrapper">
            <p class="summary-description">
              这个项目是我在移动应用开发和计算机视觉领域的重要实践。通过从零开始构建一个完整的虚拟试衣应用，
              我深度学习了 SwiftUI、3D 图形处理、机器学习模型集成等技术。最大的收获是学会了如何将理论转化为实际产品，
              如何在技术创新与用户体验之间找到平衡。这次获得西南赛区二等奖不仅是对技术实力的认可，
              更是对我产品思维和解决实际问题能力的肯定。
            </p>
          </div>
        </div>

        <!-- 返回按钮 - 页面底部 -->
        <div class="back-to-overview-section">
          <button @click="goBackToOverview" class="back-overview-button">
            <svg class="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span>返回项目概览</span>
          </button>
        </div>
      </section>

      <!-- NUS SOC SWS 2024 详细内容 -->
      <section v-if="selectedProject === 'nus-sws-2024'" class="project-detail">
        <!-- 返回按钮 -->
        <div class="back-button-container">
          <button @click="goBackToOverview" class="back-button">
            <svg class="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            返回项目概览
          </button>
        </div>

                <!-- 悬浮导航栏 -->
        <aside class="floating-nav" v-show="selectedProject === 'nus-sws-2024'">
          <div class="floating-nav-content">
            <div class="floating-nav-title">导航</div>
            <nav class="floating-nav-items">
                            <a
                href="#team-info"
                @click="scrollToSection('team-info', $event)"
                :class="['floating-nav-card', { active: currentSection === 'team-info' }]"
              >
                团队信息
              </a>
              <a
                href="#team-work"
                @click="scrollToSection('team-work', $event)"
                :class="['floating-nav-card', { active: currentSection === 'team-work' }]"
              >
                团队作品
              </a>
              <a
                href="#individual-work"
                @click="scrollToSection('individual-work', $event)"
                :class="['floating-nav-card', { active: currentSection === 'individual-work' }]"
              >
                个人作品
              </a>
              <a
                href="#achievements"
                @click="scrollToSection('achievements', $event)"
                :class="['floating-nav-card', { active: currentSection === 'achievements' }]"
              >
                项目成果
              </a>
              <a
                href="#project-summary"
                @click="scrollToSection('project-summary', $event)"
                :class="['floating-nav-card', { active: currentSection === 'project-summary' }]"
              >
                项目总结
              </a>
            </nav>
          </div>
        </aside>

        <!-- 项目英雄区域 -->
        <div class="hero-section">
          <div class="hero-content">
            <div class="hero-text">
              <span class="project-date">2024年6月29日 - 7月20日</span>
              <h1 class="hero-title">NUS SOC SWS 2024</h1>
                  <h2 class="hero-subtitle">Designing Interaction Interfaces: UI/UX in the Digital World</h2>
                  <div class="hero-badges">
                    <span class="badge badge-primary">UI/UX设计</span>
                    <span class="badge badge-secondary">Figma原型</span>
                  </div>
                </div>
                <div class="hero-image" @click="openImageModal('/images/projects/nus-sws-2024/cover.png', 'NUS SOC SWS 2024项目封面图')">
                  <NuxtImg
                    src="/images/projects/nus-sws-2024/cover.png"
                    alt="NUS SOC SWS 2024项目封面"
                    preset="hero"
                    class="cover-image clickable-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <div class="image-overlay">
                    <span class="overlay-text">点击查看大图</span>
                  </div>
                </div>
              </div>
            </div>

                <!-- 团队信息 -->
        <div id="team-info" class="section">
          <div class="section-header">
            <h3 class="section-title">团队信息</h3>
          </div>
          <div class="team-info-content">
            <div class="team-info-grid">
              <div class="info-card">
                <div class="info-header">
                  <h4>指导教授</h4>
                </div>
                <div class="info-content">
                  <p>Bimlesh Wadhwa（Professor of NUS School of Computing）</p>
                </div>

                <div class="info-header">
                  <h4>TA/助教</h4>
                </div>
                <div class="info-content">
                  <p>Melanie Khin Jing Hong (NUS)</p>
                  <p>Charisma Kausar (NUS)</p>
                </div>
              </div>

              <div class="info-card">
                <div class="info-header">
                  <h4>团队成员</h4>
                </div>
                <ul class="team-members-list">
                  <li>我 <span class="leader-badge">队长</span> - 团队协调、注册登录模块、聊天功能</li>
                  <li>Liang Zhuoran（Glasgow College, UESTC） - 主页、好友动态功能制作</li>
                  <li>YANG Jilin（Glasgow College, UESTC） - 地图功能、导航功能</li>
                  <li>LI Jingyan（NYU） - 海报制作</li>
                  <li>JIN Hanze（UNNC） - 团队网页制作</li>
                  <li>ZHAO Chengcheng（Glasgow College, UESTC） - 市场调研与需求分析</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 团队作品 -->
        <div id="team-work" class="section">
          <div class="section-header">
            <h3 class="section-title">团队作品：LiNkUS</h3>
          </div>
              <div class="work-content">
                <div class="work-description">
                  <p>
                    LiNkUS是我们团队设计的校园社交应用原型，专为NUS学生打造的综合性社交平台。应用集成了实时地图聊天、好友动态分享、校园活动发布等核心功能，旨在增强校园内学生间的互动交流。
                  </p>
                  <p>
                    应用采用现代化的UI设计语言，注重用户体验的流畅性和直观性。通过深入的用户研究和多轮迭代优化，我们打造了一个既实用又美观的社交产品原型。
                  </p>
                  <div class="prototype-links">
                    <a
                      href="https://www.figma.com/proto/K79KSdRZ2iqkICTTFgVhOq/FINAL-FINAL-VERSION?node-id=31-4086&p=f&m=draw&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=31%3A4086&show-proto-sidebar=1&t=vBrl6Grze1tzWgMv-1"
                      target="_blank"
                      class="prototype-link"
                    >
                      查看Figma原型
                    </a>
                    <span class="access-note">（密码：90210）</span>
                    <a
                      href="https://jinhz0531.wixsite.com/my-site-5"
                      target="_blank"
                      class="prototype-link"
                    >
                      查看宣传网站
                    </a>
                  </div>
                </div>
                <div class="work-gallery">
                  <div class="team-gallery-layout">
                    <!-- 左侧Figma原型图 -->
                    <div class="prototype-section">
                      <div class="gallery-item" @click="openImageModal('/images/projects/nus-sws-2024/team-figma-prototype.png', 'LiNkUS Figma原型设计')">
                        <NuxtImg
                          src="/images/projects/nus-sws-2024/team-figma-prototype.png"
                          alt="LiNkUS Figma原型"
                          preset="photo"
                          class="prototype-image"
                          :style="{ objectFit: 'contain' }"
                        />
                        <span class="gallery-caption">LiNkUS Figma原型设计</span>
                      </div>
                    </div>

                    <!-- 右侧应用截图 -->
                    <div class="screenshots-section">
                      <div class="gallery-item" @click="openImageModal('/images/projects/nus-sws-2024/team-welcome.png', 'LiNkUS欢迎页面')">
                        <NuxtImg
                          src="/images/projects/nus-sws-2024/team-welcome.png"
                          alt="LiNkUS欢迎页面"
                          preset="photo"
                          class="team-gallery-image"
                          :style="{ objectFit: 'contain' }"
                        />
                        <span class="gallery-caption">LiNkUS欢迎页面</span>
                      </div>
                      <div class="gallery-item" @click="openImageModal('/images/projects/nus-sws-2024/team-map.png', 'LiNkUS校园地图功能')">
                        <NuxtImg
                          src="/images/projects/nus-sws-2024/team-map.png"
                          alt="LiNkUS地图功能"
                          preset="photo"
                          class="team-gallery-image"
                          :style="{ objectFit: 'contain' }"
                        />
                        <span class="gallery-caption">LiNkUS校园地图功能</span>
                      </div>
                      <div class="gallery-item" @click="openImageModal('/images/projects/nus-sws-2024/team-chat.png', 'LiNkUS实时聊天功能')">
                        <NuxtImg
                          src="/images/projects/nus-sws-2024/team-chat.png"
                          alt="LiNkUS聊天功能"
                          preset="photo"
                          class="team-gallery-image"
                          :style="{ objectFit: 'contain' }"
                        />
                        <span class="gallery-caption">LiNkUS实时聊天功能</span>
                      </div>
                      <div class="gallery-item" @click="openImageModal('/images/projects/nus-sws-2024/team-feed.png', 'LiNkUS好友动态功能')">
                        <NuxtImg
                          src="/images/projects/nus-sws-2024/team-feed.png"
                          alt="LiNkUS动态功能"
                          preset="photo"
                          class="team-gallery-image"
                          :style="{ objectFit: 'contain' }"
                        />
                        <span class="gallery-caption">LiNkUS好友动态功能</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        <!-- 个人作品 -->
        <div id="individual-work" class="section">
          <div class="section-header">
            <h3 class="section-title">个人作品：Individual Wrap</h3>
          </div>
              <div class="work-content">
                <div class="work-description">
                  <p>
                    Individual Wrap是我参考Spotify年度总结风格设计的个人项目回顾网站。通过数据可视化的方式，生动地展示了我在SWS项目中的学习历程、时间投入、技能成长和项目亮点。
                  </p>
                  <p>
                    设计中融入了现代化的渐变色彩、动态图表和个性化的布局设计，既体现了我对UI设计的理解，也完整记录了这次宝贵的学习经历。
                  </p>
                  <div class="prototype-links">
                    <a
                      href="https://www.figma.com/proto/N6O73v3gWnRRq7EnM1ewIn/Individual-Wrap?node-id=29-2&p=f&t=Rrs3pCcDmYXxDGfK-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=18%3A20&show-proto-sidebar=1"
                      target="_blank"
                      class="prototype-link"
                    >
                      查看个人作品原型
                    </a>
                  </div>
                </div>
                <div class="work-gallery">
                  <div class="individual-gallery-grid">
                    <div class="gallery-item" @click="openImageModal('/images/projects/nus-sws-2024/individual-prototype.png', 'Individual Wrap Figma原型图')">
                      <NuxtImg
                        src="/images/projects/nus-sws-2024/individual-prototype.png"
                        alt="Individual Wrap原型"
                        preset="project"
                        class="individual-image"
                        :style="{ objectFit: 'contain' }"
                      />
                      <span class="gallery-caption">Individual Wrap Figma原型图</span>
                    </div>
                    <div class="gallery-item" @click="openImageModal('/images/projects/nus-sws-2024/individual-homepage.png', 'Individual Wrap首页设计')">
                      <NuxtImg
                        src="/images/projects/nus-sws-2024/individual-homepage.png"
                        alt="Individual Wrap首页"
                        preset="project"
                        class="individual-image"
                        :style="{ objectFit: 'contain' }"
                      />
                      <span class="gallery-caption">Individual Wrap首页设计</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

                <!-- 项目成果 -->
        <div id="achievements" class="section">
          <div class="section-header">
            <h3 class="section-title">项目成果</h3>
          </div>
              <div class="achievements-content">
                <div class="achievement-summary">
                  <div class="result-item">
                    <h4>团队荣誉</h4>
                    <p>团队作品在10个小组中获得前三名</p>
                    <div class="award-image-container">
                      <div class="gallery-item" @click="openImageModal('/images/projects/nus-sws-2024/Top Project.png', '团队获奖证书')">
                        <NuxtImg
                          src="/images/projects/nus-sws-2024/Top Project.png"
                          alt="团队获奖证书"
                          preset="photo"
                          class="award-certificate-image"
                          :style="{ objectFit: 'contain' }"
                        />
                      </div>
                      <a
                        v-if="showNusCertificates"
                        href="/images/projects/nus-sws-2024/Top Project.png"
                        target="_blank"
                        download="NUS-SWS-2024-团队荣誉证书.png"
                        class="download-button"
                      >
                        下载证书
                      </a>
                    </div>
                  </div>
                  <div class="result-item">
                    <h4>个人成绩</h4>
                    <p>获得A+个人表现评价</p>
                    <div class="award-image-container">
                      <div class="gallery-item" @click="openImageModal('/images/projects/nus-sws-2024/个人A+.png', '个人成绩证书')">
                        <NuxtImg
                          src="/images/projects/nus-sws-2024/个人A+.png"
                          alt="个人成绩证书"
                          preset="photo"
                          class="award-certificate-image"
                          :style="{ objectFit: 'contain' }"
                        />
                      </div>
                      <a
                        v-if="showNusCertificates"
                        href="/images/projects/nus-sws-2024/个人A+.png"
                        target="_blank"
                        download="NUS-SWS-2024-个人成绩证书.png"
                        class="download-button"
                      >
                        下载证书
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        <!-- 项目总结 -->
        <div id="project-summary" class="project-summary-section">
          <h3 class="section-title">项目总结</h3>
          <div class="summary-content-wrapper">
            <p class="summary-description">
              这次NUS SOC SWS 2024项目给了我一次宝贵的国际化学习体验。
              通过三周的密集学习，我不仅掌握了UI/UX设计的核心技能，更重要的是学会了如何在多元文化的团队中有效协作，
              如何在压力下保持质量，以及如何将理论知识转化为实际的产品原型。
              这段经历将成为我学术和职业发展路上的重要里程碑。
            </p>

            <!-- 项目照片 -->
            <div class="project-photos">
              <div class="photo-item" @click="openImageModal('/images/projects/nus-sws-2024/correct-personal-photo.png', '项目期间个人照片')">
                <NuxtImg
                  src="/images/projects/nus-sws-2024/correct-personal-photo.png"
                  alt="项目期间照片"
                  preset="photo"
                  class="achievement-photo"
                  :style="{ objectFit: 'contain' }"
                />
                <span class="gallery-caption">项目期间个人照片</span>
              </div>
              <div class="photo-item" @click="openImageModal('/images/projects/nus-sws-2024/correct-classroom-photo.png', '课堂学习环境')">
                <NuxtImg
                  src="/images/projects/nus-sws-2024/correct-classroom-photo.png"
                  alt="课堂环境"
                  preset="photo"
                  class="achievement-photo"
                  :style="{ objectFit: 'contain' }"
                />
                <span class="gallery-caption">课堂学习环境</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 返回按钮 - 独立在页面底部 -->
        <div class="back-to-overview-section">
          <button @click="goBackToOverview" class="back-overview-button">
            <svg class="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span>返回项目概览</span>
          </button>
        </div>
      </section>

      <!-- 盟升杯电子设计竞赛 2024 详细内容 -->
      <section v-if="selectedProject === 'mengsheng-2024'" class="project-detail">
        <!-- 返回按钮 -->
        <div class="back-button-container">
          <button @click="goBackToOverview" class="back-button">
            <svg class="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            返回项目概览
          </button>
        </div>

                <!-- 悬浮导航栏 -->
        <aside class="floating-nav" v-show="selectedProject === 'mengsheng-2024'">
          <div class="floating-nav-content">
            <div class="floating-nav-title">导航</div>
            <nav class="floating-nav-items">
                            <a
                href="#team-info"
                @click="scrollToSection('team-info', $event)"
                :class="['floating-nav-card', { active: currentSection === 'team-info' }]"
              >
                团队信息
              </a>
              <a
                href="#project-background"
                @click="scrollToSection('project-background', $event)"
                :class="['floating-nav-card', { active: currentSection === 'project-background' }]"
              >
                项目背景
              </a>
              <a
                href="#project-overview"
                @click="scrollToSection('project-overview', $event)"
                :class="['floating-nav-card', { active: currentSection === 'project-overview' }]"
              >
                解决方案
              </a>
              <a
                href="#system-design"
                @click="scrollToSection('system-design', $event)"
                :class="['floating-nav-card', { active: currentSection === 'system-design' }]"
              >
                系统设计
              </a>
              <a
                href="#software-algorithm"
                @click="scrollToSection('software-algorithm', $event)"
                :class="['floating-nav-card', { active: currentSection === 'software-algorithm' }]"
              >
                算法仿真
              </a>
              <a
                href="#hardware-implementation"
                @click="scrollToSection('hardware-implementation', $event)"
                :class="['floating-nav-card', { active: currentSection === 'hardware-implementation' }]"
              >
                硬件实现
              </a>
              <a
                href="#testing-results"
                @click="scrollToSection('testing-results', $event)"
                :class="['floating-nav-card', { active: currentSection === 'testing-results' }]"
              >
                测试结果
              </a>
              <a
                href="#project-summary"
                @click="scrollToSection('project-summary', $event)"
                :class="['floating-nav-card', { active: currentSection === 'project-summary' }]"
              >
                项目总结
              </a>
            </nav>
          </div>
        </aside>
        <!-- 项目英雄区域 -->
        <div class="hero-section">
          <div class="hero-content">
            <div class="hero-text">
              <span class="project-date">2024年9月</span>
              <h1 class="hero-title">"盟升杯"电子设计竞赛</h1>
                  <h2 class="hero-subtitle">智能声源识别定位系统</h2>
                  <div class="hero-badges">
                    <span class="badge badge-accent">硬件系统开发</span>
                    <span class="badge badge-info">STM32编程</span>
                    <span class="badge badge-secondary">语音控制</span>
                  </div>
                </div>
                <div class="hero-image" @click="openImageModal('/images/projects/mengsheng-2024/cover.jpg', '盟升杯电子设计竞赛项目封面')">
                  <NuxtImg
                    src="/images/projects/mengsheng-2024/cover.jpg"
                    alt="盟升杯电子设计竞赛项目封面"
                    preset="hero"
                    class="cover-image clickable-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <div class="image-overlay">
                    <span class="overlay-text">点击查看大图</span>
                  </div>
                </div>
              </div>
            </div>

        <!-- 团队信息 -->
        <div id="team-info" class="section">
          <div class="section-header">
            <h3 class="section-title">团队信息</h3>
          </div>
          <div class="team-info-content">
            <div class="team-info-grid">
              <div class="info-card">
                <div class="info-header">
                  <h4>指导方</h4>
                </div>
                <div class="info-content">
                  <p>电子科学与工程学院科协</p>
                  <p>盟升电子公司专家</p>

                </div>
              </div>

              <div class="info-card">
                <div class="info-header">
                  <h4>团队成员</h4>
                </div>
                <ul class="team-members-list">
                  <li>我 <span class="leader-badge">队长</span></li>
                  <li>迪里亚尔江·阿司木江（计算机科学与工程学院）- 算法优化</li>
                  <li>热法提·买买提热夏提（电子科学与工程学院） - 电路焊接与调试</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- 项目背景与要求 -->
        <div id="project-background" class="section">
          <div class="section-header">
            <h3 class="section-title">项目背景与要求</h3>
          </div>
          <div class="background-content">
            <div class="background-main-content">
              <div class="background-description">
                <p>
                  本项目源于2024年盟升杯高年级组电子设计竞赛D题："智能声源识别定位系统"。
                  竞赛要求设计并制作一个能够识别和定位声源的智能系统，在预设的测量区域内实现精确的声源定位与语音识别功能。
                </p>
                <div class="task-requirements">
                  <h4>具体任务要求</h4>
                  <ul class="requirements-list">
                    <li><strong>硬件约束：</strong>麦克风阵列形式可自行设计，但麦克风个数不能超过5个，整个声源定位系统的尺寸不能超过测量区域</li>
                    <li><strong>定位功能：</strong>系统能够在5个预设区域(A、B、C、D、E)内准确识别声源位置，定位误差不超过±5cm</li>
                    <li><strong>语音识别：</strong>系统设置为"识别模式"时，能够识别区分4条指令："打开灯光"、"关闭灯光"、"打开空调"、"关闭空调"</li>
                    <li><strong>信号输入：</strong>指令通过手机、蓝牙音箱播放或自制播放设备输入</li>
                    <li><strong>结果显示：</strong>识别结果通过液晶屏幕在系统端进行实时显示</li>
                  </ul>
                </div>
                <div class="requirements-docs">
                  <h4>竞赛文档</h4>
                  <a
                    href="/images/projects/mengsheng-2024/project-requirements.pdf"
                    target="_blank"
                    class="project-doc-button"
                  >
                    📄 查看完整题目要求
                  </a>
                </div>
              </div>
            </div>
            <div class="measurement-area-section">
              <div class="area-diagram-container">
                <div class="gallery-item" @click="openImageModal('/images/projects/mengsheng-2024/measurement-area.png', '系统测量区域俯视图')">
                  <NuxtImg
                    src="/images/projects/mengsheng-2024/measurement-area.png"
                    alt="系统测量区域俯视图"
                    preset="photo"
                    class="area-diagram-large"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">系统测量区域俯视图 - 5个预设区域(A、B、C、D、E)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 解决方案与成果 -->
        <div id="project-overview" class="section">
          <div class="section-header">
            <h3 class="section-title">解决方案与成果</h3>
          </div>
          <div class="solution-content">
            <div class="solution-description">
              <p>
                针对竞赛要求，我们设计了基于STM32H750微控制器的智能声源识别定位系统。
                系统采用TDOA（时差定位）算法作为核心定位技术，通过四麦克风矩形阵列实现高精度声源定位，
                并集成ASR-PRO语音识别模块实现智能语音控制功能。
              </p>
              <p>
                经过严格的理论仿真、硬件调试和系统测试，最终实现了定位精度±2cm的技术指标，
                超越了竞赛要求的±5cm标准，并在2024年盟升杯电子设计竞赛中获得三等奖的优异成绩。
              </p>

              <div class="solution-highlights">
                <h4>核心技术方案</h4>
                <div class="solution-grid">
                  <div class="solution-item">
                    <div class="solution-icon">🎯</div>
                    <h5>TDOA定位算法</h5>
                    <p>基于时差原理，实现±2cm高精度定位，超越竞赛±5cm要求</p>
                  </div>
                  <div class="solution-item">
                    <div class="solution-icon">🎤</div>
                    <h5>四麦克风阵列</h5>
                    <p>40cm×20cm矩形布局，优化几何结构提升定位精度</p>
                  </div>
                  <div class="solution-item">
                    <div class="solution-icon">🗣️</div>
                    <h5>语音识别集成</h5>
                    <p>离线识别4条智能家居控制指令，响应时间<100ms</p>
                  </div>
                  <div class="solution-item">
                    <div class="solution-icon">⚡</div>
                    <h5>实时信号处理</h5>
                    <p>STM32H750 400MHz处理器，确保系统实时性能</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 完整源码 -->
        <div class="github-section">
          <div class="github-content">
            <div class="github-info">
              <h4>完整源码</h4>
              <p>由于代码文件较多且结构复杂，完整的软件源码已上传至GitHub仓库，包含Keil代码、设计报告、MATLAB仿真代码、Python分析代码等。</p>
            </div>
            <a href="https://github.com/yourusername/mengsheng-sound-localization" target="_blank" class="github-repo-btn">
              <svg class="github-icon" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              查看完整源码
            </a>
          </div>
        </div>

        <!-- 系统设计 -->
        <div id="system-design" class="section">
          <div class="section-header">
            <h3 class="section-title">系统架构设计</h3>
          </div>
          <div class="work-content">
            <div class="work-description">
              <p>
                系统采用模块化设计思想，分为硬件采集层、算法处理层和应用控制层三个主要层次。
                硬件层负责声音信号的采集和预处理，算法层实现TDOA定位计算，应用层提供用户交互和设备控制功能。
              </p>
              <div class="system-modules">
                <div class="module-item">
                  <h5>信号采集模块</h5>
                  <p>四个MAX9814麦克风构成矩形阵列，配合AD7606高精度ADC实现多通道同步采集</p>
                </div>
                <div class="module-item">
                  <h5>数据处理模块</h5>
                  <p>STM32H750负责实时信号处理，运行TDOA算法计算声源位置坐标</p>
                </div>
                <div class="module-item">
                  <h5>语音识别模块</h5>
                  <p>ASR-PRO模块实现语音命令识别，支持灯光、空调等设备的语音控制</p>
                </div>
              </div>
            </div>
            <div class="work-gallery">
              <div class="gallery-item" @click="openImageModal('/images/projects/mengsheng-2024/architecture.png', '系统整体架构图')">
                <NuxtImg
                  src="/images/projects/mengsheng-2024/architecture.png"
                  alt="系统整体架构图"
                  preset="photo"
                  class="architecture-image"
                  :style="{ objectFit: 'contain' }"
                />
                <span class="gallery-caption">系统整体架构图</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 算法设计与仿真 -->
        <div id="software-algorithm" class="section">
          <div class="section-header">
            <h3 class="section-title">算法设计与仿真</h3>
          </div>
          <div class="algorithm-content">
            <div class="algorithm-description">
              <p>
                在进行硬件实现之前，首先通过Python分析了不同语音指令的信号特征，然后通过MATLAB仿真验证了TDOA（时差定位）算法的可行性，
                最后设计了ASR-PRO语音识别模块的控制逻辑。这一套完整的算法设计与仿真为硬件实现奠定了坚实的理论基础。
              </p>
            </div>

            <!-- 第一步：Python声音信号分析 -->
            <CodeBlock
              title="Python声音信号分析"
              description="使用librosa库对四条语音指令进行频域分析和特征提取，为后续算法设计提供数据支撑"
              :code="pythonAnalysisCode"
              language="python"
              fileName="signal_analysis.py"
              complexity="支持多种音频格式"
            />

            <div class="python-analysis-results">
              <h4>Python声音信号分析结果</h4>
              <div class="analysis-description">
                <p>
                  通过Python的librosa库对"打开灯光"、"关闭灯光"、"打开空调"、"关闭空调"四条指令进行了完整的信号特征分析。
                  分析结果显示了不同指令在频域上的特征差异，为语音识别算法的参数调优和TDOA定位算法的设计提供了重要依据。
                </p>
              </div>
              <div class="analysis-result-image">
                <div class="gallery-item" @click="openImageModal('/images/projects/mengsheng-2024/python-analysis-result.png', 'Python声音信号分析结果图')">
                  <NuxtImg
                    src="/images/projects/mengsheng-2024/python-analysis-result.png"
                    alt="Python声音信号分析结果"
                    preset="photo"
                    class="analysis-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">Python声音信号分析结果 - 四条指令的频域特征对比</span>
                </div>
              </div>
            </div>

            <!-- 第二步：TDOA声源定位算法仿真 -->
            <CodeBlock
              title="TDOA声源定位算法仿真"
              description="基于时差定位原理的核心算法实现，使用最小化误差的优化方法估计声源位置"
              :code="tdoaAlgorithmCode"
              language="matlab"
              fileName="tdoa_localization.m"
              complexity="时间复杂度: O(n)"
              github-url="https://github.com/yourusername/project"
            />

            <div class="simulation-results">
              <h4>MATLAB仿真验证结果</h4>
              <div class="simulation-description">
                <p>
                  通过MATLAB进行了大量的仿真验证，测试了不同声源位置下的定位精度。
                  仿真结果表明，TDOA算法在理想条件下能够实现±2cm的定位精度，
                  完全满足竞赛要求的±5cm指标。
                </p>
              </div>
              <div class="simulation-gallery">
                <div class="gallery-item" @click="openImageModal('/images/projects/mengsheng-2024/simulation-1.png', 'MATLAB仿真结果1 - 区域A声源定位')">
                  <NuxtImg
                    src="/images/projects/mengsheng-2024/simulation-1.png"
                    alt="随机声源仿真结果1"
                    preset="photo"
                    class="simulation-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">仿真结果1 - 区域A声源定位验证</span>
                </div>
                <div class="gallery-item" @click="openImageModal('/images/projects/mengsheng-2024/simulation-2.png', 'MATLAB仿真结果2 - 区域E声源定位')">
                  <NuxtImg
                    src="/images/projects/mengsheng-2024/simulation-2.png"
                    alt="随机声源仿真结果2"
                    preset="photo"
                    class="simulation-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">仿真结果2 - 区域E声源定位验证</span>
                </div>
              </div>
              <div class="simulation-analysis">
                <h5>仿真分析总结</h5>
                <ul>
                  <li>在5个预设区域内进行了100次随机声源定位测试</li>
                  <li>平均定位误差：1.8cm，最大误差：3.2cm</li>
                  <li>算法收敛时间：平均15ms，满足实时性要求</li>
                  <li>在噪声环境下（SNR>20dB）仍能保持较高精度</li>
                </ul>
              </div>
            </div>

            <!-- 第三步：ASR-PRO语音识别控制 -->
            <CodeBlock
              title="ASR-PRO语音识别控制"
              description="语音识别模块的核心控制代码，实现语音命令到设备控制的转换"
              :code="asrControlCode"
              language="cpp"
              fileName="asr_control.cpp"
              complexity="实时响应 < 100ms"
            />

            <div class="asr-code-diagram">
              <h4>ASR-PRO代码架构图</h4>
              <div class="code-diagram-description">
                <p>
                  ASR-PRO语音识别模块采用状态机设计模式，通过硬件中断处理语音识别结果，
                  实现了高效的语音命令解析和设备控制逻辑。
                </p>
              </div>
              <div class="diagram-image">
                <div class="gallery-item" @click="openImageModal('/images/projects/mengsheng-2024/asr-code-diagram.png', 'ASR-PRO代码架构流程图')">
                  <NuxtImg
                    src="/images/projects/mengsheng-2024/asr-code-diagram.png"
                    alt="ASR-PRO代码架构图"
                    preset="photo"
                    class="code-diagram-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">ASR-PRO语音识别控制流程图</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 硬件实现 -->
        <div id="hardware-implementation" class="section">
          <div class="section-header">
            <h3 class="section-title">硬件设计与实现</h3>
          </div>
          <div class="hardware-content">
            <div class="hardware-description">
              <p>
                硬件系统以STM32H750为核心，集成了高精度ADC、麦克风阵列、语音识别模块等关键组件。
                电路设计充分考虑了信号完整性和噪声抑制，确保声音信号的高质量采集。
              </p>
              <p>
                系统采用四麦克风矩形阵列布局，通过精确的时间同步和信号处理，
                实现对声源位置的高精度定位。各硬件模块经过严格的电磁兼容性设计，
                确保在复杂电磁环境下的稳定工作。
              </p>
            </div>

            <!-- 核心处理器 -->
            <div class="hardware-section">
              <h4>核心处理器模块</h4>
              <div class="hardware-layout left-image">
                <div class="hardware-image-container">
                  <div class="gallery-item" @click="openImageModal('/images/projects/mengsheng-2024/stm32-board.png', 'STM32H750核心板')">
                    <NuxtImg
                      src="/images/projects/mengsheng-2024/stm32-board.png"
                      alt="STM32H750实物图"
                      preset="photo"
                      class="hardware-image"
                      :style="{ objectFit: 'contain' }"
                    />
                    <span class="gallery-caption">STM32H750核心板 - 400MHz Cortex-M7</span>
                  </div>
                </div>
                <div class="hardware-specs">
                  <ul>
                    <li>STM32H750VBT6 微控制器，主频400MHz</li>
                    <li>Cortex-M7内核，支持浮点运算单元</li>
                    <li>128KB Flash + 1MB RAM</li>
                    <li>丰富的外设接口：SPI、I2C、UART、ADC等</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 声音采集模块 -->
            <div class="hardware-section">
              <h4>声音采集与处理模块</h4>
              <div class="hardware-layout right-image">
                <div class="hardware-specs">
                  <ul>
                    <li>支持离线语音识别，响应时间<100ms</li>
                    <li>内置降噪算法，适应复杂声学环境</li>
                    <li>可自定义命令词，支持中文识别</li>
                    <li>集成麦克风阵列接口</li>
                  </ul>
                </div>
                <div class="hardware-image-container">
                  <div class="gallery-item" @click="openImageModal('/images/projects/mengsheng-2024/asr-pro-module.png', 'ASR-PRO语音识别模块')">
                    <NuxtImg
                      src="/images/projects/mengsheng-2024/asr-pro-module.png"
                      alt="ASR-PRO语音识别模块"
                      preset="photo"
                      class="hardware-image"
                      :style="{ objectFit: 'contain' }"
                    />
                    <span class="gallery-caption">ASR-PRO语音识别模块</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 数模转换器模块 -->
            <div class="hardware-section">
              <h4>数模转换器模块</h4>
              <div class="hardware-layout left-image">
                <div class="hardware-image-container">
                  <div class="gallery-item" @click="openImageModal('/images/projects/mengsheng-2024/ad7606-hardware.png', 'AD7606数模转换器')">
                    <NuxtImg
                      src="/images/projects/mengsheng-2024/ad7606-hardware.png"
                      alt="AD7606实物图"
                      preset="photo"
                      class="hardware-image"
                      :style="{ objectFit: 'contain' }"
                    />
                    <span class="gallery-caption">AD7606高精度ADC模块</span>
                  </div>
                </div>
                <div class="hardware-specs">
                  <ul>
                    <li>16位分辨率，8通道同步采样ADC</li>
                    <li>最高采样率200kSPS，满足声音信号处理需求</li>
                    <li>内置可编程增益放大器，增益范围1-10倍</li>
                    <li>差分输入设计，有效抑制共模噪声</li>
                    <li>SPI/并行接口，便于与STM32连接</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- 麦克风阵列系统 -->
            <div class="hardware-section">
              <h4>麦克风阵列系统</h4>
              <div class="mic-array-layout">
                <div class="gallery-item" @click="openImageModal('/images/projects/mengsheng-2024/mic-array-wiring.png', '麦克风矩阵接线图')">
                  <NuxtImg
                    src="/images/projects/mengsheng-2024/mic-array-wiring.png"
                    alt="麦克风矩阵实际接线图"
                    preset="photo"
                    class="wiring-diagram"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">四麦克风矩形阵列接线图</span>
                </div>
              </div>
              <div class="mic-array-description">
                <p>
                  采用四麦克风矩形阵列布局，阵列尺寸为40cm×20cm。
                  通过精确的几何布局和时间同步，实现高精度的TDOA计算。
                  每个麦克风均经过精确的相位校准，确保信号采集的一致性。
                </p>
                <div class="array-specs">
                  <div class="spec-item">
                    <strong>阵列尺寸：</strong>40cm × 20cm
                  </div>
                  <div class="spec-item">
                    <strong>麦克风数量：</strong>4个 (矩形布局)
                  </div>
                  <div class="spec-item">
                    <strong>采样率：</strong>20kHz
                  </div>
                  <div class="spec-item">
                    <strong>定位精度：</strong>±2cm
                  </div>
                </div>
              </div>
            </div>

            <!-- 外框的3D建模与打印 -->
            <div class="hardware-section">
              <h4>外框的3D建模与打印</h4>
              <div class="modeling-description">
                <p>
                  为了保护电路板和提供美观的外观，我们使用SOLIDWORKS进行了外框架的3D建模设计。
                  设计考虑了麦克风阵列的布局、电路板固定、散热通风以及用户操作的便利性。
                  完成建模后，我们在校园内使用免费的3D打印服务制作了外框架。
                </p>
              </div>

              <div class="modeling-video-section">
                <div class="video-item">
                  <video
                    controls="controls"
                    preload="metadata"
                    class="video-player"
                    poster="/images/projects/mengsheng-2024/cover.jpg"
                  >
                    <source src="/videos/projects/mengsheng-2024/外框架3D建模展示.webm" type="video/webm" />
                    <p>您的浏览器不支持视频播放。<a href="/videos/projects/mengsheng-2024/外框架3D建模展示.webm" target="_blank" style="color: #ff6b35;">点击下载视频</a></p>
                  </video>
                  <div class="video-caption">外框架3D建模展示 - SOLIDWORKS</div>
                </div>
              </div>
            </div>

            <!-- 系统实物展示 -->
            <div class="hardware-section">
              <h4>完整系统实物</h4>
              <div class="system-gallery">
                <div class="gallery-item" @click="openImageModal('/images/projects/mengsheng-2024/system-photo.jpg', '完整系统实物图1')">
                  <NuxtImg
                    src="/images/projects/mengsheng-2024/system-photo.jpg"
                    alt="完整系统图1"
                    preset="photo"
                    class="system-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">完整系统实物图 - 正面视角</span>
                </div>
                <div class="gallery-item" @click="openImageModal('/images/projects/mengsheng-2024/system-photo-2.jpg', '完整系统实物图2')">
                  <NuxtImg
                    src="/images/projects/mengsheng-2024/system-photo-2.jpg"
                    alt="完整系统图2"
                    preset="photo"
                    class="system-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">完整系统实物图 - 俯视视角</span>
                </div>
              </div>
              <div class="system-description">
                <p>
                  系统集成度高，结构紧凑。核心处理板、语音识别模块、麦克风阵列等
                  各组件通过精心设计的PCB布局实现最优的信号传输和电磁兼容性。
                  整机经过严格的环境测试，确保在不同温湿度条件下的稳定运行。
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 测试结果 -->
        <div id="testing-results" class="section">
          <div class="section-header">
            <h3 class="section-title">系统测试与结果</h3>
          </div>
          <div class="testing-content">
            <div class="testing-description">
              <p>
                系统经过了严格的功能测试和性能验证，最终在盟升电子公司现场进行了正式测试并通过验收。
                定位精度、响应时间、语音识别准确率等关键指标均符合竞赛标准。
                由于现场规定禁止拍照摄影，因此无法提供正式演示视频，但保留了调试过程中的测试录像。
              </p>
            </div>

            <div class="debug-videos-section">
              <h4>系统调试演示视频</h4>
              <div class="videos-description">
                <p>
                  以下是系统开发调试过程中录制的演示视频，展示了声源定位和语音识别功能的实际运行效果。
                </p>
              </div>

              <div class="videos-gallery">
                <div class="video-item">
                  <video
                    controls="controls"
                    preload="metadata"
                    class="video-player"
                    poster="/images/projects/mengsheng-2024/cover.jpg"
                  >
                    <source src="/videos/projects/mengsheng-2024/debug-video-1.webm" type="video/webm" />
                    <p>您的浏览器不支持视频播放。<a href="/videos/projects/mengsheng-2024/debug-video-1.webm" target="_blank" style="color: #ff6b35;">点击下载视频</a></p>
                  </video>
                  <div class="video-caption">调试视频1 - 数模转换器AD7606调试 (22MB)</div>
                </div>

                <div class="video-item">
                  <video
                    controls="controls"
                    preload="metadata"
                    class="video-player"
                    poster="/images/projects/mengsheng-2024/cover.jpg"
                  >
                    <source src="/videos/projects/mengsheng-2024/debug-video-2.webm" type="video/webm" />
                    <p>您的浏览器不支持视频播放。<a href="/videos/projects/mengsheng-2024/debug-video-2.webm" target="_blank" style="color: #ff6b35;">点击下载视频</a></p>
                  </video>
                  <div class="video-caption">调试视频2 - 语音识别功能演示 (74MB)</div>
                </div>
              </div>
            </div>

            <div class="competition-results">
              <div class="result-center">
                <h4>竞赛成绩</h4>
                <p>三等奖（奖金2,000RMB）</p>
                <div class="award-image-container">
                  <div class="gallery-item" @click="openImageModal('/images/projects/mengsheng-2024/盟升杯三等奖证书.png', '盟升杯三等奖证书')">
                    <NuxtImg
                      src="/images/projects/mengsheng-2024/盟升杯三等奖证书.png"
                      alt="盟升杯三等奖证书"
                      preset="photo"
                      class="award-certificate-image"
                      :style="{ objectFit: 'contain' }"
                    />
                  </div>
                  <a
                    v-if="showMengshengCertificates"
                    href="/images/projects/mengsheng-2024/award-certificate.pdf"
                    target="_blank"
                    download="盟升杯三等奖证书.pdf"
                    class="download-button"
                  >
                    下载证书
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>



        <!-- 项目总结 -->
        <div id="project-summary" class="project-summary-section">
              <h3 class="section-title">项目总结</h3>
              <div class="summary-content-wrapper">
                <p class="summary-description">
                  这是我们团队首次涉足具有相当工程量的嵌入式项目。从零开始，我们投入了大量时间学习和实践。
                  最大的挑战在于软件层面，特别是如何将 AD7606 采集到的多通道实时数据，无缝地送入 TDOA 定位算法中进行处理。
                  尽管我们成功驱动了所有硬件模块，并实现了稳定的语音识别功能，但由于在 ADC、DMA 的中断处理及不同代码库融合上的经验不足，最终未能完成定位功能的联调。
                  一个多月的全力投入，无数个深夜的调试与探索，是一段充满挑战又收获满满的旅程。
                  我们没有因为困难而放弃，而是将所有精力倾注于此，在有限的时间里边学边做，体验了从理论到实践的完整过程。
                  虽然最终系统未能实现全部功能，但我们搭建了完整的硬件系统，攻克了大部分软件难题，更重要的是，收获了宝贵的团队协作经验和解决复杂工程问题的能力。
                  我们为已完成的部分感到自豪，也为留下的遗憾感到激励。
                </p>

                <!-- 项目照片 -->
                <div class="project-photos">
                  <div class="photo-item" @click="openImageModal('/images/projects/mengsheng-2024/颁奖典礼.png', '颁奖典礼现场')">
                    <NuxtImg
                      src="/images/projects/mengsheng-2024/颁奖典礼.png"
                      alt="颁奖典礼现场"
                      preset="photo"
                      class="achievement-photo"
                      :style="{ objectFit: 'contain' }"
                    />
                    <span class="gallery-caption">颁奖典礼现场</span>
                  </div>
                  <div class="photo-item" @click="openImageModal('/images/projects/mengsheng-2024/队友在焊接.png', '队友在焊接电路板')">
                    <NuxtImg
                      src="/images/projects/mengsheng-2024/队友在焊接.png"
                      alt="队友在焊接电路板"
                      preset="photo"
                      class="achievement-photo"
                      :style="{ objectFit: 'contain' }"
                    />
                    <span class="gallery-caption">队友在焊接AD7606</span>
                  </div>
                </div>
              </div>
            </div>

        <!-- 返回按钮 - 独立在页面底部 -->
        <div class="back-to-overview-section">
              <button @click="goBackToOverview" class="back-overview-button">
                <svg class="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
                </svg>
                <span>返回项目概览</span>
              </button>
        </div>
      </section>

      <!-- LED语音交互灯板项目详情页面 -->
      <section v-if="selectedProject === 'led-voice-2025'" class="project-detail">
        <div class="back-button-container">
          <button @click="goBackToOverview" class="back-button">
            <svg class="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            返回项目概览
          </button>
        </div>

                <!-- 悬浮导航栏 -->
        <aside class="floating-nav" v-show="selectedProject === 'led-voice-2025'">
          <div class="floating-nav-content">
            <div class="floating-nav-title">导航</div>
            <nav class="floating-nav-items">
              <a
                href="#course-info"
                @click="scrollToSection('course-info', $event)"
                :class="['floating-nav-card', { active: currentSection === 'course-info' }]"
              >
                课设要求
              </a>
              <a
                href="#project-intro"
                @click="scrollToSection('project-intro', $event)"
                :class="['floating-nav-card', { active: currentSection === 'project-intro' }]"
              >
                项目介绍
              </a>
              <a
                href="#hardware-design"
                @click="scrollToSection('hardware-design', $event)"
                :class="['floating-nav-card', { active: currentSection === 'hardware-design' }]"
              >
                硬件设计
              </a>
              <a
                href="#led-software-design"
                @click="scrollToSection('led-software-design', $event)"
                :class="['floating-nav-card', { active: currentSection === 'led-software-design' }]"
              >
                软件设计
              </a>
              <a
                href="#led-function-demo"
                @click="scrollToSection('led-function-demo', $event)"
                :class="['floating-nav-card', { active: currentSection === 'led-function-demo' }]"
              >
                功能演示
              </a>
              <a
                href="#led-extended-thinking"
                @click="scrollToSection('led-extended-thinking', $event)"
                :class="['floating-nav-card', { active: currentSection === 'led-extended-thinking' }]"
              >
                拓展思考
              </a>
              <a
                href="#led-achievements"
                @click="scrollToSection('led-achievements', $event)"
                :class="['floating-nav-card', { active: currentSection === 'led-achievements' }]"
              >
                项目总结
              </a>
            </nav>
          </div>
        </aside>

        <!-- 项目英雄区域 -->
        <div class="hero-section">
          <div class="hero-content">
            <div class="hero-text">
              <span class="project-date">2025年1月-2025年2月</span>
              <h1 class="hero-title">LED语音交互灯板</h1>
              <h2 class="hero-subtitle">智能照明系统设计与实现 - 课程设计</h2>
              <div class="hero-badges">
                <span class="badge badge-accent">硬件系统开发</span>
                <span class="badge badge-info">Arduino编程</span>
                <span class="badge badge-secondary">语音交互</span>
              </div>
            </div>
            <div class="hero-image" @click="openImageModal('/images/projects/led-voice-2025/cover.png', 'LED语音交互灯板封面')">
              <NuxtImg
                src="/images/projects/led-voice-2025/cover.png"
                alt="LED语音交互灯板封面"
                preset="hero"
                class="cover-image clickable-image"
                :style="{ objectFit: 'contain' }"
              />
              <div class="image-overlay">
                <span class="overlay-text">点击查看大图</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 课程信息 -->
        <div id="course-info" class="section">
          <div class="section-header">
            <h3 class="section-title">课设要求</h3>
          </div>
          <div class="course-info-content">
            <div class="course-intro">
              <h4>智能LED光源照明系统设计</h4>
              <p>
                以智能LED光源照明系统的构思、设计、实现到运行的全生命周期为载体，通过对电源系统、
                人体特征点标注和跟踪、信号控制、程序编写、LED光源器件结构及照明特性、机器视觉、
                人工智能等相关知识的综合运用，利用LED灯珠亮度的PWM线性调控和人体特征跟踪技术，
                开发一款具有智能控制功能的照明系统。
              </p>
            </div>

            <div class="course-objectives">
              <h4>课设目标</h4>
              <div class="objectives-list">
                <div class="objective-item">
                  <div class="objective-number">1</div>
                  <div class="objective-content">
                    <h5>工程知识应用</h5>
                    <p>能够将工程和专业知识用于照明系统及其特性的设计、控制和优化</p>
                  </div>
                </div>

                <div class="objective-item">
                  <div class="objective-number">2</div>
                  <div class="objective-content">
                    <h5>系统分析能力</h5>
                    <p>能够运用工程科学的基本原理、专业知识分析和判断一个照明系统及其特性的关键环节和重要参数</p>
                  </div>
                </div>

                <div class="objective-item">
                  <div class="objective-number">3</div>
                  <div class="objective-content">
                    <h5>可行性研究</h5>
                    <p>能够在社会、健康、安全、环境、法律、文化以及环境等现实条件的约束下，对设计方案的可行性进行研究</p>
                  </div>
                </div>

                <div class="objective-item">
                  <div class="objective-number">4</div>
                  <div class="objective-content">
                    <h5>数据处理分析</h5>
                    <p>能够正确采集、整理实验数据，对实验结果进行研究、分析，得到合理有效的结论</p>
                  </div>
                </div>

                <div class="objective-item">
                  <div class="objective-number">5</div>
                  <div class="objective-content">
                    <h5>表达沟通能力</h5>
                    <p>能够陈述设计思想</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="course-meta">
              <div class="meta-grid">
                <div class="meta-item">
                  <span class="meta-label">课程性质</span>
                  <span class="meta-value">必修课</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">完成方式</span>
                  <span class="meta-value">个人独立完成</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">项目成绩</span>
                  <span class="meta-value">92/100分</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">课程成绩</span>
                  <span class="meta-value">93/100分</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 项目介绍 -->
        <div id="project-intro" class="section">
          <div class="section-header">
            <h3 class="section-title">项目介绍</h3>
          </div>
          <div class="intro-content">
            <p class="project-overview">
              我根据第一性原理分析出，人类与照明的交互，本质上是信息控制，而声音是高自然性、高兼容性的输入方式，
              同时照明是为了应对黑暗，而在黑暗中对于机器而言主动声音输入显然比被动视觉采集更有效，所以我选择了用语音交互来设计智能灯源。
              我设计的智能语音交互LED灯板是一个集成了语音识别、LED显示控制和人机交互的智能硬件系统。
              系统采用了Arduino UNO作为主控制器，结合ASR-PRO语音识别模块，能够识别用户的中文语音指令，
              并控制WS2812 LED灯板显示不同的灯光效果。项目通过模块化设计，实现了语音输入、信号处理、
              指令解析、LED控制等功能模块的有机集成，为智能家居和人机交互领域提供了一个不完美但较完整的解决方案。
            </p>

            <div class="tech-highlights">
              <div class="highlight-grid">
                <div class="highlight-item">
                  <h5>语音识别技术</h5>
                  <p>采用ASR-PRO模块，支持自定义命令词训练和中文语音识别</p>
                </div>
                <div class="highlight-item">
                  <h5>LED控制技术</h5>
                  <p>基于WS2812可编程LED，支持单独像素控制和多种灯效</p>
                </div>
                <div class="highlight-item">
                  <h5>系统集成</h5>
                  <p>通过串口通信实现模块间数据传输，保证系统稳定性</p>
                </div>
                <div class="highlight-item">
                  <h5>用户体验</h5>
                  <p>支持5种语音指令模式，提供直观的语音交互体验</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 硬件设计 -->
        <div id="hardware-design" class="section">
          <div class="section-header">
            <h3 class="section-title">硬件设计</h3>
          </div>
          <div class="hardware-content">
            <div class="hardware-description">
              <p>
                智能语音交互LED灯板采用模块化设计理念，整合了语音识别、微控制器、LED显示等多个核心模块。
                系统通过串口通信实现模块间的数据传输，确保了良好的实时性和稳定性。
              </p>
            </div>

            <!-- 系统架构图 -->
            <div class="architecture-section">
              <h4>系统架构</h4>
              <div class="architecture-layout">
                <div class="gallery-item" @click="openImageModal('/images/projects/led-voice-2025/hardware-connection.png', '系统硬件连接图')">
                  <NuxtImg
                    src="/images/projects/led-voice-2025/hardware-connection.png"
                    alt="系统硬件连接图"
                    preset="photo"
                    class="architecture-image-compact"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">系统硬件连接图 - 展示各模块间的连接关系</span>
                </div>
              </div>
            </div>

            <!-- 核心硬件模块 -->
            <div class="hardware-modules">
              <h4>核心硬件模块</h4>
              <div class="modules-gallery">
                <div class="gallery-item" @click="openImageModal('/images/projects/led-voice-2025/arduino-uno.png', 'Arduino UNO 控制板')">
                  <NuxtImg
                    src="/images/projects/led-voice-2025/arduino-uno.png"
                    alt="Arduino UNO 控制板"
                    preset="photo"
                    class="module-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">Arduino UNO - 系统主控制器</span>
                </div>
                <div class="gallery-item" @click="openImageModal('/images/projects/led-voice-2025/asrpro-module.png', 'ASR-PRO 语音识别模块')">
                  <NuxtImg
                    src="/images/projects/led-voice-2025/asrpro-module.png"
                    alt="ASR-PRO语音识别模块"
                    preset="photo"
                    class="module-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">ASR-PRO - 语音识别核心模块</span>
                </div>
                <div class="gallery-item" @click="openImageModal('/images/projects/led-voice-2025/ws2812-led.png', 'WS2812 LED灯条')">
                  <NuxtImg
                    src="/images/projects/led-voice-2025/led-board.png"
                    alt="WS2812 LED灯条"
                    preset="photo"
                    class="module-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">WS2812 LED - 可编程RGB显示单元</span>
                </div>
              </div>

              <div class="hardware-specs">
                <div class="spec-grid">
                  <div class="spec-card">
                    <h5>Arduino UNO</h5>
                    <ul>
                      <li>低价格的微控制器</li>
                      <li>14个数字I/O引脚</li>
                      <li>16MHz 时钟频率</li>
                      <li>串口通信支持</li>
                    </ul>
                  </div>
                  <div class="spec-card">
                    <h5>ASR-PRO模块</h5>
                    <ul>
                      <li>支持最多50个命令词</li>
                      <li>中文语音识别</li>
                      <li>语音合成功能</li>
                      <li>3-5米识别距离</li>
                    </ul>
                  </div>
                  <div class="spec-card">
                    <h5>WS2812 LED</h5>
                    <ul>
                      <li>64个LED像素点（8×8）</li>
                      <li>RGB全彩显示</li>
                      <li>单总线控制</li>
                      <li>独立像素控制</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <!-- 最终成品展示 -->
            <div class="final-product">
              <h4>系统成品展示</h4>
              <div class="product-layout">
                <div class="gallery-item" @click="openImageModal('/images/projects/led-voice-2025/system.png', 'LED智能语音灯板成品')">
                  <NuxtImg
                    src="/images/projects/led-voice-2025/system.png"
                    alt="LED智能语音灯板成品"
                    preset="photo"
                    class="product-image-compact"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">LED智能语音灯板成品 - 完整系统展示</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- LED软件设计 -->
        <div id="led-software-design" class="section">
          <div class="section-header">
            <h3 class="section-title">软件设计</h3>
          </div>
          <div class="led-software-content">

            <div class="led-code-section">
              <h4>Arduino UNO 主控程序</h4>
              <p>负责LED灯效控制和串口通信处理：</p>
              <CodeBlock
                :code="arduinoCode"
                language="cpp"
                filename="Arduino_LED_Control.ino"
                :showCopyButton="true"
              />
            </div>

            <div class="led-code-section">
              <h4>ASR-PRO 语音识别程序</h4>
              <p>处理语音识别和命令发送：</p>
              <CodeBlock
                :code="asrproCode"
                language="cpp"
                filename="ASRPRO_Voice_Recognition.cpp"
                :showCopyButton="true"
              />
            </div>

            <div class="led-algorithm-flow">
              <h4>核心算法流程</h4>
              <div class="led-flow-diagram">
                <div class="led-flow-row">
                  <div class="led-step-card">
                    <div class="led-step-number">1</div>
                    <div class="led-step-content">
                      <h5>语音唤醒</h5>
                      <p>ASR-PRO模块检测到语音指令后进行识别处理</p>
                    </div>
                  </div>
                  <div class="flow-arrow">
                    ➡️
                  </div>
                  <div class="led-step-card">
                    <div class="led-step-number">2</div>
                    <div class="led-step-content">
                      <h5>指令解析</h5>
                      <p>将识别结果转换为对应的控制命令字符串</p>
                    </div>
                  </div>
                                </div>

                <div class="flow-arrow-down">
                  ⬇️
                </div>

                <div class="led-flow-row">
                  <div class="led-step-card">
                    <div class="led-step-number">3</div>
                    <div class="led-step-content">
                      <h5>串口传输</h5>
                      <p>通过串口通信将指令发送给Arduino控制器</p>
                    </div>
                  </div>
                  <div class="flow-arrow">
                    ➡️
                  </div>
                  <div class="led-step-card">
                    <div class="led-step-number">4</div>
                    <div class="led-step-content">
                      <h5>LED控制</h5>
                      <p>Arduino解析指令并调用对应的LED灯效函数</p>
                    </div>
                  </div>
                                </div>

                <div class="flow-arrow-down">
                  ⬇️
                </div>

                <div class="led-flow-final">
                  <div class="led-step-card final-step">
                    <div class="led-step-number">5</div>
                    <div class="led-step-content">
                      <h5>效果展示</h5>
                      <p>WS2812 LED灯条显示相应的颜色和动态效果</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- LED功能演示 -->
        <div id="led-function-demo" class="section">
          <div class="section-header">
            <h3 class="section-title">功能演示</h3>
          </div>
          <div class="led-demo-content">
            <p class="led-demo-intro">
              智能语音交互LED灯板支持5种语音指令，每种指令对应不同的LED灯效。
              系统通过ASR-PRO模块识别中文语音指令，并实时响应用户需求。
            </p>

            <!-- 功能演示视频 -->
            <div class="led-demo-video-section">
              <h4>完整功能演示视频</h4>
              <div class="video-item">
                <video
                  controls="controls"
                  preload="metadata"
                  class="video-player"
                  poster="/images/projects/led-voice-2025/vid-poster.png"
                >
                  <source src="/videos/projects/led-voice-2025/demo-video.webm" type="video/webm" />
                  <p>您的浏览器不支持视频播放。<a href="/videos/projects/led-voice-2025/demo-video.webm" target="_blank" style="color: #ff6b35;">点击下载视频</a></p>
                </video>
                <div class="video-caption">LED语音交互灯板完整功能演示 - 展示5种语音指令的灯光效果</div>
              </div>
            </div>

            <div class="led-commands-grid">
              <div class="led-command-item">
                <div class="led-command-header">
                  <div class="led-command-icon">🌈</div>
                  <h4>彩虹模式</h4>
                </div>
                <div class="led-command-details">
                  <p><strong>语音指令：</strong>"彩虹"</p>
                  <p><strong>触发条件：</strong>ASR-PRO识别ID=1</p>
                  <p><strong>串口命令：</strong>"rainbow"</p>
                  <p><strong>灯效描述：</strong>LED灯条显示流动的彩虹渐变效果，颜色循环变化，营造动态视觉体验</p>
                  <p><strong>技术实现：</strong>通过HSV色彩空间计算，实现360度色相渐变和移动效果</p>
                </div>
              </div>

              <div class="led-command-item">
                <div class="led-command-header">
                  <div class="led-command-icon">🟡</div>
                  <h4>暖光模式</h4>
                </div>
                <div class="led-command-details">
                  <p><strong>语音指令：</strong>"暖光"</p>
                  <p><strong>触发条件：</strong>ASR-PRO识别ID=2</p>
                  <p><strong>串口命令：</strong>"warm"</p>
                  <p><strong>灯效描述：</strong>LED灯条显示温暖的黄色光，亮度适中，适合阅读和休息</p>
                  <p><strong>技术实现：</strong>设置RGB值为暖色调(255,150,80)，提供舒适的照明环境</p>
                </div>
              </div>

              <div class="led-command-item">
                <div class="led-command-header">
                  <div class="led-command-icon">🔵</div>
                  <h4>冷光模式</h4>
                </div>
                <div class="led-command-details">
                  <p><strong>语音指令：</strong>"冷光"</p>
                  <p><strong>触发条件：</strong>ASR-PRO识别ID=3</p>
                  <p><strong>串口命令：</strong>"cold"</p>
                  <p><strong>灯效描述：</strong>LED灯条显示清冷的蓝白色光，亮度较高，适合工作和学习</p>
                  <p><strong>技术实现：</strong>设置RGB值为冷色调(180,200,255)，提供清晰明亮的照明</p>
                </div>
              </div>

              <div class="led-command-item">
                <div class="led-command-header">
                  <div class="led-command-icon">❤️</div>
                  <h4>心形模式</h4>
                </div>
                <div class="led-command-details">
                  <p><strong>语音指令：</strong>"爱心"</p>
                  <p><strong>触发条件：</strong>ASR-PRO识别ID=4</p>
                  <p><strong>串口命令：</strong>"heart"</p>
                  <p><strong>灯效描述：</strong>LED灯条按预设的心形图案点亮，显示粉红色爱心效果</p>
                  <p><strong>技术实现：</strong>使用预定义的heart数组，控制特定LED像素点显示心形图案</p>
                </div>
              </div>

              <div class="led-command-item">
                <div class="led-command-header">
                  <div class="led-command-icon">⚫</div>
                  <h4>关闭模式</h4>
                </div>
                <div class="led-command-details">
                  <p><strong>语音指令：</strong>"关闭"</p>
                  <p><strong>触发条件：</strong>ASR-PRO识别ID=5</p>
                  <p><strong>串口命令：</strong>"close"</p>
                  <p><strong>灯效描述：</strong>关闭所有LED灯，系统进入待机状态</p>
                  <p><strong>技术实现：</strong>将所有LED像素点RGB值设为(0,0,0)，实现完全熄灭</p>
                </div>
              </div>
            </div>

            <div class="system-performance">
              <h4>系统性能指标</h4>
              <div class="performance-metrics">
                <div class="metric-item">
                  <span class="metric-label">语音识别精度</span>
                  <span class="metric-value">95%+（3-5米距离）</span>
                </div>
                <div class="metric-item">
                  <span class="metric-label">系统响应延迟</span>
                  <span class="metric-value">&lt;500ms</span>
                </div>
                <div class="metric-item">
                  <span class="metric-label">支持指令数量</span>
                  <span class="metric-value">5个语音指令</span>
                </div>
                <div class="metric-item">
                  <span class="metric-label">LED像素数量</span>
                  <span class="metric-value">64个（8×8矩阵）</span>
                </div>
              </div>
            </div>
          </div>
        </div>

                <!-- LED拓展思考 -->
        <div id="led-extended-thinking" class="section">
          <div class="section-header">
            <h3 class="section-title">从"语音开关"到"感知伙伴"：智能灯板未来演进蓝图</h3>
          </div>
          <div class="led-thinking-content">

            <div class="evolution-intro">
              <p>
                在完成这个项目后，我一直在思考：我的原型确实实现了基本功能，但它的"智能化"程度还很有限。
                我认为真正的创新应该突破传统的"命令-执行"模式。基于这个思考，我设想了这个灯板从简单"工具"
                进化为有感知力、有温度的"伙伴"的三个发展阶段。
              </p>
            </div>

            <!-- 第一部分：智能的深度 -->
            <div class="evolution-part">
              <div class="part-header">
                <div class="part-number">01</div>
                <h4>智能的深度：从"听懂"到"感知"</h4>
                <p class="part-subtitle">让灯板不只执行命令，更能理解情绪</p>
              </div>

              <div class="evolution-content">
                <div class="problem-statement">
                  <h5>我观察到的局限性</h5>
                  <p class="highlight-quote">"我的灯板能听懂'彩虹'，但听不懂我的疲惫。"</p>
                </div>

                <div class="breakthrough-section">
                  <h5>我的研究方向：深度挖掘语谱图中的信息</h5>
                  <div class="spectrogram-showcase">
                    <div class="gallery-item" @click="openImageModal('/images/projects/led-voice-2025/语谱图.png', '语音信号语谱图分析')">
                      <NuxtImg
                        src="/images/projects/led-voice-2025/语谱图.png"
                        alt="语音信号语谱图"
                        preset="photo"
                        class="spectrogram-image"
                        :style="{ objectFit: 'contain' }"
                      />
                      <span class="gallery-caption">语音信号语谱图 - 我研究的语音特征提取基础</span>
                    </div>
                    <div class="spectrogram-explanation">
                      <p>
                        我在学习过程中发现，通过傅里叶变换可以将简单的声音波形转化为信息丰富的语谱图。
                        这让我意识到，语音中蕴含的信息远比我之前想象的丰富。除了基本的命令词，
                        我还可以从中提取音高变化、能量分布、共振峰等特征，这些都可能反映说话者的情绪状态。
                      </p>
                    </div>
                  </div>
                </div>

                <div class="future-applications">
                  <h5>我设想的应用场景</h5>
                  <div class="application-grid">
                    <div class="application-item">
                      <h6>个性化交互</h6>
                      <p>我希望系统能识别不同用户的声音特征，甚至包括方言口音，让每个人都能获得个性化的交互体验。</p>
                    </div>
                    <div class="application-item">
                      <h6>情感感知</h6>
                      <p>
                        我最感兴趣的是让灯光能够感知情绪。比如当我疲惫时说"关灯"，
                        系统能从我的语调中察觉到疲惫，自动调整为柔和的暖光而不是直接关闭。
                        这样的交互会更有温度。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 第二部分：架构的革新 -->
            <div class="evolution-part">
              <div class="part-header">
                <div class="part-number">02</div>
                <h4>架构的革新：从云端到边缘</h4>
                <p class="part-subtitle">让AI在小小的芯片上也能思考</p>
              </div>

              <div class="evolution-content">
                <div class="challenge-section">
                  <h5>我面临的技术选择：云端还是本地？</h5>
                  <div class="comparison-table">
                    <div class="comparison-item cloud">
                      <h6>云端处理</h6>
                      <div class="pros-cons">
                        <div class="pros">
                          <strong>优势：</strong>计算能力强大、模型更新便捷
                        </div>
                        <div class="cons">
                          <strong>劣势：</strong>网络延迟、隐私担忧、依赖网络
                        </div>
                      </div>
                    </div>
                    <div class="comparison-item edge">
                      <h6>本地处理</h6>
                      <div class="pros-cons">
                        <div class="pros">
                          <strong>优势：</strong>响应迅速、隐私安全、离线工作
                        </div>
                        <div class="cons">
                          <strong>劣势：</strong>硬件限制、模型简化
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="conclusion">
                    经过思考，我认为对于智能家居这种需要即时响应且涉及隐私的场景，本地处理是更合适的选择。
                  </p>
                </div>

                <div class="solution-section">
                  <h5>我找到的解决方案：TinyML技术</h5>
                  <div class="tinyml-showcase">
                    <div class="gallery-item" @click="openImageModal('/images/projects/led-voice-2025/现代音频分类任务的核心技术流程图.png', '现代音频分类任务核心技术流程')">
                      <NuxtImg
                        src="/images/projects/led-voice-2025/现代音频分类任务的核心技术流程图.png"
                        alt="现代音频分类任务核心技术流程"
                        preset="photo"
                        class="tinyml-image"
                        :style="{ objectFit: 'contain' }"
                      />
                      <span class="gallery-caption">我研究的TinyML实现流程</span>
                    </div>
                    <div class="tinyml-steps">
                      <div class="step-item">
                        <div class="step-number">1</div>
                        <div class="step-content">
                          <h6>云端训练</h6>
                          <p>先在电脑上训练复杂的AI模型</p>
                        </div>
                      </div>
                      <div class="step-item">
                        <div class="step-number">2</div>
                        <div class="step-content">
                          <h6>模型优化</h6>
                          <p>通过量化等技术压缩模型大小</p>
                        </div>
                      </div>
                      <div class="step-item">
                        <div class="step-number">3</div>
                        <div class="step-content">
                          <h6>嵌入式部署</h6>
                          <p>将优化后的模型部署到Arduino等硬件</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p class="metaphor">
                    我迫不及待想要把更多的灯板接入联网的AI模型，让小小的灯板也能具备智能分析能力。
                  </p>
                </div>
              </div>
            </div>

            <!-- 第三部分：体验的升华 -->
            <div class="evolution-part">
              <div class="part-header">
                <div class="part-number">03</div>
                <h4>体验的升华：从工具到艺术</h4>
                <p class="part-subtitle">让每一束光都有温度和个性</p>
              </div>

              <div class="evolution-content">
                <div class="experience-detail">
                  <h5>我对用户体验的思考</h5>
                  <p>
                    我发现当前的LED控制还比较生硬。我希望未来能通过Gamma校正等技术，
                    让每一次光的变化都更贴近人眼的感知特性，让光的淡入淡出如呼吸般自然。
                  </p>
                </div>

                <div class="generative-art">
                  <h5>我的终极构想：生成式灯光艺术</h5>
                  <div class="art-concept">
                    <div class="art-layout">
                      <div class="art-description">
                        <p><strong>我设想的进化路径：</strong></p>
                        <p>
                          未来的灯光模式不应該是固定的几种预设，而是能够根据我的情绪、声音的节奏，
                          甚至周围环境的音乐来实时生成独特的光效。我找到了叫做Mozilla Common Voice的网站可以提供大量中文方言的语音数据，
                          后续可以通过利用数据训练AI模型，
                          让灯板可以听懂全国各地的方言并实现灯光的个性化。
                        </p>
                      </div>
                      <div class="dataset-showcase">
                        <div class="gallery-item" @click="openImageModal('/images/projects/led-voice-2025/Mozilla Common Voice网站截图.png', 'Mozilla Common Voice开源语音数据集')">
                          <NuxtImg
                            src="/images/projects/led-voice-2025/Mozilla Common Voice网站截图.png"
                            alt="Mozilla Common Voice网站"
                            preset="photo"
                            class="dataset-image-small"
                            :style="{ objectFit: 'contain' }"
                          />
                          <span class="gallery-caption">Mozilla Common Voice - 我关注的语音数据集平台</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="final-vision">
                  <h5>我的愿景</h5>
                  <p class="vision-text">
                    我希望有一天，这块灯板不再只是一个照明工具，而是能够理解我的情绪、
                    与我产生共鸣的智能伙伴。从简单的"语音开关"，真正进化为有温度的"感知伙伴"。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- LED项目总结 -->
        <div id="led-achievements" class="section">
          <div class="section-header">
            <h3 class="section-title">项目总结</h3>
          </div>
          <div class="led-achievements-content">

                        <div class="achievements-showcase">
              <div class="achievement-description">
                <p>
                  本次课程设计完成了智能语音交互LED灯板系统的设计与实现，涵盖了硬件搭建、
                  软件编程、系统集成等多个环节。通过这个项目，深入学习了嵌入式开发和语音识别技术，
                  并获得了较好的课程成绩。
                </p>
              </div>

              <div class="course-result">
                <div class="result-item">
                  <span class="result-label">完成时间</span>
                  <span class="result-value">2025年1月-2025年2月</span>
                </div>
                <div class="result-item">
                  <span class="result-label">完成质量</span>
                  <span class="result-value">系统功能完整</span>
                </div>
                <div class="result-item">
                  <span class="result-label">技术深度</span>
                  <span class="result-value">涵盖多个技术领域</span>
                </div>
              </div>

              <div class="grade-certificate">
                <div class="gallery-item" @click="openImageModal('/images/projects/led-voice-2025/grade-certificate.png', '课程设计成绩截图')">
                  <NuxtImg
                    src="/images/projects/led-voice-2025/grade-certificate.png"
                    alt="课程成绩截图"
                    preset="photo"
                    class="certificate-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">课程成绩截图</span>
                </div>
              </div>
            </div>

            <!-- 项目启发 -->
            <div class="project-insights">
              <div class="insights-section">
                <h4>我的启发：超越功能，这个项目教会我的三件事</h4>

                <div class="insights-grid">
                  <div class="insight-card">
                    <div class="insight-number">1</div>
                    <div class="insight-content">
                      <h6>智能的本质是"感知"，而非"执行"</h6>
                      <p>
                        真正的智能交互，在于理解声音背后的情感与个性，而不只是被动地解码命令。
                        它应该从一个"工具"进化为一个"伙伴"。
                      </p>
                    </div>
                  </div>

                  <div class="insight-card">
                    <div class="insight-number">2</div>
                    <div class="insight-content">
                      <h6>好产品的诞生需"工业级"的思考</h6>
                      <p>
                        从一个有趣的原型到一个可靠的产品，必须跨越从"作坊式"开发到"工业级"设计的鸿沟，
                        系统性地思考边缘计算、模型优化等真实世界的工程挑战。
                      </p>
                    </div>
                  </div>

                  <div class="insight-card">
                    <div class="insight-number">3</div>
                    <div class="insight-content">
                      <h6>好体验的源头是对"人"的尊重</h6>
                      <p>
                        技术的终点是服务于人的感受。无论是遵循人眼规律的平滑光效，还是创造惊喜的生成式艺术，
                        最动人的设计，永远根植于对物理和生理规律的深刻理解与尊重。
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="gratitude">
                <p>感谢晓海波教授的悉心指导，这次课程设计让我受益匪浅。</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 返回按钮 - 独立在页面底部 -->
        <div class="back-to-overview-section">
          <button @click="goBackToOverview" class="back-overview-button">
            <svg class="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span>返回项目概览</span>
          </button>
        </div>
      </section>

      <!-- 美莲花餐厅支出管理系统详情页 -->
      <section v-if="selectedProject === 'restaurant-system-2025'" class="project-detail">
        <!-- 返回按钮 -->
        <div class="back-button-container">
          <button @click="goBackToOverview" class="back-button">
            <svg class="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            返回项目概览
          </button>
        </div>

        <!-- 悬浮导航栏 -->
        <aside class="floating-nav" v-show="selectedProject === 'restaurant-system-2025'">
          <div class="floating-nav-content">
            <div class="floating-nav-title">导航</div>
            <nav class="floating-nav-items">
              <a
                href="#restaurant-info"
                @click="scrollToSection('restaurant-info', $event)"
                :class="['floating-nav-card', { active: currentSection === 'restaurant-info' }]"
              >
                项目概述
              </a>
              <a
                href="#restaurant-architecture"
                @click="scrollToSection('restaurant-architecture', $event)"
                :class="['floating-nav-card', { active: currentSection === 'restaurant-architecture' }]"
              >
                技术架构
              </a>
              <a
                href="#restaurant-features"
                @click="scrollToSection('restaurant-features', $event)"
                :class="['floating-nav-card', { active: currentSection === 'restaurant-features' }]"
              >
                功能展示
              </a>
              <a
                href="#restaurant-demo"
                @click="scrollToSection('restaurant-demo', $event)"
                :class="['floating-nav-card', { active: currentSection === 'restaurant-demo' }]"
              >
                系统演示
              </a>
              <a
                href="#restaurant-achievements"
                @click="scrollToSection('restaurant-achievements', $event)"
                :class="['floating-nav-card', { active: currentSection === 'restaurant-achievements' }]"
              >
                项目总结
              </a>
            </nav>
          </div>
        </aside>

        <!-- 项目英雄区域 -->
        <div class="hero-section">
          <div class="hero-content">
            <div class="hero-text">
              <span class="project-date">2025年6月</span>
              <h1 class="hero-title">美莲花餐厅支出管理系统</h1>
              <h2 class="hero-subtitle">نىلۇپار ئاشخانا چىقىم خاتىرىسى سىستېمىسى</h2>
              <div class="hero-badges">
                <span class="badge badge-primary">PyQt6</span>
                <span class="badge badge-info">SQLite数据库</span>
                <span class="badge badge-success">Deepseek API</span>
              </div>
            </div>
            <div class="hero-image" @click="openImageModal('/images/projects/restaurant-system-2025/登录窗口.png', '美莲花餐厅系统首页界面')">
              <NuxtImg
                src="/images/projects/restaurant-system-2025/登录窗口.png"
                alt="美莲花餐厅系统首页"
                preset="hero"
                class="cover-image clickable-image"
                :style="{ objectFit: 'contain' }"
              />
              <div class="image-overlay">
                <span class="overlay-text">点击查看大图</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 项目概述 -->
        <div id="restaurant-info" class="section">
          <div class="section-header">
            <h3 class="section-title">项目概述</h3>
          </div>
          <div class="restaurant-info-content">
            <div class="project-intro">
              <p>
                这是我为父亲的餐厅开发的支出管理系统。以前收银员需要手写账本来记录支出，即使后来改用Excel一个一个输入，
                但仍然费时又容易出错。为了让收银员能够快速录入支出数据，大大减轻其工作负担，我用Python和PyQt6开发了这套系统，
                界面同时展示中文和维语，该系统从2025年7月开始正式在我父亲的餐厅投入使用，
                不仅让收银员日常的支出录入变得非常便捷，也让我爸每个月的核对、结账、分析工作轻松了很多。
                最重要的是，我还集成了DeepSeek AI来提供智能财务分析，帮助我们更好地了解餐厅的经营状况。
              </p>
            </div>

            <div class="key-features-grid">
              <div class="feature-highlight">
                <div class="feature-icon">🏪</div>
                <h4>专业餐厅管理</h4>
                <p>针对餐厅业务特点设计的完整财务管理解决方案</p>
              </div>
              <div class="feature-highlight">
                <div class="feature-icon">🤖</div>
                <h4>AI智能分析</h4>
                <p>集成DeepSeek AI，提供专业的财务分析和经营建议</p>
              </div>
              <div class="feature-highlight">
                <div class="feature-icon">🌐</div>
                <h4>双语界面</h4>
                <p>支持中文和维吾尔语双语显示，满足多元化需求</p>
              </div>
              <div class="feature-highlight">
                <div class="feature-icon">📊</div>
                <h4>数据可视化</h4>
                <p>丰富的图表展示和数据导出功能</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 技术架构 -->
        <div id="restaurant-architecture" class="section">
          <div class="section-header">
            <h3 class="section-title">技术架构</h3>
          </div>
          <div class="restaurant-architecture-content">
            <div class="tech-stack-overview">
              <div class="tech-category">
                <h4>开发框架</h4>
                <div class="tech-items">
                  <span class="tech-item">Python 3.7+</span>
                  <span class="tech-item">PyQt6</span>
                  <span class="tech-item">PyQt-Fluent-Widgets</span>
                </div>
              </div>
              <div class="tech-category">
                <h4>数据处理</h4>
                <div class="tech-items">
                  <span class="tech-item">SQLite 3</span>
                  <span class="tech-item">pandas</span>
                  <span class="tech-item">matplotlib</span>
                </div>
              </div>
              <div class="tech-category">
                <h4>AI集成</h4>
                <div class="tech-items">
                  <span class="tech-item">DeepSeek API</span>
                  <span class="tech-item">多线程处理</span>
                  <span class="tech-item">智能分析</span>
                </div>
              </div>
              <div class="tech-category">
                <h4>文档处理</h4>
                <div class="tech-items">
                  <span class="tech-item">openpyxl</span>
                  <span class="tech-item">Excel导出</span>
                  <span class="tech-item">数据报表</span>
                </div>
              </div>
            </div>

            <div class="architecture-highlights">
              <div class="architecture-item">
                <h5>MVC架构模式</h5>
                <p>采用模型-视图-控制器架构，界面与业务逻辑分离，代码结构清晰，易于维护和扩展。</p>
              </div>
              <div class="architecture-item">
                <h5>数据库设计</h5>
                <p>SQLite数据库包含用户表、分类表、支出记录表，支持外键关联和数据完整性约束。</p>
              </div>
              <div class="architecture-item">
                <h5>多线程设计</h5>
                <p>AI分析功能采用多线程处理，避免UI阻塞，保持界面响应性和用户体验。</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 功能展示 -->
        <div id="restaurant-features" class="section">
          <div class="section-header">
            <h3 class="section-title">核心功能展示</h3>
          </div>
          <div class="restaurant-features-content">

            <!-- 登录系统 -->
            <div class="feature-showcase">
              <div class="feature-description">
                <h4>用户身份验证</h4>
                <p>
                  系统采用安全的登录验证机制，支持用户名密码登录，密码采用SHA256加密存储。
                  登录界面采用Fluent Design风格，支持双语显示，具有良好的用户体验。
                  系统设置了两种用户角色：管理员拥有所有权限，而收银员作为普通用户只能进行支出录入和查询，无法修改数据或使用AI分析功能，确保了系统安全性。
                </p>
                <div class="feature-specs">
                  <div class="spec-item">
                    <span class="spec-label">安全性</span>
                    <span class="spec-value">SHA256密码加密</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">界面风格</span>
                    <span class="spec-value">Fluent Design</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">语言支持</span>
                    <span class="spec-value">中文/维语双语</span>
                  </div>
                </div>
              </div>
              <div class="feature-images">
                <div class="gallery-item" @click="openImageModal('/images/projects/restaurant-system-2025/登录窗口.png', '用户登录界面')">
                  <NuxtImg
                    src="/images/projects/restaurant-system-2025/登录窗口.png"
                    alt="登录界面"
                    preset="photo"
                    class="feature-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">用户登录界面</span>
                </div>
              </div>
            </div>

            <!-- 支出录入 - 图片左，文字右 -->
            <div class="feature-showcase reverse">
              <div class="feature-images">
                <div class="gallery-item" @click="openImageModal('/images/projects/restaurant-system-2025/支出录入页.png', '支出录入界面')">
                  <NuxtImg
                    src="/images/projects/restaurant-system-2025/支出录入页.png"
                    alt="支出录入界面"
                    preset="photo"
                    class="feature-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">支出录入界面</span>
                </div>
              </div>
              <div class="feature-description">
                <h4>支出录入管理</h4>
                <p>
                  主界面提供直观的支出录入功能，支持按分类快速录入支出数据。
                  界面采用卡片式布局，分类按钮网格化显示，支持自定义分类管理。
                  每次录入都有二次确认对话框，确保数据准确性。
                </p>
                <div class="feature-specs">
                  <div class="spec-item">
                    <span class="spec-label">录入方式</span>
                    <span class="spec-value">分类按钮快速录入</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">数据验证</span>
                    <span class="spec-value">金额格式验证</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">用户体验</span>
                    <span class="spec-value">二次确认机制</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 每日管理 -->
            <div class="feature-showcase">
              <div class="feature-description">
                <h4>每日记录管理</h4>
                <p>
                  系统提供当日支出记录的查看和管理功能，支持记录的编辑和删除操作。
                  界面以表格形式展示当日所有支出记录，包含时间、分类、金额、备注等详细信息。
                </p>
                <div class="feature-specs">
                  <div class="spec-item">
                    <span class="spec-label">显示方式</span>
                    <span class="spec-value">表格化展示</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">操作功能</span>
                    <span class="spec-value">编辑/删除记录</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">数据完整性</span>
                    <span class="spec-value">详细信息展示</span>
                  </div>
                </div>
              </div>
              <div class="feature-images">
                <div class="gallery-item" @click="openImageModal('/images/projects/restaurant-system-2025/每日管理页.png', '每日记录管理界面')">
                  <NuxtImg
                    src="/images/projects/restaurant-system-2025/每日管理页.png"
                    alt="每日管理界面"
                    preset="photo"
                    class="feature-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">每日记录管理界面</span>
                </div>
              </div>
            </div>

            <!-- 查询功能 - 图片左，文字右 -->
            <div class="feature-showcase reverse">
              <div class="feature-images">
                <div class="gallery-item" @click="openImageModal('/images/projects/restaurant-system-2025/查询记录页.png', '数据查询界面')">
                  <NuxtImg
                    src="/images/projects/restaurant-system-2025/查询记录页.png"
                    alt="查询界面"
                    preset="photo"
                    class="feature-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">数据查询界面</span>
                </div>
              </div>
              <div class="feature-description">
                <h4>数据查询分析</h4>
                <p>
                  提供强大的数据查询功能，支持按日期范围和分类筛选支出记录。
                  实时统计总记录数、总金额、平均金额等关键指标，支持数据排序和Excel导出。
                  需要注意的是，只有管理员才能修改支出记录的金额和备注信息，普通用户只能查询和导出数据。
                </p>
                <div class="feature-specs">
                  <div class="spec-item">
                    <span class="spec-label">筛选条件</span>
                    <span class="spec-value">日期范围+分类</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">统计功能</span>
                    <span class="spec-value">实时数据统计</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">导出功能</span>
                    <span class="spec-value">Excel格式导出</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- 报表中心 - 上方文字，下方两图 -->
            <div class="feature-showcase-vertical">
              <div class="feature-description-center">
                <h4>智能报表分析</h4>
                <p>
                  报表中心是系统的核心功能，支持单时段分析和双时段对比分析。
                  单时段分析可生成饼图等数据可视化图表，双时段对比分析集成AI智能分析功能。
                </p>
                <div class="feature-specs-horizontal">
                  <div class="spec-item">
                    <span class="spec-label">分析模式</span>
                    <span class="spec-value">单时段/双时段对比</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">可视化</span>
                    <span class="spec-value">饼图/柱状图展示</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">AI功能</span>
                    <span class="spec-value">深度分析报告</span>
                  </div>
                </div>
              </div>
              <div class="feature-images-dual">
                <div class="gallery-item" @click="openImageModal('/images/projects/restaurant-system-2025/报表中心_单时段分析.png', '单时段分析界面')">
                  <NuxtImg
                    src="/images/projects/restaurant-system-2025/报表中心_单时段分析.png"
                    alt="单时段分析"
                    preset="photo"
                    class="feature-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">单时段分析界面</span>
                </div>
                <div class="gallery-item" @click="openImageModal('/images/projects/restaurant-system-2025/单时段分析_生成饼图.png', '数据可视化饼图')">
                  <NuxtImg
                    src="/images/projects/restaurant-system-2025/单时段分析_生成饼图.png"
                    alt="饼图展示"
                    preset="photo"
                    class="feature-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">数据可视化饼图</span>
                </div>
              </div>
            </div>

            <!-- AI分析功能 - 上方文字，下方两图 -->
            <div class="feature-showcase-vertical">
              <div class="feature-description-center">
                <h4>AI智能分析</h4>
                <p>
                  系统集成DeepSeek AI，提供专业的餐厅财务分析服务。
                  双时段对比分析时，AI会自动生成深度分析报告，包含支出趋势分析、异常识别和经营建议。
                  分析结果以Markdown格式美观展示，支持导出保存。
                  出于安全考虑，AI分析功能仅限管理员使用，普通用户无法访问此功能。
                </p>
                <div class="feature-specs-horizontal">
                  <div class="spec-item">
                    <span class="spec-label">AI引擎</span>
                    <span class="spec-value">DeepSeek API</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">分析深度</span>
                    <span class="spec-value">趋势+异常+建议</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">展示格式</span>
                    <span class="spec-value">Markdown富文本</span>
                  </div>
                </div>
              </div>
              <div class="feature-images-dual">
                <div class="gallery-item" @click="openImageModal('/images/projects/restaurant-system-2025/报表中心_双时段Deepseek分析.png', 'AI分析界面')">
                  <NuxtImg
                    src="/images/projects/restaurant-system-2025/报表中心_双时段Deepseek分析.png"
                    alt="AI分析界面"
                    preset="photo"
                    class="feature-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">AI分析界面</span>
                </div>
                <div class="gallery-item" @click="openImageModal('/images/projects/restaurant-system-2025/Deepseek分析结果.png', 'AI分析结果展示')">
                  <NuxtImg
                    src="/images/projects/restaurant-system-2025/Deepseek分析结果.png"
                    alt="AI分析结果"
                    preset="photo"
                    class="feature-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">AI分析结果展示</span>
                </div>
              </div>
            </div>

            <!-- 系统设置 - 上方文字，下方两图 -->
            <div class="feature-showcase-vertical">
              <div class="feature-description-center">
                <h4>系统设置管理</h4>
                <p>
                  系统提供完善的设置管理功能，包括用户管理和分类管理。
                  支持用户密码修改、角色管理，以及支出分类的增删改操作，满足个性化需求。
                </p>
                <div class="feature-specs-horizontal">
                  <div class="spec-item">
                    <span class="spec-label">用户管理</span>
                    <span class="spec-value">密码修改/角色管理</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">分类管理</span>
                    <span class="spec-value">增删改分类</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">双语支持</span>
                    <span class="spec-value">中文/维语分类名</span>
                  </div>
                </div>
              </div>
              <div class="feature-images-dual">
                <div class="gallery-item" @click="openImageModal('/images/projects/restaurant-system-2025/系统设置_用户管理.png', '用户管理界面')">
                  <NuxtImg
                    src="/images/projects/restaurant-system-2025/系统设置_用户管理.png"
                    alt="用户管理"
                    preset="photo"
                    class="feature-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">用户管理界面</span>
                </div>
                <div class="gallery-item" @click="openImageModal('/images/projects/restaurant-system-2025/系统设置_分类管理.png', '分类管理界面')">
                  <NuxtImg
                    src="/images/projects/restaurant-system-2025/系统设置_分类管理.png"
                    alt="分类管理"
                    preset="photo"
                    class="feature-image"
                    :style="{ objectFit: 'contain' }"
                  />
                  <span class="gallery-caption">分类管理界面</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 系统演示 -->
        <div id="restaurant-demo" class="section">
          <div class="section-header">
            <h3 class="section-title">系统完整演示</h3>
          </div>
          <div class="restaurant-demo-content">
            <div class="demo-intro">
              <p>
              </p>
            </div>

            <div class="led-demo-video-section">
              <h4>系统完整流程演示</h4>
              <div class="video-item">
                <video
                  controls="controls"
                  preload="metadata"
                  class="video-player"
                  poster="/images/projects/restaurant-system-2025/首页_导航栏展开.png"
                >
                  <source src="/videos/projects/restaurant-system-2025/restaurant-system-demo.webm" type="video/webm" />
                  <p>您的浏览器不支持视频播放。<a href="/videos/projects/restaurant-system-2025/restaurant-system-demo.webm" target="_blank" style="color: #ff6b35;">点击下载视频</a></p>
                </video>
                <div class="video-caption">展示了登录、支出录入、数据查询、报表分析、AI智能分析等核心功能的完整操作流程 (15MB)</div>
              </div>
            </div>


          </div>
        </div>

        <!-- 项目总结 -->
        <div id="restaurant-achievements" class="section">
          <div class="section-header">
            <h3 class="section-title">项目总结与收获</h3>
          </div>
          <div class="restaurant-achievements-content">

            <div class="project-stats">
              <div class="stats-grid">
                <div class="stat-item">
                  <div class="stat-number">100%</div>
                  <div class="stat-label">功能完成度</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">2</div>
                  <div class="stat-label">双语言支持</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">12+</div>
                  <div class="stat-label">核心模块</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">AI</div>
                  <div class="stat-label">智能分析</div>
                </div>
              </div>
            </div>

            <div class="achievements-overview">
              <div class="achievement-section">
                <h4>核心成果</h4>
                <p class="achievement-summary">
                  经过一个多月的实际使用，这套系统真正解决了我们餐厅的实际问题。收银员从以前的手写记录到现在的一键录入，工作效率大幅提升。
                  我爸也不用再花大量时间去整理Excel表格，系统自动生成的报表和AI分析让他能够更直观地了解餐厅的经营状况，做出更好的经营决策。
                </p>
              </div>

              <div class="learning-insights">
                <h4>项目启发</h4>
                <div class="insights-content">
                  <p>
                    看到收银员从一开始不会用电脑，到现在熟练使用我的系统，看到我爸不用再熬夜整理账目，
                    这种成就感是任何课堂项目都给不了的。技术的价值在于解决真实世界的问题。
                  </p>
                  <p>
                    双语界面不是为了炫技，而是因为我们这里有维族员工。大按钮不是为了美观，而是因为收银员经常戴手套操作。
                    真正的用户体验设计要从用户的实际需求出发。
                  </p>
                  <p>
                    AI分析不是为了显摆技术，而是真正帮助我爸分析经营数据，发现哪些支出异常，哪个月份需要注意成本控制。
                    技术要服务于实际业务需求，而不是为了技术而技术。
                  </p>
                </div>
              </div>

              <div class="future-plans">
                <h4>未来规划</h4>
                <p>
                  这个系统还有很多可以改进的地方。我计划增加库存管理功能，
                  帮助餐厅更好地控制食材成本；还想加入销售数据分析，
                  让支出和收入数据结合起来，给我爸提供更全面的经营建议。
                  最重要的是，我希望能把这套经验推广到其他小餐厅，
                  用技术真正帮助到更多像我爸一样的个体经营者。
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 完整源码和下载 -->
        <div class="github-section">
          <div class="github-content">
            <div class="github-info">
              <h4>项目资源</h4>
              <p>
                完整的Python源代码、数据库文件、配置文件等已上传至GitHub仓库。
                同时提供exe安装包，包含完整的运行环境，无需额外配置即可使用。
              </p>
            </div>
            <div class="project-buttons">
              <a href="https://github.com/yourusername/restaurant-expense-system" target="_blank" class="github-repo-btn">
                <svg class="github-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                查看完整源码
              </a>
              <a href="/downloads/restaurant-system-2025/restaurant-expense-system-installer.zip"
                 download="美莲花餐厅支出管理系统_安装包.zip"
                 class="download-button">
                <svg class="download-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                下载安装包
              </a>
            </div>
          </div>
        </div>

        <!-- 返回按钮 - 独立在页面底部 -->
        <div class="back-to-overview-section">
          <button @click="goBackToOverview" class="back-overview-button">
            <svg class="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            <span>返回项目概览</span>
          </button>
        </div>
      </section>

      <!-- 其他项目的占位符详情页 -->
      <section v-if="selectedProject && selectedProject !== 'nus-sws-2024' && selectedProject !== 'mengsheng-2024' && selectedProject !== 'led-voice-2025' && selectedProject !== 'restaurant-system-2025' && selectedProject !== 'mobile-app-2025'" class="project-detail">
        <div class="back-button-container">
          <button @click="goBackToOverview" class="back-button">
            <svg class="back-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            返回项目概览
          </button>
        </div>

        <div class="coming-soon">
          <div class="coming-soon-content">
            <div class="coming-soon-icon">🚀</div>
            <h2 class="coming-soon-title">项目详情即将更新</h2>
            <p class="coming-soon-text">
              该项目的详细信息正在整理中，敬请期待更新。
            </p>
            <button @click="goBackToOverview" class="back-overview-btn">
              返回项目概览
            </button>
          </div>
        </div>
      </section>
    </main>

    <!-- 图片模态框 -->
    <div
      v-if="imageModal.isOpen"
      class="image-modal-overlay"
      @click="closeImageModal"
    >
      <div class="image-modal-content" @click.stop>
        <button @click="closeImageModal" class="modal-close-btn">
          <svg class="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
        <NuxtImg
          :src="imageModal.src"
          :alt="imageModal.title"
          class="modal-image"
          :style="{ objectFit: 'contain' }"
        />
        <div class="modal-title">{{ imageModal.title }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue'

// 响应式数据
const selectedProject = ref(null)
const selectedCategory = ref('all')
const currentSection = ref('')
const imageModal = ref({
  isOpen: false,
  src: '',
  title: ''
})

// NUS项目证书下载开关 - 修改 true/false 来控制证书下载按钮显示
const showNusCertificates = ref(false)

// 盟升杯项目证书下载开关 - 修改 true/false 来控制证书下载按钮显示
const showMengshengCertificates = ref(false)

// 移动应用创新赛项目证书下载开关 - 修改 true/false 来控制证书下载按钮显示
const showMobileAppCertificates = ref(false)

// LED语音交互灯板项目证书下载开关 - 修改 true/false 来控制证书下载按钮显示
const showLedCertificates = ref(false)

// 项目数据 - 按时间从近到旧排序
const projects = ref([
  {
    id: 'led-voice-2025',
    title: 'LED语音交互灯板',
    year: 2025,
    category: '硬件项目',
    status: 'completed',
    hasDetails: true,
    icon: '💡',
    coverImage: '/images/projects/led-voice-2025/cover.png',
    description: '我设计的基于Arduino UNO和ASR-PRO语音识别模块的智能LED显示系统，通过语音指令控制多种灯光效果',
    badges: [
      { text: '硬件系统开发', type: 'badge-accent' },
      { text: 'Arduino编程', type: 'badge-info' },
    ],
    stats: [
      { value: '92/100', label: '项目成绩' },
      { value: '93/100', label: '课程成绩' }
    ]
  },
  {
    id: 'mobile-app-2025',
    title: '中国高校计算机大赛—移动应用创新赛',
    year: 2025,
    category: '移动应用',
    status: 'completed',
    hasDetails: true,
    icon: '📱',
    coverImage: '/images/projects/yigui-app-2025/项目封面图.png',
    description: '我基于 SwiftUI + CoreML 做了一个个性化服装设计与虚拟试穿的 App，同时用 Blender 处理人体模型，并在 Ubuntu 上搭了后端服务。',
    badges: [
      { text: 'iOS开发', type: 'badge-primary' },
      { text: '3D建模', type: 'badge-info' },
    ],
    stats: [
      { value: '二等奖', label: '竞赛成绩' },
      { value: '85%', label: '功能完成' }
    ]
  },
  {
    id: 'restaurant-system-2025',
    title: '美莲花餐厅支出管理系统',
    year: 2025,
    category: '管理系统',
    status: 'completed',
    hasDetails: true,
    icon: '🍽️',
    coverImage: '/images/projects/restaurant-system-2025/登录窗口.png',
    description: '为我父亲的大型餐厅设计的支出管理系统，包含支出记录、数据分析、报表生成、Deepseek专业分析等功能',
    badges: [
      { text: 'PyQt6', type: 'badge-primary' },
      { text: 'SQLite数据库', type: 'badge-info' },
    ],
    stats: [
      { value: '100%', label: '功能完成' },
      { value: '50天以上', label: '平稳运行' }
    ]
  },
  {
    id: 'mengsheng-2024',
    title: '"盟升杯"电子设计竞赛',
    year: 2024,
    category: '竞赛项目',
    status: 'completed',
    hasDetails: true,
    coverImage: '/images/projects/mengsheng-2024/cover.jpg',
    description: '我和队友综合运用STM32微控制器、TDOA算法、语音识别、LCD显示等技术设计的一套智能声源识别定位系统',
    badges: [
      { text: '硬件系统开发', type: 'badge-accent' },
      { text: 'STM32编程', type: 'badge-info' },
    ],
    stats: [
      { value: '三等奖', label: '竞赛成绩' },
      { value: '2,000RMB', label: '奖金' }
    ]
  },
  {
    id: 'nus-sws-2024',
    title: 'NUS SOC SWS 2024',
    year: 2024,
    category: 'UI/UX设计',
    status: 'completed',
    hasDetails: true,
    coverImage: '/images/projects/nus-sws-2024/cover.png',
    description: '新加坡国立大学计算机学院年度旗舰项目，我参加了X Cluster下的UI/UX设计交互界面项目',
    badges: [
      { text: 'UI/UX设计', type: 'badge-primary' },
      { text: 'Figma原型', type: 'badge-secondary' }
    ],
    stats: [
      { value: 'TOP 3', label: '团队荣誉' },
      { value: 'A+', label: '个人表现' }
    ]
  }
])

// 计算属性：根据分类筛选项目
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') {
    return projects.value
  }
  if (selectedCategory.value === 'completed') {
    return projects.value.filter(project => project.status === 'completed')
  }
  if (selectedCategory.value === 'ongoing') {
    return projects.value.filter(project => project.status === 'ongoing')
  }
  return projects.value
})

// 盟升杯项目代码数据
const tdoaAlgorithmCode = `close all

% 参数设置
a = 40; % 麦克风阵列的长度（厘米）
b = 20; % 麦克风阵列的宽度（厘米）
fs = 20000; % 采样率
c = 343; % 声速（米/秒）
t = 0:1/fs:1; % 时间轴，信号时长1秒

% 麦克风阵列位置(原代位置取麦克风阵列的中心点）
mic_positions = [-a/2, -b/2;      % 麦克风1
                 a/2, -b/2;       % 麦克风2
                 -a/2, b/2;       % 麦克风3
                 a/2, b/2];       % 麦克风4

% 五个已知区域中心的声源坐标
source_positions = [0, 240;  % A区域
                    -50, 240; % B区域
                    -100, 240; % C区域
                    50, 240; % D区域
                    100, 240]; % E区域

% 从每个麦克风到声源的距离
distances = sqrt(sum((mic_positions - source_position).^2, 2));

% 模拟信号传播延时
delays = distances / c; % 根据距离计算传播延迟
signals = zeros(length(t), 4);
source_signal = sin(2 * pi * 1000 * t); % 生成一个1kHz的测试信号

% 计算TDOA
tdoa = zeros(1, 3); % TDOA between microphone pairs
tdoa(1) = delays(2) - delays(1); % Mic2-Mic1
tdoa(2) = delays(3) - delays(1); % Mic3-Mic1
tdoa(3) = delays(4) - delays(1); % Mic4-Mic1

% 使用最小化误差的优化方法估计声源位置
objective_func = @(pos) sum((sqrt(sum((mic_positions(2:end, :) - pos).^2, 2)) - sqrt(sum((mic_positions(1, :) - pos).^2)) - tdoa' * c).^2);

% 使用fminsearch进行优化，初始位置opoint为(0, 0)
opoint = [0, 0];
estimated_position = fminsearch(objective_func, opoint);`

const asrControlCode = `#include "asr.h"

extern "C"{ void * __dso_handle = 0 ;}

#include "setup.h"
#include "myLib/asr_event.h"
#include "HardwareSerial.h"

uint32_t snid;

void ASR_CODE();

/*描述该功能...*/
void ASR_CODE(){
  switch (snid) {
    case 1:
     digitalWrite(4,0);
     Serial.print("11");
     break;
    case 2:
     digitalWrite(4,1);
     Serial.print("22");
     break;
    case 3:
     digitalWrite(2,0);
     Serial.print("33");
     break;
    case 4:
     digitalWrite(2,1);
     Serial.print("44");
     break;
  }
}

void hardware_init(){
  setPinFun(13,SECOND_FUNCTION);
  setPinFun(14,SECOND_FUNCTION);
  Serial.begin(9600);
  vTaskDelete(NULL);
}

void setup()
{
  set_wakeup_forever();

  //{ID:1,keyword:"命令词",ASR:"打开灯光",ASRTO:""}
  //{ID:2,keyword:"命令词",ASR:"关闭灯光",ASRTO:""}
  //{ID:3,keyword:"命令词",ASR:"打开空调",ASRTO:""}
  //{ID:4,keyword:"命令词",ASR:"关闭空调",ASRTO:""}

  setPinFun(4,FIRST_FUNCTION);
  pinMode(4,output);
  setPinFun(4,FIRST_FUNCTION);
}`

const pythonAnalysisCode = `import librosa
import numpy as np
import matplotlib.pyplot as plt

# 加载 mp3文件
audio_file = '4.mp3'  #1, 2, 3, 4分别为打开/关闭灯光，打开/关闭空调
y, sr = librosa.load(audio_file, sr=None)

# 绘制波形
plt.figure(figsize=(10, 6))
plt.plot(np.linspace(0, len(y) / sr, len(y)), y)
plt.title("guan bi kong tiao 2m ")
plt.xlabel("Time (s)")
plt.ylabel("Amplitude")
plt.show()

# 计算信号的 RMS（Root Mean Square）值作为信号强度
rms = librosa.feature.rms(y=y)
print(f"RMS value: {np.mean(rms)}")`

// Yigui项目代码数据
const swiftBodyShapePredictorCode = `import Foundation
import CoreML

// 身体比例预测结果结构体
struct BodyShapePrediction {
    let chest: Double
    let waist: Double
    let thigh: Double
}

// 预测时可能出现的错误
enum BodyShapePredictorError: Error, CustomStringConvertible {
    case modelLoadingFailed(String)
    case predictionFailed(String)

    var description: String {
        switch self {
        case .modelLoadingFailed(let reason):
            return "模型加载失败: \\(reason)"
        case .predictionFailed(let reason):
            return "预测执行失败: \\(reason)"
        }
    }
}

class BodyShapePredictorService {
    // 模型实例
    private var chestModel: MLModel?
    private var waistModel: MLModel?
    private var thighModel: MLModel?

    // 初始化方法，加载所有模型
    init() throws {
        do {
            // 直接使用编译好的模型类
            let chestConfig = MLModelConfiguration()
            let waistConfig = MLModelConfiguration()
            let thighConfig = MLModelConfiguration()

            // 加载编译后的模型
            chestModel = try Chest_Ratio(configuration: chestConfig).model
            waistModel = try Waist_Ratio(configuration: waistConfig).model
            thighModel = try Thigh_Ratio(configuration: thighConfig).model

            print("✅ CoreML模型加载完成")
        } catch {
            print("❌ 加载CoreML模型失败：\\(error.localizedDescription)")
            throw BodyShapePredictorError.modelLoadingFailed("加载模型失败: \\(error.localizedDescription)")
        }
    }

    // 公开的预测方法
    func predict(height: Double, weight: Double) async throws -> BodyShapePrediction {
        // 在后台线程异步执行预测
        return try await Task.detached(priority: .userInitiated) {
            // 确保模型已加载
            guard let chestModel = self.chestModel,
                  let waistModel = self.waistModel,
                  let thighModel = self.thighModel else {
                throw BodyShapePredictorError.modelLoadingFailed("模型未正确加载")
            }

            // 初始化默认比例值，以启动迭代
            var estimatedChestRatio = 1.0
            var estimatedWaistRatio = 1.0
            var estimatedThighRatio = 1.0

            // 通过迭代解决模型间的循环依赖问题，3次迭代足以收敛
            for i in 0..<3 {
                print("🔄 开始第 \\(i + 1) 轮迭代预测...")
                do {
                    // 1. 预测胸围比例
                    let chestInputFeatures: [String: MLFeatureValue] = [
                        "height_cm": MLFeatureValue(double: height),
                        "weight_kg": MLFeatureValue(double: weight),
                        "waist_ratio": MLFeatureValue(double: estimatedWaistRatio),
                        "thigh_ratio": MLFeatureValue(double: estimatedThighRatio)
                    ]
                    let chestInput = try MLDictionaryFeatureProvider(dictionary: chestInputFeatures)
                    let chestOutput = try chestModel.prediction(from: chestInput)
                    if let newChestRatio = chestOutput.featureValue(for: "chest_ratio")?.doubleValue {
                        estimatedChestRatio = newChestRatio
                    }

                    // 2. 预测腰围比例 (使用上一部预测出的新胸围)
                    let waistInputFeatures: [String: MLFeatureValue] = [
                        "height_cm": MLFeatureValue(double: height),
                        "weight_kg": MLFeatureValue(double: weight),
                        "chest_ratio": MLFeatureValue(double: estimatedChestRatio),
                        "thigh_ratio": MLFeatureValue(double: estimatedThighRatio)
                    ]
                    let waistInput = try MLDictionaryFeatureProvider(dictionary: waistInputFeatures)
                    let waistOutput = try waistModel.prediction(from: waistInput)
                    if let newWaistRatio = waistOutput.featureValue(for: "waist_ratio")?.doubleValue {
                        estimatedWaistRatio = newWaistRatio
                    }

                    // 3. 预测大腿围比例 (使用新的胸围和腰围)
                    let thighInputFeatures: [String: MLFeatureValue] = [
                        "height_cm": MLFeatureValue(double: height),
                        "weight_kg": MLFeatureValue(double: weight),
                        "chest_ratio": MLFeatureValue(double: estimatedChestRatio),
                        "waist_ratio": MLFeatureValue(double: estimatedWaistRatio)
                    ]
                    let thighInput = try MLDictionaryFeatureProvider(dictionary: thighInputFeatures)
                    let thighOutput = try thighModel.prediction(from: thighInput)
                    if let newThighRatio = thighOutput.featureValue(for: "thigh_ratio")?.doubleValue {
                        estimatedThighRatio = newThighRatio
                    }

                    print("    - 第 \\(i + 1) 轮结果: Chest=\\(String(format: "%.3f", estimatedChestRatio)), Waist=\\(String(format: "%.3f", estimatedWaistRatio)), Thigh=\\(String(format: "%.3f", estimatedThighRatio))")

                } catch {
                     throw BodyShapePredictorError.predictionFailed("迭代预测失败: \\(error.localizedDescription)")
                }
            }

            // 返回最终收敛的预测结果
            return BodyShapePrediction(
                chest: estimatedChestRatio,
                waist: estimatedWaistRatio,
                thigh: estimatedThighRatio
            )
        }.value
    }
}`

const swiftDesignViewCode = `import SwiftUI
import SceneKit
import GLTFSceneKit

struct DesignView: View {
    @StateObject private var viewModel = RealDesignViewModel()
    @State private var showingPatternSelection = false
    @State private var showingColorPicker = false
    @State private var showingNewProjectSheet = false
    @State private var newProjectName = ""
    @State private var showingProjectList = false
    @State private var selectedFabric = "cotton"
    @State private var isApplyingPattern = false
    @State private var isGenerating3D = false
    @State private var patternApplied = false

    var body: some View {
        NavigationView {
            ZStack {
                Color.background.ignoresSafeArea()

                ScrollView {
                    VStack(spacing: 0) {
                        // 顶部标题
                        headerSection

                        // 主要内容区域
                        if viewModel.projects.isEmpty {
                            // 欢迎页面
                            welcomeSection
                                .frame(maxWidth: .infinity, maxHeight: .infinity)
                        } else {
                            // 设计工作台 - 单栏布局
                            VStack(spacing: 30) {
                                // 顶部项目信息栏
                                if let currentProject = viewModel.currentProject {
                                    projectInfoSection(for: currentProject)
                                        .padding(.horizontal, 20)
                                }

                                // 设计工具区域
                                designToolsSection
                                    .frame(maxWidth: .infinity)
                                    .padding(.horizontal, 20)

                                Spacer()
                            }
                            .padding(.top, 20)
                        }
                    }
                }
            }
            .navigationBarHidden(true)
            .onAppear {
                viewModel.loadData()
            }
        }
    }

    // MARK: - 页面组件

    private var headerSection: some View {
        VStack(spacing: 20) {
            // YigUi标题
            HStack(spacing: 0) {
                Text("Yig")
                    .font(.custom("Epilogue", size: 36))
                    .foregroundColor(.textPrimary)

                Text("U")
                    .font(.custom("Epilogue", size: 36))
                    .foregroundColor(.themeColor)

                Text("i")
                    .font(.custom("Epilogue", size: 36))
                    .foregroundColor(.textPrimary)
            }
            .shadow(color: .black.opacity(0.35), radius: 3, x: 0, y: 3)
            .padding(.top, 10)

            // 设计工作台标题
            HStack {
                Text("设计工作台")
                    .font(.custom("MF DianHei", size: 24))
                    .foregroundColor(.textPrimary)
                    .fontWeight(.medium)
            }
        }
        .padding(.bottom, 30)
    }
}`

const fastApiModelCode = `from fastapi import FastAPI, BackgroundTasks, Depends
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import uuid
import os
import json
from urllib.parse import unquote
from typing import Dict, Any

from model_utils import run_model_pipeline, run_wear_item_pipeline
from auth_middleware import get_current_user

app = FastAPI(title="Yigui Model Server v2.2 - With Static Files")

# --- 挂载静态文件目录 ---
# 这会让所有对 /models/... 的请求，都去服务器的 /root/model-server/generated_models 文件夹下查找文件
GENERATED_MODELS_DIR = "generated_models"
os.makedirs(GENERATED_MODELS_DIR, exist_ok=True)
app.mount("/models", StaticFiles(directory=GENERATED_MODELS_DIR), name="models")

class ModelInput(BaseModel):
    gender: str
    height: float
    weight: float
    nickname: str
    chest_ratio: float = 1.0
    waist_ratio: float = 1.0
    thigh_ratio: float = 1.0

class WearItemRequest(BaseModel):
    design_project_id: int

@app.post("/generate")
async def generate_model_async(input: ModelInput, background_tasks: BackgroundTasks, current_user: Dict[str, Any] = Depends(get_current_user)):
    task_id = str(uuid.uuid4())
    background_tasks.add_task(
        run_model_pipeline,
        task_id=task_id,
        user_id=current_user["user_id"],
        gender=input.gender,
        height=input.height,
        weight=input.weight,
        nickname=current_user["nickname"],
        chest_ratio=input.chest_ratio,
        waist_ratio=input.waist_ratio,
        thigh_ratio=input.thigh_ratio
    )
    return {"task_id": task_id, "status": "processing"}

@app.post("/wear-item")
async def wear_item_async(request: WearItemRequest, background_tasks: BackgroundTasks, current_user: Dict[str, Any] = Depends(get_current_user)):
    task_id = str(uuid.uuid4())
    background_tasks.add_task(
        run_wear_item_pipeline,
        task_id=task_id,
        user_id=current_user["user_id"],
        user_nickname=current_user["nickname"],
        design_project_id=request.design_project_id
    )
    return {"task_id": task_id, "status": "processing"}

@app.get("/task_status/{nickname}/{task_id}")
def get_task_status(nickname: str, task_id: str):
    decoded_nickname = unquote(nickname)
    base_dir = "/root/model-server/generated_models"
    user_task_dir = os.path.join(base_dir, f"{decoded_nickname}_models", "tasks")
    status_file_path = os.path.join(user_task_dir, f"{task_id}.json")

    if not os.path.exists(status_file_path):
        return {"task_id": task_id, "status": "processing"}

    try:
        with open(status_file_path, 'r') as f:
            data = json.load(f)
        return data
    except Exception as e:
        return {"task_id": task_id, "status": "error", "detail": str(e)}`

const fastApiDesignCode = `from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from design_api_routes import router as design_router
import os

app = FastAPI(title="Design Server", version="1.0.0")

# CORS配置
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 挂载设计相关API路由
app.include_router(design_router, prefix="/api/v1/design", tags=["design"])

# --- 静态文件服务 ---
GENERATED_DESIGNS_DIR = "generated_designs"
os.makedirs(GENERATED_DESIGNS_DIR, exist_ok=True)
app.mount("/designs", StaticFiles(directory=GENERATED_DESIGNS_DIR), name="designs")

@app.get("/")
def read_root():
    return {"message": "Design Server is running", "version": "1.0.0"}

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "design-server"}

if __name__ == "__main__":
    uvicorn.run(
        "design_api:app",
        host="0.0.0.0",
        port=8002,
        access_log=True,
        log_level="info"
    )`

const blenderProcessCode = `# /root/model-server/process_single_part.py
# 最终版本: 接收单个部件，使用CoreML参数进行精细化缩放，并进行可靠的烘焙

import bpy
import sys
import os

# --- 1. 参数解析 ---
argv = sys.argv
argv = argv[argv.index("--") + 1:]
if len(argv) < 7: sys.exit(1)
model_path, output_path = argv[0], argv[1]
height, weight = float(argv[2]), float(argv[3])
chest_ratio, waist_ratio, thigh_ratio = float(argv[4]), float(argv[5]), float(argv[6])

# --- 2. 导入与查找 ---
bpy.ops.wm.read_homefile(use_empty=True)
bpy.ops.import_scene.gltf(filepath=model_path)
armature = next((obj for obj in bpy.context.scene.objects if obj.type == 'ARMATURE'), None)
all_meshes = [obj for obj in bpy.context.scene.objects if obj.type == 'MESH']
if not armature or len(all_meshes) != 1: sys.exit(1)
mesh_obj = all_meshes[0]

# --- 3. 以CoreML为绝对主导的微调逻辑 ---
print(f"--- 接收到的CoreML原始比例: C={chest_ratio:.4f}, W={waist_ratio:.4f}, T={thigh_ratio:.4f} ---")

# A. 参数归一化
BASE_RATIO = 0.45
SENSITIVITY = 0.5

# 将CoreML的比例值，转换为以1.0为基准的、变化幅度很小的缩放因子
waist_scale = 1.0 + (waist_ratio - BASE_RATIO) * SENSITIVITY
chest_scale = 1.0 + (chest_ratio - BASE_RATIO) * SENSITIVITY
thigh_scale = 1.0 + (thigh_ratio - BASE_RATIO) * SENSITIVITY

# B. 身高调整（物体模式）
STANDARD_HEIGHT = 175.0
height_ratio = height / STANDARD_HEIGHT
armature.scale = (height_ratio, height_ratio, height_ratio)

# C. 胖瘦调整（姿态模式）
bpy.context.view_layer.objects.active = armature
bpy.ops.object.mode_set(mode='POSE')

# 反向缩放根骨骼以抵消父级缩放
root_bone = armature.pose.bones.get("root")
if root_bone:
    inverse_height_ratio = 1.0 / height_ratio if height_ratio != 0 else 1.0
    root_bone.scale = (inverse_height_ratio, inverse_height_ratio, inverse_height_ratio)

# 腰部控制
for name in ["spine_01", "spine_02"]:
    bone = armature.pose.bones.get(name)
    if bone: bone.scale[0] = waist_scale; bone.scale[2] = waist_scale

# 胸腔控制
for name in ["spine_03", "spine_04"]:
    bone = armature.pose.bones.get(name)
    if bone: bone.scale[0] = chest_scale; bone.scale[2] = chest_scale

# 腿部控制 (大腿)
for name in ["thigh_l", "thigh_r"]:
    bone = armature.pose.bones.get(name)
    if bone: bone.scale[0] = thigh_scale; bone.scale[2] = thigh_scale

bpy.ops.object.mode_set(mode='OBJECT')

# --- 4. 烘焙与清理 ---
bpy.context.view_layer.objects.active = armature
mesh_obj.select_set(True)
armature.select_set(True)
bpy.ops.object.parent_clear(type='CLEAR_KEEP_TRANSFORM')
bpy.ops.object.convert(target='MESH')
bpy.data.objects.remove(bpy.data.objects.get(armature.name), do_unlink=True)

# --- 5. 导出 ---
os.makedirs(os.path.dirname(output_path), exist_ok=True)
final_mesh_to_export = bpy.data.objects.get(mesh_obj.name)
if final_mesh_to_export:
    bpy.ops.object.select_all(action='DESELECT')
    final_mesh_to_export.select_set(True)
    bpy.ops.export_scene.gltf(filepath=output_path, export_format='GLB', use_selection=True)
    print(f"--- 部件成功处理并导出到: {output_path} ---")`

// 保留原有的项目代码（盟升杯等）
const swiftImageProcessingCode = `import Foundation
import UIKit
import CoreML
import Vision
import Combine

class ImageProcessingManager: ObservableObject {
    @Published var processedImage: UIImage?
    @Published var isProcessing = false
    @Published var processingProgress: Double = 0.0

    private let apiService = APIService()
    private var cancellables = Set<AnyCancellable>()

    // MARK: - 图像预处理
    func preprocessImage(_ image: UIImage) -> UIImage? {
        guard let ciImage = CIImage(image: image) else { return nil }

        let context = CIContext()

        // 图像尺寸标准化
        let targetSize = CGSize(width: 512, height: 512)
        let filter = CIFilter(name: "CILanczosScaleTransform")

        let scale = min(targetSize.width / ciImage.extent.width,
                       targetSize.height / ciImage.extent.height)

        filter?.setValue(ciImage, forKey: kCIInputImageKey)
        filter?.setValue(scale, forKey: kCIInputScaleKey)
        filter?.setValue(1.0, forKey: kCIInputAspectRatioKey)

        guard let outputImage = filter?.outputImage,
              let cgImage = context.createCGImage(outputImage, from: outputImage.extent) else {
            return nil
        }

        return UIImage(cgImage: cgImage)
    }

    // MARK: - 虚拟试穿处理
    func processVirtualTryOn(userImage: UIImage, clothingDesign: ClothingDesign) {
        isProcessing = true
        processingProgress = 0.0

        // 图像预处理
        guard let processedUserImage = preprocessImage(userImage) else {
            handleProcessingError("图像预处理失败")
            return
        }

        // 创建处理请求
        let request = VirtualTryOnRequest(
            userImage: processedUserImage,
            clothingType: clothingDesign.type,
            style: clothingDesign.style,
            colors: clothingDesign.colors
        )

        // 发送到后端处理
        apiService.submitVirtualTryOnRequest(request)
            .receive(on: DispatchQueue.main)
            .sink(
                receiveCompletion: { [weak self] completion in
                    self?.isProcessing = false
                    if case .failure(let error) = completion {
                        self?.handleProcessingError(error.localizedDescription)
                    }
                },
                receiveValue: { [weak self] response in
                    self?.processedImage = response.resultImage
                    self?.processingProgress = 1.0
                }
            )
            .store(in: &cancellables)
    }

    private func handleProcessingError(_ message: String) {
        print("Processing error: \\(message)")
        isProcessing = false
        processingProgress = 0.0
    }
}`

const pythonVirtualTryOnCode = `import cv2
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import load_model
import mediapipe as mp
from PIL import Image
import torch
import torchvision.transforms as transforms

class VirtualTryOnProcessor:
    def __init__(self):
        # 初始化模型
        self.pose_detector = mp.solutions.pose.Pose(
            static_image_mode=True,
            model_complexity=2,
            enable_segmentation=True,
            min_detection_confidence=0.5
        )

        # 加载预训练的试衣模型
        self.tryon_model = load_model('models/virtual_tryon_model.h5')
        self.clothing_segmentation_model = load_model('models/cloth_segmentation.h5')

    def detect_human_pose(self, image):
        """检测人体关键点和姿态"""
        rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        results = self.pose_detector.process(rgb_image)

        if not results.pose_landmarks:
            raise ValueError("未检测到人体姿态")

        # 提取关键点坐标
        landmarks = []
        for landmark in results.pose_landmarks.landmark:
            landmarks.append([landmark.x, landmark.y, landmark.z])

        return np.array(landmarks), results.segmentation_mask

    def segment_clothing_area(self, image, pose_landmarks):
        """分割服装区域"""
        # 预处理图像
        processed_image = cv2.resize(image, (256, 256))
        processed_image = processed_image.astype(np.float32) / 255.0

        # 使用U-Net进行服装分割
        input_tensor = np.expand_dims(processed_image, axis=0)
        segmentation_mask = self.clothing_segmentation_model.predict(input_tensor)

        # 后处理分割结果
        mask = segmentation_mask[0, :, :, 0]
        mask = (mask > 0.5).astype(np.uint8)

        return mask

    def generate_virtual_tryon(self, user_image, clothing_design, pose_landmarks, clothing_mask):
        """生成虚拟试穿效果"""
        try:
            # 图像预处理
            user_img_resized = cv2.resize(user_image, (256, 256))

            # 服装设计参数编码
            style_encoding = self.encode_clothing_style(clothing_design)

            # 准备模型输入
            model_input = {
                'user_image': np.expand_dims(user_img_resized, axis=0),
                'pose_landmarks': np.expand_dims(pose_landmarks, axis=0),
                'clothing_mask': np.expand_dims(clothing_mask, axis=0),
                'style_encoding': np.expand_dims(style_encoding, axis=0)
            }

            # 模型推理
            generated_result = self.tryon_model.predict(model_input)

            # 后处理生成结果
            result_image = self.postprocess_result(generated_result[0])

            return result_image

        except Exception as e:
            print(f"虚拟试穿生成失败: {e}")
            return None

    def encode_clothing_style(self, clothing_design):
        """编码服装设计参数"""
        # 将设计参数转换为模型可理解的向量
        style_vector = np.zeros(128)  # 128维特征向量

        # 服装类型编码
        type_mapping = {'t-shirt': 0, 'dress': 1, 'jacket': 2, 'pants': 3}
        style_vector[type_mapping.get(clothing_design['type'], 0)] = 1.0

        # 颜色编码 (RGB归一化)
        colors = clothing_design.get('colors', [[255, 255, 255]])
        for i, color in enumerate(colors[:3]):  # 最多支持3种颜色
            style_vector[10 + i*3:10 + (i+1)*3] = np.array(color) / 255.0

        # 风格编码
        style_mapping = {'casual': 20, 'formal': 21, 'vintage': 22, 'modern': 23}
        style_idx = style_mapping.get(clothing_design.get('style', 'casual'), 20)
        style_vector[style_idx] = 1.0

        return style_vector

    def postprocess_result(self, generated_image):
        """后处理生成的图像"""
        # 反归一化
        result = generated_image * 255.0
        result = np.clip(result, 0, 255).astype(np.uint8)

        # 图像增强
        result = cv2.bilateralFilter(result, 9, 75, 75)

        return result

    def process_request(self, user_image_path, clothing_design):
        """处理完整的虚拟试穿请求"""
        # 加载用户图像
        user_image = cv2.imread(user_image_path)
        if user_image is None:
            raise ValueError("无法加载用户图像")

        # 人体姿态检测
        pose_landmarks, segmentation_mask = self.detect_human_pose(user_image)

        # 服装区域分割
        clothing_mask = self.segment_clothing_area(user_image, pose_landmarks)

        # 生成虚拟试穿效果
        result_image = self.generate_virtual_tryon(
            user_image, clothing_design, pose_landmarks, clothing_mask
        )

        return result_image

# 使用示例
if __name__ == "__main__":
    processor = VirtualTryOnProcessor()

    clothing_design = {
        'type': 't-shirt',
        'style': 'casual',
        'colors': [[255, 100, 100], [255, 255, 255]],
        'patterns': ['solid']
    }

    result = processor.process_request('user_photo.jpg', clothing_design)
    cv2.imwrite('virtual_tryon_result.jpg', result)`

// 3D模型渲染代码
const metalRenderingCode = `import Metal
import MetalKit
import simd

class ModelRenderingEngine: NSObject, MTKViewDelegate {
    private var device: MTLDevice!
    private var commandQueue: MTLCommandQueue!
    private var renderPipelineState: MTLRenderPipelineState!
    private var uniformBuffer: MTLBuffer!
    private var meshes: [MTKMesh] = []

    // MARK: - 渲染引擎初始化
    init(device: MTLDevice) {
        self.device = device
        super.init()

        setupCommandQueue()
        setupRenderPipeline()
        setupUniformBuffers()
    }

    private func setupCommandQueue() {
        commandQueue = device.makeCommandQueue()
    }

    private func setupRenderPipeline() {
        guard let library = device.makeDefaultLibrary() else {
            fatalError("Failed to create Metal library")
        }

        let vertexFunction = library.makeFunction(name: "vertexShader")
        let fragmentFunction = library.makeFunction(name: "fragmentShader")

        let pipelineDescriptor = MTLRenderPipelineDescriptor()
        pipelineDescriptor.vertexFunction = vertexFunction
        pipelineDescriptor.fragmentFunction = fragmentFunction
        pipelineDescriptor.colorAttachments[0].pixelFormat = .bgra8Unorm
        pipelineDescriptor.depthAttachmentPixelFormat = .depth32Float

        // 启用混合模式
        pipelineDescriptor.colorAttachments[0].isBlendingEnabled = true
        pipelineDescriptor.colorAttachments[0].rgbBlendOperation = .add
        pipelineDescriptor.colorAttachments[0].alphaBlendOperation = .add

        do {
            renderPipelineState = try device.makeRenderPipelineState(descriptor: pipelineDescriptor)
        } catch {
            fatalError("Failed to create render pipeline state: \\(error)")
        }
    }

    private func setupUniformBuffers() {
        uniformBuffer = device.makeBuffer(length: MemoryLayout<Uniforms>.stride * 3,
                                         options: .storageModeShared)
    }

    // MARK: - 3D模型加载与渲染
    func loadModel(from url: URL) throws {
        let asset = MDLAsset(url: url)
        let meshes = try MTKMesh.newMeshes(asset: asset, device: device)
        self.meshes = meshes.metalKitMeshes
    }

    func draw(in view: MTKView) {
        guard let commandBuffer = commandQueue.makeCommandBuffer(),
              let renderPassDescriptor = view.currentRenderPassDescriptor,
              let renderEncoder = commandBuffer.makeRenderCommandEncoder(descriptor: renderPassDescriptor) else {
            return
        }

        // 设置渲染状态
        renderEncoder.setRenderPipelineState(renderPipelineState)

        // 更新uniform数据
        updateUniforms()
        renderEncoder.setVertexBuffer(uniformBuffer, offset: 0, index: 1)
        renderEncoder.setFragmentBuffer(uniformBuffer, offset: 0, index: 1)

        // 渲染所有网格
        for mesh in meshes {
            renderMesh(mesh, with: renderEncoder)
        }

        renderEncoder.endEncoding()

        if let drawable = view.currentDrawable {
            commandBuffer.present(drawable)
        }

        commandBuffer.commit()
    }

    private func renderMesh(_ mesh: MTKMesh, with encoder: MTLRenderCommandEncoder) {
        // 设置顶点缓冲区
        for (index, vertexBuffer) in mesh.vertexBuffers.enumerated() {
            encoder.setVertexBuffer(vertexBuffer.buffer,
                                  offset: vertexBuffer.offset,
                                  index: index)
        }

        // 渲染每个子网格
        for submesh in mesh.submeshes {
            encoder.drawIndexedPrimitives(type: submesh.primitiveType,
                                        indexCount: submesh.indexCount,
                                        indexType: submesh.indexType,
                                        indexBuffer: submesh.indexBuffer.buffer,
                                        indexBufferOffset: submesh.indexBuffer.offset)
        }
    }

    private func updateUniforms() {
        let uniforms = uniformBuffer.contents().bindMemory(to: Uniforms.self, capacity: 1)

        // 设置模型-视图-投影矩阵
        uniforms.pointee.modelViewProjectionMatrix = getModelViewProjectionMatrix()
        uniforms.pointee.normalMatrix = getNormalMatrix()
        uniforms.pointee.lightPosition = simd_float3(0, 5, 5)
        uniforms.pointee.viewPosition = simd_float3(0, 0, 5)
    }

    // MARK: - 矩阵计算
    private func getModelViewProjectionMatrix() -> simd_float4x4 {
        let model = matrix_identity_float4x4
        let view = matrix_look_at_left_hand(eye: simd_float3(0, 0, 5),
                                           center: simd_float3(0, 0, 0),
                                           up: simd_float3(0, 1, 0))
        let projection = matrix_perspective_left_hand(fovyRadians: Float.pi / 4,
                                                    aspectRatio: 1.0,
                                                    nearZ: 0.1,
                                                    farZ: 100.0)

        return projection * view * model
    }

    private func getNormalMatrix() -> simd_float3x3 {
        let modelMatrix = matrix_identity_float4x4
        let normalMatrix = simd_float3x3(modelMatrix.columns.0.xyz,
                                       modelMatrix.columns.1.xyz,
                                       modelMatrix.columns.2.xyz)
        return matrix_transpose(matrix_invert(normalMatrix))
    }
}

// Uniform结构体
struct Uniforms {
    var modelViewProjectionMatrix: simd_float4x4
    var normalMatrix: simd_float3x3
    var lightPosition: simd_float3
    var viewPosition: simd_float3
}

// 扩展SIMD向量
extension simd_float4 {
    var xyz: simd_float3 {
        return simd_float3(x, y, z)
    }
}`

// 推荐算法代码
const recommendationAlgorithmCode = `import numpy as np
import pandas as pd
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.decomposition import TruncatedSVD
from sklearn.feature_extraction.text import TfidfVectorizer
import json
from datetime import datetime, timedelta

class RecommendationEngine:
    def __init__(self):
        self.user_item_matrix = None
        self.item_features_matrix = None
        self.svd_model = TruncatedSVD(n_components=50, random_state=42)
        self.tfidf_vectorizer = TfidfVectorizer(max_features=1000)
        self.user_profiles = {}
        self.item_profiles = {}

    def load_data(self, interactions_df, items_df):
        """加载用户交互数据和物品特征数据"""
        self.interactions_df = interactions_df
        self.items_df = items_df

        # 构建用户-物品交互矩阵
        self.user_item_matrix = self.build_user_item_matrix()

        # 构建物品特征矩阵
        self.item_features_matrix = self.build_item_features_matrix()

        # 训练协同过滤模型
        self.train_collaborative_filtering()

    def build_user_item_matrix(self):
        """构建用户-物品评分矩阵"""
        return self.interactions_df.pivot_table(
            index='user_id',
            columns='item_id',
            values='rating',
            fill_value=0
        )

    def build_item_features_matrix(self):
        """构建物品特征矩阵"""
        # 合并服装属性为文本描述
        item_descriptions = []
        for _, item in self.items_df.iterrows():
            description = f"{item['category']} {item['style']} {item['color']} {item['material']}"
            item_descriptions.append(description)

        # 使用TF-IDF向量化
        features_matrix = self.tfidf_vectorizer.fit_transform(item_descriptions)
        return features_matrix.toarray()

    def train_collaborative_filtering(self):
        """训练协同过滤模型"""
        # 使用SVD进行矩阵分解
        self.svd_model.fit(self.user_item_matrix)

        # 计算用户和物品的潜在特征
        self.user_factors = self.svd_model.transform(self.user_item_matrix)
        self.item_factors = self.svd_model.components_.T

    def get_collaborative_recommendations(self, user_id, n_recommendations=10):
        """基于协同过滤的推荐"""
        if user_id not in self.user_item_matrix.index:
            return self.get_popular_items(n_recommendations)

        user_idx = self.user_item_matrix.index.get_loc(user_id)
        user_vector = self.user_factors[user_idx].reshape(1, -1)

        # 计算用户与所有物品的相似度
        item_scores = np.dot(user_vector, self.item_factors.T).flatten()

        # 获取用户已交互的物品
        interacted_items = set(self.user_item_matrix.columns[
            self.user_item_matrix.iloc[user_idx] > 0
        ])

        # 生成推荐列表（排除已交互物品）
        recommendations = []
        item_score_pairs = list(zip(self.user_item_matrix.columns, item_scores))
        item_score_pairs.sort(key=lambda x: x[1], reverse=True)

        for item_id, score in item_score_pairs:
            if item_id not in interacted_items:
                recommendations.append({
                    'item_id': item_id,
                    'score': float(score),
                    'reason': 'collaborative_filtering'
                })
                if len(recommendations) >= n_recommendations:
                    break

        return recommendations

    def get_content_based_recommendations(self, user_id, n_recommendations=10):
        """基于内容的推荐"""
        user_history = self.get_user_interaction_history(user_id)

        if not user_history:
            return self.get_popular_items(n_recommendations)

        # 计算用户喜好特征向量
        user_preference_vector = self.calculate_user_preference_vector(user_history)

        # 计算与所有物品的相似度
        item_similarities = cosine_similarity(
            user_preference_vector.reshape(1, -1),
            self.item_features_matrix
        ).flatten()

        # 生成推荐列表
        recommendations = []
        item_similarity_pairs = list(zip(self.items_df['item_id'], item_similarities))
        item_similarity_pairs.sort(key=lambda x: x[1], reverse=True)

        # 排除用户已交互的物品
        interacted_items = set(user_history['item_id'])

        for item_id, similarity in item_similarity_pairs:
            if item_id not in interacted_items:
                recommendations.append({
                    'item_id': item_id,
                    'score': float(similarity),
                    'reason': 'content_similarity'
                })
                if len(recommendations) >= n_recommendations:
                    break

        return recommendations

    def get_hybrid_recommendations(self, user_id, n_recommendations=10, alpha=0.7):
        """混合推荐算法"""
        # 获取协同过滤和基于内容的推荐
        cf_recs = self.get_collaborative_recommendations(user_id, n_recommendations * 2)
        cb_recs = self.get_content_based_recommendations(user_id, n_recommendations * 2)

        # 合并推荐结果
        combined_scores = {}

        # 协同过滤权重
        for rec in cf_recs:
            item_id = rec['item_id']
            combined_scores[item_id] = alpha * rec['score']

        # 基于内容权重
        for rec in cb_recs:
            item_id = rec['item_id']
            if item_id in combined_scores:
                combined_scores[item_id] += (1 - alpha) * rec['score']
            else:
                combined_scores[item_id] = (1 - alpha) * rec['score']

        # 排序并返回top-N推荐
        sorted_recommendations = sorted(
            combined_scores.items(),
            key=lambda x: x[1],
            reverse=True
        )[:n_recommendations]

        return [{
            'item_id': item_id,
            'score': float(score),
            'reason': 'hybrid_recommendation'
        } for item_id, score in sorted_recommendations]

    def calculate_user_preference_vector(self, user_history):
        """计算用户偏好向量"""
        user_items = user_history['item_id'].tolist()
        item_indices = [self.items_df[self.items_df['item_id'] == item_id].index[0]
                       for item_id in user_items if item_id in self.items_df['item_id'].values]

        if not item_indices:
            return np.zeros(self.item_features_matrix.shape[1])

        # 计算加权平均特征向量
        user_ratings = user_history['rating'].tolist()
        weighted_features = np.zeros(self.item_features_matrix.shape[1])

        for i, item_idx in enumerate(item_indices):
            weight = user_ratings[i] / 5.0  # 归一化评分
            weighted_features += weight * self.item_features_matrix[item_idx]

        return weighted_features / len(item_indices)

    def get_user_interaction_history(self, user_id):
        """获取用户交互历史"""
        return self.interactions_df[self.interactions_df['user_id'] == user_id]

    def get_popular_items(self, n_items=10):
        """获取热门物品（冷启动用）"""
        popular_items = self.interactions_df.groupby('item_id').agg({
            'rating': ['mean', 'count']
        }).flatten()

        # 计算热门度评分（评分均值 × log(评论数)）
        popularity_scores = []
        for item_id in self.items_df['item_id']:
            if item_id in popular_items.index:
                avg_rating = popular_items.loc[item_id, ('rating', 'mean')]
                rating_count = popular_items.loc[item_id, ('rating', 'count')]
                popularity = avg_rating * np.log(rating_count + 1)
            else:
                popularity = 0

            popularity_scores.append({
                'item_id': item_id,
                'score': popularity,
                'reason': 'popular_item'
            })

        return sorted(popularity_scores, key=lambda x: x['score'], reverse=True)[:n_items]

    def update_user_interaction(self, user_id, item_id, rating):
        """更新用户交互数据"""
        new_interaction = pd.DataFrame({
            'user_id': [user_id],
            'item_id': [item_id],
            'rating': [rating],
            'timestamp': [datetime.now()]
        })

        self.interactions_df = pd.concat([self.interactions_df, new_interaction],
                                       ignore_index=True)

        # 重新构建矩阵（在实际应用中可以增量更新）
        self.user_item_matrix = self.build_user_item_matrix()

# 使用示例
if __name__ == "__main__":
    # 初始化推荐引擎
    engine = RecommendationEngine()

    # 模拟数据加载
    interactions_data = pd.DataFrame({
        'user_id': [1, 1, 2, 2, 3],
        'item_id': ['item1', 'item2', 'item1', 'item3', 'item2'],
        'rating': [5, 4, 3, 5, 4],
        'timestamp': [datetime.now()] * 5
    })

    items_data = pd.DataFrame({
        'item_id': ['item1', 'item2', 'item3'],
        'category': ['t-shirt', 'dress', 'jacket'],
        'style': ['casual', 'formal', 'sporty'],
        'color': ['blue', 'red', 'black'],
        'material': ['cotton', 'silk', 'polyester']
    })

    engine.load_data(interactions_data, items_data)

    # 获取推荐
    recommendations = engine.get_hybrid_recommendations(user_id=1, n_recommendations=5)
    print("推荐结果:", recommendations)`

const apiCommunicationCode = `from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import base64
import io
import cv2
import numpy as np
from PIL import Image
import uuid
import os
from virtual_tryon import VirtualTryOnProcessor

app = Flask(__name__)
CORS(app)

# 初始化虚拟试穿处理器
tryon_processor = VirtualTryOnProcessor()

# 存储处理任务状态
task_status = {}

@app.route('/api/upload-image', methods=['POST'])
def upload_image():
    """处理图像上传请求"""
    try:
        # 获取上传的图像数据
        image_data = request.json.get('image')
        clothing_design = request.json.get('clothing_design')

        if not image_data or not clothing_design:
            return jsonify({'error': '缺少必要参数'}), 400

        # 解码base64图像
        image_bytes = base64.b64decode(image_data.split(',')[1])
        image = Image.open(io.BytesIO(image_bytes))

        # 转换为OpenCV格式
        opencv_image = cv2.cvtColor(np.array(image), cv2.COLOR_RGB2BGR)

        # 生成任务ID
        task_id = str(uuid.uuid4())

        # 初始化任务状态
        task_status[task_id] = {
            'status': 'processing',
            'progress': 0,
            'result': None,
            'error': None
        }

        # 异步处理虚拟试穿
        process_virtual_tryon_async(task_id, opencv_image, clothing_design)

        return jsonify({
            'task_id': task_id,
            'status': 'submitted',
            'message': '图像上传成功，开始处理'
        })

    except Exception as e:
        return jsonify({'error': f'图像处理失败: {str(e)}'}), 500

@app.route('/api/task-status/<task_id>', methods=['GET'])
def get_task_status(task_id):
    """查询任务处理状态"""
    if task_id not in task_status:
        return jsonify({'error': '任务不存在'}), 404

    task = task_status[task_id]

    response = {
        'task_id': task_id,
        'status': task['status'],
        'progress': task['progress']
    }

    if task['status'] == 'completed' and task['result']:
        # 将结果图像编码为base64
        _, buffer = cv2.imencode('.jpg', task['result'])
        image_base64 = base64.b64encode(buffer).decode('utf-8')
        response['result_image'] = f"data:image/jpeg;base64,{image_base64}"

    if task['status'] == 'failed' and task['error']:
        response['error'] = task['error']

    return jsonify(response)

def process_virtual_tryon_async(task_id, user_image, clothing_design):
    """异步处理虚拟试穿任务"""
    import threading

    def process():
        try:
            # 更新处理进度
            task_status[task_id]['progress'] = 20

            # 人体姿态检测
            pose_landmarks, segmentation_mask = tryon_processor.detect_human_pose(user_image)
            task_status[task_id]['progress'] = 40

            # 服装区域分割
            clothing_mask = tryon_processor.segment_clothing_area(user_image, pose_landmarks)
            task_status[task_id]['progress'] = 60

            # 生成虚拟试穿效果
            result_image = tryon_processor.generate_virtual_tryon(
                user_image, clothing_design, pose_landmarks, clothing_mask
            )
            task_status[task_id]['progress'] = 80

            if result_image is not None:
                task_status[task_id]['status'] = 'completed'
                task_status[task_id]['progress'] = 100
                task_status[task_id]['result'] = result_image
            else:
                raise Exception("虚拟试穿生成失败")

        except Exception as e:
            task_status[task_id]['status'] = 'failed'
            task_status[task_id]['error'] = str(e)

    # 在后台线程中处理
    thread = threading.Thread(target=process)
    thread.daemon = True
    thread.start()

@app.route('/api/health', methods=['GET'])
def health_check():
    """健康检查接口"""
    return jsonify({
        'status': 'healthy',
        'service': 'Yigui Virtual Try-On API',
        'version': '1.0.0'
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)`

// LED语音交互灯板项目代码数据
const arduinoCode = `#include <SoftwareSerial.h>
#include <FastLED.h>

SoftwareSerial mySerial(10, 11); // RX, TX
String value;

#define LED_PIN 9
#define NUM_LEDS 64
#define BRIGHTNESS 100

CRGB leds[NUM_LEDS];  // FastLED 控制数组

// 8x8矩阵中的爱心
const int heart[] = {
  9, 10, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
  26, 27, 28, 29, 30, 31, 33, 34, 35, 36, 37, 38, 42, 43,
  44, 45, 51, 52
};

void setup() {
  mySerial.begin(9600); // 软件串口用于语音模块

  FastLED.addLeds<WS2812, LED_PIN, GRB>(leds, NUM_LEDS); // 初始化灯带
  FastLED.setBrightness(BRIGHTNESS); // 设置亮度
  fill_solid(leds, NUM_LEDS, CRGB::Black); //默认关闭
  FastLED.show();
}

void loop() { //主循环持续监听语音串口
  if (mySerial.available()) {
    value = mySerial.readString();
    value.trim();
    handleCommand(value);
  }
}

void handleCommand(String cmd) { //接收到字符指令后分发给对应灯效函数
  if (cmd == "rainbow") {
    rainbowEffect();
  }
  else if (cmd == "warm") {
    warmLight();
  }
  else if (cmd == "cold") {
    coldLight();
  }
  else if (cmd == "close") {
    turnOff();
  }
  else if (cmd == "heart") {
    heartEffect();
  }
  else {
    // 如果收到未知命令
    turnOff();
  }
}

// 彩虹灯
void rainbowEffect() {
  static uint8_t hue = 0; //色调值 hue 是 0~255 的环形值，代表 HSV 色彩模型中的色相角度。

  while (true) {
    // 检查 mySerial 是否收到"打断"指令
    if (mySerial.available()) {
      String interruptCmd = mySerial.readString();
      interruptCmd.trim();

      if (interruptCmd == "close" || interruptCmd == "warm" || interruptCmd == "cold" || interruptCmd == "heart") {
        handleCommand(interruptCmd);  // 执行其他指令
        break; // 跳出彩虹效果，回到主 loop
      }
    }

    for (int i = 0; i < NUM_LEDS; i++) { // 正向扫描灯珠（彩虹推进）
      leds[i] = CHSV(hue++, 255, 255); // 色调渐变，即在颜色轮上生成一个鲜艳纯色（红→橙→绿→蓝→紫→红...）
      FastLED.show();
      fadeall(); // 所有灯珠略微变暗
      delay(10);
    }

    for (int i = NUM_LEDS - 1; i >= 0; i--) { // 反向扫描灯珠（回扫）
      leds[i] = CHSV(hue++, 255, 255);
      FastLED.show();
      fadeall();
      delay(10);
    }

    delay(100); // 循环之间的缓冲延时
  }
}

// 淡出函数
void fadeall() {
  for (int i = 0; i < NUM_LEDS; i++) {
    leds[i].nscale8(250); // 渐暗
  }
}

// 暖光
void warmLight() {
  fill_solid(leds, NUM_LEDS, CRGB(255, 150, 50));
  FastLED.show();
}

// 冷光
void coldLight() {
  fill_solid(leds, NUM_LEDS, CRGB(150, 200, 255));
  FastLED.show();
}

// 关闭灯效
void turnOff() {
  fill_solid(leds, NUM_LEDS, CRGB::Black);
  FastLED.show();
}

// 爱心效果
void heartEffect() {
  bool on = true;
  while (true) {
    // 检查是否接收到指令来停止闪烁
    if (mySerial.available()) {
      String interruptCmd = mySerial.readString();
      interruptCmd.trim();

      if (interruptCmd == "close" || interruptCmd == "warm" || interruptCmd == "cold" || interruptCmd == "rainbow") {
        handleCommand(interruptCmd);  // 执行其他指令
        break; // 跳出爱心效果，回到主 loop
      }
    }

    // 先清除所有 LED
    fill_solid(leds, NUM_LEDS, CRGB::Black); // 所有 LED 关闭

    // 绘制红色实心爱心
    for (int i = 0; i < sizeof(heart) / sizeof(heart[0]); i++) {
      leds[heart[i]] = on ? CRGB::Red : CRGB::Black;
    }
    FastLED.show();
    delay(500);  // 每次切换后延时，控制闪烁速度
    on = !on; // 翻转灯光状态，实心红色和关闭
  }
}`

const asrproCode = `#include "asr.h"
extern "C"{ void * __dso_handle = 0 ;}
#include "setup.h"
#include "myLib/asr_event.h"
#include "HardwareSerial.h"

uint32_t snid;
void ASR_CODE();

//{speak:阿文-温和男声,vol:10,speed:10,platform:haohaodada}
//{playid:10001,voice:}
//{playid:10002,voice:}

/*描述该功能...
*/
void ASR_CODE(){
  switch (snid) {
   case 1:
    Serial.print("rainbow");
    break;
   case 2:
    Serial.print("warm");
    break;
   case 3:
    Serial.print("cold");
    break;
   case 4:
    Serial.print("heart");
    break;
   case 5:
    Serial.print("close");
    break;
  }

}

void hardware_init(){
  setPinFun(13,SECOND_FUNCTION);
  setPinFun(14,SECOND_FUNCTION);
  Serial.begin(9600);
  vTaskDelete(NULL);
}

void setup()
{
  set_wakeup_forever();
  //{ID:0,keyword:"命令词",ASR:"罗纳尔多",ASRTO:"hello Imran"}
  //{ID:1,keyword:"命令词",ASR:"打开彩虹灯",ASRTO:"彩虹灯打开了"}
  //{ID:2,keyword:"命令词",ASR:"暖光",ASRTO:"暖光打开了"}
  //{ID:3,keyword:"命令词",ASR:"冷光",ASRTO:"冷光打开了"}
  //{ID:4,keyword:"命令词",ASR:"爱心",ASRTO:"给你爱心"}
  //{ID:5,keyword:"命令词",ASR:"关灯",ASRTO:"siuuu"}
  dpmu_set_io_pull(pinToFun[13],DPMU_IO_PULL_DISABLE);
  dpmu_set_io_open_drain(pinToFun[13],ENABLE );
  dpmu_set_io_pull(pinToFun[14],DPMU_IO_PULL_DISABLE);
}`

// 新增代码数据
const nlpModelCode = `import torch
import torch.nn as nn
from transformers import BertTokenizer, BertModel
import numpy as np

class NLPSentimentModel(nn.Module):
    def __init__(self, n_classes=3):
        super(NLPSentimentModel, self).__init__()
        self.bert = BertModel.from_pretrained('bert-base-chinese')
        self.dropout = nn.Dropout(0.3)
        self.classifier = nn.Linear(self.bert.config.hidden_size, n_classes)

    def forward(self, input_ids, attention_mask):
        outputs = self.bert(input_ids=input_ids, attention_mask=attention_mask)
        pooled_output = outputs.pooler_output
        output = self.dropout(pooled_output)
        return self.classifier(output)

# 数据预处理
def preprocess_text(text, tokenizer, max_length=128):
    encoding = tokenizer.encode_plus(
        text,
        add_special_tokens=True,
        max_length=max_length,
        return_token_type_ids=False,
        padding='max_length',
        truncation=True,
        return_attention_mask=True,
        return_tensors='pt'
    )
    return encoding

# 模型训练
def train_model(model, data_loader, optimizer, criterion, device):
    model.train()
    total_loss = 0

    for batch in data_loader:
        input_ids = batch['input_ids'].to(device)
        attention_mask = batch['attention_mask'].to(device)
        targets = batch['targets'].to(device)

        optimizer.zero_grad()
        outputs = model(input_ids, attention_mask)
        loss = criterion(outputs, targets)
        loss.backward()
        optimizer.step()

        total_loss += loss.item()

    return total_loss / len(data_loader)`

const reactWebAppCode = `import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

// 主应用组件
const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const response = await axios.get('/api/user/profile', {
          headers: { Authorization: \`Bearer \${token}\` }
        });
        setUser(response.data);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="app">
        <Header user={user} setUser={setUser} />
        <main className="main-content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/profile" component={Profile} />
            <Route path="/login" component={Login} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

// 仪表板组件
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    dateRange: '7days'
  });

  useEffect(() => {
    fetchDashboardData();
  }, [filters]);

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get('/api/dashboard', {
        params: filters
      });
      setData(response.data);
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>数据仪表板</h1>
        <FilterControls filters={filters} setFilters={setFilters} />
      </div>
      <div className="dashboard-grid">
        <MetricCard title="总用户数" value={data.totalUsers} />
        <MetricCard title="活跃用户" value={data.activeUsers} />
        <MetricCard title="转化率" value={\`\${data.conversionRate}%\`} />
        <ChartComponent data={data.chartData} />
      </div>
    </div>
  );
};

export default App;`

const dataAnalysisCode = `import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
import plotly.express as px

# 数据加载和预处理
def load_and_preprocess_data(file_path):
    # 读取数据
    df = pd.read_csv(file_path)

    # 数据清理
    df = df.dropna()
    df = df.drop_duplicates()

    # 特征工程
    df['date'] = pd.to_datetime(df['date'])
    df['month'] = df['date'].dt.month
    df['quarter'] = df['date'].dt.quarter
    df['weekday'] = df['date'].dt.weekday

    return df

# 聚类分析
def perform_clustering(df, features, n_clusters=5):
    # 标准化数据
    scaler = StandardScaler()
    scaled_features = scaler.fit_transform(df[features])

    # K-means聚类
    kmeans = KMeans(n_clusters=n_clusters, random_state=42)
    clusters = kmeans.fit_predict(scaled_features)

    df['cluster'] = clusters

    # PCA降维可视化
    pca = PCA(n_components=2)
    pca_result = pca.fit_transform(scaled_features)

    # 创建可视化
    fig = px.scatter(
        x=pca_result[:, 0],
        y=pca_result[:, 1],
        color=clusters,
        title='客户分群分析结果',
        labels={'x': 'PC1', 'y': 'PC2'}
    )

    return df, fig

# 时间序列分析
def time_series_analysis(df, date_col, value_col):
    # 按日期聚合
    daily_data = df.groupby(date_col)[value_col].sum().reset_index()

    # 计算移动平均
    daily_data['MA_7'] = daily_data[value_col].rolling(window=7).mean()
    daily_data['MA_30'] = daily_data[value_col].rolling(window=30).mean()

    # 可视化
    plt.figure(figsize=(12, 6))
    plt.plot(daily_data[date_col], daily_data[value_col], label='原始数据', alpha=0.7)
    plt.plot(daily_data[date_col], daily_data['MA_7'], label='7日移动平均', linewidth=2)
    plt.plot(daily_data[date_col], daily_data['MA_30'], label='30日移动平均', linewidth=2)
    plt.title('时间序列趋势分析')
    plt.xlabel('日期')
    plt.ylabel('数值')
    plt.legend()
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()

    return daily_data

# 统计分析报告
def generate_statistical_report(df):
    report = {
        'basic_stats': df.describe(),
        'correlation_matrix': df.corr(),
        'missing_values': df.isnull().sum(),
        'data_types': df.dtypes
    }

    # 相关性热力图
    plt.figure(figsize=(10, 8))
    sns.heatmap(report['correlation_matrix'], annot=True, cmap='coolwarm', center=0)
    plt.title('特征相关性热力图')
    plt.tight_layout()
    plt.show()

    return report`

// 获取分类名称
const getCategoryName = () => {
  const categoryMap = {
    'all': '全部',
    'completed': '已完成',
    'ongoing': '进行中'
  }
  return categoryMap[selectedCategory.value] || '全部'
}

// 方法
const selectProject = (projectId) => {
  selectedProject.value = projectId
  // 平滑滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

// 图片模态框方法
const openImageModal = (src, title) => {
  imageModal.value = {
    isOpen: true,
    src,
    title
  }
  document.body.style.overflow = 'hidden'
}

const closeImageModal = () => {
  imageModal.value.isOpen = false
  document.body.style.overflow = 'auto'
}

// 触发项目卡片动画
const triggerCardAnimations = () => {
  nextTick(() => {
    const cards = document.querySelectorAll('.project-card')
    if (cards.length === 0) return

    cards.forEach((card, index) => {
      // 先确保没有动画类
      card.classList.remove('animate-in')
      // 延迟添加动画类
      setTimeout(() => {
        if (card.isConnected) { // 确保元素还在DOM中
          card.classList.add('animate-in')
        }
      }, index * 100)
    })
  })
}

// 平滑滚动到指定区域
const scrollToSection = (sectionId, event) => {
  event.preventDefault()

  const targetElement = document.getElementById(sectionId)
  if (targetElement) {
    // 更新当前选中的节
    currentSection.value = sectionId

    // 使用scrollIntoView，但添加适当的偏移
    const yOffset = -100 // 偏移量，确保不被导航栏遮挡
    const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset

    // 平滑滚动到目标位置
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    })

    // 立即移除其他高亮
    document.querySelectorAll('.section-highlight').forEach(el => {
      el.classList.remove('section-highlight')
    })

    // 延迟添加高亮效果，确保滚动开始后再高亮
    setTimeout(() => {
      targetElement.classList.add('section-highlight')
      // 2秒后移除高亮
      setTimeout(() => {
        targetElement.classList.remove('section-highlight')
      }, 2000)
    }, 300)
  }
}

// 返回项目概览的统一方法
const goBackToOverview = async () => {
  selectedProject.value = null
  selectedCategory.value = 'all' // 重置分类选择
  currentSection.value = '' // 重置当前节

  // 等待DOM更新后重新触发动画
  await nextTick()

  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' })

  // 短暂延迟后重新触发卡片动画
  setTimeout(() => {
    triggerCardAnimations()
  }, 50)
}

// SEO配置
useHead({
  title: '项目经历 - 理工科学生个人网站',
  meta: [
    {
      name: 'description',
      content: '展示理工科学生的技术项目发展历程，包括NUS SOC SWS 2024获奖项目、电子设计竞赛、智能硬件开发等多个项目经历'
    },
    {
      name: 'keywords',
      content: '项目展示,NUS SOC SWS,UI/UX设计,电子设计竞赛,智能硬件,移动应用开发,技术历程'
    }
  ]
})

// 监听分类变化，重新触发动画
watch(selectedCategory, () => {
  triggerCardAnimations()
})

// 滚动监听函数，自动更新当前激活的导航项
const updateCurrentSection = () => {
  if (!selectedProject.value) return

  const sections = [
    // NUS
    'team-info', 'team-work', 'individual-work', 'achievements', 'project-summary',
    // 盟升杯
    'project-background', 'project-overview', 'system-design',
    'software-algorithm', 'hardware-implementation', 'testing-results', 'project-summary',
    // LED
    'course-info', 'project-intro', 'hardware-design', 'led-software-design', 'led-function-demo', 'led-extended-thinking', 'led-achievements',
    // Yigui / 依柜
    'team-info', 'project-background', 'ui-design', 'model-assets', 'system-architecture', 'algorithm-ml', 'backend-api', 'demo-video', 'achievements', 'project-summary'
  ]

  let activeSection = ''

  // 从上到下遍历，找到第一个进入视口上半部分的section
  for (const sectionId of sections) {
    const element = document.getElementById(sectionId)
    if (element) {
      const rect = element.getBoundingClientRect()
      // 如果section的顶部在视口上半部分以上，且底部还在视口中
      if (rect.top <= 200 && rect.bottom > 200) {
        activeSection = sectionId
      }
    }
  }

  if (activeSection && activeSection !== currentSection.value) {
    currentSection.value = activeSection
  }
}

// 页面进入动画
onMounted(() => {
  triggerCardAnimations()

  // ESC键关闭模态框
  const handleKeydown = (e) => {
    if (e.key === 'Escape' && imageModal.value.isOpen) {
      closeImageModal()
    }
  }
  document.addEventListener('keydown', handleKeydown)

  // 添加滚动监听
  const handleScroll = () => {
    updateCurrentSection()
  }
  window.addEventListener('scroll', handleScroll)

  // 组件卸载时清理事件监听器
  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('scroll', handleScroll)
    document.body.style.overflow = 'auto'
  })
})
</script>

<style scoped>
/* 页面整体样式 */
.projects-page {
  @apply min-h-screen bg-white;
}

.main-content {
  @apply max-w-6xl mx-auto px-8 py-8;
}

/* 项目概览网格 */
.projects-overview {
  @apply mb-16 pt-0;
}

/* 分类选择器 */
.category-selector {
  @apply mb-6 flex justify-center;
}

.category-buttons {
  @apply flex bg-gray-100 rounded-lg p-1 gap-1;
}

.category-btn {
  @apply px-6 py-2 rounded-md font-medium transition-all duration-200;
  @apply text-gray-600 hover:text-gray-800;
}

.category-btn.active {
  @apply bg-white text-primary-orange shadow-sm font-semibold;
}

.category-btn:hover:not(.active) {
  @apply bg-gray-200;
}

/* 空状态样式 */
.empty-state {
  @apply text-center py-16;
}

.empty-icon {
  @apply text-6xl mb-6;
}

.empty-title {
  @apply text-2xl font-clean font-semibold text-gray-800 mb-4;
}

.empty-description {
  @apply text-gray-600 max-w-md mx-auto;
}

.projects-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8;
}

/* 项目卡片样式 */
.project-card {
  @apply bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden cursor-pointer;
  @apply transition-all duration-300 hover:shadow-xl hover:border-primary-orange hover:-translate-y-2;
  @apply opacity-0 translate-y-4;
}

.project-card.animate-in {
  @apply opacity-100 translate-y-0;
}

/* 卡片图片区域 */
.card-image {
  @apply relative h-48 overflow-hidden;
}

.card-cover {
  @apply w-full h-full object-cover transition-transform duration-300;
}

.project-card:hover .card-cover {
  @apply scale-110;
}

.placeholder-image {
  @apply w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex flex-col items-center justify-center;
}

.placeholder-icon {
  @apply text-4xl mb-2;
}

.placeholder-text {
  @apply text-gray-500 font-medium;
}

.card-overlay {
  @apply absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300;
}

.project-card:hover .card-overlay {
  @apply bg-opacity-70;
}

.view-details {
  @apply text-white font-medium opacity-0 transform translate-y-4 transition-all duration-300;
}

.project-card:hover .view-details {
  @apply opacity-100 translate-y-0;
}

/* 卡片内容 */
.card-content {
  @apply p-6;
}

.card-header {
  @apply flex justify-between items-start mb-4;
}

.card-title {
  @apply text-xl font-clean font-semibold text-black flex-1 pr-4;
}

.card-year {
  @apply text-primary-orange font-medium;
}

.card-description {
  @apply text-gray-700 leading-relaxed mb-4;
}

.card-badges {
  @apply flex flex-wrap gap-2 mb-4;
}

.badge {
  @apply px-3 py-1 rounded-full text-sm font-medium;
}

.badge-primary {
  @apply bg-primary-orange text-white;
}

.badge-secondary {
  @apply bg-blue-100 text-blue-700;
}

.badge-accent {
  @apply bg-purple-100 text-purple-700;
}

.badge-success {
  @apply bg-green-100 text-green-700;
}

.badge-info {
  @apply bg-cyan-100 text-cyan-700;
}

.card-stats {
  @apply flex gap-4;
}

.stat {
  @apply text-center;
}

.stat-value {
  @apply block text-lg font-bold text-primary-orange;
}

.stat-label {
  @apply text-xs text-gray-600;
}

.card-status {
  @apply mt-4;
}

.status-coming {
  @apply text-sm text-gray-500 italic;
}

/* 返回按钮 */
.back-button-container {
  @apply mb-8;
}

.back-button {
  @apply inline-flex items-center gap-2 text-primary-orange hover:text-orange-600 font-medium transition-colors;
}

.back-icon {
  @apply w-4 h-4;
}

/* 即将到来页面 */
.coming-soon {
  @apply flex items-center justify-center min-h-96;
}

.coming-soon-content {
  @apply text-center;
}

.coming-soon-icon {
  @apply text-6xl mb-6;
}

.coming-soon-title {
  @apply text-3xl font-signature text-black mb-4;
}

.coming-soon-text {
  @apply text-gray-600 mb-8 text-lg;
}

.back-overview-btn {
  @apply bg-primary-orange text-white px-6 py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors;
}

/* 项目详情页样式 - 重用之前的样式 */
.project-detail .hero-section {
  @apply mb-16;
}

/* 通用section样式 */
.section {
  @apply mb-16;
}

/* 职责分工样式 */
.responsibilities-content {
  @apply max-w-2xl;
}

.role-list {
  @apply space-y-2 mt-4;
}

.role-list li {
  @apply text-gray-700 pl-4 relative;
}

.role-list li::before {
  content: "•";
  @apply absolute left-0 text-primary-orange font-bold;
}

/* 作品展示样式 */
.work-content {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8;
}

.work-description {
  @apply space-y-4;
}

.work-gallery {
  @apply space-y-4;
}

.individual-gallery {
  @apply space-y-4;
}

.individual-image {
  @apply w-full h-auto rounded-lg shadow-lg;
}

.hero-content {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-12 items-center;
}

.hero-text {
  @apply space-y-6;
}

.project-date {
  @apply text-primary-orange font-medium text-lg;
}

.hero-title {
  @apply text-5xl md:text-6xl font-signature text-black mb-2;
}

.hero-subtitle {
  @apply text-2xl md:text-3xl font-clean font-light text-gray-700;
}

.hero-description {
  @apply text-lg text-gray-600 leading-relaxed;
}

.hero-badges {
  @apply flex flex-wrap gap-3 mb-6;
}

/* 悬浮导航栏 */
.floating-nav {
  @apply fixed left-6 top-1/2 transform -translate-y-1/2 z-50;
  @apply w-32 max-h-[80vh] overflow-y-auto;
  animation: slideInLeft 0.3s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-100%) translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateX(0) translateY(-50%);
  }
}

.floating-nav-content {
  @apply bg-white rounded-lg shadow-xl border border-gray-200 p-3;
  @apply backdrop-blur-sm bg-white/95;
}

.floating-nav-title {
  @apply text-sm font-semibold text-gray-800 mb-2 pb-2 border-b border-gray-100 text-center;
}

.floating-nav-items {
  @apply space-y-1;
}

.floating-nav-card {
  @apply block w-full px-2 py-2 text-center text-gray-600 rounded-md font-medium text-xs;
  @apply transition-all duration-200 hover:bg-gray-50 hover:text-gray-800;
  @apply border border-transparent hover:border-gray-200;
  @apply hover:transform hover:scale-105;
  @apply leading-tight;
}

.floating-nav-card.active {
  @apply bg-primary-orange text-white border-primary-orange shadow-sm font-semibold;
  @apply transform scale-105;
}

.floating-nav-card:hover:not(.active) {
  @apply bg-gray-100 border-gray-200;
}

.hero-image {
  @apply relative cursor-pointer;
}



/* 团队信息样式 */
.team-info-content {
  @apply mt-6;
}

.team-info-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.info-card {
  @apply bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow;
}

.info-header {
  @apply mb-4;
}

.info-header h4 {
  @apply text-lg font-semibold text-gray-800 m-0;
}

.info-content {
  @apply text-gray-600 leading-relaxed;
}

.info-content p {
  @apply m-0 mb-2;
}

.info-content p:last-child {
  @apply mb-0;
}

.team-members-list {
  @apply space-y-2 m-0 p-0;
}

.team-members-list li {
  @apply text-gray-600 list-none pl-0;
}

.team-members-list li::before {
  content: "•";
  @apply mr-2 text-primary-orange;
}

.leader-badge {
  @apply inline-block px-2 py-1 text-xs font-medium text-white bg-amber-600 rounded ml-2;
}

.cover-image {
  @apply w-full h-auto rounded-lg shadow-lg object-contain transition-transform hover:scale-105;
}

.cover-video {
  @apply w-full h-auto rounded-lg shadow-lg object-contain transition-transform hover:scale-105;
}

.clickable-image {
  @apply cursor-pointer;
}

.image-overlay {
  @apply absolute inset-0 bg-black bg-opacity-0 flex items-center justify-center transition-all duration-300 rounded-lg;
}

.hero-image:hover .image-overlay {
  @apply bg-opacity-30;
}

.overlay-text {
  @apply text-white font-medium opacity-0 transition-opacity;
}

.hero-image:hover .overlay-text {
  @apply opacity-100;
}

/* 通用section样式 */
.project-detail > div {
  @apply mb-20;
}

.section-header {
  @apply text-center mb-12;
}

.section-title {
  @apply text-4xl font-signature text-black mb-4;
}

.section-subtitle {
  @apply text-lg text-gray-600 max-w-2xl mx-auto;
}

/* 概览区域 */
.overview-content {
  @apply grid grid-cols-1 lg:grid-cols-3 gap-8 items-start;
}

.overview-text {
  @apply lg:col-span-2 space-y-4 text-gray-700 leading-relaxed;
}

.overview-stats {
  @apply grid grid-cols-2 gap-4;
}

.stat-item {
  @apply text-center p-6 bg-gray-50 rounded-lg;
}

.stat-number {
  @apply block text-3xl font-bold text-primary-orange mb-2;
}

.stat-label {
  @apply text-sm text-gray-600;
}

/* 团队项目区域 */
.team-project-section {
  @apply bg-gray-50 -mx-8 px-8 py-16 rounded-lg;
}

.project-showcase {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-12;
}

.project-description h4 {
  @apply text-2xl font-clean font-semibold text-black mb-4;
}

.project-description p {
  @apply text-gray-700 leading-relaxed mb-6;
}

.my-role {
  @apply mb-6;
}

.my-role h5 {
  @apply text-lg font-semibold text-black mb-3;
}

.my-role ul {
  @apply space-y-2;
}

.my-role li {
  @apply text-gray-700 flex items-start;
}

.my-role li::before {
  content: "•";
  @apply text-primary-orange font-bold mr-3 mt-1;
}

.prototype-links {
  @apply space-y-2;
}

.prototype-link {
  @apply inline-flex items-center gap-2 bg-primary-orange text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors;
}

.link-icon {
  @apply w-4 h-4;
}

.access-note {
  @apply text-sm text-gray-500 italic;
}

/* 画廊样式 */
.gallery-grid {
  @apply grid grid-cols-2 md:grid-cols-3 gap-4;
}

.gallery-item {
  @apply relative;
}

.gallery-image {
  @apply w-full h-48 object-contain rounded-lg transition-transform hover:scale-105 bg-gray-50;
}

.gallery-caption {
  @apply absolute bottom-2 left-2 text-xs text-white bg-black bg-opacity-70 px-2 py-1 rounded;
}

/* 个人作品区域 */
.individual-showcase {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-12 items-start;
}

.individual-gallery {
  @apply space-y-4;
}

.main-preview {
  @apply relative;
}

.main-preview-image {
  @apply w-full h-auto rounded-lg shadow-lg;
}

.preview-thumbnail {
  @apply relative;
}

.thumbnail-image {
  @apply w-full h-32 object-cover rounded-lg;
}

.learning-stats h5 {
  @apply text-lg font-semibold text-black mb-3;
}

.stats-grid {
  @apply grid grid-cols-1 gap-3 mb-6;
}

.stat-box {
  @apply flex justify-between items-center p-3 bg-gray-100 rounded-lg;
}

.stat-label {
  @apply text-gray-600;
}

.stat-value {
  @apply font-semibold text-gray-800;
}

/* 学习收获区域 */
.learning-cards {
  @apply grid grid-cols-1 md:grid-cols-3 gap-8;
}

.learning-card {
  @apply bg-white p-8 rounded-lg shadow-lg border border-gray-100;
}

.card-icon {
  @apply text-4xl mb-4 block;
}

.learning-card h4 {
  @apply text-xl font-semibold text-black mb-4;
}

.learning-card ul {
  @apply space-y-2;
}

.learning-card li {
  @apply text-gray-700 text-sm;
}

.learning-card li::before {
  content: "✓";
  @apply text-green-500 font-medium mr-2;
}

/* 成就区域 */
.achievements-content {
  @apply space-y-8;
}

.achievement-summary {
  /* @apply grid grid-cols-1 md:grid-cols-2 gap-6; */
  @apply space-y-4 text-gray-700 leading-relaxed;
}

.result-item {
  @apply bg-gray-50 p-6 rounded-lg;
}

.result-item h4 {
  @apply text-lg font-semibold text-black mb-2;
}

.result-item p {
  @apply text-gray-700;
}

/* PDF证书链接 */
.certificates {
  @apply bg-white p-6 rounded-lg border border-gray-200;
}

.certificates h4 {
  @apply text-lg font-semibold text-black mb-4;
}

.pdf-links {
  @apply flex flex-wrap gap-4;
}

.pdf-link {
  @apply inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors;
}

.pdf-link::before {
  content: "📄";
}

/* 证书图片容器 */
.award-image-container {
  @apply mt-4 text-center;
}

.award-certificate-image {
  @apply w-full max-w-md h-auto rounded-lg shadow-lg bg-gray-50 transition-transform hover:scale-105 cursor-pointer mx-auto;
}

/* 下载按钮 */
.download-button {
  @apply inline-flex items-center gap-2 bg-primary-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-medium transition-colors;
}

.download-icon {
  @apply w-5 h-5;
}

/* 项目按钮容器 */
.project-buttons {
  @apply flex flex-col sm:flex-row gap-4 justify-center items-center;
}

/* 3D建模视频部分 */
.modeling-description {
  @apply text-gray-700 leading-relaxed mb-6;
}

.modeling-video-section {
  @apply flex justify-center;
}

/* 项目照片 */
.project-photos {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 mt-8;
}

.photo-item {
  @apply cursor-pointer relative;
}

/* 团队作品画廊 */
.team-gallery-layout {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8;
}

.prototype-section {
  @apply flex items-center justify-center;
}

.prototype-image {
  @apply w-full h-80 object-contain rounded-lg bg-gray-50 transition-transform hover:scale-105;
}

.screenshots-section {
  @apply grid grid-cols-2 gap-4;
}

.team-gallery-image {
  @apply w-full h-36 object-contain rounded-lg bg-gray-50 transition-transform hover:scale-105;
}

/* 个人作品画廊 */
.individual-gallery-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

/* 内联PDF按钮 */
.inline-pdf {
  @apply mt-3 inline-block;
}

/* 画廊项目通用样式 */
.gallery-item {
  @apply cursor-pointer relative overflow-hidden rounded-lg bg-gray-50;
}

.gallery-item:hover .gallery-caption {
  @apply opacity-100;
}

.gallery-caption {
  @apply absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-2 text-sm text-center opacity-0 transition-opacity;
}

/* 图片模态框 */
.image-modal-overlay {
  @apply fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4;
}

.image-modal-content {
  @apply relative max-w-6xl max-h-full flex flex-col items-center;
}

.modal-close-btn {
  @apply absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10;
  @apply w-8 h-8 flex items-center justify-center;
}

.close-icon {
  @apply w-6 h-6;
}

.modal-image {
  @apply max-w-full max-h-[80vh] object-contain;
}

.modal-title {
  @apply text-white text-center mt-4 text-lg font-medium;
}

.achievement-photo {
  @apply w-full h-64 object-contain rounded-lg shadow-lg bg-gray-50;
}

.achievement-highlight h4 {
  @apply text-xl font-semibold text-black mb-4;
}

.achievement-highlight ul {
  @apply space-y-3 mb-8;
}

.achievement-highlight li {
  @apply text-gray-700;
}

.achievement-highlight li::before {
  content: "🏆";
  @apply mr-3;
}

.gratitude h4 {
  @apply text-xl font-semibold text-black mb-4;
}

.gratitude p {
  @apply text-gray-700 leading-relaxed;
}

/* 项目总结区域 - 统一样式 */
.project-summary-section {
  @apply mb-16;
}

.summary-content-wrapper {
  @apply max-w-4xl mx-auto;
}

.summary-description {
  @apply text-lg leading-relaxed text-gray-700 text-center;
}

/* 返回按钮区域 - 独立在底部 */
.back-to-overview-section {
  @apply text-center py-12 border-t border-gray-200 mt-16;
}

.back-overview-button {
  @apply inline-flex items-center gap-3 bg-primary-orange text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-200;
  @apply hover:shadow-lg active:scale-95;
}

.back-icon {
  @apply w-5 h-5;
}

/* 盟升杯项目特有样式 */
.technical-highlights {
  @apply mt-6;
}

.technical-highlights h4 {
  @apply text-lg font-semibold text-gray-900 mb-3;
}

.technical-highlights ul {
  @apply space-y-2;
}

.technical-highlights li {
  @apply text-gray-700 flex items-start;
}

.technical-highlights li::before {
  content: "✓";
  @apply text-green-500 font-medium mr-2 mt-1;
}

.system-modules {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6 mt-6;
}

.module-item {
  @apply bg-gray-50 p-4 rounded-lg;
}

.module-item h5 {
  @apply text-lg font-semibold text-gray-900 mb-2;
}

.module-item p {
  @apply text-gray-600 text-sm leading-relaxed;
}

.hardware-content {
  @apply space-y-6;
}

.hardware-description {
  @apply text-gray-700 leading-relaxed;
}

.hardware-gallery {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.hardware-image {
  @apply w-full h-64 object-contain rounded-lg bg-gray-50 transition-transform hover:scale-105;
}

.architecture-image {
  @apply w-full h-80 object-contain rounded-lg bg-gray-50 transition-transform hover:scale-105;
}

.algorithm-content {
  @apply space-y-6;
}

.algorithm-description {
  @apply text-gray-700 leading-relaxed mb-6;
}

.simulation-results {
  @apply mt-8;
}

.simulation-results h4 {
  @apply text-lg font-semibold text-gray-900 mb-4;
}



.simulation-image {
  @apply w-full h-64 object-contain rounded-lg bg-gray-50 transition-transform hover:scale-105;
}

.testing-content {
  @apply space-y-8;
}

.testing-description {
  @apply text-gray-700 leading-relaxed;
}

/* 调试视频部分样式 */
.debug-videos-section {
  @apply bg-gray-50 p-6 rounded-lg;
}

.debug-videos-section h4 {
  @apply text-lg font-semibold text-gray-900 mb-4;
}

.videos-description {
  @apply text-gray-700 leading-relaxed mb-6;
}

.videos-gallery {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-6;
}

.video-item {
  @apply relative max-w-4xl mx-auto;
}

.led-demo-video-section .video-item {
  @apply relative max-w-4xl mx-auto;
}

.video-player {
  width: 100% !important;
  height: auto !important;
  max-height: 800px !important;
  border-radius: 8px !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1) !important;
  background-color: #000 !important;
  display: block !important;
  visibility: visible !important;
  opacity: 1 !important;
  min-height: 400px !important;
  aspect-ratio: 16/9 !important;
  margin: 0 auto !important;
}

.video-caption {
  @apply text-center text-sm text-gray-600 mt-3 font-medium;
}

/* 竞赛结果样式 */
.competition-results {
  @apply mt-8;
}

.result-center {
  @apply text-center bg-gray-50 p-8 rounded-lg;
}

.result-center h4 {
  @apply text-xl font-semibold text-gray-900 mb-4;
}

.result-center p {
  @apply text-gray-700 mb-6 text-lg;
}

.github-section {
  @apply bg-gray-50 -mx-8 px-8 py-12 rounded-lg mb-16;
}

.github-content {
  @apply flex flex-col md:flex-row items-start md:items-center justify-between gap-6;
}

.github-info {
  @apply flex-1;
}

.github-info h4 {
  @apply text-xl font-semibold text-gray-900 mb-3;
}

.github-info p {
  @apply text-gray-600 leading-relaxed;
}

.github-repo-btn {
  @apply inline-flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors;
}

.github-icon {
  @apply w-5 h-5;
}

/* 项目背景样式 - 优化布局 */
.background-content {
  @apply space-y-8;
}

.background-main-content {
  @apply mb-8;
}

.background-description {
  @apply text-gray-700 leading-relaxed;
}

.background-description p {
  @apply mb-6 text-base;
}

/* 创新亮点网格 */
.innovation-highlights {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 mt-8;
}

.highlight-card {
  @apply bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow;
}

.highlight-icon {
  @apply text-3xl mb-3 block;
}

.highlight-card h5 {
  @apply text-lg font-semibold text-gray-900 mb-2;
}

.highlight-card p {
  @apply text-sm text-gray-600 leading-relaxed;
}

/* 研究分析网格 */
.research-analysis {
  @apply mt-8;
}

.analysis-grid {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8;
}

.analysis-card {
  @apply bg-gray-50 border border-gray-200 rounded-xl p-6;
}

.analysis-card h5 {
  @apply text-lg font-semibold text-gray-900 mb-4;
}

.analysis-image {
  @apply w-full rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow;
}

/* Figma 原型展示样式 */
.figma-showcase {
  @apply mt-8 mb-8;
}

.figma-image-container {
  @apply mb-6;
}

.figma-highlights {
  @apply bg-gray-50 rounded-xl p-6;
}

.figma-feature {
  @apply text-center;
}

.figma-feature h6 {
  @apply text-base font-semibold text-gray-900 mb-2;
}

.figma-feature p {
  @apply text-sm text-gray-600 leading-relaxed;
}

.task-requirements {
  @apply mt-6;
}

.task-requirements h4 {
  @apply text-lg font-semibold text-gray-900 mb-4;
}

.requirements-list {
  @apply space-y-3 text-gray-700;
}

.requirements-list li {
  @apply leading-relaxed;
}

.requirements-list strong {
  @apply text-gray-900;
}

.requirements-docs {
  @apply mt-6;
}

.requirements-docs h4 {
  @apply text-lg font-semibold text-gray-900 mb-3;
}

/* 棕色项目文档按钮 */
.project-doc-button {
  @apply inline-flex items-center gap-2 bg-primary-orange text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors;
}

/* 文档按钮容器 */
.document-buttons {
  @apply flex flex-wrap gap-4 justify-center mt-4;
}

/* 大尺寸证书容器和图片 */
.award-image-container-large {
  @apply flex flex-col items-center space-y-4 mt-6;
}

.award-certificate-image-large {
  @apply w-full max-w-3xl h-auto rounded-lg shadow-lg bg-gray-50 transition-transform hover:scale-105 cursor-pointer;
}

/* 居中内容布局 - 用于文档下载和证书展示 */
.center-content {
  @apply max-w-4xl mx-auto;
}

.center-description {
  @apply text-center space-y-4;
}

/* 测量区域图片优化 */
.measurement-area-section {
  @apply flex justify-center;
}

.area-diagram-container {
  @apply max-w-2xl w-full;
}

.area-diagram-large {
  @apply w-full h-auto rounded-lg shadow-lg bg-gray-50 transition-transform hover:scale-105;
}

/* 解决方案与成果样式 */
.solution-content {
  @apply space-y-8;
}

.solution-description {
  @apply text-gray-700 leading-relaxed space-y-4;
}

/* 解决方案网格样式恢复 */
.solution-highlights {
  @apply mt-6;
}

.solution-highlights h4 {
  @apply text-lg font-semibold text-gray-900 mb-6;
}

.solution-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.solution-item {
  @apply bg-gray-50 p-4 rounded-lg text-center;
}

.solution-icon {
  @apply text-3xl mb-3;
}

.solution-item h5 {
  @apply text-lg font-semibold text-gray-900 mb-2;
}

.solution-item p {
  @apply text-gray-600 text-sm leading-relaxed;
}

/* Python分析结果样式 */
.python-analysis-results {
  @apply mt-8 bg-blue-50 p-6 rounded-lg;
}

.python-analysis-results h4 {
  @apply text-lg font-semibold text-gray-900 mb-4;
}

.analysis-description {
  @apply text-gray-700 leading-relaxed mb-4;
}

.analysis-result-image {
  @apply text-center;
}

.analysis-image {
  @apply w-full h-auto max-h-96 object-contain rounded-lg bg-white transition-transform hover:scale-105;
}

/* ASR代码图表样式 */
.asr-code-diagram {
  @apply mt-8 bg-green-50 p-6 rounded-lg;
}

.asr-code-diagram h4 {
  @apply text-lg font-semibold text-gray-900 mb-4;
}

.code-diagram-description {
  @apply text-gray-700 leading-relaxed mb-4;
}

.diagram-image {
  @apply text-center;
}

.code-diagram-image {
  @apply w-full h-auto max-h-96 object-contain rounded-lg bg-white transition-transform hover:scale-105;
}

/* 仿真结果图库 - 左右排布 */
.simulation-gallery {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 mb-6;
}

/* 硬件部分增强样式 */
.hardware-section {
  @apply mb-10 pb-8 border-b border-gray-100 last:border-b-0;
}

.hardware-section h4 {
  @apply text-xl font-semibold text-gray-900 mb-4;
}

.hardware-specs {
  @apply mt-4;
}

.hardware-specs ul {
  @apply space-y-2 text-gray-700;
}

.hardware-specs li {
  @apply flex items-start;
}

.hardware-specs li::before {
  content: "▪";
  @apply text-primary-orange font-bold mr-2 mt-1;
}

/* 硬件左右布局样式 */
.hardware-layout {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 items-center;
}

.hardware-layout.left-image {
  @apply grid-cols-1 lg:grid-cols-2;
}

.hardware-layout.right-image {
  @apply grid-cols-1 lg:grid-cols-2;
}

.hardware-image-container {
  @apply flex justify-center;
}

/* 在移动端，图片和文字都垂直排列 */
@media (max-width: 1024px) {
  .hardware-layout.right-image {
    @apply grid-cols-1;
  }

  .hardware-layout.right-image .hardware-specs {
    @apply order-2;
  }

  .hardware-layout.right-image .hardware-image-container {
    @apply order-1;
  }
}

.mic-array-layout {
  @apply mb-6;
}

.wiring-diagram {
  @apply w-full h-96 object-contain rounded-lg bg-gray-50 transition-transform hover:scale-105;
}

.mic-array-description {
  @apply space-y-4;
}

.array-specs {
  @apply grid grid-cols-2 md:grid-cols-4 gap-4 mt-4;
}

.spec-item {
  @apply bg-white p-3 rounded border border-gray-200 text-sm;
}

.spec-item strong {
  @apply text-gray-900;
}

.system-gallery {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 mb-6;
}

.system-image {
  @apply w-full h-64 object-contain rounded-lg bg-gray-50 transition-transform hover:scale-105;
}

.system-description {
  @apply text-gray-700 leading-relaxed;
}

/* 仿真结果增强样式 */
.simulation-description {
  @apply text-gray-700 leading-relaxed mb-6;
}

.simulation-analysis {
  @apply mt-6 bg-gray-50 p-6 rounded-lg;
}

.simulation-analysis h5 {
  @apply text-lg font-semibold text-gray-900 mb-3;
}

.simulation-analysis ul {
  @apply space-y-2 text-gray-700;
}

.simulation-analysis li {
  @apply flex items-start;
}

.simulation-analysis li::before {
  content: "✓";
  @apply text-green-500 font-medium mr-2 mt-1;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .floating-nav {
    @apply fixed bottom-4 left-4 right-4 top-auto transform-none w-auto max-h-none;
  }

  .floating-nav-content {
    @apply p-2;
  }

  .floating-nav-title {
    @apply text-xs mb-1 pb-1;
  }

  .floating-nav-items {
    @apply flex flex-wrap gap-1 space-y-0;
  }

  .floating-nav-card {
    @apply flex-1 text-center px-1 py-1 text-xs min-w-0;
    @apply leading-tight;
  }
}

@media (max-width: 768px) {
  .main-content {
    @apply px-4 py-12;
  }

  .floating-nav-items {
    @apply grid grid-cols-2 gap-1 space-y-0;
  }

  .floating-nav-card {
    @apply px-1 py-1 text-xs;
    @apply leading-tight;
    font-size: 10px;
  }

  .projects-grid {
    @apply grid-cols-1;
  }

  .hero-title {
    @apply text-4xl;
  }

  .hero-subtitle {
    @apply text-xl;
  }

  .section-title {
    @apply text-3xl;
  }

  .team-project-section {
    @apply -mx-4 px-4;
  }

  .github-section {
    @apply -mx-4 px-4;
  }

  .back-to-overview-section {
    @apply -mx-4 px-4;
  }

  .gallery-grid {
    @apply grid-cols-1;
  }

  .system-modules {
    @apply grid-cols-1;
  }

  .hardware-gallery {
    @apply grid-cols-1;
  }

  .videos-gallery {
    @apply grid-cols-1;
  }

  .area-diagram-container {
    @apply max-w-full;
  }

  .solution-grid {
    @apply grid-cols-1;
  }

  .hardware-layout {
    @apply grid-cols-1 gap-6;
  }

  /* 移动端团队画廊调整 */
  .team-gallery-layout {
    @apply grid-cols-1 gap-6;
  }

  .screenshots-section {
    @apply grid-cols-1 gap-4;
  }

  .team-gallery-image {
    @apply h-48;
  }

  .prototype-image {
    @apply h-64;
  }

  .simulation-gallery {
    @apply grid-cols-1 gap-4;
  }

  /* 移动端边栏导航优化 */
  .sidebar-nav {
    @apply grid grid-cols-2 gap-2;
  }

  .nav-card {
    @apply text-xs px-2 py-2;
  }
}

/* 动画效果 */
.project-card {
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

/* 章节高亮效果 */
.section-highlight {
  @apply relative;
  animation: sectionPulse 2s ease-out;
}

.section-highlight::before {
  content: '';
  @apply absolute inset-0 bg-primary-orange bg-opacity-5 rounded-lg pointer-events-none;
  animation: highlightFade 2s ease-out;
}

@keyframes sectionPulse {
  0% { transform: scale(1); }
  10% { transform: scale(1.01); }
  100% { transform: scale(1); }
}

@keyframes highlightFade {
  0% { opacity: 0; }
  20% { opacity: 1; }
  100% { opacity: 0; }
}

/* LED项目专用样式 - 与其他项目风格统一 */

/* 课设要求样式 - 优化布局 */
.course-info-content {
  @apply space-y-8;
}

.course-intro h4 {
  @apply text-xl font-semibold text-gray-800 mb-4;
}

.course-intro p {
  @apply text-gray-700 leading-relaxed mb-6;
}

/* 课设目标样式 */
.course-objectives {
  @apply bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100;
}

.course-objectives h4 {
  @apply text-xl font-semibold text-gray-800 mb-6 text-center;
}

.objectives-list {
  @apply space-y-4;
}

.objective-item {
  @apply flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200;
}

.objective-number {
  @apply flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg;
}

.objective-content {
  @apply flex-1;
}

.objective-content h5 {
  @apply font-semibold text-gray-800 mb-2 text-base;
}

.objective-content p {
  @apply text-gray-600 text-sm leading-relaxed;
}

.course-meta {
  @apply mt-6;
}

.meta-grid {
  @apply grid grid-cols-2 md:grid-cols-4 gap-4;
}

.meta-item {
  @apply bg-gray-50 p-4 rounded-lg text-center;
}

.meta-label {
  @apply text-gray-600 text-sm font-medium mb-2 block;
}

.meta-value {
  @apply text-gray-800 font-semibold;
}

/* 项目介绍样式 - 简洁布局 */
.intro-content {
  @apply space-y-6;
}

.project-overview {
  @apply text-gray-700 leading-relaxed mb-6;
}

.tech-highlights {
  @apply mt-6;
}

.highlight-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-4;
}

.highlight-item {
  @apply bg-gray-50 p-4 rounded-lg;
}

.highlight-item h5 {
  @apply font-semibold text-gray-800 mb-2;
}

.highlight-item p {
  @apply text-gray-600 text-sm;
}

/* 硬件设计样式 */
.hardware-content {
  @apply mt-6 space-y-8;
}

.hardware-description {
  @apply text-gray-700 leading-relaxed mb-6;
}

.architecture-section h4,
.hardware-modules h4,
.final-product h4 {
  @apply text-lg font-semibold text-gray-800 mb-4;
}

.modules-gallery {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6 mb-6;
}

.spec-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-4;
}

.spec-card {
  @apply bg-gray-50 p-4 rounded-lg border border-gray-200;
}

.spec-card h5 {
  @apply font-semibold text-gray-800 mb-3 m-0;
}

.spec-card ul {
  @apply space-y-1 m-0 p-0;
}

.spec-card li {
  @apply text-sm text-gray-600 list-none pl-0;
}

/* 功能演示样式 */
.system-performance h4 {
  @apply text-lg font-semibold text-gray-800 mb-4;
}

.performance-metrics {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4;
}

.metric-item {
  @apply bg-gray-50 p-4 rounded-lg border border-gray-200 text-center;
}

.metric-label {
  @apply text-gray-600 text-sm font-medium mb-2 block;
}

.metric-value {
  @apply text-gray-800 font-semibold text-lg;
}

.led-software-content {
  @apply mt-6 space-y-8;
}

.led-code-section {
  @apply space-y-4;
}

.led-code-section h4 {
  @apply text-lg font-semibold text-gray-800 mb-2;
}

.led-code-section p {
  @apply text-gray-600 mb-4;
}

.led-algorithm-flow {
  @apply mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100;
}

.led-algorithm-flow h4 {
  @apply text-lg font-semibold text-gray-800 mb-8 text-center;
}

.led-flow-diagram {
  @apply space-y-6;
}

.led-flow-row {
  @apply flex items-center justify-center space-x-6;
}

.led-step-card {
  @apply flex-1 max-w-xs bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-200;
}

.led-step-card.final-step {
  @apply max-w-sm mx-auto bg-gradient-to-r from-orange-50 to-red-50 border-orange-200;
}

.led-step-number {
  @apply w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm mb-3 mx-auto shadow-lg;
}

.final-step .led-step-number {
  @apply bg-gradient-to-r from-orange-500 to-red-500;
}

.led-step-content {
  @apply text-center;
}

.led-step-content h5 {
  @apply font-semibold text-gray-800 mb-2 text-sm;
}

.led-step-content p {
  @apply text-gray-600 text-xs leading-relaxed;
}

.flow-arrow {
  @apply text-2xl flex-shrink-0 flex items-center justify-center;
}

.flow-arrow-down {
  @apply text-2xl flex items-center justify-center mx-auto;
}

.led-flow-final {
  @apply flex justify-center;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .led-flow-row {
    @apply flex-col space-x-0 space-y-4;
  }

  .flow-arrow {
    @apply transform rotate-90;
  }

  .led-step-card {
    @apply max-w-full;
  }
}

/* LED功能演示样式 */
.led-demo-content {
  @apply mt-6 space-y-8;
}

.led-demo-intro {
  @apply text-gray-700 leading-relaxed bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400;
}

.led-commands-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.led-command-item {
  @apply bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow;
}

.led-command-header {
  @apply flex items-center space-x-3 mb-4 pb-3 border-b border-gray-100;
}

.led-command-icon {
  @apply text-2xl;
}

.led-command-header h4 {
  @apply text-lg font-semibold text-gray-800 m-0;
}

.led-command-details {
  @apply space-y-2;
}

.led-command-details p {
  @apply text-sm m-0;
}

.led-command-details strong {
  @apply text-gray-800 font-medium;
}

.led-demo-features {
  @apply mt-8 p-6 bg-gray-50 rounded-lg;
}

.led-demo-features h4 {
  @apply text-lg font-semibold text-gray-800 mb-4;
}

.led-feature-list {
  @apply space-y-3;
}

.led-feature-point {
  @apply flex items-start space-x-3;
}

.led-feature-bullet {
  @apply text-lg flex-shrink-0;
}

.led-feature-text {
  @apply text-gray-700 text-sm leading-relaxed;
}

.led-feature-text strong {
  @apply text-gray-800 font-medium;
}

/* LED拓展思考样式 - 统一风格 */
.led-thinking-content {
  @apply mt-6 space-y-8;
}

.led-thinking-intro {
  @apply bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400;
}

.led-thinking-intro p {
  @apply text-gray-700 leading-relaxed m-0;
}

.led-thinking-section {
  @apply space-y-6;
}

.led-thinking-section h4 {
  @apply text-xl font-semibold text-gray-800 mb-4;
}

.led-tech-evolution {
  @apply space-y-4;
}

.led-evolution-item {
  @apply flex space-x-4 p-4 bg-white border border-gray-200 rounded-lg;
}

.led-evolution-stage {
  @apply flex-shrink-0 text-center;
}

.led-stage-number {
  @apply w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm mb-2;
}

.led-evolution-stage h5 {
  @apply text-sm font-semibold text-gray-800 m-0;
}

.led-evolution-content {
  @apply space-y-2;
}

.led-evolution-content p {
  @apply text-sm text-gray-700 m-0;
}

/* 音频技术展示 - 统一样式 */
.audio-tech-content {
  @apply space-y-6;
}

.tech-description {
  @apply text-gray-700 leading-relaxed mb-6;
}

.tech-gallery {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 mb-6;
}

.dataset-showcase h5 {
  @apply text-lg font-semibold text-gray-800 mb-4;
}

.tech-pipeline {
  @apply flex items-center justify-between flex-wrap gap-4 bg-gray-50 p-6 rounded-lg;
}

.pipeline-step {
  @apply flex-1 min-w-32 text-center p-4 bg-white rounded-lg shadow-sm;
}

.pipeline-step h5 {
  @apply text-sm font-semibold text-gray-800 mb-2 m-0;
}

.pipeline-step p {
  @apply text-xs text-gray-600 m-0;
}

.pipeline-arrow {
  @apply text-2xl text-gray-400 font-bold;
}

.led-speaker-analysis {
  @apply mt-6;
}

.led-analysis-grid {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6;
}

.led-analysis-item {
  @apply bg-white border border-gray-200 rounded-lg p-6;
}

.led-analysis-header {
  @apply mb-4 pb-3 border-b border-gray-100;
}

.led-analysis-header h5 {
  @apply text-lg font-semibold text-gray-800 m-0;
}

.led-analysis-content {
  @apply space-y-2;
}

.led-analysis-content p {
  @apply text-sm text-gray-700 m-0;
}

.led-trends-challenges {
  @apply mt-6;
}

.led-trends-list {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.led-trend-item,
.led-challenge-item {
  @apply bg-white border border-gray-200 rounded-lg p-6;
}

.led-trend-item h5,
.led-challenge-item h5 {
  @apply text-lg font-semibold mb-4 m-0;
}

.led-trend-item h5 {
  @apply text-green-700;
}

.led-challenge-item h5 {
  @apply text-orange-700;
}

.led-trend-item ul,
.led-challenge-item ul {
  @apply space-y-2 m-0 p-0;
}

.led-trend-item li,
.led-challenge-item li {
  @apply text-sm text-gray-700 list-none pl-0 flex items-start;
}

.led-trend-item li::before {
  content: "✓";
  @apply text-green-500 font-medium mr-2 mt-1 flex-shrink-0;
}

.led-challenge-item li::before {
  content: "!";
  @apply text-orange-500 font-medium mr-2 mt-1 flex-shrink-0;
}

.led-thinking-conclusion {
  @apply mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200;
}

.led-thinking-conclusion h4 {
  @apply text-xl font-semibold text-gray-800 mb-4;
}

.led-thinking-conclusion p {
  @apply text-gray-700 leading-relaxed mb-4 last:mb-0;
}

/* LED项目总结样式 - 统一风格 */
.led-achievements-content {
  @apply mt-6 space-y-8;
}

.achievements-showcase {
  @apply space-y-6;
}

.achievement-description {
  @apply text-gray-700 leading-relaxed mb-6;
}

.course-result {
  @apply grid grid-cols-1 md:grid-cols-3 gap-4 mb-6;
}

.result-item {
  @apply bg-gray-50 p-4 rounded-lg border border-gray-200 text-center;
}

.result-label {
  @apply text-gray-600 text-sm font-medium mb-2 block;
}

.result-value {
  @apply text-gray-800 font-semibold;
}

.grade-certificate {
  @apply flex justify-center;
}

.certificate-image {
  @apply w-full max-w-lg;
}

/* 统一图片显示样式 */
.analysis-image,
.module-image,
.architecture-image,
.final-product-image {
  @apply w-full h-auto;
}

/* 紧凑型图片布局 */
.architecture-layout,
.product-layout {
  @apply flex justify-center;
}

.architecture-image-compact,
.product-image-compact {
  @apply w-full max-w-lg h-auto;
}

.dataset-layout {
  @apply flex justify-center;
}

.dataset-image-small {
  @apply w-full max-w-md h-auto;
}

/* LED拓展思考 - 三部曲演进样式 */
.evolution-intro {
  @apply mb-8 p-6 bg-orange-50 rounded-lg border-l-4 border-orange-300;
}

.evolution-intro p {
  @apply text-gray-700 leading-relaxed text-lg;
}

.evolution-part {
  @apply mb-12 p-8 bg-white rounded-xl shadow-lg border border-gray-100;
}

.part-header {
  @apply mb-8 text-center;
}

.part-number {
  @apply inline-flex items-center justify-center w-16 h-16 bg-amber-600 text-white text-2xl font-bold rounded-full mb-4 mx-auto;
}

.part-header h4 {
  @apply text-2xl font-bold text-gray-800 mb-2;
}

.part-subtitle {
  @apply text-gray-600 text-lg italic;
}

.evolution-content {
  @apply space-y-8;
}

.problem-statement {
  @apply mb-6;
}

.problem-statement h5 {
  @apply text-lg font-semibold text-gray-800 mb-3;
}

.highlight-quote {
  @apply text-xl font-medium text-gray-700 bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 italic;
}

.breakthrough-section h5,
.challenge-section h5,
.solution-section h5,
.experience-detail h5,
.generative-art h5,
.final-vision h5 {
  @apply text-lg font-semibold text-gray-800 mb-4;
}

.spectrogram-showcase {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 items-center;
}

.spectrogram-image,
.tinyml-image {
  @apply w-full max-w-md mx-auto;
}

.spectrogram-explanation,
.art-description {
  @apply space-y-3;
}

.spectrogram-explanation p,
.art-description p {
  @apply text-gray-700 leading-relaxed;
}

.future-applications {
  @apply mt-8;
}

.application-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.application-item {
  @apply p-6 bg-gray-50 rounded-lg border border-gray-200;
}

.application-item h6 {
  @apply font-semibold text-gray-800 mb-3;
}

.application-item p {
  @apply text-gray-600 leading-relaxed;
}

.comparison-table {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 my-6;
}

.comparison-item {
  @apply p-6 rounded-lg border-2;
}

.comparison-item.cloud {
  @apply bg-stone-50 border-stone-200;
}

.comparison-item.edge {
  @apply bg-emerald-50 border-emerald-200;
}

.comparison-item h6 {
  @apply font-bold text-lg mb-4 text-center;
}

.comparison-item.cloud h6 {
  @apply text-stone-700;
}

.comparison-item.edge h6 {
  @apply text-emerald-700;
}

.pros-cons {
  @apply space-y-3;
}

.pros,
.cons {
  @apply text-sm;
}

.pros strong {
  @apply text-emerald-600;
}

.cons strong {
  @apply text-orange-600;
}

.conclusion {
  @apply text-center p-4 bg-gray-100 rounded-lg font-medium text-gray-800;
}

.tinyml-showcase {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 items-start;
}

.tinyml-steps {
  @apply space-y-4;
}

.step-item {
  @apply flex items-start space-x-4 p-4 bg-gray-50 rounded-lg;
}

.step-number {
  @apply flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-sm;
}

.step-content h6 {
  @apply font-semibold text-gray-800 mb-1;
}

.step-content p {
  @apply text-gray-600 text-sm;
}

.metaphor {
  @apply mt-6 p-4 bg-gray-100 rounded-lg text-gray-700 italic text-center;
}

.art-concept {
  @apply space-y-6;
}

.art-layout {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 items-center;
}

.vision-text {
  @apply text-lg text-gray-700 leading-relaxed p-6 bg-orange-50 rounded-lg border-l-4 border-orange-300 font-medium;
}

/* 项目启发样式 */
.project-insights {
  @apply mt-8 space-y-8;
}

/* 启发内容部分 */

.insights-section h4 {
  @apply text-xl font-semibold text-gray-800 mb-6;
}

.achievement-cards {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6 mb-8;
}

.achievement-card {
  @apply p-6 bg-white border border-orange-200 rounded-lg hover:shadow-md transition-shadow;
}

.achievement-icon {
  @apply text-3xl mb-4;
}

.achievement-content h6 {
  @apply font-semibold text-gray-800 mb-2;
}

.achievement-content p {
  @apply text-gray-600 text-sm leading-relaxed;
}

/* 成绩展示 */
.grade-showcase {
  @apply mt-8 p-6 bg-orange-50 rounded-lg border border-orange-200;
}

.grade-info {
  @apply flex items-center justify-center gap-8;
}

.grade-badge {
  @apply text-center;
}

.grade-score {
  @apply block text-3xl font-bold text-orange-600 mb-2;
}

.grade-label {
  @apply text-gray-600 font-medium;
}

.grade-image {
  @apply flex-shrink-0;
}

.grade-certificate-img {
  @apply w-40 h-auto rounded-lg shadow-sm;
}

/* 启发部分 */
.insights-section h5 {
  @apply text-xl font-semibold text-gray-800 mb-6;
}

.insights-grid {
  @apply space-y-6;
}

.insight-card {
  @apply flex items-start space-x-6 p-6 bg-white border border-blue-200 rounded-lg hover:shadow-md transition-shadow;
}

.insight-number {
  @apply flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl;
}

.insight-content h6 {
  @apply font-bold text-gray-800 mb-3 text-lg;
}

.insight-content p {
  @apply text-gray-700 leading-relaxed;
}

/* 感谢语 */
.gratitude {
  @apply text-center mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200;
}

.gratitude p {
  @apply text-gray-600 italic;
}

.led-project-highlights h4,
.led-learning-outcomes h4 {
  @apply text-xl font-semibold text-gray-800 mb-6;
}

.led-highlights-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

.led-highlight-item {
  @apply p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow;
}

.led-highlight-content h5 {
  @apply font-semibold text-gray-800 mb-2 m-0;
}

.led-highlight-content p {
  @apply text-gray-600 text-sm leading-relaxed m-0;
}

.led-outcomes-list {
  @apply grid grid-cols-1 md:grid-cols-3 gap-6;
}

.led-outcome-category {
  @apply bg-white border border-gray-200 rounded-lg p-6;
}

.led-outcome-category h5 {
  @apply font-semibold text-gray-800 mb-4 m-0 flex items-center;
}

.led-outcome-category ul {
  @apply space-y-2 m-0 p-0;
}

.led-outcome-category li {
  @apply text-sm text-gray-700 list-none pl-0 flex items-start;
}

.led-outcome-category li::before {
  content: "•";
  @apply text-blue-500 font-medium mr-2 mt-1 flex-shrink-0;
}

.led-course-summary {
  @apply bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-purple-200;
}

.led-course-summary p {
  @apply text-gray-700 leading-relaxed mb-4 last:mb-0;
}

/* 美莲花餐厅支出管理系统样式 */

/* 项目概述样式 */
.restaurant-info-content {
  @apply space-y-8;
}

.project-intro {
  @apply text-gray-700 leading-relaxed mb-8;
}

.key-features-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6;
}

.feature-highlight {
  @apply bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow;
}

.feature-icon {
  @apply text-4xl mb-4;
}

.feature-highlight h4 {
  @apply text-lg font-semibold text-gray-800 mb-3;
}

.feature-highlight p {
  @apply text-gray-600 text-sm leading-relaxed;
}

/* 技术架构样式 */
.restaurant-architecture-content {
  @apply space-y-8;
}

.tech-stack-overview {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8;
}

.tech-category {
  @apply bg-gray-50 p-6 rounded-lg;
}

.tech-category h4 {
  @apply text-lg font-semibold text-gray-800 mb-4;
}

.tech-items {
  @apply flex flex-wrap gap-2;
}

.tech-item {
  @apply px-3 py-1 bg-white text-gray-700 rounded-md text-sm border border-gray-200;
}

.architecture-highlights {
  @apply space-y-6;
}

.architecture-item {
  @apply bg-white p-6 rounded-lg border border-gray-200;
}

.architecture-item h5 {
  @apply text-lg font-semibold text-gray-800 mb-3;
}

.architecture-item p {
  @apply text-gray-600 leading-relaxed;
}

/* 功能展示样式 */
.restaurant-features-content {
  @apply space-y-12;
}

.feature-showcase {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 items-start;
}

.feature-description {
  @apply space-y-6;
}

.feature-description h4 {
  @apply text-xl font-semibold text-gray-800 mb-4;
}

.feature-description p {
  @apply text-gray-700 leading-relaxed mb-6;
}

.feature-specs {
  @apply space-y-3;
}

.spec-item {
  @apply flex justify-between items-center p-3 bg-gray-50 rounded-lg;
}

.spec-label {
  @apply text-gray-600 font-medium;
}

.spec-value {
  @apply text-gray-800 font-semibold;
}

.feature-images {
  @apply space-y-4;
}

.image-grid {
  @apply grid grid-cols-1 gap-4;
}

.feature-image {
  @apply w-full h-auto rounded-lg shadow-sm;
}

/* 系统演示样式 */
.restaurant-demo-content {
  @apply space-y-8;
}

.demo-intro {
  @apply text-gray-700 leading-relaxed mb-8;
}

.demo-video-container {
  @apply bg-gray-50 p-6 rounded-lg;
}

.demo-video {
  @apply w-full h-auto max-h-96 rounded-lg shadow-md mb-4;
}

.video-caption {
  @apply text-center;
}

.video-caption h4 {
  @apply text-lg font-semibold text-gray-800 mb-2;
}

.video-caption p {
  @apply text-gray-600 leading-relaxed;
}

.demo-highlights {
  @apply mt-8;
}

.demo-highlights h4 {
  @apply text-lg font-semibold text-gray-800 mb-6;
}

.highlight-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6;
}

.highlight-item {
  @apply bg-white p-6 rounded-lg border border-gray-200 text-center;
}

.highlight-icon {
  @apply text-3xl mb-3;
}

.highlight-item h5 {
  @apply font-semibold text-gray-800 mb-2;
}

.highlight-item p {
  @apply text-gray-600 text-sm;
}

/* 项目总结样式 */
.restaurant-achievements-content {
  @apply space-y-12;
}

.project-stats {
  @apply mb-8;
}

.stats-grid {
  @apply grid grid-cols-2 md:grid-cols-4 gap-6;
}

.stat-item {
  @apply bg-gray-50 p-6 rounded-lg text-center;
}

.stat-number {
  @apply text-3xl font-bold text-primary-orange mb-2;
}

.stat-label {
  @apply text-gray-600 font-medium;
}

.achievements-overview {
  @apply space-y-10;
}

.achievement-section {
  @apply space-y-6;
}

.achievement-section h4 {
  @apply text-xl font-semibold text-gray-800 mb-6;
}

.achievement-items {
  @apply space-y-6;
}

.achievement-item {
  @apply flex items-start space-x-4 p-6 bg-white rounded-lg border border-gray-200;
}

.achievement-icon {
  @apply text-3xl flex-shrink-0;
}

.achievement-content h5 {
  @apply font-semibold text-gray-800 mb-2;
}

.achievement-content p {
  @apply text-gray-600 leading-relaxed;
}

.learning-insights {
  @apply mt-8;
}

.learning-insights h4 {
  @apply text-xl font-semibold text-gray-800 mb-6;
}

.insights-content {
  @apply space-y-4 text-gray-700 leading-relaxed;
}

.insights-content p {
  @apply bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500;
}

.future-plans {
  @apply mt-8;
}

.future-plans h4 {
  @apply text-xl font-semibold text-gray-800 mb-4;
}

.future-plans p {
  @apply text-gray-700 leading-relaxed;
}

/* 新增布局样式 */

/* 反向布局 - 图片左，文字右 */
.feature-showcase.reverse {
  @apply grid grid-cols-1 lg:grid-cols-2 gap-8 items-start;
}

.feature-showcase.reverse .feature-images {
  @apply lg:order-1;
}

.feature-showcase.reverse .feature-description {
  @apply lg:order-2;
}

/* 垂直布局样式 */
.feature-showcase-vertical {
  @apply space-y-8;
}

.feature-description-center {
  @apply text-center space-y-6 max-w-4xl mx-auto;
}

.feature-description-center h4 {
  @apply text-xl font-semibold text-gray-800 mb-4;
}

.feature-description-center p {
  @apply text-gray-700 leading-relaxed mb-6;
}

.feature-specs-horizontal {
  @apply flex flex-wrap justify-center gap-6;
}

.feature-specs-horizontal .spec-item {
  @apply flex flex-col items-center p-3 bg-gray-50 rounded-lg min-w-32;
}

.feature-specs-horizontal .spec-label {
  @apply text-gray-600 font-medium text-sm mb-1;
}

.feature-specs-horizontal .spec-value {
  @apply text-gray-800 font-semibold text-center;
}

/* 双图片布局 */
.feature-images-dual {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6;
}

/* 视频相关样式 */
.demo-video-section {
  @apply bg-gray-50 p-6 rounded-lg text-center;
}

.demo-video-section h4 {
  @apply text-lg font-semibold text-gray-800 mb-4 text-center;
}

.led-demo-video-section {
  @apply bg-gray-50 p-6 rounded-lg text-center;
}

.led-demo-video-section h4 {
  @apply text-lg font-semibold text-gray-800 mb-4 text-center;
}



/* 项目成果总结样式 */
.achievement-summary {
  @apply text-gray-700 leading-relaxed bg-gray-50 p-6 rounded-lg border-l-4 border-primary-orange;
}

/* UI设计相关样式 */
.ui-design-content {
  @apply space-y-10;
}

.ui-main-content {
  @apply space-y-8;
}

.ui-description {
  @apply text-gray-700 leading-relaxed mb-8;
}

.ui-principles-overview {
  @apply mt-8;
}

.ui-category {
  @apply mb-6;
}

.ui-category h4 {
  @apply text-lg font-semibold text-gray-800 mb-4;
}

.ui-items {
  @apply flex flex-wrap gap-2;
}

.ui-item {
  @apply px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium;
}

/* App截图网格样式 */
.app-screenshots-showcase {
  @apply mt-12;
}

.screenshots-grid {
  @apply grid grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto;
}

.screenshot-item {
  @apply cursor-pointer transition-transform hover:scale-105;
}

.screenshot-image {
  @apply w-full h-auto transition-shadow hover:shadow-xl;
}

.screenshot-caption {
  @apply block text-center text-sm text-gray-600 mt-3 font-medium;
}

/* Blender 3D建模样式 */
.blender-showcase {
  @apply mt-10;
}

.blender-gallery-grid {
  @apply grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto;
}

.blender-image {
  @apply w-full h-64 object-cover transition-all hover:shadow-xl;
}

.blender-highlights {
  @apply mt-8;
}

.blender-feature {
  @apply text-center p-4 bg-gray-50 rounded-lg;
}

.blender-feature h6 {
  @apply font-semibold text-gray-800 mb-2;
}

.blender-feature p {
  @apply text-gray-600 text-sm leading-relaxed;
}

/* 技术规格总览样式 */
.tech-specs-section {
  @apply mt-8 bg-gray-50 rounded-xl p-8;
}

.tech-specs-section h4 {
  @apply text-xl font-semibold text-gray-900 mb-6 text-center;
}

.specs-overview {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6;
}

.specs-category {
  @apply bg-white rounded-lg p-6 shadow-sm border border-gray-200;
}

.specs-category h5 {
  @apply text-lg font-semibold text-gray-900 mb-4 text-center;
}

.specs-list {
  @apply space-y-2;
}

.spec-item {
  @apply block text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded text-center font-medium;
}

/* AI算法与核心技术样式 */
.algorithm-code-section {
  @apply mb-8;
}

.algorithm-tech-specs {
  @apply bg-gray-50 rounded-lg p-6 mt-6;
}

.tech-highlight-grid {
  @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4;
}

.tech-highlight-item {
  @apply text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200;
}

.tech-highlight-item strong {
  @apply block text-sm font-semibold text-gray-900 mb-2;
}

.tech-highlight-item span {
  @apply text-xs text-gray-600 leading-relaxed;
}

/* 建模流程样式 */
.modeling-process {
  @apply text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100;
}

.process-title {
  @apply text-lg font-semibold text-blue-800 mb-2;
}

.process-desc {
  @apply text-blue-600 text-sm leading-relaxed;
}
</style>
