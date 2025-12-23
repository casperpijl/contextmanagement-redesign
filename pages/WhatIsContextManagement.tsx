import React from 'react';
import { User, Users, Briefcase, FileText } from 'lucide-react';
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
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 overflow-hidden">
                <div className="h-64 overflow-hidden">
                    <img 
                        src={IMAGES.concepts.focus} 
                        alt="Focus klein voor groot resultaat" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-8">
                    <h3 className="font-serif text-2xl text-brand-dark mb-4 italic">Focus klein voor groot resultaat.</h3>
                    <div className="space-y-4 font-sans text-brand-muted leading-relaxed">
                        <p>
                            Contextmanagement is een praktische methode om gedrag en samenwerking binnen organisaties in een gewenste richting te beïnvloeden, zonder de focus te leggen op het individu. In plaats daarvan kijk je gericht naar de context waarin mensen werken.
                        </p>
                        <p>
                            Omdat gedrag altijd logisch is binnen de omstandigheden waarin het ontstaat, kun je met kleine goed gekozen contextveranderingen snel gewenste resultaten mogelijk maken.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 2: Bouwstenen */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 overflow-hidden">
                <div className="h-64 overflow-hidden">
                     <img 
                        src={IMAGES.concepts.bouwstenen} 
                        alt="De bouwstenen: vier contexten" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-8">
                    <h3 className="font-serif text-2xl text-brand-dark mb-4 italic">De bouwstenen: vier contexten</h3>
                    <div className="space-y-4 font-sans text-brand-muted leading-relaxed">
                        <p>
                            Contextmanagement is gestoeld op de evolutionaire psychologie. Mensen hebben van nature verschillende randvoorwaarden nodig om tot samenwerking te komen en deze ook vast te houden. Deze randvoorwaarden zijn vertaald naar vier contextperspectieven, ieder concreet gemaakt met een eigen tool.
                        </p>
                        <p>
                            De toolbox vormt dus dé ondersteuning voor het maken van weloverwogen contextkeuzes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Card 3: Niveaus */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 overflow-hidden">
                <div className="h-64 overflow-hidden">
                    <img 
                        src={IMAGES.concepts.niveaus} 
                        alt="Drie niveaus van invloed" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-8">
                    <h3 className="font-serif text-2xl text-brand-dark mb-4 italic">Drie niveaus van invloed</h3>
                    <div className="space-y-4 font-sans text-brand-muted leading-relaxed">
                        <p>
                            Context in organisaties is gelaagd – net als de invloed die je erop kunt uitoefenen. Contextmanagement vraagt daarom om een scherpe blik: kun je een bepaalde contextfactor zélf veranderen? Kun je een andere besluitvormer erover informeren? Of is de aanwezige context accepteren de enige optie?
                        </p>
                        <p>
                            Hoe helderder deze afweging, hoe krachtiger de samenwerking en communicatie tussen mandaatlagen. Deze samenwerking vormt de basis van <a href="/contextgestuurde-organisatie" className="text-brand-gold font-bold underline hover:text-brand-dark transition-colors">de contextgestuurde organisatie</a>.
                        </p>
                    </div>
                </div>
            </div>

             {/* Card 4: Besluiten */}
             <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100/50 overflow-hidden">
                <div className="h-64 overflow-hidden">
                    <img 
                        src={IMAGES.concepts.dialogen} 
                        alt="Scherpe dialogen, betere besluiten" 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                </div>
                <div className="p-8">
                    <h3 className="font-serif text-2xl text-brand-dark mb-4 italic">Scherpe dialogen, betere besluiten</h3>
                    <div className="space-y-4 font-sans text-brand-muted leading-relaxed">
                        <p>
                            Contextmanagement daagt uit tot snelle focus en besluitvorming. Geen grootschalige en stroperige analyses, maar een snelle loop van actie, evaluatie en bijstellen. De grote versneller zit in het gedeelde denkraam, een gemeenschappelijke taal en creatieve tools. Deze zorgen ervoor dat er geen ruis ontstaat in de woorden die worden gebruikt en wat ermee wordt bedoeld.
                        </p>
                    </div>
                </div>
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
