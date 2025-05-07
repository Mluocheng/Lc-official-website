import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

const saasProducts = [
  {
    icon: '🛒',
    title: '微商城',
    desc: '微盟微商城是面向电商行业商家的全渠道全场景私域开店解决方案。商家可一键开通微信、支付宝、百度、小红书等多渠道店铺，并实现统一后台管理和经营，快速实现流量沉淀、转化变现、会员沉淀、裂变增长的全流程运营，以私域经营带动品牌可持续增长。',
  },
  {
    icon: '💬',
    title: '企微助手',
    desc: '微盟企微助手是基于企业微信的全链路客户运营增长解决方案，帮助企业沉淀私域流量池，助力企业通过数字化运营工具低成本实现获客和客户运营， 加速客户变现转化，促进持续增长。',
  },
  {
    icon: '🔄',
    title: 'WAI',
    desc: '微盟AI产品WAI通过先进的AIGC技术，覆盖品牌全链路场景，赋能商家进行高效获客、图文创作、营销推广、客户陪伴、客户洞察等能力，构建线上私域经营，助力商家智慧经营降本增效，驱动企业新增长力。',
  },
  {
    icon: '▶️',
    title: '视频号助手',
    desc: '微盟视频号助手，聚合运营、数据监控、私域运营、转化成交、直播带货等一站式解决方案，助力商家实现公私域一体化经营。',
  },
];

const solutions = [
  {
    icon: '🏬',
    title: '智慧零售',
    desc: '为零售企业提供全渠道数字化解决方案，打通线上线下会员、商品、营销、服务，助力企业实现全域增长。',
  },
  {
    icon: '🍽️',
    title: '智慧餐饮',
    desc: '为餐饮企业提供数字化门店、外卖、会员、营销一体化解决方案，提升经营效率和客户体验。',
  },
  {
    icon: '🏢',
    title: '智慧地产',
    desc: '为地产企业提供营销获客、客户管理、社群运营等全流程数字化解决方案，助力企业数字化转型。',
  },
  {
    icon: '🎓',
    title: '智慧教育',
    desc: '为教育培训机构提供招生、教务、家校互动等一站式数字化解决方案。',
  },
];

const services = [
  {
    icon: '🧑‍💼',
    title: '运营服务',
    desc: '专业团队为商家提供运营、培训、活动策划、数据分析等全方位服务，助力商家高效经营。',
  },
  {
    icon: '🛠️',
    title: '技术服务',
    desc: '为商家提供定制开发、系统集成、平台对接、技术支持等服务，保障业务稳定运行。',
  },
  {
    icon: '📞',
    title: '客户支持',
    desc: '7x24小时客户支持，快速响应商家需求，解决使用过程中的各类问题。',
  },
  {
    icon: '📈',
    title: '增长咨询',
    desc: '为商家提供数字化增长咨询、行业趋势分析、营销策略建议，助力企业持续成长。',
  },
];

const tabs = [
  {
    key: 'saas',
    label: 'SaaS产品',
    icon: <span className="text-2xl">🟦</span>,
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">SaaS产品</h2>
        <p className="mb-6 text-gray-600">全场景全链路的SaaS产品，助力企业数字升级</p>
        <div className="h-1 w-full bg-gray-100 mb-8" />
        <div className="flex flex-col gap-16">
          {saasProducts.map((item) => (
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
      </>
    ),
  },
  {
    key: 'solution',
    label: '解决方案',
    icon: <span className="text-2xl">📚</span>,
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">解决方案</h2>
        <p className="mb-6 text-gray-600">覆盖零售、餐饮、地产、教育等多行业数字化解决方案。</p>
        <div className="h-1 w-full bg-gray-100 mb-8" />
        <div className="flex flex-col gap-16">
          {solutions.map((item) => (
            <div key={item.title} className="flex items-start gap-6 bg-white rounded-xl shadow border border-gray-100 p-8">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-blue-100 border border-blue-200 rounded-lg mr-6">
                <span className="text-3xl">{item.icon}</span>
              </div>
              <div className="flex-1">
                <div className="text-2xl font-bold text-gray-800 mb-4">{item.title}</div>
                <div className="text-gray-500 text-base leading-relaxed max-w-3xl">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    ),
  },
  {
    key: 'service',
    label: '商家服务',
    icon: <span className="text-2xl">🏪</span>,
    content: (
      <>
        <h2 className="text-3xl font-bold mb-2">商家服务</h2>
        <p className="mb-6 text-gray-600">为商家提供全生命周期的数字化服务与支持。</p>
        <div className="h-1 w-full bg-gray-100 mb-8" />
        <div className="flex flex-col gap-16">
          {services.map((item) => (
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
      </>
    ),
  },
];

export default function Business() {
  const [active, setActive] = useState('saas');
  const currentTab = tabs.find((t) => t.key === active) || tabs[0];
  return (
    <>
      <Head>
        <title>业务体系 - 企业官网</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* 面包屑 */}
        <div className="text-sm text-gray-500 mb-6 flex items-center space-x-1">
          <Link href="/" className="hover:text-primary-600">首页</Link>
          <span>&gt;</span>
          <span className="text-primary-600">业务体系</span>
        </div>
        <div className="flex gap-8">
          {/* 左侧Tab */}
          <div className="bg-white rounded-lg shadow w-64 p-0 flex flex-col divide-y divide-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                className={`flex items-center gap-3 px-8 py-6 text-lg font-medium transition-colors text-left ${active === tab.key ? 'text-primary-600 bg-blue-50 border-l-4 border-primary-500' : 'text-gray-400 hover:text-primary-500'}`}
                onClick={() => setActive(tab.key)}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
          {/* 右侧内容区 */}
          <div className="flex-1 bg-white rounded-lg shadow p-12 min-h-[600px]">
            {currentTab.content}
          </div>
        </div>
      </div>
    </>
  );
} 