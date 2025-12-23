import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-light font-sans antialiased selection:bg-brand-lime selection:text-brand-dark">
      <Header />
      <main className="flex-grow">
        <Hero />
        <MainContent />
      </main>
      <Footer />
    </div>
  );
};

export default App;