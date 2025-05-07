import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

const managementPhilosophy = {
  title: '管理理念',
  desc: '关心员工成长，为员工提供良好的工作环境和激励机制；完善员工培养体系和职业发展通道，促进工资待遇与企业同步成长；充分尊重和信任员工，不断引导和鼓励，使其获得成功的喜悦。',
  image: '/images/img_01.png'
};

const culturalGuidelines = [
  {
    icon: '🌟',
    title: '简单',
    desc: '以简单、高效的方式处理问题，追求务实的工作作风。'
  },
  {
    icon: '🚀',
    title: '自由',
    desc: '鼓励创新思维，给予员工充分的发展空间和自主权。'
  },
  {
    icon: '🤝',
    title: '平等',
    desc: '建立平等、开放的工作环境，促进良性沟通和协作。'
  }
];

const values = [
  {
    icon: '💫',
    title: '诚信正直',
    desc: '坚持诚信经营，以正直的态度对待每一位客户和合作伙伴。'
  },
  {
    icon: '🔄',
    title: '合作创新',
    desc: '注重团队协作，持续创新，追求卓越的产品和服务。'
  },
  {
    icon: '👥',
    title: '客户第一',
    desc: '始终以客户需求为中心，提供优质的服务和解决方案。'
  }
];

export default function Culture() {
  return (
    <>
      <Head>
        <title>企业文化 - 企业官网</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* 面包屑 */}
        <div className="text-sm text-gray-500 mb-6 flex items-center space-x-1">
          <Link href="/" className="hover:text-primary-600">首页</Link>
          <span>&gt;</span>
          <span className="text-primary-600">企业文化</span>
        </div>

        <div className="bg-white rounded-lg shadow p-12 min-h-[600px]">
          {/* 管理理念 */}
          <div>
            <h2 className="text-3xl font-bold mb-2">管理理念</h2>
            <p className="mb-6 text-gray-600">以人为本，追求卓越的管理理念</p>
            <div className="h-1 w-full bg-gray-100 mb-8" />
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <Image
                  src={managementPhilosophy.image}
                  alt="管理理念"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="lg:w-1/2">
                <p className="text-gray-500 text-base leading-relaxed">
                  {managementPhilosophy.desc}
                </p>
              </div>
            </div>
          </div>

          {/* 企业文化纲要 */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-2">企业文化纲要</h2>
            <p className="mb-6 text-gray-600">简单、自由、平等的企业文化</p>
            <div className="h-1 w-full bg-gray-100 mb-8" />
            <div className="flex flex-col gap-16">
              {culturalGuidelines.map((item) => (
                <div key={item.title} className="flex items-start gap-6 bg-white rounded-xl shadow border border-gray-100 p-8">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-cyan-100 border border-cyan-200 rounded-lg mr-6">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-gray-800 mb-4">{item.title}</div>
                    <div className="text-gray-500 text-base leading-relaxed max-w-3xl">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 价值观 */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-2">价值观</h2>
            <p className="mb-6 text-gray-600">诚信、创新、以客户为中心的核心价值观</p>
            <div className="h-1 w-full bg-gray-100 mb-8" />
            <div className="flex flex-col gap-16">
              {values.map((item) => (
                <div key={item.title} className="flex items-start gap-6 bg-white rounded-xl shadow border border-gray-100 p-8">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-teal-100 border border-teal-200 rounded-lg mr-6">
                    <span className="text-3xl">{item.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-2xl font-bold text-gray-800 mb-4">{item.title}</div>
                    <div className="text-gray-500 text-base leading-relaxed max-w-3xl">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}