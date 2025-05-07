import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

const tabs = [
  { key: 'governance', label: '企业管治', content: <Governance /> },
  { key: 'announcements', label: '公告通告', content: <Announcements /> },
  { key: 'prospectus', label: '招股文件', content: <Prospectus /> },
  { key: 'reports', label: '定期报告', content: <Reports /> },
  { key: 'news', label: '公司新闻', content: <CompanyNews /> },
  { key: 'calls', label: '电话会议', content: <Calls /> },
  { key: 'analysts', label: '分析师列表', content: <Analysts /> },
  { key: 'contact', label: '联系方式', content: <Contact /> },
];

function Governance() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">企业管治</h2>
      <p className="text-gray-700">微盟集团（「微盟」或「本公司」），连同其附属公司及为会计目的而综合入账的公司合称为「本集团」）为中国领先的中小企业云端商业及营销解决方案提供商。本公司的股份将在香港联交所主板上市。</p>
      <p className="text-gray-700">微盟董事声明本集团须按照诚信的原则及遵循适合的管治方法经营业务。</p>
    </div>
  );
}

function Announcements() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">公告通告</h2>
      <p>这里是公告通告的内容。</p>
    </div>
  );
}

function Prospectus() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">招股文件</h2>
      <p>这里是招股文件的内容。</p>
    </div>
  );
}

function Reports() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">定期报告</h2>
      <p>这里是定期报告的内容。</p>
    </div>
  );
}

function CompanyNews() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">公司新闻</h2>
      <p>这里是公司新闻的内容。</p>
    </div>
  );
}

function Calls() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">电话会议</h2>
      <p>这里是电话会议的内容。</p>
    </div>
  );
}

function Analysts() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">分析师列表</h2>
      <p>这里是分析师列表的内容。</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">联系方式</h2>
      <p>这里是联系方式的内容。</p>
    </div>
  );
}

export default function InvestorRelations() {
  const [active, setActive] = useState('governance');
  const currentTab = tabs.find((t) => t.key === active) || tabs[0];

  return (
    <>
      <Head>
        <title>投资者关系 - 企业官网</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* 面包屑 */}
        <div className="text-sm text-gray-500 mb-6 flex items-center space-x-1">
          <Link href="/" className="hover:text-primary-600">首页</Link>
          <span>&gt;</span>
          <span className="text-primary-600">投资者关系</span>
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