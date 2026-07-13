import { Page } from '../components/Page';
import { motion } from 'motion/react';

export function Page6Brand() {
  return (
    <Page id="brand">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 sm:pb-10 mb-10 sm:mb-12">
          <div>
            <h3 className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-amber-500/80 uppercase mb-2 sm:mb-3">Package 02</h3>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white print-invert">
              Brand Content
            </h2>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-0 md:text-right">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-amber-500/80 uppercase mb-1 sm:mb-2">Investment</p>
            <p className="text-3xl sm:text-4xl font-light text-white print-invert">₹50,000</p>
          </div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="mb-10 sm:mb-16 p-6 sm:p-10 bg-gradient-to-br from-rose-900/40 to-orange-900/40 border border-white/10 rounded-3xl relative overflow-hidden print-invert"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 rounded-full blur-[60px] pointer-events-none" />
          <h3 className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-white uppercase mb-3 sm:mb-4 print-invert">The Difference</h3>
          <p className="text-base sm:text-lg text-rose-200 leading-relaxed font-light max-w-3xl relative z-10">
            This package includes dedicated time for pre-production and content strategy. 
            We meticulously plan the content before shooting, ensuring we capture both 
            engaging lifestyle visuals and informative brand narratives.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-12">
          <motion.section 
            whileHover={{ y: -5 }}
            className="p-6 sm:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors print-invert"
          >
            <div className="flex flex-col mb-8 sm:mb-10 border-b border-white/10 pb-6 sm:pb-8">
              <span className="text-5xl sm:text-6xl font-light text-rose-400/50 mb-3 sm:mb-4 tracking-tighter">60%</span>
              <h3 className="text-lg sm:text-xl font-medium text-white print-invert">Lifestyle Content</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {["Transition Reels", "Collection Showcase", "Cinematic Reels", "Fashion Videos"].map((item, i) => (
                <li key={i} className="text-sm sm:text-base text-rose-200 font-light flex items-center gap-3 sm:gap-4">
                  <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-white/20" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section 
             whileHover={{ y: -5 }}
             className="p-6 sm:p-10 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors print-invert"
          >
            <div className="flex flex-col mb-8 sm:mb-10 border-b border-white/10 pb-6 sm:pb-8">
              <span className="text-5xl sm:text-6xl font-light text-rose-400/50 mb-3 sm:mb-4 tracking-tighter">40%</span>
              <h3 className="text-lg sm:text-xl font-medium text-white print-invert">Brand Content</h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {["Talking Videos", "Product Explainers", "Outfit Breakdowns", "Store Walkthrough", "Owner Introduction", "FAQs & Behind the Scenes"].map((item, i) => (
                <li key={i} className="text-sm sm:text-base text-rose-200 font-light flex items-center gap-3 sm:gap-4">
                  <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-white/20" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        <motion.div 
          whileHover={{ y: -2 }}
          className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-16 sm:mb-20 print-invert relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-800/20 to-transparent pointer-events-none" />
          <div className="w-12 h-12 rounded-full bg-white text-rose-950 flex items-center justify-center shrink-0 relative z-10 print-invert border border-white/20">
            <span className="text-xl">✨</span>
          </div>
          <div className="relative z-10">
            <h3 className="text-sm sm:text-base font-medium text-white mb-2 print-invert">Complimentary Value-Add: GMB Optimization</h3>
            <p className="text-xs sm:text-sm text-rose-200 font-light leading-relaxed">
              We have observed that the Google My Business (GMB) profile for Zola Mall is currently not fully optimized. As a complimentary addition from our side with this package, we will optimize the GMB profile to improve local discovery.
            </p>
          </div>
        </motion.div>

        <div className="text-center px-2">
          <p className="text-sm sm:text-base font-light italic text-amber-500/80 max-w-3xl mx-auto leading-relaxed">
            "This package is suitable for businesses that wish to balance engaging visual content 
            with informative videos that help customers better understand the brand and its products."
          </p>
        </div>
      </div>
    </Page>
  );
}
