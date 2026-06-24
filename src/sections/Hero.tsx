import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, FileText } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactInfo } from '../data/cvData';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex flex-col justify-center overflow-hidden pt-28 pb-12 bg-background">
      
      {/* Decorative dot grids and rectangles */}
      <div className="absolute top-[15%] left-[5%] text-[#3e4452]/20 hidden md:block pointer-events-none select-none">
        <svg className="w-16 h-16" viewBox="0 0 84 84" fill="currentColor">
          <circle cx="2" cy="2" r="2" />
          <circle cx="22" cy="2" r="2" />
          <circle cx="42" cy="2" r="2" />
          <circle cx="62" cy="2" r="2" />
          <circle cx="82" cy="2" r="2" />
          <circle cx="2" cy="22" r="2" />
          <circle cx="22" cy="22" r="2" />
          <circle cx="42" cy="22" r="2" />
          <circle cx="62" cy="22" r="2" />
          <circle cx="82" cy="22" r="2" />
          <circle cx="2" cy="42" r="2" />
          <circle cx="22" cy="42" r="2" />
          <circle cx="42" cy="42" r="2" />
          <circle cx="62" cy="42" r="2" />
          <circle cx="82" cy="42" r="2" />
          <circle cx="2" cy="62" r="2" />
          <circle cx="22" cy="62" r="2" />
          <circle cx="42" cy="62" r="2" />
          <circle cx="62" cy="62" r="2" />
          <circle cx="82" cy="62" r="2" />
          <circle cx="2" cy="82" r="2" />
          <circle cx="22" cy="82" r="2" />
          <circle cx="42" cy="82" r="2" />
          <circle cx="62" cy="82" r="2" />
          <circle cx="82" cy="82" r="2" />
        </svg>
      </div>

      <div className="absolute bottom-[20%] right-[8%] text-[#3e4452]/25 hidden md:block pointer-events-none select-none">
        <div className="w-20 h-20 border border-[#3e4452]/30 relative">
          <div className="absolute -top-4 -left-4 w-6 h-6 border border-[#3e4452]/20"></div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-10"
        >
          {/* Grid Layout: Intro Text + Terminal window */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 items-center">
            
            {/* Left Column: Intro */}
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="text-accent text-sm font-mono tracking-wider">
                <span>// final-year software engineering student</span>
              </motion.div>

              <motion.h1 
                variants={itemVariants}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight"
              >
                I am a <span className="text-accent">software engineer</span> and <span className="text-accent">full-stack developer</span>
              </motion.h1>

              <motion.p 
                variants={itemVariants}
                className="text-sm sm:text-base text-textSecondary leading-relaxed"
              >
                I build robust, event-driven backend services and construct responsive, pixel-perfect user interfaces. Currently seeking an internship role to apply software architectures in production environments.
              </motion.p>

              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-2"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2.5 border border-accent text-accent hover:bg-accent/10 text-sm font-medium transition-all duration-200"
                >
                  Contact me!!
                </a>

                <a
                  href={contactInfo.cvDownloadUrl}
                  download="NguyenHoangSang_FullstackDeveloperIntern_CV.pdf"
                  className="inline-flex items-center space-x-2 px-4 py-2.5 border border-[#abb2bf] text-white hover:bg-white/5 text-sm font-medium transition-all duration-200"
                >
                  <FileText className="h-4 w-4" />
                  <span>Download CV</span>
                </a>
              </motion.div>

              {/* Socials bar (mobile version or helper) */}
              <motion.div variants={itemVariants} className="flex items-center space-x-4 pt-4 md:hidden">
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-white transition-colors">
                  <FaGithub className="h-5 w-5" />
                </a>
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-textSecondary hover:text-white transition-colors">
                  <FaLinkedin className="h-5 w-5" />
                </a>
                <a href={`mailto:${contactInfo.email}`} className="text-textSecondary hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </motion.div>
            </div>

            {/* Right Column: Interactive Profile Terminal */}
            <motion.div 
              variants={itemVariants}
              className="border border-[#3e4452] bg-[#21252b] rounded relative overflow-hidden group shadow-xl"
            >
              {/* Terminal Window Header */}
              <div className="bg-[#1e2227] px-4 py-2.5 border-b border-[#3e4452] flex items-center justify-between">
                <div className="flex space-x-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <span className="text-[10px] text-textSecondary font-mono select-none">sang_profile.json</span>
                <span className="w-8" />
              </div>

              {/* Terminal Window Content */}
              <div className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed text-textSecondary overflow-x-auto select-none">
                <div className="flex items-center space-x-2 text-accent mb-2">
                  <span>$</span>
                  <span className="text-white">cat sang_profile.json</span>
                </div>
                <pre className="text-white font-mono text-[11px] sm:text-xs leading-relaxed">
{`{
  "name": "Nguyen Hoang Sang",
  "role": "Software Engineer Intern",
  "status": "Senior Student @ IUH",
  "skills": {
    "languages": ["TS", "JS", "Java", "SQL"],
    "backend": ["Spring Boot", "Node.js"],
    "frontend": ["React", "TailwindCSS"]
  },
  "gpa": "3.12 / 4.0",
  "contact": {
    "email": "h.sangg.r@gmail.com",
    "github": "piin-nhs"
  }
}`}
                </pre>
              </div>
            </motion.div>
          </div>

          {/* Programmer Quote Block (Centered below grid) */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center justify-center pt-8"
          >
            <div className="w-full max-w-2xl flex flex-col items-end justify-end select-none">
              <div className="relative w-full">
                <p 
                  className="w-full border border-[#3e4452] py-4 text-white relative text-xs sm:text-sm italic leading-relaxed font-mono"
                  style={{ paddingLeft: '3.5rem', paddingRight: '3.5rem' }}
                >
                  <span 
                    className="absolute text-4xl bg-background px-1 text-accent font-bold select-none"
                    style={{ left: '1.25rem', top: '-0.9rem' }}
                  >
                    “
                  </span>
                  <span>Code is like humor. When you have to explain it, it's bad.</span>
                  <span 
                    className="absolute text-4xl bg-background px-1 text-accent font-bold select-none"
                    style={{ right: '1.5rem', bottom: '-0.6rem' }}
                  >
                    ”
                  </span>
                </p>
              </div>
              <p className="w-fit border border-[#3e4452] border-t-transparent py-1.5 px-3 text-textSecondary text-xs font-mono">
                - Cory House
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
