# Stanford University Homepage Replica

斯坦福大学官网首页复刻项目，使用 **DeepSeek TUI + DeepSeek V4 Pro** 构建。本项目为 AI 辅助编程的测试案例，旨在验证从自然语言需求到完整前端页面的端到端交付能力。

> Built with [DeepSeek TUI](https://deepseek.com) & DeepSeek V4 Pro — an end-to-end AI-assisted development test.

## 项目结构

```
stanford-replica/
├── index.html          # 主页面，语义化 HTML5 标签
├── css/
│   └── style.css       # 全局样式 + 响应式布局
├── js/
│   └── main.js         # 导航交互 + 滚动动画
└── PLAN.md             # 开发计划（含设计参考与验收标准）
```

## 页面模块

| 模块 | 说明 |
|------|------|
| **Top Bar** | 深色横条 — Logo + 工具导航 (Students / Faculty / Alumni 等) |
| **Main Nav** | Sticky 主导航，悬停下拉菜单 (Academics / Admission / Research / Campus Life / About) |
| **Hero** | 全宽 Cardinal Red 渐变背景 + 遮罩层，标题 "A purposeful university" |
| **News & Stories** | 左侧大图文卡片 + 右侧新闻列表 |
| **Upcoming Events** | 事件卡片网格，日历日期样式 |
| **Academics** | 七大院系展示（商学院、工学院、文理学院、医学院、法学院、教育学院、可持续发展学院） |
| **Research & Impact** | 研究亮点 + 统计数字卡片 (科研预算 $1.98B / 40+ 跨学科中心 / 22 位诺奖得主等) |
| **Admission** | 招生信息 + 申请入口链接 |
| **Footer** | 多列链接 + 社交媒体 + 版权声明 |

## 技术栈

- **HTML5** — 语义化标签 (`<header>` `<nav>` `<section>` `<article>` `<footer>`)
- **CSS3** — 自定义属性 (CSS Variables)、Grid + Flexbox 布局、三档响应式断点 (1024px / 768px / 480px)
- **JavaScript (Vanilla)** — 汉堡菜单、悬停下拉、Intersection Observer 滚动动画、ESC 关闭、锚点平滑滚动

## 设计参考

- 主色：Stanford Cardinal Red `#8C1515`
- 辅助色：深灰 `#2E2D29` / 浅灰 `#F4F4F4`
- 七个学院各自独立标识色

## 本地预览

直接双击 `index.html`，或用任意静态服务器：

```bash
cd stanford-replica
python -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## License

MIT
