import { Page } from '../components/Page';
import { Check, Minus } from 'lucide-react';
import { motion } from 'motion/react';

export function Page4Comparison() {
  const features = [
    { name: "Total Reels", creator: "60", brand: "60" },
    { name: "Shoot Days", creator: "3", brand: "3" },
    { name: "Content Planning", creator: "Basic", brand: "Advanced" },
    { name: "Lifestyle Content", creator: true, brand: true },
    { name: "Cinematic Editing", creator: true, brand: true },
    { name: "Advanced Transitions", creator: true, brand: true },
    { name: "Brand & Informative Content", creator: false, brand: true },
    { name: "Scripting & Concepts", creator: false, brand: true },
    { name: "Zola Mall GMB Optimization", creator: false, brand: true },
  ];

  return (
    <Page id="comparison">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-10 sm:mb-16 print-invert">
          Package Comparison
        </h2>

        <div className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-xl print-invert relative">
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 bg-white/5 print-invert">
                  <th className="py-6 px-6 sm:py-8 sm:px-8 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-amber-500/80 uppercase w-2/5">Feature</th>
                  <th className="py-6 px-6 sm:py-8 sm:px-8 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-rose-200 uppercase w-1/4 text-center border-l border-white/10">Creator Package</th>
                  <th className="py-6 px-6 sm:py-8 sm:px-8 text-[10px] sm:text-xs font-bold tracking-[0.2em] text-white uppercase w-1/4 text-center border-l border-white/10 bg-white/[0.03] print-invert">Brand Content Package</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50">
                {features.map((feature, index) => (
                  <motion.tr 
                    key={index}
                    whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.02)' }}
                    className="transition-colors group"
                  >
                    <td className="py-5 px-6 sm:py-6 sm:px-8 text-xs sm:text-sm font-medium text-orange-100 group-hover:text-white transition-colors">{feature.name}</td>
                    
                    {/* Creator Column */}
                    <td className="py-5 px-6 sm:py-6 sm:px-8 text-center border-l border-white/10">
                      {typeof feature.creator === 'boolean' ? (
                        feature.creator ? <Check className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500/80 mx-auto" /> : <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-800 mx-auto" />
                      ) : (
                        <span className="text-xs sm:text-sm text-amber-500/80">{feature.creator}</span>
                      )}
                    </td>

                    {/* Brand Content Column */}
                    <td className="py-5 px-6 sm:py-6 sm:px-8 text-center border-l border-white/10 bg-white/[0.02] group-hover:bg-amber-50/[0.03] transition-colors relative">
                      {index === 0 && <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />}
                      {typeof feature.brand === 'boolean' ? (
                        feature.brand ? <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white mx-auto print-invert" /> : <Minus className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-800 mx-auto" />
                      ) : (
                        <span className="text-xs sm:text-sm font-medium text-white print-invert">{feature.brand}</span>
                      )}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Page>
  );
}
