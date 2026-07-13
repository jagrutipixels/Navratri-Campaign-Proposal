import { Page } from '../components/Page';
import { Globe, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';

export function Page8ThankYou() {
  return (
    <Page id="contact" className="items-center text-center border-b-0 min-h-[80vh]">
      <div className="flex-1 flex flex-col justify-center items-center w-full relative">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] sm:w-[800px] h-[150vw] sm:h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none" />

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-light tracking-tight text-white mb-6 sm:mb-10 relative z-10 print-invert">
          Thank You.
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-amber-500/80 mb-16 sm:mb-24 font-light relative z-10 text-center px-4">
          We look forward to creating together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 mb-20 sm:mb-32 relative z-10 w-full px-2 sm:px-0">
          <motion.a 
            whileHover={{ y: -2 }}
            href="https://www.icreatepixels.in" 
            className="flex items-center justify-center w-full sm:w-auto gap-3 sm:gap-4 px-6 sm:px-8 py-4 rounded-full bg-white/10 border border-white/10 hover:bg-amber-50 hover:text-rose-950 transition-all group print-invert"
          >
            <Globe className="w-5 h-5 shrink-0 text-amber-500/80 group-hover:text-rose-950 transition-colors" />
            <span className="text-sm font-medium">icreatepixels.in</span>
          </motion.a>
          
          <motion.a 
            whileHover={{ y: -2 }}
            href="https://www.icreatepixels.in/portfolio" 
            className="flex items-center justify-center w-full sm:w-auto gap-3 sm:gap-4 px-6 sm:px-8 py-4 rounded-full bg-white/10 border border-white/10 hover:bg-amber-50 hover:text-rose-950 transition-all group print-invert"
          >
            <ImageIcon className="w-5 h-5 shrink-0 text-amber-500/80 group-hover:text-rose-950 transition-colors" />
            <span className="text-sm font-medium">View Portfolio</span>
          </motion.a>
        </div>

        <p className="text-[8px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.4em] text-rose-300/80 uppercase relative z-10 text-center">
          Creating Successful Frames, Pixel by Pixel.
        </p>

      </div>
    </Page>
  );
}
