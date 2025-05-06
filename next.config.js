/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      // 如有其他远程图片域名可继续添加
    ],
  },
  i18n: {
    locales: ['zh-CN'],
    defaultLocale: 'zh-CN',
  },
}

module.exports = nextConfig 