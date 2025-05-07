import Link from 'next/link';
import { useRouter } from 'next/router';

const navs = [
  { name: '集团信息', href: '/group' },
  { name: '业务体系', href: '/business' },
  { name: '企业文化', href: '/culture' },
  { name: 'ESG', href: '/esg' },
  { name: '投资者关系', href: '/investor-relations' },
  { name: '新闻及品牌资料', href: '/news-and-brand' },
];

const Header = () => {
  const router = useRouter();
  const isHome = router.pathname === '/';
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md text-white shadow">
      <div className="container relative flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logo.png" alt="微盟logo" className="h-8 w-auto" />
        </div>
        {/* 菜单 居中显示，不换行，间距更大，超出可横向滚动 */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-nowrap gap-12 text-base font-medium justify-center overflow-x-auto scrollbar-hide">
          {!isHome && (
            <Link href="/" className="hover:text-primary-400 transition-colors whitespace-nowrap">
              首页
            </Link>
          )}
          {navs.map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-primary-400 transition-colors whitespace-nowrap">
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header; 