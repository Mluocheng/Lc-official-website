import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Case } from '@/types';

const cases: Case[] = [
  {
    title: '某大型制造企业数字化转型',
    description: '通过我们的解决方案，帮助客户实现了生产流程的数字化管理，提升了30%的生产效率',
    image: 'https://via.placeholder.com/400x300',
    category: '制造业',
  },
  {
    title: '某零售集团智能营销升级',
    description: '利用AI技术，为客户打造智能营销系统，实现精准营销，销售额提升40%',
    image: 'https://via.placeholder.com/400x300',
    category: '零售业',
  },
  {
    title: '某金融机构数据分析平台',
    description: '构建数据分析平台，帮助客户实现数据驱动决策，风险控制能力显著提升',
    image: 'https://via.placeholder.com/400x300',
    category: '金融业',
  },
];

export const CaseStudies = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">成功案例</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们已成功服务超过1000家企业，助力他们实现数字化转型
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((case_, index) => (
            <motion.div
              key={case_.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={case_.image}
                  alt={case_.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-primary-600 bg-primary-50 rounded-full mb-4">
                  {case_.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{case_.title}</h3>
                <p className="text-gray-600">{case_.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn">
            查看更多案例
          </button>
        </div>
      </div>
    </section>
  );
}; 