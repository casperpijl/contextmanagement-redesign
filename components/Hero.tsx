import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { ChevronDown, ArrowRight } from 'lucide-react';
import Button from './Button';

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
      "relative w-full bg-brand-light overflow-hidden min-h-[90vh] flex items-center justify-center",
      compact && "min-h-[50vh] py-20 md:py-28"
    )}>
      
      {/* Dynamic Background */}
      {imageUnsplash ? (
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={imageUnsplash} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-light/90 to-brand-light" />
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Blob 1 (Lime) */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-lime/20 rounded-full blur-[100px]" 
          />
          
          {/* Animated Blob 2 (Dark) */}
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              x: [0, -60, 0],
              y: [0, 40, 0],
              opacity: [0.05, 0.08, 0.05]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-dark/5 rounded-full blur-[120px]" 
          />

           {/* Animated Blob 3 (Center Muted) */}
           <motion.div 
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.0, 0.03, 0.0]
            }}
            transition={{ 
              duration: 15, 
              repeat: Infinity, 
              ease: "easeInOut",
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-dark/5 rounded-full blur-[150px]" 
          />
        </div>
      )}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Main Title */}
          <h1 className={cn(
            "font-serif text-brand-dark leading-[1.1] tracking-tight mb-8",
            compact ? "text-3xl md:text-5xl" : "text-5xl md:text-7xl lg:text-[5.5rem]"
          )}>
            {title || (
              <>
                <span className="block mb-2 md:mb-4 font-light opacity-90">Samen de juiste dingen gedaan krijgen?</span>
                <span className="font-bold relative inline-block text-brand-dark">
                  Start bij de juiste context.
                  {/* Underline Animation */}
                  <motion.svg 
                    className="absolute w-[110%] h-4 md:h-6 -bottom-3 -left-[5%] text-brand-lime -z-10" 
                    viewBox="0 0 100 10" 
                    preserveAspectRatio="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 1.2, ease: "easeInOut" }}
                  >
                      <path d="M0 5 Q 50 12 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                  </motion.svg>
                </span>
              </>
            )}
          </h1>
          
          {/* Subtitle */}
          {(subtitle || !title) && (
            <motion.p 
              className="mt-8 text-lg md:text-2xl text-brand-muted max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {subtitle || "Contextmanagement helpt organisaties om strategische doelen te vertalen naar concreet gedrag, zonder gedoe en met blijvend resultaat."}
            </motion.p>
          )}

          {/* CTA Buttons */}
          {!compact && (
            <motion.div 
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button 
                label="Wat is contextmanagement?" 
                href="/wat-is-contextmanagement" 
                variant="primary" 
                className="w-full sm:w-auto min-w-[200px] text-lg py-4 shadow-xl hover:shadow-2xl shadow-brand-dark/10"
              />
              <Button 
                label="Bekijk onze producten" 
                href="/producten" 
                variant="outline" 
                className="w-full sm:w-auto min-w-[200px] text-lg py-4 bg-white/50 backdrop-blur-sm border-brand-dark/20 hover:bg-white hover:border-brand-dark"
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {!compact && (
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-muted/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2, duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      )}
    </section>
  );
};

export default Hero;