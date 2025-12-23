import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS, IMAGES } from '../constants';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-brand-light/95 backdrop-blur-sm border-b border-gray-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src={IMAGES.logo} 
                alt="Context Management Logo" 
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-brand-dark hover:text-brand-lime font-sans font-medium text-sm uppercase tracking-wide transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark hover:text-gray-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-brand-light shadow-inner">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="block px-3 py-3 text-base font-medium text-brand-dark hover:bg-gray-50 hover:text-brand-lime rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;