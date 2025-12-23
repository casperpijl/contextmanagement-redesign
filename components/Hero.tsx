import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full py-16 md:py-24 bg-brand-light">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-dark leading-tight font-light">
          Samen de juiste dingen gedaan krijgen? <br className="hidden md:block" />
          <span className="font-bold relative inline-block mt-2">
            Start bij de juiste context.
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-lime opacity-60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
            </svg>
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;