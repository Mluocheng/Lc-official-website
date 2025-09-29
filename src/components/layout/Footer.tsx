import Image from 'next/image';
import Link from 'next/link';

const footerNav = [
  {
    title: '集团信息',
    items: [
      { name: '集团介绍', href: '/group' },
      { name: '发展历程', href: '#' },
      { name: '管理团队', href: '#' },
      { name: '集团荣誉', href: '#' },
      { name: '新闻及品牌资料', href: '#' },
    ],
  },
  {
    title: 'ESG',
    items: [
      { name: 'ESG报告', href: '#' },
      { name: 'ESG新闻和荣誉', href: '#' },
      { name: 'ESG实践', href: '#' },
    ],
  },
  {
    title: '业务体系',
    items: [
      { name: 'SaaS产品', href: '#' },
      { name: '解决方案', href: '#' },
      { name: '商家服务', href: '#' },
    ],
  },
  {
    title: '企业文化',
    items: [
      { name: '管理理念', href: '#' },
      { name: 'redo/undo', href: '/immer' },
      { name: '拖拽缩放排序', href: '/demo' },
      { name: '办公环境', href: 'https://smartpark.luocheng.fun/', target: '_blank' }
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-white pt-12 pb-6">
      {/* 点阵背景 */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle,_1px,_#e5e7eb_1px,_transparent_1px)] bg-[size:20px_20px] pointer-events-none" aria-hidden="true" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-start md:gap-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex flex-col items-center md:items-start mb-8 md:mb-0 md:w-1/5">
            <Image src="/images/logo.png" alt="logo" width={120} height={48} />
          </div>
          {/* 分组导航 */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerNav.map((group) => (
              <div key={group.title}>
                <h4 className="font-bold mb-3 text-lg">{group.title}</h4>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} target={item.target} className="text-gray-700 hover:text-primary-600 transition-colors text-base">{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* 版权信息 */}
      <div className="mt-10 text-center text-gray-500 text-base">
        Copyright © 2015-2025 www.luocheng.com. All Rights Reserved 成都LC企业发展有限公司版权所有 蜀ICP备19920000号-9
      </div>
    </footer>
  );
};

export default Footer; 