import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);

  const navItems = [
    { label: 'home', href: '#home' },
    { label: 'about-me', href: '#about' },
    { label: 'skills', href: '#skills' },
    { label: 'works', href: '#projects' },
    { label: 'education', href: '#education' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Check if at top
      if (currentScrollY <= 20) {
        setIsAtTop(true);
        setVisible(true);
      } else {
        setIsAtTop(false);
        
        // 2. Hide on scroll down, show on scroll up
        if (currentScrollY > lastScrollY) {
          setVisible(false); // scrolling down
        } else {
          setVisible(true); // scrolling up
        }
      }

      setLastScrollY(currentScrollY);

      // Check which section is in viewport
      const scrollPosition = currentScrollY + 100;
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 transform ${
      visible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isAtTop 
        ? 'bg-transparent border-b border-transparent py-6' 
        : 'bg-[#282c33] border-b border-[#3e4452]/40 py-4 shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-2 text-white hover:text-accent transition-colors font-mono font-bold text-xl tracking-tight"
        >
          <Terminal className="h-5 w-5 text-accent" />
          <span>sang.dev<span className="text-accent animate-pulse">_</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 font-mono">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-sm transition-colors hover:text-white relative py-1 ${
                activeSection === item.href.substring(1) 
                  ? 'text-white font-medium' 
                  : 'text-textSecondary'
              }`}
            >
              <span className="text-accent">#</span>{item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center space-x-1.5 px-4 py-2 border border-accent hover:bg-accent/10 text-white text-sm font-medium transition-all"
          >
            <span>contact</span>
            <ArrowUpRight className="h-4 w-4 text-accent" />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-accent transition-colors p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 py-6 px-6 flex flex-col space-y-4 bg-[#282c33] border-t border-white/5 border-b border-white/5 animate-fade-in shadow-2xl font-mono">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-base py-2 border-b border-white/5 transition-colors hover:text-white ${
                activeSection === item.href.substring(1) ? 'text-white font-medium' : 'text-textSecondary'
              }`}
            >
              <span className="text-accent">#</span>{item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex justify-center items-center space-x-1 px-4 py-3 border border-accent hover:bg-accent/10 text-white font-medium transition-all"
          >
            <span>contact</span>
            <ArrowUpRight className="h-4 w-4 text-accent" />
          </a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
