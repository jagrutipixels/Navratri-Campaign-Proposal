import { Page } from '../components/Page';
import { Globe, Image as ImageIcon, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function Page2About() {
  const list = [
    "Recent Work",
    "Commercial Shoots",
    "Fashion Content",
    "Product Videos",
    "Brand Campaigns"
  ];

  return (
    <Page id="about">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-6 sm:mb-10 print-invert">
          About Icreatepixels
        </h2>
        
        <p className="text-lg sm:text-xl text-rose-200 leading-relaxed mb-12 sm:mb-20 max-w-2xl font-light">
          We are a premium content creation agency specializing in high-quality visual storytelling. 
          We help brands elevate their digital presence through compelling photography and videography.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-24">
          <motion.a 
            whileHover={{ y: -5, scale: 1.02 }}
            href="https://www.icreatepixels.in" 
            className="group p-6 sm:p-8 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-amber-50/5 transition-all rounded-2xl flex items-center gap-4 sm:gap-6 print-invert"
          >
            <div className="p-3 sm:p-4 bg-white/10 group-hover:bg-amber-50/20 transition-colors rounded-xl print-invert">
              <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-medium text-white print-invert">Website</p>
              <p className="text-xs sm:text-sm text-amber-500/80 mt-1">icreatepixels.in</p>
            </div>
          </motion.a>

          <motion.a 
            whileHover={{ y: -5, scale: 1.02 }}
            href="https://www.icreatepixels.in/portfolio" 
            className="group p-6 sm:p-8 bg-white/5 border border-white/10 hover:border-white/30 hover:bg-amber-50/5 transition-all rounded-2xl flex items-center gap-4 sm:gap-6 print-invert"
          >
            <div className="p-3 sm:p-4 bg-white/10 group-hover:bg-amber-50/20 transition-colors rounded-xl print-invert">
              <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <p className="text-base sm:text-lg font-medium text-white print-invert">Portfolio</p>
              <p className="text-xs sm:text-sm text-amber-500/80 mt-1">View our work</p>
            </div>
          </motion.a>
        </div>

        <div>
          <h3 className="text-[10px] sm:text-sm font-semibold tracking-[0.2em] text-rose-300/80 uppercase mb-6 sm:mb-8">What You'll Find</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-6 gap-x-12">
            {list.map((item, i) => (
              <motion.div 
                key={item} 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 sm:gap-4 text-orange-100"
              >
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-rose-300/80" />
                <span className="text-base sm:text-lg font-light">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}
