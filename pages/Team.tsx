import React from 'react';
import { Phone, Mail, Linkedin, Send } from 'lucide-react';
import { IMAGES } from '../constants';
import { motion } from 'framer-motion';
import InputField from '../components/ui/InputField';



const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Inge Mink",
      role: "Grondlegger en eigenaar",
      image: "https://static.wixstatic.com/media/215a32_1126bbbb885b4ae99fbd573310cdb8e0~mv2.jpg/v1/fill/w_403,h_334,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/51-_MG_1053.jpg",
      bio: [
        "Inge is psycholoog, auteur en grondlegger van de contextgestuurde methode die in contextmanagement centraal staat.",
        "Met haar zorgvuldig onderbouwde en praktisch uitgewerkte aanpak helpt zij het contextbewustzijn in organisaties te vergroten en de transitie te maken naar contextgestuurd management."
      ],
      phone: "+31 6 14 29 12 97",
      email: "contact@ingemink.nl",
      linkedin: "http://www.linkedin.com/in/ingemink"
    },
    {
      name: "David Pijl",
      role: "Partner marktontwikkeling en mediator",
      image: "https://static.wixstatic.com/media/215a32_f4c5ebd2df094a9ab92b4300cf35da9f~mv2.png",
      bio: [
        "David is advocaat, mediator en ondernemer in hart en nieren. Hij bouwt aan langdurige samenwerkingen door zorgvuldig relatiebeheer.",
        "Dankzij zijn achtergrond als MfN-mediator kan hij vastgelopen gesprekken weer op gang brengen. Eerst de relatie herstellen, daarna ruimte creëren om contextgericht te bouwen."
      ],
      phone: "+31 6 25 59 92 10",
      email: "david@contextmanagement.nl",
      linkedin: "https://www.linkedin.com/in/david-pijl"
    },
    {
      name: "Gerard Berends",
      role: "Strategisch adviseur",
      image: "https://static.wixstatic.com/media/215a32_b3ffd914933c4f31929ec1b572c1cbb3~mv2.jpg",
      bio: [
        "Gerard helpt organisaties om focus te krijgen én te houden. Teams raken de koers kwijt als strategische prioriteiten niet scherp zijn.",
        "Binnen contextmanagement richt Gerard zich op het versterken van wat al werkt en het wegnemen van contextfactoren die samenwerking in de weg staan."
      ],
      phone: "+31 6 29 09 77 91",
      email: "contact@gerardberends.nl",
      linkedin: "http://linkedin.com/in/gerardberends"
    }
  ];

  return (
    <div className="bg-brand-light font-sans text-brand-dark">
      {/* Hero Section */}
      <section className="bg-brand-dark text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
              <h1 className="font-serif text-4xl md:text-5xl italic mb-6 text-brand-lime">Het team</h1>
              <div className="w-16 h-1 bg-brand-lime mx-auto mb-8"></div>
              <p className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto opacity-90">
                Wij bundelen onze krachten om organisaties te helpen samenwerking blijvend te versterken en veranderingen écht te laten landen bij de mensen die het waar moeten maken. In ons team komen diepgaande kennis over gedrag, strategisch advies en mediation samen met jarenlange ervaring in coaching, training en ondernemerschap.
              </p>
          </motion.div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <motion.article 
                key={index} 
                className="flex flex-col bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-6 overflow-hidden rounded-md h-64 bg-gray-100">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    />
                </div>
                
                <div className="text-sm font-semibold uppercase tracking-wider text-brand-lime mb-2">{member.role}</div>
                <h3 className="font-serif text-2xl italic mb-4">{member.name}</h3>
                
                <div className="flex-grow text-gray-700 leading-relaxed mb-6 space-y-4">
                  {member.bio.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-gray-100 mt-auto">
                  <div className="flex items-center mb-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4 mr-2 text-brand-lime" />
                    <span>{member.phone}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <a href={`mailto:${member.email}`} className="flex items-center text-sm text-gray-600 hover:text-brand-lime transition-colors">
                      <Mail className="w-4 h-4 mr-2" />
                      {member.email}
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-dark hover:text-[#0077b5] transition-colors" aria-label={`${member.name} LinkedIn`}>
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-brand-lime/5">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl italic text-brand-dark">
                Wanneer wil jij beginnen om samen écht de juiste dingen gedaan te krijgen?
            </h2>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 px-4 bg-white relative overflow-hidden">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-brand-lime/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-brand-dark/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white/50"
          >
              <div className="text-center mb-16">
                  <span className="text-brand-lime uppercase tracking-[0.2em] text-xs font-bold">Contact</span>
                  <h2 className="font-serif text-4xl md:text-5xl italic mt-4 text-brand-dark">Laten we kennismaken</h2>
              </div>
              
              <form className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                  <InputField label="Voornaam" name="voornaam" type="text" />
                  <InputField label="Achternaam" name="achternaam" type="text" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
                   <InputField label="Email" name="email" type="email" required />
                   <InputField label="Telefoon" name="phone" type="tel" />
                </div>
                
                <InputField label="Bericht" name="bericht" textarea rows={4} />
                
                <div className="mt-8 flex justify-end">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit" 
                    className="group relative cursor-pointer overflow-hidden rounded-full bg-brand-dark px-10 py-4 text-white shadow-lg transition-all duration-300 hover:shadow-brand-lime/25"
                  >
                    <span className="relative z-10 flex items-center font-bold tracking-wide">
                      Verzenden
                      <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 -z-0 bg-brand-lime opacity-0 transition-opacity duration-300 group-hover:opacity-100 mix-blend-multiply"></div>
                  </motion.button>
                </div>
              </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
