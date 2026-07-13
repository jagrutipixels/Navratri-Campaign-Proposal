import { Page } from '../components/Page';
import { motion } from 'motion/react';

export function Page7Terms() {
  const terms = [
    "Pricing valid for 60 reels exactly.",
    "Quotation may change if requirement drops below 50 reels.",
    "Shoot dates confirmed only after advance payment is received.",
    "Editing starts strictly after the final shoot day.",
    "2 revisions are included per reel.",
    "Extra revisions will be chargeable.",
    "Extra reels beyond the initial scope are chargeable.",
    "Extra shoot hours beyond the agreed duration are chargeable.",
    "Client to arrange all required models.",
    "Client to finalize topics prior to the shoot.",
    "Client to arrange all necessary outfits.",
    "Client to provide or approve audio tracks.",
    "Client to arrange food and refreshments during shoot days."
  ];

  return (
    <Page id="terms">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-12 sm:mb-16 print-invert">
          Terms & Conditions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 sm:gap-x-16 gap-y-6 sm:gap-y-8">
          {terms.map((term, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              key={index} 
              className="flex items-start gap-4 group cursor-default"
            >
              <span className="text-rose-400/50 mt-2 text-[10px] group-hover:text-rose-200 transition-colors">■</span>
              <p className="text-base font-light text-rose-200 group-hover:text-zinc-200 transition-colors leading-relaxed">{term}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Page>
  );
}
