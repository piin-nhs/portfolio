import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { User, Shield, Zap, Sparkles } from 'lucide-react';
import { contactInfo, educationInfo } from '../data/cvData';

export const About: React.FC = () => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const corePillars = [
    {
      icon: <Shield className="h-6 w-6 text-accent" />,
      title: "System Integrity",
      description: "Implementing secure stateless JWT auth, Google OAuth2, and zero-trust role-based endpoints."
    },
    {
      icon: <Zap className="h-6 w-6 text-accent" />,
      title: "High Performance",
      description: "Optimizing database execution, implementing Redis memory caches, and minimizing UI bundle sizes."
    },
    {
      icon: <Sparkles className="h-6 w-6 text-accent" />,
      title: "Fluid Experiences",
      description: "Building responsive, sub-100ms real-time chat websockets and rich data analytics screens."
    }
  ];

  return (
    <section id="about" className="py-24 bg-surface relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-accent text-sm font-mono tracking-wider uppercase mb-2">
            <User className="h-4 w-4" />
            <span>01 . About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Professional Profile</h2>
          <div className="h-1 w-12 bg-primary rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Summary */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="lg:col-span-7 space-y-6 text-textSecondary text-base md:text-lg leading-relaxed"
          >
            <p>
              I am currently a fourth-year Software Engineering student at the <span className="text-textPrimary font-semibold">Industrial University of Ho Chi Minh City</span>. I specialize in building end-to-end web applications with a strong focus on clean architectures, API optimization, and real-time streaming interfaces.
            </p>
            <p>
              My backend engineering experience centers around constructing scalable RESTful microservices using <span className="text-textPrimary font-semibold">Node.js/Express</span> and <span className="text-textPrimary font-semibold">Java Spring Boot 3</span>. I've designed relational MariaDB and document MongoDB structures, integrated distributed caching with <span className="text-textPrimary font-semibold">Redis</span>, and orchestrated queue systems with <span className="text-textPrimary font-semibold">RabbitMQ</span>.
            </p>
            <p>
              On the client side, I create responsive, interactive layouts using <span className="text-textPrimary font-semibold">React</span>, <span className="text-textPrimary font-semibold">TypeScript</span>, and <span className="text-textPrimary font-semibold">Tailwind CSS</span>. My focus is on writing reusable code blocks, avoiding layout shifts, and maintaining high frame rates during high-frequency server-sent events.
            </p>
            <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4 text-sm font-mono">
              <div>
                <span className="text-accent block">Based In:</span>
                <span className="text-textPrimary">{contactInfo.location}</span>
              </div>
              <div>
                <span className="text-accent block">University Status:</span>
                <span className="text-textPrimary">Senior (Grad. {educationInfo.expectedGraduation})</span>
              </div>
            </div>
          </motion.div>

          {/* Pillars Cards */}
          <div className="lg:col-span-5 space-y-4">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-5 rounded-2xl bg-card border border-white/5 hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-surface border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                    {pillar.icon}
                  </div>
                  <div>
                    <h3 className="text-textPrimary font-semibold text-lg">{pillar.title}</h3>
                    <p className="text-textSecondary text-sm mt-1">{pillar.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
export default About;
