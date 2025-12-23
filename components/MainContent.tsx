import React from 'react';
import { IMAGES } from '../constants';
import Button from './Button';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const MainContent: React.FC = () => {
  return (
    <section className="w-full py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <p className="font-bold text-2xl md:text-3xl text-brand-dark leading-relaxed">
            Organisaties hebben in hun organisatiestrategie grofweg twee uitdagingen:
          </p>
        </div>

        {/* Challenge Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-32">
          {/* Challenge 1 */}
          <div className="group bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-brand-lime scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
             
            <h3 className="font-serif text-2xl md:text-3xl text-brand-dark mb-8 flex items-center gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-brand-lime/20 text-brand-dark text-xl font-bold group-hover:bg-brand-lime transition-colors duration-300">1</span>
              Terugkerende samenwerkingsproblemen
            </h3>
            <ul className="space-y-5 pl-2">
              <li className="flex items-start gap-4 text-gray-600 group-hover:text-brand-dark transition-colors duration-200">
                <AlertCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-lg leading-relaxed">Afspraken worden niet (goed) nagekomen.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-600 group-hover:text-brand-dark transition-colors duration-200">
                <AlertCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-lg leading-relaxed">Er wordt langs elkaar heen gewerkt.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-600 group-hover:text-brand-dark transition-colors duration-200">
                <AlertCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-lg leading-relaxed">Men praat over elkaar, in plaats van tegen elkaar.</span>
              </li>
            </ul>
          </div>

          {/* Challenge 2 */}
          <div className="group bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-1 h-full bg-brand-lime scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

            <h3 className="font-serif text-2xl md:text-3xl text-brand-dark mb-8 flex items-center gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-brand-lime/20 text-brand-dark text-xl font-bold group-hover:bg-brand-lime transition-colors duration-300">2</span>
              Strategische wijzigingen worden niet vertaald naar nieuw gedrag
            </h3>
            <ul className="space-y-5 pl-2">
              <li className="flex items-start gap-4 text-gray-600 group-hover:text-brand-dark transition-colors duration-200">
                <AlertCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-lg leading-relaxed">Teams blijven vasthouden aan oude gewoonten.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-600 group-hover:text-brand-dark transition-colors duration-200">
                <AlertCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-lg leading-relaxed">Veranderingen verzanden in overleg en klankbordsessies.</span>
              </li>
              <li className="flex items-start gap-4 text-gray-600 group-hover:text-brand-dark transition-colors duration-200">
                <AlertCircle className="w-6 h-6 text-red-400 mt-0.5 flex-shrink-0" />
                <span className="text-lg leading-relaxed">De aandacht verplaatst naar het blussen van brandjes.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Solution Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          
          {/* Image Side */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white p-3 rotate-1 transform hover:rotate-0 transition-transform duration-500">
              <img 
                src={IMAGES.hero} 
                alt="Contextmanagement Visualization" 
                className="w-full h-auto object-contain rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5"></div>
            </div>
             <div className="mt-6 flex justify-center lg:justify-start">
                <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-medium text-brand-muted border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-brand-lime" />
                    <span>Integrale aanpak</span>
                </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            className="flex flex-col justify-center order-1 lg:order-2 space-y-10"
             initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            
            <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-brand-lime pl-6 italic">
              "Dat dit steeds gebeurt, heeft niets te maken met onwil van medewerkers of gebrekkig leiderschap. Het is een logisch gevolg van een mismatch tussen omgeving en gedrag."
            </p>

            <div className="space-y-4">
              <h3 className="font-bold text-sm text-brand-muted uppercase tracking-widest">
                Wil je de juiste dingen gedaan krijgen?
              </h3>
              <p className="font-serif text-3xl md:text-5xl text-brand-dark leading-tight">
                Verander niet het individu, <br />
                maar <span className="underline decoration-brand-lime decoration-[6px] underline-offset-4 hover:decoration-brand-dark transition-colors duration-300">verander de omgeving</span>.
              </p>
            </div>
            
            <div className="pt-2">
              <p className="text-xl font-medium text-brand-dark">
                Contextmanagement biedt je alle kennis, begeleiding en handvatten om daarin te slagen.
              </p>
            </div>

          </motion.div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 pt-16 border-t border-gray-100 flex-wrap">
             <Button 
              label="Boek een inspiratieworkshop" 
              href="/producten" 
              variant="primary"
              className="w-full md:w-auto min-w-[300px] text-lg py-4 shadow-lg shadow-brand-lime/20 hover:shadow-brand-lime/40"
            />
            <Button 
              label="Ontdek hoe contextmanagement werkt" 
              href="/wat-is-contextmanagement" 
              variant="secondary"
              className="w-full md:w-auto min-w-[260px]"
            />
            <Button 
              label="Wij zoeken pilot-organisaties!" 
              href="/team" 
              variant="outline"
              className="w-full md:w-auto min-w-[260px]"
            />
        </div>
      </div>
    </section>
  );
};

export default MainContent;