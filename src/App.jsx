import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';

import Skills from './components/sections/Skills';
import AdditionalInfo from './components/sections/AdditionalInfo';
import Footer from './components/layout/Footer';

import Experience from './components/sections/Experience';
import Education from './components/sections/Education';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <AdditionalInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
