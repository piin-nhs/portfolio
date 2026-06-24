import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-[#abb2bf] selection:bg-[#c778dd]/30 selection:text-[#c778dd] overflow-x-hidden font-mono">
      {/* Sidebar Hanging Socials */}
      <Sidebar />

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
