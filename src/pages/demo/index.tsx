import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// 动态导入GridLayout，禁用SSR
const GridLayout = dynamic(() => import('react-grid-layout'), {
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-64 text-gray-500">加载中...</div>
});

// 样式常量
const gridStyles = `
  .react-grid-layout {
    position: relative;
  }
  .react-grid-item {
    transition: all 200ms ease;
    transition-property: left, top;
  }
  .react-grid-item.cssTransforms {
    transition-property: transform;
  }
  .react-grid-item > .react-resizable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    bottom: 0;
    right: 0;
    background: linear-gradient(45deg, #2196f3, #1976d2);
    border-radius: 0 0 6px 0;
    cursor: se-resize;
    opacity: 0.8;
    transition: opacity 0.2s ease;
  }
  .react-grid-item:hover > .react-resizable-handle {
    opacity: 1;
  }
  .react-grid-item > .react-resizable-handle::after {
    content: '';
    position: absolute;
    right: 4px;
    bottom: 4px;
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-bottom: 6px solid white;
  }
  .react-grid-item.react-grid-placeholder {
    background: linear-gradient(135deg, #2196f3, #1976d2);
    opacity: 0.3;
    border: 2px dashed #2196f3;
    border-radius: 8px;
    transition-duration: 100ms;
    z-index: 2;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
    box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
  }
  .react-grid-item.react-draggable-dragging {
    transition: none;
    z-index: 1000;
    will-change: transform;
    transform: rotate(3deg) scale(1.05);
    box-shadow: 0 8px 24px rgba(33, 150, 243, 0.4);
    border-color: #2196f3;
  }
  .react-grid-item.dropping {
    visibility: hidden;
  }
  .react-grid-item > .react-resizable-handle-se {
    bottom: 0;
    right: 0;
    cursor: se-resize;
  }
  .react-grid-item > .react-resizable-handle-e {
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    cursor: e-resize;
    background: linear-gradient(to right, #2196f3, #1976d2);
    border-radius: 0 8px 8px 0;
    opacity: 0.6;
    transition: opacity 0.2s ease;
  }
  .react-grid-item > .react-resizable-handle-s {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    cursor: s-resize;
    background: linear-gradient(to bottom, #2196f3, #1976d2);
    border-radius: 0 0 8px 8px;
    opacity: 0.6;
    transition: opacity 0.2s ease;
  }
  .react-grid-item:hover > .react-resizable-handle-e,
  .react-grid-item:hover > .react-resizable-handle-s {
    opacity: 1;
  }
`;

const SimpleGridDemo: React.FC = () => {
    // 客户端渲染状态
    const [isClient, setIsClient] = useState(false);
    
    // 初始布局配置
    const [layout, setLayout] = useState([
        { i: 'a', x: 0, y: 0, w: 3, h: 2 },
        { i: 'b', x: 3, y: 0, w: 3, h: 2 },
        { i: 'c', x: 6, y: 0, w: 3, h: 2 },
        { i: 'd', x: 9, y: 0, w: 3, h: 2 },
        { i: 'e', x: 0, y: 2, w: 6, h: 3 },
        { i: 'f', x: 6, y: 2, w: 6, h: 3 },
    ]);

    // 确保只在客户端渲染
    useEffect(() => {
        setIsClient(true);
    }, []);

    // 布局变化处理
    const handleLayoutChange = (newLayout: any[]) => {
        setLayout(newLayout);
        console.log('布局已更新:', newLayout);
    };

    return (
        <>
            <Head>
                <title>拖拽缩放排序演示 - 成都LC企业发展有限公司</title>
                <meta name="description" content="拖拽缩放排序功能演示页面，展示react-grid-layout的强大功能" />
            </Head>
            
            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* 页面标题 */}
                    <div className="text-center mb-12">
                        <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            返回首页
                        </Link>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            拖拽缩放排序演示
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            使用 react-grid-layout 实现的专业级拖拽缩放排序功能演示
                        </p>
                    </div>

                    {/* 功能说明 */}
                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-4">功能特点</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">拖拽排序</h3>
                                <p className="text-gray-600 text-sm">点击并拖拽卡片到新位置来重新排列</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">自由缩放</h3>
                                <p className="text-gray-600 text-sm">拖拽边缘和角落来调整卡片大小</p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                    <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                                    </svg>
                                </div>
                                <h3 className="font-semibold text-gray-900 mb-2">响应式布局</h3>
                                <p className="text-gray-600 text-sm">自适应不同屏幕尺寸的网格布局</p>
                            </div>
                        </div>
                    </div>

                    {/* 拖拽演示区域 */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                            拖拽缩放演示区域
                        </h2>
                        <div className="bg-gray-50 p-6 rounded-lg border-2 border-dashed border-gray-300">
                            <style>{gridStyles}</style>
                            {isClient ? (
                                <GridLayout
                                    className="layout"
                                    layout={layout}
                                    cols={12}
                                    rowHeight={60}
                                    width={1200}
                                    onLayoutChange={handleLayoutChange}
                                    isDraggable={true}
                                    isResizable={true}
                                    draggableHandle=".drag-handle"
                                    resizeHandles={['se', 'e', 's']}
                                >
                    <div className="drag-handle" key="a" style={{
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }}>
                        卡片 A
                    </div>

                    <div className="drag-handle" key="b" style={{
                        background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }}>
                        卡片 B
                    </div>

                    <div key="c" className="drag-handle" style={{
                        background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }}>
                        卡片 C
                    </div>

                    <div key="d" className="drag-handle" style={{
                        background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                        fontSize: '16px',
                        fontWeight: 'bold'
                    }}>
                        卡片 D
                    </div>

                    <div key="e" className="drag-handle" style={{
                        background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>
                        大卡片 E
                    </div>

                    <div key="f" className="drag-handle" style={{
                        background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                        color: '#333',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '8px',
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>
                        大卡片 F
                    </div>
                                </GridLayout>
                            ) : (
                                <div className="flex items-center justify-center h-64 text-gray-500">
                                    <div className="text-center">
                                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                                        <p>正在加载拖拽组件...</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* 操作提示 */}
                    <div className="mt-8">
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                            <h3 className="text-lg font-semibold text-blue-900 mb-4 flex items-center">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                使用说明
                            </h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h4 className="font-medium text-blue-800 mb-2">拖拽操作：</h4>
                                    <ul className="text-blue-700 text-sm space-y-1">
                                        <li>• 点击并拖拽卡片来移动位置</li>
                                        <li>• 拖拽右下角来调整大小</li>
                                        <li>• 拖拽右边或下边来调整宽度或高度</li>
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-medium text-blue-800 mb-2">技术特性：</h4>
                                    <ul className="text-blue-700 text-sm space-y-1">
                                        <li>• 基于 react-grid-layout 实现</li>
                                        <li>• 支持响应式布局</li>
                                        <li>• 实时布局状态更新</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SimpleGridDemo;
