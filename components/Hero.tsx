import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

interface HeroProps {
  title?: React.ReactNode;
  subtitle?: string;
  imageUnsplash?: string;
  compact?: boolean;
}

const Hero: React.FC<HeroProps> = ({ 
  title, 
  subtitle, 
  imageUnsplash, 
  compact = false 
}) => {
  return (
    <section className={cn(
      "relative w-full bg-brand-light overflow-hidden",
      compact ? "py-20 md:py-28" : "py-24 md:py-32 lg:py-40"
    )}>
      
      {/* Background Image or Decor */}
      {imageUnsplash ? (
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={imageUnsplash} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-light/80 to-brand-light" />
        </div>
      ) : (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-lime/20 rounded-full blur-[100px] animate-pulse-slow" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-dark/5 rounded-full blur-[120px]" />
        </div>
      )}

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className={cn(
            "font-serif text-brand-dark leading-[1.1] font-light tracking-tight",
            compact ? "text-3xl md:text-5xl" : "text-4xl md:text-6xl lg:text-7xl"
          )}>
            {title || (
              <>
                Samen de juiste dingen gedaan krijgen? <br className="hidden md:block" />
                <span className="font-bold relative inline-block mt-4">
                  Start bij de juiste context.
                  <motion.svg 
                    className="absolute w-full h-3 md:h-4 -bottom-2 left-0 text-brand-lime -z-10" 
                    viewBox="0 0 100 10" 
                    preserveAspectRatio="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
                  >
                      <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                  </motion.svg>
                </span>
              </>
            )}
          </h1>
          
          {(subtitle || !title) && (
            <motion.p 
              className="mt-8 text-lg md:text-xl text-brand-muted max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {subtitle || "Contextmanagement helpt organisaties om strategische doelen te vertalen naar concreet gedrag."}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;