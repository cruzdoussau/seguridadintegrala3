import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import InstallationKits from './components/InstallationKits.jsx';
import About from './components/About.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Contact from './components/Contact.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash || '#inicio');

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash || '#inicio');

    window.addEventListener('hashchange', updateHash);
    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  const isKitsPage = currentHash === '#kits-instalacion';

  useEffect(() => {
    if (isKitsPage) return;

    window.requestAnimationFrame(() => {
      document.querySelector(currentHash)?.scrollIntoView({ block: 'start' });
    });
  }, [currentHash, isKitsPage]);

  return (
    <>
      <Header currentHash={currentHash} />
      <main>
        {isKitsPage ? (
          <InstallationKits />
        ) : (
          <>
            <Hero />
            <Services />
            <About />
            <WhyChooseUs />
            <Contact />
          </>
        )}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
