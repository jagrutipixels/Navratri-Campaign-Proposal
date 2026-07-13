import { motion } from 'motion/react';
import { Sparkles, Star, Music, Heart, Flame } from 'lucide-react';

export function NavratriPattern() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-40 print:hidden mix-blend-screen">
      {/* Glow Orbs */}
      <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-[40%] left-[60%] w-[250px] h-[250px] bg-orange-500/10 rounded-full blur-[80px]" />
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />

      {/* Decorative Mandalas / Circles */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full border-[1px] border-amber-500/30 border-dashed animate-[spin_60s_linear_infinite]" />
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] rounded-full border-[2px] border-rose-500/20 border-dotted animate-[spin_40s_linear_infinite_reverse]" />
      
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] sm:w-[1000px] sm:h-[1000px] rounded-full border-[2px] border-orange-500/20 border-dashed animate-[spin_90s_linear_infinite]" />
      <div className="absolute bottom-[-15%] right-[-5%] w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] rounded-full border-[1px] border-purple-500/20 border-dotted animate-[spin_70s_linear_infinite_reverse]" />

      <div className="absolute top-[30%] left-[80%] w-[300px] h-[300px] rounded-full border-[1px] border-amber-300/15 border-dashed animate-[spin_50s_linear_infinite]" />
      <div className="absolute top-[60%] left-[10%] w-[400px] h-[400px] rounded-full border-[1px] border-rose-300/15 border-dotted animate-[spin_60s_linear_infinite_reverse]" />
      <div className="absolute top-[40%] left-[40%] w-[800px] h-[800px] rounded-full border-[1px] border-white/5 border-dashed animate-[spin_120s_linear_infinite]" />

      {/* Sparkles and Festive Accents */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        >
          {i % 5 === 0 ? <Star className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400/50" /> 
           : i % 5 === 1 ? <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-rose-400/50" />
           : i % 5 === 2 ? <Music className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400/40" />
           : i % 5 === 3 ? <Flame className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400/50" />
           : <Heart className="w-2 h-2 sm:w-3 sm:h-3 text-orange-400/50" />}
        </motion.div>
      ))}

      {/* Subtle traditional floating patterns */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`pattern-${i}`}
          className="absolute text-amber-500/20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${Math.random() * 40 + 20}px`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            opacity: [0.1, 0.4, 0.1]
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut"
          }}
        >
          ❋
        </motion.div>
      ))}
    </div>
  );
}
