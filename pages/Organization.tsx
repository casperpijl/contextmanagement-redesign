import React from 'react';
import { Target, Compass, Users, Workflow, ArrowRight, Lightbulb, Zap, HelpCircle, TrendingUp, Search } from 'lucide-react';

const Organization: React.FC = () => {
  return (
    <div className="bg-brand-light">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-brand-dark text-white py-20 px-4">
        <div className="absolute inset-0 z-0 opacity-20">
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-6xl text-brand-lime mb-6 leading-tight">
                De contextgestuurde organisatie: jouw volgende stap?
            </h1>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Item 1: Wat is een contextgestuurde organisatie? */}
            <div className="bg-brand-light p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-brand-dark text-brand-lime rounded-xl flex items-center justify-center mb-6">
                    <HelpCircle size={24} />
                </div>
                <h3 className="font-serif text-2xl text-brand-dark mb-4">Wat is een contextgestuurde organisatie?</h3>
                <div className="text-brand-muted font-sans leading-relaxed space-y-4">
                    <p>Een contextgestuurde organisatie stelt één vraag steeds opnieuw centraal:</p>
                    <p className="font-medium italic text-brand-dark border-l-4 border-brand-lime pl-4">
                        "Welke context is nodig om het gedrag mogelijk te maken dat bij onze strategie past?"
                    </p>
                    <p>Leidinggevenden en bestuurders werken samen vanuit één gedeelde bril.</p>
                    <p>Gedrag verandert niet als je erom vraagt, maar pas als de omgeving het logisch en haalbaar maakt.</p>
                </div>
            </div>

            {/* Item 2: Welke vraagstukken lost het op? */}
            <div className="bg-brand-light p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-brand-dark text-brand-lime rounded-xl flex items-center justify-center mb-6">
                    <Target size={24} />
                </div>
                <h3 className="font-serif text-2xl text-brand-dark mb-4">Welke vraagstukken lost het op?</h3>
                <div className="text-brand-muted font-sans leading-relaxed space-y-4">
                    <ul className="space-y-2 list-disc list-inside marker:text-brand-lime">
                        <li>Strategische veranderingen worden niet vertaald naar nieuw gedrag.</li>
                        <li>Tijdrovende cultuurtrajecten blijven hangen in gesprekken en klankbordgroepen, zonder blijvend resultaat.</li>
                        <li>Teams en leidinggevenden blijven bezig met 'de waan van de dag'.</li>
                        <li>Vergaderingen die steeds meer productietijd opsouperen.</li>
                    </ul>
                    <p>Deze patronen vinden hun oorsprong én oplossing in de organisatiecontext. En die kun je samen veranderen.</p>
                </div>
            </div>

            {/* Item 3: Hoe werken besluitvormers samen? */}
            <div className="bg-brand-light p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-brand-dark text-brand-lime rounded-xl flex items-center justify-center mb-6">
                    <Users size={24} />
                </div>
                <h3 className="font-serif text-2xl text-brand-dark mb-4">Hoe werken besluitvormers samen?</h3>
                <div className="text-brand-muted font-sans leading-relaxed space-y-4">
                    <p>Bestuurders stellen bij nieuwe beleidsplannen steeds opnieuw de vraag:</p>
                    <p className="font-medium italic text-brand-dark border-l-4 border-brand-lime pl-4">
                        "Welk gedrag willen we zien – en welke omgeving maakt dat gedrag logisch?"
                    </p>
                    <p>Zij stimuleren leidinggevenden om te communiceren over randvoorwaarden in de context die in hún teams nodig zijn om tot gewenst nieuw gedrag te komen. HR faciliteert dit proces met tools, opleiding en ondersteuning.</p>
                    <p>Zo krijgen bestuurders scherp welke context nieuw gedrag op de werkvloer mogelijk maakt of belemmert. HR krijgt hierin een strategische rol, door efficiënte dialogen en slim gekozen informatie-uitwisseling te faciliteren. Zo slaan bestuurders, leidinggevenden én HR samen een brug tussen strategie en praktijk.</p>
                </div>
            </div>

            {/* Item 4: Vraagt contextmanagement om een reorganisatie? */}
            <div className="bg-brand-light p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 bg-brand-dark text-brand-lime rounded-xl flex items-center justify-center mb-6">
                    <Workflow size={24} />
                </div>
                <h3 className="font-serif text-2xl text-brand-dark mb-4">Vraagt contextmanagement om een reorganisatie?</h3>
                <div className="text-brand-muted font-sans leading-relaxed space-y-4">
                    <p>Contextmanagement haalt juist haar kracht uit de slimme focus:</p>
                    <p className="font-medium italic text-brand-dark">
                        'Eén kleine contextverandering kan alles in beweging brengen'.
                    </p>
                    <p>
                        <strong className="text-brand-dark">Contextmanagement is dus nadrukkelijk géén nieuwe veranderhype.</strong> Het is een andere manier van kijken – naar gedrag, samenwerking en verandering.
                    </p>
                    <p>Je werkt vanuit wat er al ís: bestaande doelen en verantwoordelijkheden in bestaande teams. Je maakt alleen één cruciale nieuwe beweging: Je zet de context centraal in ieder veranderplan dat je initieert.</p>
                    <p>
                        <i className="text-brand-dark">Daardoor verschuiven gesprekken vanzelfsprekend van wie iets fout doet naar de context waarin dit gedrag kan ontstaan.</i> Dit geeft ruimte aan scherpe inhoudelijke dialogen, zonder dat relaties onder druk komen te staan.
                    </p>
                </div>
            </div>

             {/* Item 5: Waar begin je? */}
             <div className="bg-brand-light p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-brand-dark text-brand-lime rounded-xl flex items-center justify-center mb-6">
                    <Compass size={24} />
                </div>
                <h3 className="font-serif text-2xl text-brand-dark mb-4">Waar begin je?</h3>
                <div className="text-brand-muted font-sans leading-relaxed space-y-4">
                    <p>Een contextgestuurde organisatie bouw je niet in één keer. Je begint klein en laat de methode zich vervolgens organisch verspreiden.</p>
                    <p>Zo werkt het globaal:</p>
                    <ol className="space-y-4 list-decimal list-inside marker:text-brand-dark marker:font-bold">
                        <li>
                            <strong className="text-brand-dark">Kies één team of een MT als pilot</strong>
                            <br /><span className="ml-4 block">Bijvoorbeeld een team met terugkerende patronen of een afdeling waar gedrag en strategie niet matchen.</span>
                        </li>
                        <li>
                            <strong className="text-brand-dark">Leer werken met de context-tools en leer de methode al doende kennen.</strong>
                            <br /><span className="ml-4 block">Leidinggevenden krijgen concrete hulpmiddelen om snel tot inzichten en haalbare contextplannen te komen. De concrete antwoorden op hun eigen vraagstukken brengen snel verlichting - en enthousiasme.</span>
                        </li>
                        <li>
                            <strong className="text-brand-dark">Betrek de bestuurders</strong>
                            <br /><span className="ml-4 block">De inzichten uit de teams geven concrete input voor strategische besluitvorming. De kloof tussen werkvloer en top wordt kleiner.</span>
                        </li>
                         <li>
                            <strong className="text-brand-dark">Bouw verder op wat werkt</strong>
                            <br /><span className="ml-4 block">Wanneer de eerste resultaten zichtbaar zijn, kan de aanpak breder uitgerold worden binnen andere teams en lagen.</span>
                        </li>
                    </ol>
                    <p className="mt-4 pt-4 border-t border-gray-200">
                        <strong className="text-brand-dark">Geen ontwrichtend veranderproject. Geen grote reorganisatie.</strong>
                        <br />Gewoon anders leren kijken, samen scherper sturen – bouwen op wat al werkt.
                    </p>
                </div>
            </div>

            {/* Item 6: Wordt jouw organisatie een koploper? */}
            <div className="bg-brand-light p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 md:col-span-2 lg:col-span-1">
                <div className="w-12 h-12 bg-brand-dark text-brand-lime rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp size={24} />
                </div>
                <h3 className="font-serif text-2xl text-brand-dark mb-4">Wordt jouw organisatie een koploper?</h3>
                <div className="text-brand-muted font-sans leading-relaxed space-y-4">
                     <p className="font-medium italic text-brand-dark">
                        We zoeken organisaties die contextmanagement als pilot willen introduceren.
                    </p>
                    <p>Bij de opzet van een pilot onderzoeken we samen waar contextmanagement in jouw organisatie het snelste effect heeft.</p>
                    <p>We starten dus niet met grote reorganisaties of lange trajecten, maar richten ons direct op de plekken waar het nu wringt én waar verbetering het meeste verschil kan maken. Vervolgens bouwen we verder op wat goed werkt.</p>
                    <p>Om die focus te vinden, kijken we eerst naar de signalen die in jouw organisatie het meest aandacht vragen.</p>
                    <div className="bg-white p-6 rounded-xl border border-gray-100">
                        <p className="mb-3 font-medium text-brand-dark flex items-center gap-2">
                            <Search size={18} /> Met de contextscan wordt duidelijk:
                        </p>
                        <ul className="space-y-2 list-disc list-inside marker:text-brand-lime text-sm">
                            <li>Welke signalen in jouw ogen het meest urgent zijn.</li>
                            <li>Welke context in jouw organisatie hierin het meest aandacht vraagt.</li>
                            <li>Waar in de organisatie deze aandachtspunten het sterkst naar voren komen.</li>
                        </ul>
                    </div>
                   <p>De scan kun je hieronder zelf invullen en wordt opgevolgd met een vrijblijvend verkennend gesprek. Zo bepalen we vanaf dag één waar te beginnen en hoe we de pilot in jów organisatie het meeste rendement kunnen geven.</p>
                </div>
            </div>

        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
      <section className="py-24 px-4 bg-gray-50 text-brand-dark text-center relative border-t border-gray-100">
        <div className="max-w-4xl mx-auto relative z-10">
            <Lightbulb size={40} className="text-brand-dark/80 mx-auto mb-6 opacity-80" />
            <h2 className="font-serif text-3xl md:text-4xl mb-6 text-brand-dark">
                Zet jij de eerste stap naar een<br />contextgestuurde organisatie?
            </h2>
            <p className="font-sans text-lg text-brand-muted mb-10 max-w-2xl mx-auto">
                Doe de contextscan in 10 minuten en ontvang een uitnodiging voor een verkennend gesprek op basis van jouw antwoorden.
            </p>
             <a 
                href="https://forms.office.com/e/zLJ4KzQhEh" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-brand-dark text-white text-lg font-medium rounded-xl hover:bg-brand-lime hover:text-brand-dark transition-all duration-300 shadow-sm hover:shadow-md"
            >
                Start de contextscan <ArrowRight size={20} />
            </a>
            <p className="mt-8 text-sm text-gray-400 italic">
                (Jouw gegevens worden alleen gebruikt voor het verkenningsgesprek.)
            </p>
        </div>
      </section>
    </div>
  );
};

export default Organization;
