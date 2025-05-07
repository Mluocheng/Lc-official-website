import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { Solutions } from '@/components/home/Solutions';
import { CaseStudies } from '@/components/home/CaseStudies';
import { News } from '@/components/home/News';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>企业官网 - 数字化解决方案提供商</title>
        <meta name="description" content="基于风格的官网，展示企业服务和案例" />
        <meta name="keywords" content="企业官网,数字化,解决方案" />
      </Head>
      <main>
        <HeroSection />
        <Solutions />
        <CaseStudies />
        <News />
      </main>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  // 如有服务端数据请求可在此添加
  return {
    props: {},
  };
} 