import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactInfo } from '../data/cvData';

export const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col items-center gap-4 fixed top-0 left-4 lg:left-8 z-50 text-textSecondary font-mono">
      {/* Vertical hanging line from viewport top */}
      <div className="w-[1px] h-[30vh] bg-[#abb2bf]/30 rounded-full"></div>
      
      {/* Social list */}
      <ul className="flex flex-col gap-4 items-center">
        <li>
          <a
            href={contactInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 block transition-all duration-200 hover:text-white hover:-translate-y-[2px]"
            title="GitHub Profile"
            aria-label="GitHub Profile"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 block transition-all duration-200 hover:text-white hover:-translate-y-[2px]"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${contactInfo.email}`}
            className="p-1 block transition-all duration-200 hover:text-white hover:-translate-y-[2px]"
            title="Email me"
            aria-label="Email me"
          >
            <Mail className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
