import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in viewport
      const scrollPosition = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.querySelector(item.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.href.substring(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-2 text-textPrimary hover:text-accent transition-colors font-mono font-bold text-xl tracking-tight"
        >
          <Terminal className="h-5 w-5 text-accent" />
          <span>sang.dev<span className="text-primary animate-pulse">_</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm font-medium transition-colors hover:text-accent relative py-1 ${
                activeSection === item.href.substring(1) 
                  ? 'text-accent' 
                  : 'text-textSecondary'
              }`}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full" />
              )}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-primary hover:bg-blue-700 text-textPrimary text-sm font-medium transition-all transform hover:-translate-y-[1px] hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-textPrimary hover:text-accent transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-6 px-6 flex flex-col space-y-4 border-t border-white/5 animate-fade-in shadow-2xl">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-base font-medium py-2 border-b border-white/5 transition-colors ${
                activeSection === item.href.substring(1) ? 'text-accent' : 'text-textSecondary'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex justify-center items-center space-x-1 px-4 py-3 rounded-lg bg-primary hover:bg-blue-700 text-textPrimary font-medium transition-all"
          >
            <span>Let's talk</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
