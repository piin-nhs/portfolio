import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen, CheckCircle } from 'lucide-react';
import { educationInfo } from '../data/cvData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-background relative">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-accent text-sm font-mono tracking-wider uppercase mb-2">
            <GraduationCap className="h-4 w-4" />
            <span>04 . Academics</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-textPrimary">Education</h2>
          <div className="h-1 w-12 bg-primary rounded-full mt-4" />
        </div>

        {/* Education Detail Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Institution Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-card border border-white/5 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex items-start justify-between mb-6">
              <div className="space-y-1">
                <span className="text-xs font-mono text-accent uppercase tracking-widest block">University</span>
                <h3 className="text-xl sm:text-2xl font-bold text-textPrimary">
                  {educationInfo.school}
                </h3>
                <p className="text-sm font-medium text-white/60">
                  {educationInfo.degree} — {educationInfo.major}
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-surface border border-white/5 text-accent hidden sm:block">
                <GraduationCap className="h-6 w-6" />
              </div>
            </div>

            {/* Timelines and Stats */}
            <div className="grid grid-cols-2 gap-4 py-4 my-6 border-y border-white/5 text-sm font-mono">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-accent flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-white/40 block">Timeline</span>
                  <span className="text-textSecondary text-xs">{educationInfo.duration}</span>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                <div>
                  <span className="text-[11px] text-white/40 block">Expected Graduation</span>
                  <span className="text-textSecondary text-xs">{educationInfo.expectedGraduation}</span>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-white/40 block">Cumulative GPA</span>
              <div className="flex items-baseline space-x-1">
                <span className="text-4xl font-extrabold text-accent">{educationInfo.gpa.split(' ')[0]}</span>
                <span className="text-sm text-textSecondary font-mono">{educationInfo.gpa.substring(educationInfo.gpa.indexOf('/'))}</span>
              </div>
            </div>
          </motion.div>

          {/* Coursework & Awards Side Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Awards Card */}
            {educationInfo.awards && educationInfo.awards.length > 0 && (
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5 }}
                className="p-6 rounded-2xl bg-card border border-white/5 hover:border-accent/10 transition-colors"
              >
                <div className="flex items-center space-x-2.5 mb-4">
                  <Award className="h-5 w-5 text-accent" />
                  <h4 className="font-semibold text-textPrimary text-base">Scholarships & Honors</h4>
                </div>
                <div className="space-y-3 text-xs text-textSecondary leading-relaxed">
                  {educationInfo.awards.map((award, idx) => (
                    <p key={idx} className="flex items-start space-x-2">
                      <span className="text-accent">•</span>
                      <span>{award}</span>
                    </p>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Coursework Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-card border border-white/5 hover:border-accent/10 transition-colors"
            >
              <div className="flex items-center space-x-2.5 mb-4">
                <BookOpen className="h-5 w-5 text-accent" />
                <h4 className="font-semibold text-textPrimary text-base">Key Coursework</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {educationInfo.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-surface border border-white/5 text-[11px] font-mono text-textSecondary"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
export default Education;
