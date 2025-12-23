import React from 'react';
import { Target, Box, Layers, MessageSquare, ArrowRight, User, Users, Briefcase, FileText } from 'lucide-react';
import { IMAGES } from '../constants';

const WhatIsContextManagement: React.FC = () => {
  return (
    <div className="bg-brand-light">
      {/* Hero Section with Quote */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-brand-dark text-white py-20 px-4">
        <div className="absolute inset-0 z-0 opacity-40">
            {/* Abstract background pattern could go here */}
             <div className={`absolute inset-0 bg-cover bg-center mix-blend-overlay`} style={{ backgroundImage: `url('${IMAGES.quoteHero}')` }}></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <blockquote className="font-serif text-3xl md:text-4xl italic leading-relaxed text-brand-lime">
            "Ik wist niet dat de context zoveel mogelijkheden biedt om terugkerende problemen snel op te lossen."
          </blockquote>
        </div>
      </section>

      {/* Title Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl text-brand-dark mb-6">Wat is contextmanagement?</h1>
            <div className="w-24 h-1 bg-brand-lime mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Core Concepts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-brand-light">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Card 1: Focus */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-brand-lime/20 text-brand-dark group-hover:bg-brand-lime group-hover:scale-110 transition-all duration-300">
                    <Target size={32} />
                </div>
                <h3 className="font-serif text-2xl text-brand-dark mb-4 group-hover:text-brand-muted transition-colors">Focus klein voor groot resultaat.</h3>
                <p className="font-sans text-brand-muted leading-relaxed">
                    Contextmanagement is een praktische methode om gedrag en samenwerking binnen organisaties in een gewenste richting te beïnvloeden, zonder de focus te leggen op het individu. In plaats daarvan kijk je gericht naar de context waarin mensen werken.
                </p>
            </div>

            {/* Card 2: Bouwstenen */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-violet-100 text-violet-700 group-hover:bg-violet-200 group-hover:scale-110 transition-all duration-300">
                    <Box size={32} />
                </div>
                <h3 className="font-serif text-2xl text-brand-dark mb-4 group-hover:text-brand-muted transition-colors">De bouwstenen: vier contexten</h3>
                <p className="font-sans text-brand-muted leading-relaxed">
                    Contextmanagement is gestoeld op de evolutionaire psychologie. Mensen hebben van nature verschillende randvoorwaarden nodig om tot samenwerking te komen en deze ook vast te houden. Deze randvoorwaarden zijn vertaald naar vier contextperspectieven.
                </p>
            </div>

            {/* Card 3: Niveaus */}
            <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-blue-100 text-blue-700 group-hover:bg-blue-200 group-hover:scale-110 transition-all duration-300">
                    <Layers size={32} />
                </div>
                <h3 className="font-serif text-2xl text-brand-dark mb-4 group-hover:text-brand-muted transition-colors">Drie niveaus van invloed</h3>
                <p className="font-sans text-brand-muted leading-relaxed">
                    Context in organisaties is gelaagd – net als de invloed die je erop kunt uitoefenen. Contextmanagement vraagt daarom om een scherpe blik: kun je een bepaalde contextfactor zélf veranderen? Kun je een andere besluitvormer erover informeren?
                </p>
            </div>

             {/* Card 4: Besluiten */}
             <div className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50">
                <div className="mb-6 inline-flex p-4 rounded-xl bg-orange-100 text-orange-700 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                    <MessageSquare size={32} />
                </div>
                <h3 className="font-serif text-2xl text-brand-dark mb-4 group-hover:text-brand-muted transition-colors">Scherpe dialogen, betere besluiten</h3>
                <p className="font-sans text-brand-muted leading-relaxed">
                    Contextmanagement daagt uit tot snelle focus en besluitvorming. Geen grootschalige en stroperige analyses, maar een snelle loop van actie, evaluatie en bijstellen. De grote versneller zit in het gedeelde denkraam.
                </p>
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-dark mb-12">Toepassen in jouw werkpraktijk?</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <a href="#" className="flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-brand-dark rounded-xl hover:bg-brand-dark hover:text-white transition-all duration-300 group">
                    <span className="font-medium">Ik ben leidinggevende</span>
                    <User size={18} className="text-brand-dark group-hover:text-brand-lime transition-colors" />
                </a>

                <a href="#" className="flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-brand-dark rounded-xl hover:bg-brand-dark hover:text-white transition-all duration-300 group">
                    <span className="font-medium">Ik ben bestuurder</span>
                    <Briefcase size={18} className="text-brand-dark group-hover:text-brand-lime transition-colors" />
                </a>

                <a href="#" className="flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-brand-dark rounded-xl hover:bg-brand-dark hover:text-white transition-all duration-300 group">
                    <span className="font-medium">Ik ben HR-professional</span>
                    <Users size={18} className="text-brand-dark group-hover:text-brand-lime transition-colors" />
                </a>

                 <a href="#" className="flex items-center justify-center gap-3 px-6 py-4 bg-white border-2 border-brand-dark rounded-xl hover:bg-brand-dark hover:text-white transition-all duration-300 group">
                    <span className="font-medium">Ik ben adviseur</span>
                    <FileText size={18} className="text-brand-dark group-hover:text-brand-lime transition-colors" />
                </a>
            </div>
        </div>
      </section>
    </div>
  );
};

export default WhatIsContextManagement;
