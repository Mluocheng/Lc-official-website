（基于 Next.js + React SSR）
技术栈	用途	备注
Next.js 14	React SSR框架，支持静态生成（SSG）	优化SEO，提升加载速度
React 18	前端UI开发	组件化开发
TypeScript	类型安全	减少运行时错误
Tailwind CSS	原子化CSS框架	快速构建响应式UI
Strapi CMS	无头CMS管理新闻/案例	可选（如需动态内容）
Vercel	自动化部署	全球CDN，支持Serverless

├── public/                 # 静态资源（图片、PDF等）
├── src/
│   ├── components/         # 公共组件（Header, Footer等）
│   ├── pages/              # Next.js路由页面
│   │   ├── index.tsx       # 首页
│   │   ├── about.tsx       # 关于我们
│   │   ├── solutions/      # 解决方案分类页
│   │   ├── news/[id].tsx   # 新闻详情（动态路由）
│   │   └── ...             # 其他页面
│   ├── styles/             # 全局CSS/Tailwind配置
│   ├── types/              # TypeScript类型定义
│   └── utils/              # 工具函数（API请求等）
├── next.config.js          # Next.js配置
└── package.json