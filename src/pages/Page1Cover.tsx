import { Page } from '../components/Page';
import { motion } from 'motion/react';

export function Page1Cover() {
  return (
    <Page id="cover" className="items-center text-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="flex-1 flex flex-col justify-center items-center w-full relative z-10">
        <h2 className="text-[10px] sm:text-sm font-semibold tracking-[0.3em] text-amber-500/80 uppercase mb-4 sm:mb-6">
          Content Creation Proposal
        </h2>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-light tracking-tight text-white mb-16 sm:mb-24 print-invert">
          Navratri Campaign <br className="sm:hidden" /><span className="text-amber-500/80 font-serif italic">2026</span>
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16 w-full max-w-3xl text-left border-t border-white/10 pt-10 sm:pt-16">
          <div className="group cursor-default">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-rose-300/80 uppercase mb-4 group-hover:text-rose-200 transition-colors">Prepared For</h3>
            <p className="text-xl font-medium text-white print-invert">Mr. Vishal Manek</p>
            <p className="text-sm text-amber-500/80 mt-2">Zola Mall | Shraddha Boutique</p>
          </div>

          <div className="group cursor-default">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-rose-300/80 uppercase mb-4 group-hover:text-rose-200 transition-colors">Prepared By</h3>
            <p className="text-xl font-medium text-white print-invert">Icreatepixels</p>
            <div className="mt-3 space-y-2">
              <a href="https://www.icreatepixels.in" className="block text-sm text-amber-500/80 hover:text-white transition-colors relative inline-block">
                www.icreatepixels.in
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all group-hover:w-full"></span>
              </a>
              <br />
              <a href="https://www.icreatepixels.in/portfolio" className="block text-sm text-amber-500/80 hover:text-white transition-colors">
                View Portfolio &rarr;
              </a>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}
