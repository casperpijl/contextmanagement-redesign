import React from 'react';
import { Download, ShoppingCart, ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';

interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  badges?: { text?: string; color?: string; type?: 'ribbon' | 'icon' }[];
  isDigital?: boolean;
}

const Products: React.FC = () => {
    const products: Product[] = [
        {
            id: 'obstakels',
            title: 'Gratis download: Krijg grip op vijf herkenbare samenwerkingsobstakels',
            price: 0,
            image: 'https://static.wixstatic.com/media/215a32_deba43e563e14138aca326e9666964ac~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/obstakels.jpg',
            isDigital: true
        },
        {
            id: 'ebook-context',
            title: 'Gratis e-book: Contextmanagement in de praktijk',
            price: 0,
            image: 'https://static.wixstatic.com/media/215a32_1d504bc981834d09a164ccf65222b0ec~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/ebook-context.jpg',
            badges: [{ text: 'Download nu gratis!', type: 'ribbon', color: 'bg-brand-dark' }],
            isDigital: true
        },
        {
            id: 'bezwaarbrief',
            title: 'Model bezwaarbrief deelname kleuren- en persoonlijkheidsprofielen',
            price: 0,
            image: 'https://static.wixstatic.com/media/215a32_e6f149836f374173bff1969d06cfcd66~mv2.png/v1/fill/w_400,h_400,al_c,q_80/bezwaarbrief.png',
            isDigital: true
        },
        {
            id: 'social-dilemma',
            title: 'Whitepaper: Samenwerking en het sociaal dilemma',
            price: 0,
            image: 'https://static.wixstatic.com/media/215a32_5125a95d3e944ce5bd9405526f16c06f~mv2.png',
            badges: [{ text: 'Nieuw!', type: 'ribbon', color: 'bg-brand-lime text-brand-dark' }],
            isDigital: true
        },
        {
            id: 'four-conditions',
            title: 'Whitepaper: De vier randvoorwaarden voor samenwerking',
            price: 0,
            image: 'https://static.wixstatic.com/media/215a32_489047b08d884086875bf60d8dc32c9e~mv2.png',
            badges: [{ text: 'Nieuw!', type: 'ribbon', color: 'bg-brand-lime text-brand-dark' }],
            isDigital: true
        },
        {
            id: 'casus',
            title: 'Casus: Eigenaarschap of context?',
            price: 0,
            image: 'https://static.wixstatic.com/media/215a32_ed8dfc489b864542a687ed1cafe347f8~mv2.png/v1/fill/w_400,h_400,al_c,q_80/casus.png',
            badges: [{ text: 'Compleet uitgewerkte casus', type: 'ribbon', color: 'bg-brand-dark' }],
            isDigital: true
        },
        {
            id: 'werkvormen-context',
            title: 'Werkvormen: Onderzoek de context van samenwerking',
            price: 17,
            image: 'https://static.wixstatic.com/media/215a32_af62b71f28dc4907884a57536eec4193~mv2.png/v1/fill/w_400,h_400,al_c,q_80/werkvormen1.png',
            isDigital: true
        },
        {
            id: 'belangen-werkvorm',
            title: 'Werkvorm persoonlijke belangen: haal onzichtbare drempels weg',
            price: 17,
            image: 'https://static.wixstatic.com/media/215a32_b38ea04d317d4055a28cc9c32a56e131~mv2.jpg/v1/fill/w_400,h_400,al_c,q_80/belangen-werkvorm.jpg',
            isDigital: true
        },
        {
            id: 'bundel',
            title: 'Werkvormen bundel 2x',
            price: 27,
            originalPrice: 34,
            image: 'https://static.wixstatic.com/media/215a32_821c4cad7aac4459871817bcf8f7dc46~mv2.png/v1/fill/w_400,h_400,al_c,q_80/bundel.png',
            isDigital: true
        },
        {
            id: 'toolbox',
            title: 'Context-toolbox los exemplaar, met tutorials',
            price: 695,
            image: 'https://static.wixstatic.com/media/215a32_7121f6888d0a4e3cbb56e9bed2300ecb~mv2.png',
        }
    ];

  return (
    <div className="bg-white min-h-screen">
      <Hero 
        title="Alle Producten"
        subtitle="Ga direct aan de slag met onze gratis en betaalde producten. Houd deze pagina in de gaten, er komt regelmatig nieuwe content bij. Laat je inspireren!"
        imageUnsplash="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
        compact={true}
      />

      <section className="py-24 px-4 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {products.map((product) => (
              <article key={product.id} className="group flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/50">
                {/* Image Wrapper */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    {/* Badge */}
                    {product.badges && product.badges.map((badge, i) => (
                        <span key={i} className={`absolute top-4 left-4 z-20 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm shadow-sm ${badge.color || 'bg-brand-dark text-white'}`}>
                            {badge.text}
                        </span>
                    ))}
                    
                    {/* Digital Icon */}
                    {product.isDigital && (
                        <div className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm text-brand-dark" title="Digitaal product">
                            <Download className="w-4 h-4" />
                        </div>
                    )}

                    <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-brand-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow relative">
                    <h2 className="font-serif text-xl leading-snug mb-4 group-hover:text-[rgb(61,155,233)] transition-colors duration-300">
                        {product.title}
                    </h2>
                    
                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                         <div className="flex flex-col">
                            {product.originalPrice && (
                                <span className="text-gray-400 line-through text-xs mb-0.5">€ {product.originalPrice.toFixed(2).replace('.', ',')}</span>
                            )}
                            <span className={`text-lg font-bold ${product.price === 0 ? 'text-[rgb(61,155,233)]' : 'text-brand-dark'}`}>
                                {product.price === 0 ? 'Gratis' : `€ ${product.price.toFixed(2).replace('.', ',')}`}
                            </span>
                        </div>
                        
                        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-50 text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                            {product.price === 0 ? <Download size={18} /> : <ShoppingCart size={18} />}
                        </button>
                    </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
