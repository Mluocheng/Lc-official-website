import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';

export default function NewsAndBrand() {
  const [activeTab, setActiveTab] = useState('news');

  const renderContent = () => {
    if (activeTab === 'news') {
      return (
        <div className="flex-1 bg-white rounded-lg shadow p-12 min-h-[600px]">
          <h2 className="text-3xl font-bold mb-2">新闻及品牌资料</h2>
          <img src="/images/wos01.png" alt="示例图片" className="w-full h-auto mb-4" />
          <p>这里是新闻及品牌资料的内容。</p>
        </div>
      );
    } else if (activeTab === 'brand') {
      return (
        <div className="flex-1 bg-white rounded-lg shadow p-12 min-h-[600px]">
          <h2 className="text-3xl font-bold mb-2">品牌资料</h2>
          <p>品牌LOGO图片仅供获得认可的媒体代表发布新闻使用。使用图片时，请标明图片来源为微盟集团官方网站。任何人未经微盟集团书面同意，不得使用这些图片作任何其他用途。图片可以按比例调整大小，但不能以任何其他方式修改。</p>
          <ul className="mt-4 space-y-2">
            <li className="flex items-center gap-4">
              <span className="font-bold"># 微盟蓝 #</span>
              <span>R0 G104 B255</span>
              <span>C100 M52 Y0 K0</span>
              <span>HEX: 0068ff</span>
              <span>Pantone: 285C</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="font-bold"># 协同蓝 #</span>
              <span>R13 G187 B255</span>
              <span>C68 M0 Y0 K0</span>
              <span>HEX: 0dbbff</span>
              <span>Pantone: 298C</span>
            </li>
            <li className="flex items-center gap-4">
              <span className="font-bold"># 活力蓝 #</span>
              <span>R26 G239 B255</span>
              <span>C54 M0 Y6 K0</span>
              <span>HEX: 1aefff</span>
              <span>Pantone: 305C</span>
            </li>
          </ul>
        </div>
      );
    }
  };

  return (
    <>
      <Head>
        <title>新闻及品牌资料 - 企业官网</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* 面包屑 */}
        <div className="text-sm text-gray-500 mb-6 flex items-center space-x-1">
          <Link href="/" className="hover:text-primary-600">首页</Link>
          <span>&gt;</span>
          <span className="text-primary-600">新闻及品牌资料</span>
        </div>

        <div className="flex gap-8">
          {/* 左侧Tab */}
          <div className="bg-white rounded-lg shadow w-64 p-0 flex flex-col divide-y divide-gray-100">
            <button
              className={`flex items-center gap-3 px-8 py-6 text-lg font-medium transition-colors text-left ${activeTab === 'news' ? 'text-primary-600 bg-blue-50 border-l-4 border-primary-500' : 'text-gray-400 hover:text-primary-500'}`}
              onClick={() => setActiveTab('news')}
            >
              新闻列表
            </button>
            <button
              className={`flex items-center gap-3 px-8 py-6 text-lg font-medium transition-colors text-left ${activeTab === 'brand' ? 'text-primary-600 bg-blue-50 border-l-4 border-primary-500' : 'text-gray-400 hover:text-primary-500'}`}
              onClick={() => setActiveTab('brand')}
            >
              品牌资料
            </button>
          </div>
          {/* 右侧内容区 */}
          {renderContent()}
        </div>
      </div>
    </>
  );
}