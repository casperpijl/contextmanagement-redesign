import React from 'react';
import { ButtonProps } from '../types';

const Button: React.FC<ButtonProps> = ({ label, href, variant = 'primary', target = '_self', className = '' }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-brand-dark text-white hover:bg-black hover:scale-105 focus:ring-brand-dark shadow-md",
    secondary: "bg-brand-lime text-brand-dark hover:bg-[#bce357] hover:scale-105 focus:ring-brand-lime shadow-md",
    outline: "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white focus:ring-brand-dark"
  };

  return (
    <a 
      href={href} 
      target={target}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {label}
    </a>
  );
};

export default Button;