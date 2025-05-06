import { motion } from 'framer-motion';
import type { NewsItem } from '@/types';

const news: NewsItem[] = [
  {
    title: '公司荣获"2024年度最佳数字化转型服务商"称号',
    date: '2024-03-15',
    category: '公司动态',
  },
  {
    title: '新一代智能营销系统正式发布，助力企业精准营销',
    date: '2024-03-10',
    category: '产品更新',
  },
  {
    title: '公司与某大型制造企业达成战略合作',
    date: '2024-03-05',
    category: '合作动态',
  },
  {
    title: '2024年数字化转型趋势分析报告发布',
    date: '2024-03-01',
    category: '行业洞察',
  },
];

export const News = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">新闻动态</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            了解公司最新动态、产品更新和行业洞察
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">
                {item.category}
              </span>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.date}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn">
            查看更多新闻
          </button>
        </div>
      </div>
    </section>
  );
}; 