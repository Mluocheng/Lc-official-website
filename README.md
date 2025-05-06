# 企业官网（Next.js + React SSR）

基于 Next.js 14 + React 18 + TypeScript + Tailwind CSS 的高性能企业官网，支持 SSR、SEO、响应式布局，适合品牌展示、产品解决方案、新闻动态、客户案例等场景。

## 技术栈
- **Next.js 14**：React SSR 框架，支持 SSG/SSR
- **React 18**：前端 UI 组件
- **TypeScript**：类型安全
- **Tailwind CSS**：原子化 CSS 框架
- **Swiper**：轮播组件

## 目录结构
```
├── public/                 # 静态资源（图片、PDF等）
├── src/
│   ├── components/         # 公共组件（Header, Footer, 首页模块等）
│   ├── pages/              # Next.js 路由页面
│   ├── styles/             # 全局CSS/Tailwind配置
│   ├── types/              # TypeScript类型定义
│   └── utils/              # 工具函数
├── next.config.js          # Next.js配置
├── tailwind.config.js      # Tailwind配置
├── postcss.config.js       # PostCSS配置
├── tsconfig.json           # TypeScript配置
├── package.json            # 依赖与脚本
└── README.md
```

## 启动方式

1. 安装依赖
   ```bash
   npm install
   ```
2. 启动开发环境
   ```bash
   npm run dev
   ```
3. 生产构建 & 启动
   ```bash
   npm run build
   npm start
   ```

## 常见问题
- **图片远程加载报错/警告**：请在 `next.config.js` 的 `images.remotePatterns` 中添加所需图片域名。
- **内容被 Header 遮挡**：请确保主内容容器有足够的 `pt-16` 或 `pt-24`。
- **SSR/SSG 配置**：如需 SSR，请在页面导出 `getServerSideProps`。

## 特色功能
- 响应式设计，适配 PC/平板/手机
- SEO 友好，支持 SSR/SSG
- 首页品牌大图支持视频背景
- 首页、集团信息等页面模块化开发
- Swiper 轮播、时间轴、团队管理等丰富组件

---
如有问题或定制需求，请联系开发者。