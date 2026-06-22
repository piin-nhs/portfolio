import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Cpu, Server, Layout, Database, Cloud, Settings } from 'lucide-react';
import { skillCategories } from '../data/cvData';

export const Skills: React.FC = () => {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // Map category names to Lucide icons
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'languages':
        return <Cpu className="h-5 w-5 text-accent" />;
      case 'frontend':
        return <Layout className="h-5 w-5 text-accent" />;
      case 'backend':
        return <Server className="h-5 w-5 text-accent" />;
      case 'database':
        return <Database className="h-5 w-5 text-accent" />;
      case 'cloud & infrastructure':
        return <Cloud className="h-5 w-5 text-accent" />;
      default:
        return <Settings className="h-5 w-5 text-accent" />;
    }
  };

  return (
    <section id="skills" className="py-24 bg-background relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-accent text-sm font-mono tracking-wider uppercase mb-2">
            <Cpu className="h-4 w-4" />
            <span>02 . Tech Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Skills</h2>
          <div className="h-1 w-12 bg-primary rounded-full mt-4" />
        </div>

        {/* Skills Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="p-6 rounded-2xl bg-card border border-white/5 hover:border-primary/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-white/5">
                <div className="p-2 rounded-lg bg-surface border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-colors duration-300">
                  {getCategoryIcon(cat.category)}
                </div>
                <h3 className="text-textPrimary font-semibold text-lg font-sans tracking-wide">
                  {cat.category}
                </h3>
              </div>

              {/* Skills Items */}
              <div className="flex flex-wrap gap-2.5">
                {cat.items.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1.5 rounded-lg bg-surface border border-white/5 text-textSecondary hover:text-textPrimary hover:border-accent/40 text-sm font-mono transition-all duration-200 cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technical Summary Footer Badge */}
        <div className="mt-16 text-center">
          <p className="text-textSecondary text-sm max-w-2xl mx-auto italic font-sans leading-relaxed">
            "Constantly exploring emerging frameworks, system engineering patterns, containerized deployments, and server-side optimizations to build solid architectures."
          </p>
        </div>

      </div>
    </section>
  );
};
export default Skills;
