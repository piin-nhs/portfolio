import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-textPrimary selection:bg-primary/30 selection:text-accent overflow-x-hidden">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
};

export default App;
