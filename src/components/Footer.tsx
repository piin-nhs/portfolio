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
    <footer className="bg-background border-t border-[#3e4452]/40 py-10 relative font-mono text-xs">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side: Copyright */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-textSecondary">
            &copy; {new Date().getFullYear()} {contactInfo.name}. All rights reserved.
          </p>
          <p className="text-white/20 text-[10px]">
            // built using react, typescript, tailwindcss & framer-motion
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-white transition-colors p-2 border border-transparent hover:border-[#3e4452]"
            aria-label="GitHub Profile"
          >
            <FaGithub className="h-4.5 w-4.5" />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-white transition-colors p-2 border border-transparent hover:border-[#3e4452]"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="h-4.5 w-4.5" />
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="text-textSecondary hover:text-white transition-colors p-2 border border-transparent hover:border-[#3e4452]"
            aria-label="Email Me"
          >
            <Mail className="h-4.5 w-4.5" />
          </a>
        </div>

        {/* Right Side: Back to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center justify-center p-2 border border-[#3e4452] text-textSecondary hover:text-accent hover:border-accent transition-colors"
          aria-label="Back to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
