import { Page } from '../components/Page';
import { motion } from 'motion/react';

export function Page5Creator() {
  const sections = [
    { title: "Project Includes", items: ["60 Total Reels", "Cinematic & Transition Focus", "Basic Content Planning"] },
    { title: "Production", items: ["3 Shoot Days", "6 Hours Per Shoot", "Professional Camera & Lighting"] },
    { title: "Editing", items: ["Cinematic Color Grading", "Trending Audio Selection", "Standard Graphic Overlays"] },
    { title: "Timeline", items: ["15 Working Days Delivery", "2 Revisions Included"] },
    { title: "Client Responsibilities", items: ["Provide Models & Outfits", "Approve Audio Tracks"] },
    { title: "Payment Terms", items: ["50% Advance to Confirm Dates", "50% Before Final Delivery"] }
  ];

  return (
    <Page id="creator">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 sm:pb-10 mb-10 sm:mb-16">
          <div>
            <h3 className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-amber-500/80 uppercase mb-2 sm:mb-3">Package 01</h3>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white print-invert">
              Creator Package
            </h2>
          </div>
          <div className="mt-6 sm:mt-8 md:mt-0 md:text-right">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-amber-500/80 uppercase mb-1 sm:mb-2">Investment</p>
            <p className="text-3xl sm:text-4xl font-light text-white print-invert">₹30,000</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {sections.map((section, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-amber-50/10 hover:border-white/20 transition-colors print-invert"
            >
              <h3 className="text-xs font-semibold tracking-[0.2em] text-white uppercase mb-6 print-invert">{section.title}</h3>
              <ul className="space-y-4">
                {section.items.map((item, i) => (
                  <li key={i} className="text-sm text-rose-200 font-light flex items-start gap-3">
                    <span className="text-rose-400/50 mt-1">―</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </Page>
  );
}
