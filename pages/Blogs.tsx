import React from 'react';
import Hero from '../components/Hero';
import { ExternalLink } from 'lucide-react';

const blogPosts = [
  {
    title: "Met onderstroomgesprekken zorg je niet goed voor jouw team(s). Accepteer je dat?",
    image: "https://static.wixstatic.com/media/215a32_c3718912cfaa4bc486ffc873e02e990a~mv2.png/v1/fill/w_804,h_654,al_c,q_90/Afbeelding5.png",
    paragraphs: [
      "Teamgesprekken over de onderstroom lijken logisch en verbindend, maar ze creëren onbedoeld subjectieve verhalen waarin teamleden onvrijwillig een rol krijgen toebedeeld. Deze verhalen zijn sterk afhankelijk van interpretaties en het moment, waardoor ze leiden tot ethische dilemma’s en mogelijke schade binnen teams.",
      "Het artikel daagt uit tot kritische reflectie: mogen we teams dwingen zich aan te passen aan zo'n subjectieve realiteit?"
    ],
    link: "https://www.linkedin.com/pulse/hoe-lang-accepteer-jij-nog-de-schadelijke-gevolgen-van-inge-mink-xihce"
  },
  {
    title: "Waarom handhaving in organisaties het verdomhoekje uit moet.",
    image: "https://static.wixstatic.com/media/215a32_cca212ad24aa4481866f363c965201ba~mv2.webp",
    paragraphs: [
      "Handhaving klinkt streng en ouderwets, maar het is juist belangrijk voor duidelijkheid en veiligheid in teams. Omdat we liever uitgaan van vertrouwen en vrijheid, worden afspraken niet gehandhaafd, waardoor zij vaak ook niet goed worden nageleefd.",
      "Dat zorgt voor frustratie en onveilige situaties. Kun je mensen verantwoordelijk maken om elkaar aan te spreken als er geen duidelijke grenzen zijn?"
    ],
    link: "https://www.linkedin.com/pulse/waarom-handhaving-organisaties-het-verdomhoekje-uit-moet-inge-mink-pnetf"
  },
  {
    title: "Medewerkers betrekken? Blijf weg van de vaagvragen.",
    image: "https://static.wixstatic.com/media/215a32_18327d86b92a4e97a379244167450169~mv2.png",
    paragraphs: [
      "Het artikel laat zien hoe vaagvragen in MTO’s en cultuuronderzoeken leiden tot schijninformatie. Medewerkers beantwoorden onbewust een andere, simpelere vraag dan de bedoeling was, waardoor de uitkomsten onbruikbaar zijn.",
      "Dit roept een ethisch dilemma op: mogen we medewerkers blijven lastigvallen met vragen waar we niets mee doen?"
    ],
    link: "https://www.linkedin.com/pulse/medewerkers-betrekken-blijf-weg-van-de-vaagvragen-inge-mink-adi5e/"
  },
  {
    title: "Nee, de baas is niet de reden dat medewerkers vertrekken.",
    image: "https://static.wixstatic.com/media/215a32_ee60daef74af4e4683b3b4f91240d2da~mv2.png",
    paragraphs: [
      "Dit artikel fileert de populaire uitspraak dat mensen vertrekken vanwege hun leidinggevende. In werkelijkheid verlaten medewerkers geen ‘baas’, maar een werkomgeving waarin hun sociale behoeften niet worden vervuld.",
      "Retentie blijkt vooral afhankelijk van vier contexten: identificatie, persoonlijke motivatie, wederkerigheid en sociale veiligheid."
    ],
    link: "https://www.linkedin.com/pulse/nee-de-baas-niet-reden-dat-medewerkers-vertrekken-inge-mink/"
  },
  {
    title: "Waarom de leiderschapslessen van Covey niet meer van deze tijd zijn.",
    image: "https://static.wixstatic.com/media/215a32_7eb867288dcc4ef498d3d334a710d710~mv2.png",
    paragraphs: [
      "Covey’s lessen suggereren dat succesvol leiderschap een gevolg is van zeven aan te leren gewoonten, maar negeren daarmee cruciale inzichten uit de gedragseconomie.",
      "We schrijven succes vaak onterecht toe aan leiderschapsstijl (fundamentele attributiefout) en beoordelen gedrag op basis van de context (halo-effect). Moeten we nog wel managers trainen, of de context herzien?"
    ],
    link: "https://www.linkedin.com/pulse/waarom-we-de-leiderschapslessen-van-covey-dringend-moeten-inge-mink/"
  },
  {
    title: "Waarom het streven naar een aanspreekcultuur een organisatie niet verder brengt.",
    image: "https://static.wixstatic.com/media/215a32_24258927231a4a58a407a15b4122f012~mv2.png",
    paragraphs: [
      "Het artikel rekent af met de hardnekkige gedachte dat medewerkers elkaar vaker moeten aanspreken om gedrag te verbeteren. Aanspreken wordt gepresenteerd als een logische oplossing, maar gaat voorbij aan de sociale risico’s en strategische afwegingen.",
      "Gebruiken we aanspreekgedrag niet vooral om échte oorzaken niet te hoeven onderzoeken? Zolang we sturen op aanspreken, hoeven we niet te kijken naar de omgeving die het gedrag voedt."
    ],
    link: "https://www.linkedin.com/pulse/waarom-het-streven-naar-aanspreekgedrag-een-organisatie-inge-mink/"
  },
  {
    title: "Teamafspraken vastleggen? Maak er geen spookregels van!",
    image: "https://static.wixstatic.com/media/215a32_7932c060d96648d5833a191c4b056331~mv2.png",
    paragraphs: [
      "Het artikel laat zien hoe geschreven regels zonder handhaving veranderen in spookregels die samenwerking ondermijnen. Afspraken die ooit zekerheid moesten bieden, worden bronnen van frustratie omdat hun naleving wordt overgelaten aan spontane aanspreekmomenten.",
      "Hoe rechtvaardig is het om regels te introduceren zonder de bereidheid om ze te beschermen?"
    ],
    link: "https://www.linkedin.com/pulse/teamafspraken-vastleggen-maak-er-geen-spookregels-van-inge-mink/"
  },
  {
    title: "Ban de kleurenprofielen uit jouw team.",
    image: "https://static.wixstatic.com/media/215a32_75add32b1cf7471fb3fd175b6fb96fec~mv2.png",
    paragraphs: [
      "Kleuren- en leiderschapsprofielen lijken onschuldig, maar ze reduceren mensen tot stereotype categorieën. Wat begint als een luchtige kennismaking, eindigt al snel in hardnekkige verwachtingen en een vertekend zelfbeeld.",
      "Onze persoonlijkheid ligt niet vast in een kleur, maar beweegt mee met contexten en sociale ervaringen."
    ],
    link: "https://www.linkedin.com/pulse/ban-de-kleurentest-uit-jouw-team-inge-mink/"
  }
];

export default function Blogs() {
  return (
    <div className="bg-white min-h-screen">
      <Hero
        title="Blogs"
        subtitle="Hieronder vind je de blogs die eerder op LinkedIn verschenen. Omdat juist de reacties vaak waardevolle inzichten bieden, verwijzen we je direct door naar LinkedIn voor het volledige artikel en de comments."
        imageUnsplash="https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80"
        compact={true}
      />
      
      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <a 
              key={index}
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex flex-col items-start gap-6 p-6 h-full transition-all duration-300 hover:bg-slate-50 border border-transparent hover:border-slate-100 rounded-lg"
            >
              <div className="w-full aspect-[4/3] overflow-hidden rounded-md bg-slate-100">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              
              <div className="flex flex-col flex-grow">
                <h3 className="font-serif text-2xl mb-4 group-hover:text-[rgb(61,155,233)] transition-colors">
                  {post.title}
                </h3>
                
                <div className="space-y-4 mb-6 flex-grow">
                  {post.paragraphs.map((p, pIndex) => (
                    <p key={pIndex} className="text-slate-600 font-light leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
                
                <span className="flex items-center text-[rgb(37,63,57)] font-medium mt-auto group-hover:translate-x-1 transition-transform">
                  Lees het volledige artikel <ExternalLink size={16} className="ml-2" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
