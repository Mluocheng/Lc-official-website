import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

const tabs = [
  { key: 'report', label: 'ESG报告', content: <ESGReport /> },
  { key: 'news', label: 'ESG新闻和荣誉', content: <ESGNews /> },
  { key: 'practice', label: 'ESG实践', content: <ESGPractice /> },
];

function ESGReport() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">ESG报告</h2>
      <ul className="list-disc pl-5">
        <li>2024 微盟环境、社会及管治 (ESG) 报告</li>
        <li>2024 微盟温室气体排放报告</li>
        <li>2023 微盟环境、社会及管治 (ESG) 报告</li>
        <li>2023 微盟环境信息披露 (TCFD) 报告</li>
        <li>2023 微盟温室气体排放报告</li>
        <li>2022 微盟环境、社会及管治 (ESG) 报告</li>
        <li>2021 微盟环境、社会及管治 (ESG) 报告</li>
        <li>2020 微盟环境、社会及管治 (ESG) 报告</li>
        <li>2019 微盟环境、社会及管治 (ESG) 报告</li>
        <li>2018 微盟环境、社会及管治 (ESG) 报告</li>
      </ul>
    </div>
  );
}

function ESGNews() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">ESG新闻和荣誉</h2>
      <p>这里是ESG新闻和荣誉的内容。</p>
    </div>
  );
}

function ESGPractice() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">ESG实践</h2>
      <p>这里是ESG实践的内容。</p>
    </div>
  );
}

export default function ESG() {
  const [active, setActive] = useState('report');
  const currentTab = tabs.find((t) => t.key === active) || tabs[0];

  return (
    <>
      <Head>
        <title>ESG - 企业官网</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* 面包屑 */}
        <div className="text-sm text-gray-500 mb-6 flex items-center space-x-1">
          <Link href="/" className="hover:text-primary-600">首页</Link>
          <span>&gt;</span>
          <span className="text-primary-600">ESG</span>
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