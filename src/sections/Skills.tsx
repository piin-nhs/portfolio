import React from 'react';
import { skillCategories } from '../data/cvData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16 w-full font-mono">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white flex items-center">
            <span className="text-accent mr-1">#</span>skills
          </h2>
          <span className="grow h-[1px] bg-accent max-w-[200px] sm:max-w-[400px]"></span>
        </div>

        {/* 2 Column Layout on Desktop: Left is Visuals, Right is Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-start">
          
          {/* Left Column: Decorative Visual Art (Hidden on Mobile) */}
          <div className="hidden lg:flex flex-col gap-6 relative select-none pointer-events-none w-full h-[280px]">
            {/* Dot grid overlapping shapes */}
            <svg className="absolute top-[5%] left-0 w-20 h-20 text-[#abb2bf]/35" viewBox="0 0 84 84" fill="currentColor">
              <circle cx="2" cy="2" r="2.5" /><circle cx="22" cy="2" r="2.5" /><circle cx="42" cy="2" r="2.5" /><circle cx="62" cy="2" r="2.5" /><circle cx="82" cy="2" r="2.5" />
              <circle cx="2" cy="22" r="2.5" /><circle cx="22" cy="22" r="2.5" /><circle cx="42" cy="22" r="2.5" /><circle cx="62" cy="22" r="2.5" /><circle cx="82" cy="22" r="2.5" />
              <circle cx="2" cy="42" r="2.5" /><circle cx="22" cy="42" r="2.5" /><circle cx="42" cy="42" r="2.5" /><circle cx="62" cy="42" r="2.5" /><circle cx="82" cy="42" r="2.5" />
              <circle cx="2" cy="62" r="2.5" /><circle cx="22" cy="62" r="2.5" /><circle cx="42" cy="62" r="2.5" /><circle cx="62" cy="62" r="2.5" /><circle cx="82" cy="62" r="2.5" />
            </svg>

            <svg className="absolute top-[35%] left-[35%] w-14 h-14 text-[#abb2bf]/45" viewBox="0 0 84 84" fill="currentColor">
              <circle cx="2" cy="2" r="3" /><circle cx="22" cy="2" r="3" /><circle cx="42" cy="2" r="3" />
              <circle cx="2" cy="22" r="3" /><circle cx="22" cy="22" r="3" /><circle cx="42" cy="22" r="3" />
              <circle cx="2" cy="42" r="3" /><circle cx="22" cy="42" r="3" /><circle cx="42" cy="42" r="3" />
            </svg>

            {/* Squares outlines */}
            <div className="absolute top-[10%] right-[10%] w-24 h-24 border border-accent/40"></div>
            <div className="absolute bottom-[5%] right-[25%] w-16 h-16 border border-[#abb2bf]/40"></div>

            {/* Floating Terminal Code bracket */}
            <div className="absolute bottom-[5%] left-[5%] text-accent font-bold text-5xl select-none">
              &lt;/&gt;
            </div>
          </div>

          {/* Right Column: Skill Boxes Sub-Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((cat, idx) => (
              <div 
                key={idx}
                className="border border-[#3e4452] bg-[#21252b] h-full transition-colors hover:border-[#abb2bf]/60 duration-200"
              >
                {/* Title header with border */}
                <h3 className="px-3 py-2 border-b border-[#3e4452] font-mono text-xs sm:text-sm font-semibold text-white tracking-wide">
                  {cat.category}
                </h3>
                {/* Skills content tags */}
                <ul className="p-3 flex flex-wrap gap-2 text-xs font-mono text-textSecondary select-none">
                  {cat.items.map((skill, sIdx) => (
                    <li 
                      key={sIdx}
                      className="hover:text-accent transition-colors cursor-default"
                    >
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Technical Summary block */}
        <div className="mt-16 text-center select-none font-mono">
          <p className="text-textSecondary text-xs sm:text-sm max-w-2xl mx-auto italic">
            <span>// "Constantly exploring emerging frameworks, system engineering patterns, containerized deployments, and server-side optimizations to build solid architectures."</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
