import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Mail, FileText, ArrowRight, Code } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactInfo } from '../data/cvData';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const glowVariants: Variants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.15, 0.25, 0.15],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20 grid-bg">
      
      {/* Dynamic Glowing Spotlights */}
      <motion.div 
        variants={glowVariants}
        animate="animate"
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary rounded-full glow-spot pointer-events-none"
      />
      <motion.div 
        variants={glowVariants}
        animate="animate"
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-accent rounded-full glow-spot pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-6 py-12 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Label Badge */}
          <motion.div 
            variants={itemVariants} 
            className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-accent text-sm font-mono"
          >
            <Code className="h-4 w-4" />
            <span>Ready for a Software Engineer Intern Role</span>
          </motion.div>

          {/* Name Header */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            <span className="block text-textPrimary">Hi, I'm</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-blue-400 bg-clip-text text-transparent">
              {contactInfo.name}
            </span>
          </motion.h1>

          {/* Job Titles */}
          <motion.h2 
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-textSecondary font-medium max-w-2xl mx-auto"
          >
            Full-Stack / Backend / Frontend Developer
          </motion.h2>

          {/* Short Intro */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-textSecondary max-w-3xl mx-auto leading-relaxed"
          >
            A fourth-year Software Engineering student dedicated to architecting robust, event-driven backends and designing pixel-perfect, fluid user interfaces. Experienced in co-engineering high-availability real-time communication systems and enterprise e-commerce pipelines using <span className="text-textPrimary font-semibold">React</span>, <span className="text-textPrimary font-semibold">Node.js</span>, and <span className="text-textPrimary font-semibold">Java Spring Boot</span>.
          </motion.p>

          {/* Call to Actions */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-blue-700 text-textPrimary font-medium transition-all group shadow-lg shadow-blue-500/20"
            >
              <span>Explore My Projects</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-3.5 rounded-xl bg-card hover:bg-slate-800 border border-white/5 text-textPrimary font-medium transition-all"
            >
              <Mail className="h-4 w-4" />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Social Links and CV Download */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center justify-center space-x-6 pt-8 border-t border-white/5 max-w-md mx-auto"
          >
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-accent transition-colors"
              title="GitHub Profile"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-accent transition-colors"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-textSecondary hover:text-accent transition-colors"
              title="Send Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <span className="w-px h-6 bg-white/10" />
            <button
              onClick={() => {
                alert("CV download triggered! (Simulated download of NguyenHoangSang_FullstackDeveloperIntern_CV.pdf)");
              }}
              className="flex items-center space-x-1 text-sm font-mono text-accent hover:text-primary transition-colors"
            >
              <FileText className="h-4 w-4" />
              <span>Download CV</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};
export default Hero;
