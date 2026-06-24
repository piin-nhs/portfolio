import React from 'react';
import { projectsInfo } from '../data/cvData';

export const Projects: React.FC = () => {
  // Custom mock terminal outputs to make the card designs feel visual and highly premium
  const getMockTerminalContent = (title: string) => {
    if (title.toLowerCase().includes('riff')) {
      return (
        <div className="space-y-1.5 text-green-400 font-mono text-[10px] leading-relaxed">
          <p className="text-accent font-semibold">// Riff Chat Core v1.0.0</p>
          <p className="text-white/40">Socket.IO: connection established: ox9A7f</p>
          <p className="text-white/60">LiveKit WebRTC: media channel negotiated</p>
          <p className="text-white/40">RabbitMQ: dispatching notify_worker to queue_0</p>
          <p className="text-[#c778dd]">Redis Cache: typing_indicator synchronized (34ms)</p>
          <p className="text-white/30">AWS EC2: path-dependent container deploy [SUCCESS]</p>
        </div>
      );
    } else {
      return (
        <div className="space-y-1.5 text-yellow-400 font-mono text-[10px] leading-relaxed">
          <p className="text-accent font-semibold">// Spring Boot E-commerce Engine</p>
          <p className="text-white/40">Spring Security: zero-trust JWT validator [UP]</p>
          <p className="text-white/60">MariaDB Node: catalog query execution (12ms)</p>
          <p className="text-[#c778dd]">Redis Store: query cache hit - catalog_cache</p>
          <p className="text-white/30">SePay webhook: payload verified: 450,000 VND</p>
          <p className="text-green-400">Order Ledger: balance complete. status: 200</p>
        </div>
      );
    }
  };

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16 w-full font-mono">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white flex items-center">
            <span className="text-accent mr-1">#</span>works
          </h2>
          <span className="grow h-[1px] bg-accent max-w-[200px] sm:max-w-[400px]"></span>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {projectsInfo.map((project, index) => (
            <div 
              key={index} 
              className="border border-[#3e4452] bg-[#21252b] flex flex-col h-full transition-all duration-300 hover:border-[#abb2bf]/60"
            >
              {/* Top Section: Visual Mockup (Developer Console Screen) */}
              <div className="bg-[#1e2227] px-4 py-2 border-b border-[#3e4452] flex items-center space-x-1.5 select-none">
                <span className="w-2 h-2 rounded-full bg-red-500/50" />
                <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <span className="w-2 h-2 rounded-full bg-green-500/50" />
                <span className="text-[9px] text-textSecondary font-mono ml-2 select-none">
                  {project.title.toLowerCase().replace(/[\s—]/g, '_').substring(0, 20)}.sh
                </span>
              </div>
              <div className="p-4 bg-[#14161a] border-b border-[#3e4452] aspect-video flex flex-col justify-between relative overflow-hidden select-none">
                {getMockTerminalContent(project.title)}
                <div className="absolute right-2 bottom-2 text-white/5 text-6xl font-bold font-mono select-none pointer-events-none">
                  SANG
                </div>
              </div>

              {/* Technologies separator block */}
              <div className="border-b border-[#3e4452] px-3 py-2 flex flex-wrap gap-x-3 gap-y-1.5 text-[10px] font-mono text-textSecondary select-none">
                {project.technologies.slice(0, 6).map((tech, tIdx) => (
                  <span key={tIdx} className="hover:text-accent cursor-default">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Card Body content */}
              <div className="p-5 flex flex-col flex-grow gap-4">
                <div>
                  <span className="text-[10px] text-accent font-mono block select-none uppercase tracking-wider">
                    {project.duration}
                  </span>
                  <h3 className="text-lg font-bold text-white font-mono mt-0.5">
                    {project.title}
                  </h3>
                  <span className="text-xs text-white/50 block font-mono">
                    Role: {project.role}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-textSecondary leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Card Actions */}
                <div className="flex flex-wrap items-center gap-3 pt-2 mt-auto font-mono text-xs select-none">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 border border-accent text-accent hover:bg-accent/10 transition-colors"
                    >
                      Live &lt;~&gt;
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 border border-[#abb2bf] text-white hover:bg-white/5 transition-colors"
                    >
                      Code &gt;=
                    </a>
                  )}

                  {project.githubFront && (
                    <a
                      href={project.githubFront}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 border border-[#abb2bf] text-white hover:bg-white/5 transition-colors"
                    >
                      Front &gt;=
                    </a>
                  )}

                  {project.githubBack && (
                    <a
                      href={project.githubBack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 border border-[#abb2bf] text-white hover:bg-white/5 transition-colors"
                    >
                      Back &gt;=
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
