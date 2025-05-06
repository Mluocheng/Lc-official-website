import { motion } from 'framer-motion';

export const HeroSection = () => {
  return (
    <section className="relative bg-black text-white pt-16 h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* 视频背景 */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="//1252328573.vod2.myqcloud.com/de94f6e5vodgzp1252328573/15f3df435576678020500456228/rE3g9nruC1IA.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* 遮罩层 */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      {/* 内容 */}
      <div className="container relative z-20 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          让增长持续发生
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-xl md:text-2xl mb-8 tracking-widest"
        >
          香港主板上市 股票代码：2025.HK
        </motion.p>
      </div>
    </section>
  );
}; 