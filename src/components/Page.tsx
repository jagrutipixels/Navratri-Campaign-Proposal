import { ReactNode } from 'react';
import { motion } from 'motion/react';

export function Page({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <div id={id} className={`print-page w-full min-h-screen flex flex-col justify-center px-4 py-16 sm:px-12 md:px-24 border-b border-white/10 relative overflow-hidden ${className}`}>
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-5xl mx-auto relative z-10"
      >
        {children}
      </motion.div>
    </div>
  );
}

