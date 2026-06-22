import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactInfo } from '../data/cvData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-background border-t border-white/5 py-12 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-textSecondary text-sm font-mono">
            &copy; {new Date().getFullYear()} {contactInfo.name}. All rights reserved.
          </p>
          <p className="text-white/30 text-xs mt-1">
            Built with React, TypeScript, Tailwind CSS & Framer Motion.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center space-x-6">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-textPrimary transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="GitHub Profile"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-textPrimary transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-textSecondary hover:text-textPrimary transition-colors p-2 rounded-full hover:bg-white/5"
            aria-label="Email Me"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center p-3 rounded-xl bg-card border border-white/5 text-textSecondary hover:text-accent hover:border-accent/30 transition-all shadow-md hover:-translate-y-1"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>
    </footer>
  );
};
export default Footer;
