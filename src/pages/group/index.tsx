import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function GroupInfo() {
  return (
    <>
      <Head>
        <title>集团信息 - 企业官网</title>
      </Head>
      <div className="max-w-7xl mx-auto px-4 py-8 pt-24">
        {/* 面包屑导航 */}
        <div className="text-sm text-gray-500 mb-6 flex items-center space-x-1">
          <Link href="/" className="hover:text-primary-600">首页</Link>
          <span>&gt;</span>
          <span>集团信息</span>
          <span>&gt;</span>
          <span className="text-primary-600">集团介绍</span>
        </div>
        {/* 集团介绍 左文右图 */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-6">介绍</h1>
            <p className="mb-4 text-lg text-gray-800">
              集团（股票代码：2013.HK），中国的云端商业及营销解决方案提供商，致力于为商家提供去中心化的数字化转型SaaS产品及全链路增长服务，助力商家经营可持续增长。
            </p>
            <p className="mb-4 text-gray-700">
              为众多商家提供海量应用与产品服务，并面向电商零售、商超生鲜、商业地产、购百等行业提供数字化解决方案。基于10年的商业实践，构建了WOS新商业操作系统，为企业数字化转型打造出一整套去中心化的商业基础设施，通过多端一体化产品服务矩阵，助力商家智慧经营。同时，也为开发者群体提供强大的PaaS平台，通过开放核心产品技术能力，吸引第三方生态伙伴和开发者共同打造云端商业生态体系，实现企业服务价值共创共享，从而为商家提供更多应用选择和更好服务。
            </p>
            <p className="text-gray-700">
              致力于通过产品和服务，助力企业数字化升级，通过数字科技驱动商业革新，让商业变得更智慧！
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <Image src="/images/wos01.png" alt="集团介绍" width={500} height={320} className="rounded-lg object-cover" />
          </div>
        </div>
        {/* 集团使命/愿景 */}
        <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg p-8 mb-12 items-center gap-8">
          <div className="flex-1 flex justify-center mb-6 md:mb-0">
            <Image src="/images/wos02.png" alt="集团使命" width={350} height={220} className="rounded-lg object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">集团使命</h2>
            <p className="mb-6 text-gray-700 text-lg">通过数字科技驱动商业革新，让商业变得更智慧</p>
            <h2 className="text-2xl font-bold mb-4">集团愿景</h2>
            <p className="text-gray-700 text-lg">成为企业数字化升级最佳伙伴</p>
          </div>
        </div>
        {/* 发展历程 背景图+绝对定位节点 */}
        {/* <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">发展历程</h2>
          <div className="relative w-full max-w-6xl mx-auto h-[400px]">
            {/* 背景图 */}
            {/* <img src="/images/lineBG.png" alt="发展历程线" className="absolute left-0 top-0 w-full h-full object-contain z-0 select-none pointer-events-none" /> */}
            {/* 节点数据 */}
            {/* {[
              { year: '2023年', events: ['发布WAI，布局"SaaS+AI"', '组织变革升级，成立正服、营销、国际三大子集团', '品牌升级，发布全新品牌价值主张'], left: '6%', top: '12%' },
              { year: '2022年', events: ['发布WOS，打造去中心化商业操作系统', '成为首批微信视频号官方综合运营服务商', '总部大厦奠基'], left: '20%', top: '7%' },
              { year: '2021年', events: ['设立数据智能产业基金，布局云计算和AI、大数据', '完成6亿美元融资，研发新一代数字商业平台'], left: '36%', top: '5%' },
              { year: '2020年', events: ['发布大客化、生态化、国际化战略', '收购海鼎、雅座，深化智慧零售及智慧餐饮布局'], left: '52%', top: '8%' },
              { year: '2019年', events: ['成功于香港主板上市（股票代码：2013.HK）', '设立短视频中心，完善短视频布局'], left: '68%', top: '16%' },
              { year: '2018年', events: ['基于小程序，推出智慧零售、智慧酒店等解决方案', '完成D轮融资，总额超2亿美元'], left: '80%', top: '30%' },
              { year: '2017年', events: ['推出云开放平台', '成为首批微信小程序服务提供商'], left: '88%', top: '48%' },
              { year: '2016年', events: ['成立精准营销事业部，成为微信广告首个服务商，首创营销+工具模式', '推出智慧餐饮解决方案'], left: '82%', top: '68%' },
              { year: '2015年', events: ['推出客来店等SaaS垂直行业解决方案'], left: '68%', top: '80%' },
              { year: '2014年', events: ['召开首届代理商大会，全球代理商'], left: '52%', top: '88%' },
              { year: '2013年', events: ['成立，推出首款SaaS产品'], left: '36%', top: '85%' },
            ].map((item, idx) => (
              <div
                key={item.year}
                className="absolute flex flex-col items-center z-10"
                style={{ left: item.left, top: item.top, width: '120px', transform: 'translate(-50%, -50%)' }}
              >
                <div className="w-5 h-5 bg-primary-400 rounded-full border-4 border-white shadow mb-2" />
                <div className="text-lg md:text-2xl font-bold mb-2 whitespace-nowrap">{item.year}</div>
                <ul className="text-gray-700 text-xs md:text-base space-y-1 text-left">
                  {item.events.map((e, i) => (
                    <li key={i}>• {e}</li>
                  ))}
                </ul>
              </div>
            ))} */}
          {/* </div> */}
          {/* 移动端纵向时间轴 */}
          {/* <div className="md:hidden flex flex-col gap-10 mt-8">
            {[
              { year: '2023年', events: ['发布WAI，布局"SaaS+AI"', '组织变革升级，成立正服、营销、国际三大子集团', '品牌升级，发布全新品牌价值主张'] },
              { year: '2022年', events: ['发布WOS，打造去中心化商业操作系统', '成为首批微信视频号官方综合运营服务商', '总部大厦奠基'] },
              { year: '2021年', events: ['设立数据智能产业基金，布局云计算和AI、大数据', '完成6亿美元融资，研发新一代数字商业平台'] },
              { year: '2020年', events: ['发布大客化、生态化、国际化战略', '收购海鼎、雅座，深化智慧零售及智慧餐饮布局'] },
              { year: '2019年', events: ['成功于香港主板上市（股票代码：2013.HK）', '设立短视频中心，完善短视频布局'] },
              { year: '2018年', events: ['基于小程序，推出智慧零售、智慧酒店等解决方案', '完成D轮融资，总额超2亿美元'] },
              { year: '2017年', events: ['推出云开放平台', '成为首批微信小程序服务提供商'] },
              { year: '2016年', events: ['成立精准营销事业部，成为微信广告首个服务商，首创营销+工具模式', '推出智慧餐饮解决方案'] },
              { year: '2015年', events: ['推出客来店等SaaS垂直行业解决方案'] },
              { year: '2014年', events: ['召开首届代理商大会，全球代理商'] },
              { year: '2013年', events: ['成立，推出首款SaaS产品'] },
            ].map((item) => (
              <div key={item.year} className="flex flex-col items-center">
                <div className="w-5 h-5 bg-primary-400 rounded-full border-4 border-white shadow mb-2 z-10" />
                <div className="text-2xl font-semibold mb-2">{item.year}</div>
                <ul className="font-normal text-[12px] text-gray-400 space-y-1 text-left">
                  {item.events.map((e, i) => (
                    <li key={i}>• {e}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
        {/* </div> */}
        {/* 团队管理 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">团队管理</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {[
              {
                name: '孙涛勇',
                avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
                title: '集团董事会主席兼CEO',
                sub: '国际集团董事长兼CEO',
              },
              {
                name: '方桐舒',
                avatar: 'https://randomuser.me/api/portraits/men/33.jpg',
                title: '集团执行董事',
                sub: '企服集团董事长',
              },
              {
                name: '游凤椿',
                avatar: 'https://randomuser.me/api/portraits/men/34.jpg',
                title: '集团总裁',
                sub: '营销集团董事长兼CEO',
              },
              {
                name: '黄骏伟',
                avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
                title: '集团高级副总裁',
                sub: '集团首席技术官',
              },
              {
                name: '曹懿',
                avatar: 'https://randomuser.me/api/portraits/men/36.jpg',
                title: '集团高级副总裁',
                sub: '集团首席财务官',
              },
              {
                name: '费雷鸣',
                avatar: 'https://randomuser.me/api/portraits/men/37.jpg',
                title: '集团执行董事',
                sub: '集团首席人力官',
              },
            ].map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-white shadow"
                />
                <div className="text-xl font-bold mb-1">{member.name}</div>
                <div className="text-primary-600 text-base font-medium mb-1">{member.title}</div>
                <div className="text-primary-600 text-base">{member.sub}</div>
              </div>
            ))}
          </div>
        </div>
        {/* 集团荣誉 轮播（coverflow卡片效果） */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">集团荣誉</h2>
          <div className="max-w-4xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView={3}
              initialSlide={2}
              navigation
              pagination={{ clickable: true }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 200,
                modifier: 1.5,
                slideShadows: true,
              }}
              className="group"
              style={{ paddingBottom: 48 }}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {[
                {
                  img: 'https://picsum.photos/id/1011/400/500',
                  title: '荣誉证书示例一',
                },
                {
                  img: 'https://picsum.photos/id/1012/400/500',
                  title: '荣誉证书示例二',
                },
                {
                  img: 'https://picsum.photos/id/1013/400/500',
                  title: '荣誉证书示例三',
                },
                {
                  img: 'https://picsum.photos/id/1015/400/500',
                  title: '荣誉证书示例四',
                },
                {
                  img: 'https://picsum.photos/id/1016/400/500',
                  title: '荣誉证书示例五',
                },
              ].map((item, idx) => (
                <SwiperSlide key={idx}>
                  <div className="bg-white rounded-lg shadow-xl w-80 mx-auto p-4 flex flex-col items-center">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-64 h-80 object-cover rounded mb-4 shadow-lg"
                    />
                    <div className="text-center text-base text-gray-700 font-medium min-h-[48px] flex items-center justify-center">{item.title}</div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* 发展历程、团队管理、集团荣誉等后续补充 */}
      </div>
    </>
  );
} 