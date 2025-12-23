import React from 'react';
import { IMAGES } from '../constants';
import Button from './Button';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

const MainContent: React.FC = () => {
  return (
    <section className="w-full py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section - Centered to start the narrative */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="font-bold text-2xl text-brand-dark leading-relaxed">
            Organisaties hebben in hun organisatiestrategie grofweg twee uitdagingen:
          </p>
        </div>

        {/* Challenge Cards - Side by Side for balance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {/* Challenge 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
            <h3 className="font-serif text-2xl text-brand-dark mb-6 flex items-center gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-lime text-brand-dark text-lg font-bold">1</span>
              Terugkerende samenwerkingsproblemen
            </h3>
            <ul className="space-y-4 pl-2 flex-grow">
              <li className="flex items-start gap-3 text-gray-700">
                <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">Afspraken worden niet (goed) nagekomen.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">Er wordt langs elkaar heen gewerkt.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">Men praat over elkaar, in plaats van tegen elkaar.</span>
              </li>
            </ul>
          </div>

          {/* Challenge 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
            <h3 className="font-serif text-2xl text-brand-dark mb-6 flex items-center gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-brand-lime text-brand-dark text-lg font-bold">2</span>
              Strategische wijzigingen worden niet vertaald naar nieuw gedrag
            </h3>
            <ul className="space-y-4 pl-2 flex-grow">
              <li className="flex items-start gap-3 text-gray-700">
                <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">Teams blijven vasthouden aan oude gewoonten.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">Veranderingen verzanden in overleg en klankbordsessies.</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <AlertCircle className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                <span className="leading-relaxed">De aandacht verplaatst naar het blussen van brandjes.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Solution & Image Section - Split 50/50 but integrated */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-20">
          
          {/* Image Side - Placed left to break the text flow from above */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              <img 
                src={IMAGES.hero} 
                alt="Contextmanagement Visualization" 
                className="w-full h-auto object-contain rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
            </div>
             <div className="mt-4 flex justify-center lg:justify-start">
                <div className="flex items-center gap-2 text-sm font-medium text-brand-muted">
                    <CheckCircle2 className="w-4 h-4 text-brand-lime" />
                    <span>Integrale aanpak</span>
                </div>
            </div>
          </div>

          {/* Text Side - The Narrative Flow - CLEAN & MINIMAL */}
          <div className="flex flex-col justify-center order-1 lg:order-2 space-y-8">
            
            {/* 1. De Analyse - Simple Paragraph */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Dat dit steeds gebeurt, heeft niets te maken met onwil van medewerkers of gebrekkig leiderschap. Het is een logisch gevolg van een mismatch tussen omgeving en gedrag.
            </p>

            {/* 2. De Kernboodschap - Focus on Typography */}
            <div className="space-y-3">
              <h3 className="font-bold text-lg text-brand-muted uppercase tracking-wider">
                Wil je de juiste dingen gedaan krijgen?
              </h3>
              <p className="font-serif text-3xl md:text-4xl text-brand-dark leading-tight">
                Verander niet het individu, <br />
                maar <span className="underline decoration-brand-lime decoration-4 underline-offset-4">verander de omgeving</span>.
              </p>
            </div>
            
            {/* 3. De Belofte - Simple Sentence */}
            <div className="pt-2">
              <p className="text-lg font-medium text-brand-dark">
                Contextmanagement biedt je alle kennis, begeleiding en handvatten om daarin te slagen.
              </p>
            </div>

          </div>

        </div>

        {/* Action Buttons Section */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-6 pt-12 border-t border-gray-200">
          <Button 
            label="Ontdek hoe contextmanagement werkt" 
            href="#" 
            variant="secondary"
            className="w-full md:w-auto min-w-[280px]"
          />
          <Button 
            label="Boek een inspiratieworkshop" 
            href="#" 
            variant="primary"
            className="w-full md:w-auto min-w-[280px]"
          />
          <Button 
            label="Wij zoeken pilot-organisaties!" 
            href="#" 
            variant="outline"
            className="w-full md:w-auto min-w-[280px]"
          />
        </div>
      </div>
    </section>
  );
};

export default MainContent;