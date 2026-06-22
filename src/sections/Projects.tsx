import React from 'react';
import { motion } from 'framer-motion';
import { FolderGit2, ExternalLink, Award, Target } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projectsInfo } from '../data/cvData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 bg-surface relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center space-x-2 text-accent text-sm font-mono tracking-wider uppercase mb-2">
            <FolderGit2 className="h-4 w-4" />
            <span>03 . Accomplishments</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-textPrimary">Featured Projects</h2>
          <div className="h-1 w-12 bg-primary rounded-full mt-4" />
          <p className="text-textSecondary text-sm max-w-xl mt-4">
            Production-grade systems co-engineered to demonstrate advanced web logic, real-time protocols, database matrices, and CI/CD pipelines.
          </p>
        </div>

        {/* Projects Listing */}
        <div className="space-y-20">
          {projectsInfo.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
              >
                {/* Left/Right Column: Project Mockup Preview */}
                <div className={`lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-card border border-white/5 relative overflow-hidden group hover:border-primary/20 transition-all duration-300 ${
                  isEven ? 'lg:order-1' : 'lg:order-2'
                }`}>
                  {/* Decorative Gradient Background */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all duration-300" />
                  
                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-2xl bg-surface border border-white/5 text-accent">
                        <FolderGit2 className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-mono text-white/40">{project.duration}</span>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-1">
                        {project.domain}
                      </span>
                      <h3 className="text-2xl font-bold text-textPrimary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm font-medium text-white/50 mt-1 font-mono">
                        Role: {project.role}
                      </p>
                    </div>

                    <p className="text-textSecondary text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Terminal-like Code Snapshot / Mockup placeholder */}
                  <div className="mt-8 p-4 rounded-xl bg-surface border border-white/5 font-mono text-[11px] text-white/40 overflow-hidden select-none relative h-28 flex flex-col justify-end">
                    <div className="absolute top-2 left-3 flex space-x-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/60" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/60" />
                      <span className="w-2 h-2 rounded-full bg-green-500/60" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-accent">$ npm run dev --host</p>
                      <p className="text-green-400">➜ Local: http://localhost:5173/</p>
                      <p className="text-white/20">➜ Network: use --host to expose</p>
                    </div>
                  </div>
                </div>

                {/* Right/Left Column: Project Details & Tech Stack */}
                <div className={`lg:col-span-7 flex flex-col justify-between space-y-6 ${
                  isEven ? 'lg:order-2' : 'lg:order-1'
                }`}>
                  
                  {/* Key Highlights / Achievements */}
                  <div className="space-y-4">
                    <h4 className="text-xs font-mono text-accent uppercase tracking-widest flex items-center space-x-2">
                      <Target className="h-3.5 w-3.5" />
                      <span>Key Responsibilities</span>
                    </h4>
                    <ul className="space-y-2.5 text-textSecondary text-sm">
                      {project.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start space-x-2 leading-relaxed">
                          <span className="text-primary mt-1.5 select-none font-bold">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements Badge list */}
                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-mono text-accent uppercase tracking-widest flex items-center space-x-2">
                      <Award className="h-3.5 w-3.5" />
                      <span>Key Achievements</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.achievements.map((ach, aIdx) => (
                        <div key={aIdx} className="p-3 rounded-xl bg-card border border-white/5 flex items-start space-x-2 text-xs text-textSecondary hover:border-accent/10 transition-colors">
                          <span className="text-accent text-base select-none leading-none">✓</span>
                          <span>{ach}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack & Links */}
                  <div className="space-y-4 pt-4 border-t border-white/5">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded bg-card border border-white/5 text-[11px] font-mono text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      {/* GitHub Link options */}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-xs font-mono text-textPrimary hover:text-accent transition-colors"
                        >
                          <FaGithub className="h-4 w-4" />
                          <span>View Code</span>
                        </a>
                      )}

                      {project.githubFront && (
                        <a
                          href={project.githubFront}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs font-mono text-textPrimary hover:text-accent transition-colors"
                        >
                          <FaGithub className="h-4 w-4" />
                          <span>Frontend Repo</span>
                        </a>
                      )}

                      {project.githubBack && (
                        <a
                          href={project.githubBack}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-1.5 text-xs font-mono text-textPrimary hover:text-accent transition-colors"
                        >
                          <FaGithub className="h-4 w-4" />
                          <span>Backend Repo</span>
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 text-xs font-mono text-accent hover:text-primary transition-colors ml-auto sm:ml-0"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Projects;
