import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-background relative overflow-hidden">

      {/* Decorative dot grids */}
      <div className="absolute top-[20%] right-[5%] text-[#3e4452]/10 hidden md:block select-none pointer-events-none">
        <svg className="w-12 h-12" viewBox="0 0 84 84" fill="currentColor">
          <circle cx="2" cy="2" r="1.5" />
          <circle cx="22" cy="2" r="1.5" />
          <circle cx="42" cy="2" r="1.5" />
          <circle cx="62" cy="2" r="1.5" />
          <circle cx="2" cy="22" r="1.5" />
          <circle cx="22" cy="22" r="1.5" />
          <circle cx="42" cy="22" r="1.5" />
          <circle cx="62" cy="22" r="1.5" />
          <circle cx="2" cy="42" r="1.5" />
          <circle cx="22" cy="42" r="1.5" />
          <circle cx="42" cy="42" r="1.5" />
          <circle cx="62" cy="42" r="1.5" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-12 w-full font-mono">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white flex items-center">
            <span className="text-accent mr-1">#</span>about-me
          </h2>
          <span className="grow h-[1px] bg-accent max-w-[200px] sm:max-w-[400px]"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Bio text */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-textSecondary leading-relaxed">
            <p className="text-white font-mono text-base sm:text-lg">
              Hello, I'm Sang!
            </p>
            <p>
              I am currently a senior Software Engineering student at the <span className="text-white">Industrial University of Ho Chi Minh City (IUH)</span>. My software journey revolves around constructing production-grade backend engines and implementing interactive browser applications.
            </p>
            <p>
              On the server side, I build modular services using <span className="text-white">Node.js/Express</span> and <span className="text-white">Java Spring Boot</span>. I configure database access logic via JPA/Hibernate, construct event pipelines using <span className="text-white">RabbitMQ</span>, and build caching layers on top of <span className="text-white">Redis</span> nodes.
            </p>
            <p>
              For frontends, I enjoy creating type-safe React view components styled with Tailwind CSS, ensuring responsive behaviors across screen sizes, and structuring lightweight application states.
            </p>
            <p>
              I prioritize system security, code modularity, and clean documentation. I'm always looking for opportunities to grow and learn from experienced engineering teams.
            </p>
          </div>

          {/* Right Column: Code Vector Drawing */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-[280px] sm:max-w-[320px] aspect-square relative border border-[#3e4452] bg-[#21252b] rounded flex flex-col items-center justify-center p-6 select-none"
            >
              {/* Retro brackets and coding vector */}
              <div className="absolute top-3 left-4 text-xs text-accent font-mono select-none">// index.ts</div>

              <svg className="w-40 h-40 text-accent/80" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5">
                {/* Visual Representation of Coder */}
                <rect x="25" y="20" width="50" height="40" rx="3" stroke="#abb2bf" />
                <line x1="30" y1="50" x2="70" y2="50" stroke="#3e4452" />
                <circle cx="35" cy="55" r="1" fill="#abb2bf" />
                <circle cx="39" cy="55" r="1" fill="#abb2bf" />
                <circle cx="43" cy="55" r="1" fill="#abb2bf" />

                {/* Stand */}
                <path d="M45 60 L40 75 L60 75 L55 60 Z" stroke="#abb2bf" fill="#21252b" />
                <line x1="35" y1="75" x2="65" y2="75" stroke="#abb2bf" />

                {/* Code snippets */}
                <path d="M15 35 L5 30 L15 25" stroke="currentColor" />
                <path d="M85 35 L95 30 L85 25" stroke="currentColor" />
                <line x1="45" y1="30" x2="55" y2="30" stroke="currentColor" />
                <line x1="38" y1="38" x2="62" y2="38" stroke="currentColor" />
                <line x1="42" y1="46" x2="58" y2="46" stroke="currentColor" />
              </svg>

              {/* Decorative side dots */}
              <div className="absolute -bottom-4 -right-4 text-[#3e4452]/40">
                <svg className="w-10 h-10" viewBox="0 0 50 50" fill="currentColor">
                  <circle cx="5" cy="5" r="1.5" />
                  <circle cx="20" cy="5" r="1.5" />
                  <circle cx="35" cy="5" r="1.5" />
                  <circle cx="5" cy="20" r="1.5" />
                  <circle cx="20" cy="20" r="1.5" />
                  <circle cx="35" cy="20" r="1.5" />
                </svg>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
