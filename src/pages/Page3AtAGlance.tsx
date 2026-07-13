import { Page } from '../components/Page';
import { motion } from 'motion/react';

export function Page3AtAGlance() {
  const details = [
    { label: "Total Reels", value: "60", span: "col-span-1" },
    { label: "Shoot Days", value: "3", span: "col-span-1" },
    { label: "Hours Per Shoot", value: "6", span: "col-span-1 sm:col-span-2 md:col-span-1" },
    { label: "Delivery Timeline", value: "15 Working Days", span: "col-span-1 sm:col-span-2" },
    { label: "Revisions", value: "2", span: "col-span-1" },
    { label: "Content Style", value: "Cinematic + Transition", span: "col-span-1 sm:col-span-3" },
  ];

  return (
    <Page id="at-a-glance">
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white mb-10 sm:mb-16 print-invert">
          At a Glance
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {details.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-amber-50/10 hover:border-white/20 transition-colors flex flex-col justify-center ${item.span} print-invert`}
            >
              <h3 className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-amber-500/80 uppercase mb-2 sm:mb-3">{item.label}</h3>
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-white print-invert">{item.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Page>
  );
}
