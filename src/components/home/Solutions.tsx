import { motion } from 'framer-motion';
import type { Solution } from '@/types';

const solutions: Solution[] = [
  {
    title: '企业数字化转型',
    description: '提供全方位的企业数字化转型解决方案，助力企业实现智能化升级',
    icon: '🚀',
  },
  {
    title: '智能营销系统',
    description: '基于AI技术的智能营销系统，帮助企业精准触达目标客户',
    icon: '🎯',
  },
  {
    title: '数据分析平台',
    description: '强大的数据分析平台，助力企业实现数据驱动决策',
    icon: '📊',
  },
  {
    title: '云服务解决方案',
    description: '安全可靠的云服务解决方案，为企业提供灵活可扩展的IT基础设施',
    icon: '☁️',
  },
];

export const Solutions = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">解决方案</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            为企业提供全方位的数字化解决方案，助力企业实现智能化升级
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 