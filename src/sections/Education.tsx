import React from 'react';
import { educationInfo } from '../data/cvData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-background relative overflow-hidden">

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16 w-full font-mono">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white flex items-center">
            <span className="text-accent mr-1">#</span>education
          </h2>
          <span className="grow h-[1px] bg-accent max-w-[200px] sm:max-w-[400px]"></span>
        </div>

        {/* Education grid layout: 1 tall card on left, 2 stacked cards on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-mono">

          {/* Left Column: Academic Degree (1 tall card) */}
          <div className="lg:col-span-7 border border-[#3e4452] bg-[#21252b] transition-colors hover:border-[#abb2bf]/60 duration-200 flex flex-col justify-between">
            <div>
              <h3 className="px-3 py-2 border-b border-[#3e4452] text-xs sm:text-sm font-semibold text-white tracking-wide">
                // academic_degree
              </h3>

              <div className="p-5 space-y-6">
                <div>
                  <span className="text-[10px] text-accent uppercase tracking-wider block">Institution</span>
                  <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">
                    {educationInfo.school}
                  </h4>
                  <p className="text-xs text-textSecondary mt-1">
                    {educationInfo.degree} — {educationInfo.major}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-b border-[#3e4452]/40 py-4 text-xs select-none">
                  <div>
                    <span className="text-[10px] text-accent block">// study_timeline</span>
                    <span className="text-white text-xs block mt-0.5">{educationInfo.duration}</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-accent block">// expected_graduation</span>
                    <span className="text-white text-xs block mt-0.5">{educationInfo.expectedGraduation}</span>
                  </div>
                </div>

                <div>
                  <span className="text-[10px] text-accent block">// cumulative_gpa</span>
                  <div className="flex items-baseline space-x-1.5 mt-1 select-none">
                    <span className="text-3xl font-bold text-white">{educationInfo.gpa.split(' ')[0]}</span>
                    <span className="text-xs text-textSecondary">{educationInfo.gpa.substring(educationInfo.gpa.indexOf('/'))}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2 stacked cards splitting the height */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            {/* Card 2: Awards */}
            <div className="border border-[#3e4452] bg-[#21252b] transition-colors hover:border-[#abb2bf]/60 duration-200 flex flex-col flex-1">
              <h3 className="px-3 py-2 border-b border-[#3e4452] text-xs font-semibold text-white tracking-wide">
                // awards
              </h3>
              <div className="p-5 flex-grow flex flex-col justify-center">
                <div className="text-xs text-textSecondary leading-relaxed space-y-2">
                  {educationInfo.awards && educationInfo.awards.length > 0 ? (
                    educationInfo.awards.map((award, idx) => {
                      const parts = award.split(' - ');
                      return (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-start space-x-2">
                            <span className="text-accent font-bold">•</span>
                            <span className="text-white font-bold">{parts[0]}</span>
                          </div>
                          {parts[1] && (
                            <p className="text-[11px] text-textSecondary/80 pl-4 font-mono">
                              - {parts[1]}
                            </p>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <p className="italic text-white/30">// none</p>
                  )}
                </div>
              </div>
            </div>

            {/* Card 3: Key Coursework */}
            <div className="border border-[#3e4452] bg-[#21252b] transition-colors hover:border-[#abb2bf]/60 duration-200 flex flex-col flex-1">
              <h3 className="px-3 py-2 border-b border-[#3e4452] text-xs font-semibold text-white tracking-wide">
                // key_coursework
              </h3>
              <div className="p-5 flex-grow flex flex-col justify-center">
                <div className="text-xs text-textSecondary leading-relaxed space-y-2.5 font-mono">
                  {educationInfo.coursework.map((course, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <span className="text-accent font-bold">&gt;</span>
                      <span className="text-white">{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;
