import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-700 pb-12">
          
          {/* Column 1: Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-xl text-brand-lime mb-2">Navigatie</h4>
            <a href="#" className="hover:text-brand-lime transition-colors w-fit">Team</a>
            <a href="#" className="hover:text-brand-lime transition-colors w-fit">Blogs</a>
            <a href="#" className="hover:text-brand-lime transition-colors w-fit">Contact</a>
          </div>

          {/* Column 2: Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="font-serif text-xl text-brand-lime mb-2">Contact</h4>
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 hover:text-brand-lime transition-colors group w-fit">
              <div className="bg-white/10 p-2 rounded-full group-hover:bg-brand-lime/20 transition-colors">
                <Mail size={18} />
              </div>
              {CONTACT_INFO.email}
            </a>
            <span className="flex items-center gap-3 group w-fit">
              <div className="bg-white/10 p-2 rounded-full group-hover:bg-brand-lime/20 transition-colors">
                <Phone size={18} />
              </div>
              {CONTACT_INFO.phone}
            </span>
          </div>

          {/* Column 3: Legal & Social */}
          <div className="flex flex-col space-y-4 md:items-end">
             <h4 className="font-serif text-xl text-brand-lime mb-2">Volg ons</h4>
             <a 
               href="#" 
               target="_blank" 
               rel="noopener noreferrer"
               className="bg-brand-lime text-brand-dark p-3 rounded-full hover:bg-white transition-all duration-300 shadow-lg hover:scale-110 w-fit"
               aria-label="LinkedIn"
             >
               <Linkedin size={24} />
             </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Context Management.</p>
          <a href="#" className="mt-2 md:mt-0 hover:text-white underline decoration-brand-lime decoration-1 underline-offset-4 transition-colors">
            Algemene voorwaarden
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;