---
name: stanford-homepage-replica
description: >
  Stanford University 官网首页复刻模板 — 学术机构主页的完整设计系统、布局模式与交互组件。
  适用于需要快速搭建学术/教育类网站首页的场景，包含 Top Bar、Sticky 导航、Hero、新闻、
  事件、院系展示、研究亮点、招生信息、Footer 等 8 大模块。响应式三档断点 (1024/768/480px)。
  纯 HTML + CSS + Vanilla JS，零依赖。也可作为 AI 辅助编程演示项目。
---

# Stanford Homepage Replica — 学术机构主页模板

## 概述

本 Skill 封装了斯坦福大学官网首页复刻的完整设计系统与前端实现，可作为学术/教育/机构类主页的快速起手模板。所有代码均为纯 HTML5 + CSS3 + 原生 JavaScript，无框架依赖，开箱即用。

## 何时使用

- 需要快速搭建学术机构（大学、学院、研究所）官网首页
- 需要 Cardinal Red 风格的设计系统参考
- 需要响应式导航 + 悬停下拉菜单 + 移动端汉堡菜单的完整实现
- 需要滚动动画、Intersection Observer 等交互模式
- 需要 AI 辅助编程的前端项目演示案例

## 设计系统

### 品牌色板

| 用途 | 变量名 | 色值 | 示例 |
|------|--------|------|------|
| 主色 | `--stanford-red` | `#8C1515` | ████████ |
| 主色深 | `--stanford-red-dark` | `#6B0F0F` | ████████ |
| 主色浅 | `--stanford-red-light` | `#B93A3A` | ████████ |
| 文字黑 | `--stanford-black` | `#2E2D29` | ████████ |
| 正文灰 | `--stanford-gray-dark` | `#53565A` | ████████ |
| 辅助灰 | `--stanford-gray` | `#8C8C8C` | ████████ |
| 线条灰 | `--stanford-gray-light` | `#D2D2D2` | ████████ |
| 背景灰 | `--stanford-bg` | `#F4F4F4` | ████████ |
| 纯白 | `--stanford-white` | `#FFFFFF` | ████████ |

### 七院系标识色

| 院系 | 变量名 | 色值 |
|------|--------|------|
| 商学院 | `--color-teal` | `#00505C` |
| 工学院 | `--color-gold` | `#C99E23` |
| 文理学院 | `--color-green` | `#175E3E` |
| 医学院 | `--color-navy` | `#1A2B4C` |
| 法学院 | `--color-purple` | `#52347C` |
| 教育学院 | `--color-coral` | `#D64B3E` |
| 可持续发展学院 | `--stanford-red` | `#8C1515` |

### 间距体系

```css
--space-xs:  0.25rem;   /* 4px  */
--space-sm:  0.5rem;    /* 8px  */
--space-md:  1rem;      /* 16px */
--space-lg:  1.5rem;    /* 24px */
--space-xl:  2rem;      /* 32px */
--space-2xl: 3rem;      /* 48px */
--space-3xl: 4rem;      /* 64px */
--space-4xl: 6rem;      /* 96px */
```

### 排版

- 字体栈：`"Source Sans Pro", "Segoe UI", system-ui, -apple-system, sans-serif`
- 衬线备用：`"Source Serif Pro", Georgia, "Times New Roman", serif`
- Hero 标题：`3rem / 800 / -0.5px letter-spacing`
- Section 标题：`2rem / 700`
- 正文：`1rem / 1.6 line-height`

---

## 页面布局架构

页面从上到下共 8 个语义化区块，全部包裹在 `<body>` 内：

```
<body>
  div.top-bar          → Utility navigation
  header.main-header   → Primary sticky nav
  section.hero         → Full-width hero banner
  section.news-section → News & stories grid
  section.events-section → Events cards
  section.schools-section → 7 academies grid
  section.research-section → Research + stats
  section.admission-section → Admission CTA
  footer.site-footer   → Multi-col footer
</body>
```

每区块使用 `padding: var(--space-4xl) 0`，背景在 white / `--stanford-bg` 之间交替以形成视觉节奏。

---

## 模块模板

### 1. Top Bar（工具导航栏）

深色横条，36px 高。左侧 Stanford 标识，右侧 5 个受众入口 + 搜索按钮。

```html
<div class="top-bar">
  <div class="container top-bar-inner">
    <a href="#" class="top-logo">Stanford University</a>
    <nav class="utility-nav" aria-label="Utility navigation">
      <ul>
        <li><a href="#">Information for</a></li>
        <li><a href="#">Students</a></li>
        <li><a href="#">Faculty &amp; Staff</a></li>
        <li><a href="#">Alumni</a></li>
        <li><a href="#">Parents &amp; Families</a></li>
      </ul>
      <button class="search-toggle" aria-label="Search">🔍</button>
    </nav>
  </div>
</div>
```

### 2. Main Navigation（主导航）

Sticky 定位，68px 高。左侧 Stanford 品牌标识（双行：Stanford / UNIVERSITY），右侧 5 个导航项，带悬停下拉菜单。

```html
<header class="main-header" id="main-header">
  <div class="container header-inner">
    <a href="#" class="brand">
      <span class="brand-block">Stanford</span>
      <span class="brand-sub">University</span>
    </a>
    <nav class="main-nav" id="main-nav" aria-label="Primary navigation">
      <ul class="nav-list">
        <li class="nav-item has-dropdown">
          <a href="#" class="nav-link">Academics</a>
          <div class="dropdown">
            <div class="dropdown-inner">
              <div class="dropdown-col">
                <h4>Schools</h4>
                <ul>
                  <li><a href="#">Graduate School of Business</a></li>
                  <li><a href="#">School of Engineering</a></li>
                  <!-- ... -->
                </ul>
              </div>
              <div class="dropdown-col">
                <h4>Learning</h4>
                <ul>
                  <li><a href="#">Undergraduate Majors</a></li>
                  <li><a href="#">Graduate Programs</a></li>
                  <!-- ... -->
                </ul>
              </div>
            </div>
          </div>
        </li>
        <!-- Admission / Research / Campus Life / About -->
      </ul>
    </nav>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</header>
```

**下拉菜单行为：**
- 桌面端：`:hover` 触发，`opacity/visibility/transform` CSS 过渡 (0.3s)
- 移动端：点击 `.nav-link` 切换 `.nav-item.active`，静态展开子菜单
- 使用绝对定位 + `box-shadow: 0 12px 40px rgba(0,0,0,.12)`

### 3. Hero Section（英雄区）

全宽 560px 最小高度。Cardinal Red 渐变背景 + SVG 纹理 + 暗色遮罩叠加。标题、描述、CTA 按钮居中偏左。

```html
<section class="hero">
  <div class="hero-overlay"></div>
  <div class="hero-content">
    <div class="container">
      <h1>A purposeful university</h1>
      <p class="hero-desc"><!-- 描述文字 --></p>
      <div class="hero-actions">
        <a href="#" class="btn btn-primary">More about Stanford</a>
      </div>
    </div>
  </div>
  <div class="hero-bg"></div>
</section>
```

**CSS 背景模式：**
```css
.hero-bg {
  background: linear-gradient(135deg,
    var(--stanford-red-dark) 0%,
    var(--stanford-red) 40%,
    var(--stanford-red-light) 100%);
}
.hero-bg::after {
  /* SVG pattern overlay at 4% opacity */
  background: url("data:image/svg+xml,...");
}
```

**CTA 按钮反色处理**：白底红字，hover 变浅灰底。

### 4. News & Stories（新闻区块）

两栏网格：左侧 1.5fr 大卡（头图 + 标签 + 标题 + 摘要），右侧 1fr 列表（3 条 Mini 卡 + "More news" 链接）。

```html
<section class="section news-section">
  <div class="container">
    <h2 class="section-title">News & Stories</h2>
    <div class="news-grid">
      <article class="news-feature">
        <div class="news-img placeholder-img tall"></div>
        <div class="news-body">
          <span class="news-tag">Science &amp; Technology</span>
          <h3><a href="#">标题</a></h3>
          <p>摘要文字</p>
        </div>
      </article>
      <div class="news-sidebar">
        <article class="news-mini">
          <div class="news-img placeholder-img"></div>
          <div class="news-body">
            <span class="news-tag">Health</span>
            <h4><a href="#">标题</a></h4>
            <time datetime="2026-05-10">May 10, 2026</time>
          </div>
        </article>
        <!-- 重复 2-3 条 -->
        <a href="#" class="more-link">More news →</a>
      </div>
    </div>
  </div>
</section>
```

### 5. Upcoming Events（事件区块）

4 列卡片网格，每卡片包含日期徽标（月/日） + 事件信息（标题/地点/时间）。背景 `--stanford-bg` 浅灰。

```html
<article class="event-card">
  <div class="event-date">
    <span class="event-month">MAY</span>
    <span class="event-day">15</span>
  </div>
  <div class="event-info">
    <h4><a href="#">Commencement 2026</a></h4>
    <p class="event-location">Stanford Stadium</p>
    <span class="event-time">9:00 AM – 12:00 PM</span>
  </div>
</article>
```

Hover 效果：`box-shadow` 加深 + `translateY(-2px)`。

### 6. Academics（院系网格）

7 个院系卡片，4 列网格（末行 3 个居中）。每卡片一个色条标识 + 院系名 + 简称。

```html
<a href="#" class="school-card">
  <div class="school-icon bar teal"></div>
  <h3>Engineering</h3>
  <p>School of Engineering</p>
</a>
```

Hover：`translateY(-4px)` + 阴影。

### 7. Research & Impact（研究亮点）

两栏：左 1.3fr 大图文 + 右 1fr 2×2 统计卡片。

```html
<div class="stats-column">
  <div class="stat-card">
    <span class="stat-number">$1.98B</span>
    <span class="stat-label">Sponsored research budget</span>
  </div>
  <!-- 4 个 stat-card -->
</div>
```

统计数字样式：`2rem / 800 / var(--stanford-red)`。

### 8. Admission + Footer

Admission 区：左文右图双栏，3 个 Outline 按钮。Footer：4 列链接 + 社交图标 + 法律声明。

```html
<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-col"><h4>Schools</h4><ul>...</ul></div>
    <div class="footer-col"><h4>Academics</h4><ul>...</ul></div>
    <div class="footer-col"><h4>Resources</h4><ul>...</ul></div>
    <div class="footer-col"><h4>Connect</h4><ul>...</ul></div>
  </div>
  <div class="footer-bottom">
    <div class="container">
      <div class="footer-social"><!-- 5 个社交图标 --></div>
      <div class="footer-legal">
        <span>© Stanford University. Stanford, California 94305.</span>
        <nav>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Trademarks</a>
          <a href="#">Accessibility</a>
        </nav>
      </div>
    </div>
  </div>
</footer>
```

---

## CSS 核心模式

### CSS Variables 全局配置

所有颜色、间距、字号、过渡时间集中在 `:root` 中，便于切换品牌：

```css
:root {
  --stanford-red: #8C1515;
  --stanford-black: #2E2D29;
  --max-width: 1200px;
  --nav-height: 68px;
  --transition: 0.3s ease;
  /* ... full set in style.css */
}
```

### 按钮系统

两种变体，统一 `0.8rem 2rem` padding + `4px` 圆角 + `2px` 描边：

```css
.btn-primary { background: var(--stanford-red); color: #fff; }
.btn-outline  { background: transparent; color: var(--stanford-red); border: 2px solid var(--stanford-red); }
```

### 响应式策略

三档断点，逐级降维：

| 断点 | 策略 |
|------|------|
| `1024px` | News → 单列，Events → 2 列，Schools → 3 列，Research → 单列，Admission → 单列 |
| `768px` | 汉堡菜单激活，Events → 单列，Schools → 2 列，Stats → 单列，Footer → 单列 |
| `480px` | Schools → 单列，Admission 按钮堆叠 |

**汉堡菜单**在 `>768px` 时 `display: none`，`≤768px` 时 `display: flex`。移动端主导航通过 `translateX(100%)` 隐藏在右侧，`.active` 时归零。

### Placeholder 图片

使用渐变背景模拟图片占位，避免依赖外部资源：

```css
.placeholder-img {
  background: linear-gradient(135deg, var(--stanford-gray-light), var(--stanford-bg));
  border-radius: 6px;
  min-height: 200px;
}
.placeholder-img.tall  { min-height: 320px; }
.placeholder-img.large { min-height: 400px; }
```

---

## JavaScript 交互模式

### 移动端汉堡菜单

```js
hamburger.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('active');
  hamburger.classList.toggle('active');
  hamburger.setAttribute('aria-expanded', isOpen);
});
```

### 移动端子菜单展开

```js
document.querySelectorAll('.has-dropdown').forEach(item => {
  item.querySelector('.nav-link').addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      item.classList.toggle('active');
    }
  });
});
```

### 滚动阴影

```js
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10
    ? '0 2px 16px rgba(0,0,0,0.08)'
    : 'none';
}, { passive: true });
```

### Intersection Observer 入场动画

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});
```

### ESC 关闭菜单

```js
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mainNav.classList.contains('active')) {
    mainNav.classList.remove('active');
    hamburger.classList.remove('active');
  }
});
```

---

## 快速起手

从零搭建完整页面只需 3 步：

```
stanford-replica/
├── index.html     ← 粘贴下方 HTML 骨架
├── css/
│   └── style.css  ← 粘贴下方 CSS 骨架
└── js/
    └── main.js    ← 粘贴下方 JS 骨架
```

### HTML 最小骨架（含全部 8 区块占位）

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>University Name</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="top-bar"><!-- utility nav --></div>
  <header class="main-header"><!-- primary nav --></header>
  <section class="hero"><!-- hero --></section>
  <section class="section news-section"><!-- news --></section>
  <section class="section events-section"><!-- events --></section>
  <section class="section schools-section"><!-- academies --></section>
  <section class="section research-section"><!-- research --></section>
  <section class="section admission-section"><!-- admission --></section>
  <footer class="site-footer"><!-- footer --></footer>
  <script src="js/main.js"></script>
</body>
</html>
```

### CSS 最小骨架（变量 + Reset + 布局工具类）

```css
:root {
  --stanford-red: #8C1515;
  --stanford-black: #2E2D29;
  --stanford-bg: #F4F4F4;
  --stanford-white: #FFFFFF;
  --max-width: 1200px;
  --space-4xl: 6rem;
}

*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: system-ui, sans-serif; color: var(--stanford-black); }
a { color: var(--stanford-red); text-decoration: none; }
ul { list-style: none; }
.container { max-width: var(--max-width); margin: 0 auto; padding: 0 1.5rem; }
.section { padding: var(--space-4xl) 0; }
.section-title { font-size: 2rem; font-weight: 700; }

.btn {
  display: inline-block; padding: 0.8rem 2rem;
  font-weight: 600; border-radius: 4px;
  border: 2px solid transparent; cursor: pointer;
}
.btn-primary { background: var(--stanford-red); color: #fff; }
.btn-outline  { background: transparent; color: var(--stanford-red); border-color: var(--stanford-red); }
```

### JS 最小骨架（导航 + 滚动动画）

```js
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('main-nav');
  if (hamburger && mainNav) {
    hamburger.addEventListener('click', () => {
      mainNav.classList.toggle('active');
      hamburger.classList.toggle('active');
    });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
    Object.assign(section.style, {
      opacity: '0', transform: 'translateY(20px)',
      transition: 'opacity 0.6s ease, transform 0.6s ease'
    });
    observer.observe(section);
  });
});
```

---

## 完整文件参考

完整实现见以下文件（同目录）：

- `index.html` — 完整 HTML 页面（402 行）
- `css/style.css` — 完整样式表（1034 行）
- `js/main.js` — 完整交互脚本（125 行）
- `PLAN.md` — 项目开发计划与验收标准
- `README.md` — 项目说明
