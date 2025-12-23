import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import WhatIsContextManagement from './pages/WhatIsContextManagement';
import Organization from './pages/Organization';
import Academy from './pages/Academy';
import Team from './pages/Team';
import Products from './pages/Products';

import Blogs from './pages/Blogs';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-brand-light font-sans antialiased selection:bg-brand-lime selection:text-brand-dark">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/wat-is-contextmanagement" element={<WhatIsContextManagement />} />
            <Route path="/de-contextgestuurde-organisatie" element={<Organization />} />
            <Route path="/academy" element={<Academy />} />
            <Route path="/team" element={<Team />} />
            <Route path="/producten" element={<Products />} />
            <Route path="/services-8" element={<Blogs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;