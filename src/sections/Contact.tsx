import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { contactInfo } from '../data/cvData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-surface relative">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center space-x-2 text-accent text-sm font-mono tracking-wider uppercase mb-2">
            <Mail className="h-4 w-4" />
            <span>05 . Connect</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-textPrimary">Get In Touch</h2>
          <div className="h-1 w-12 bg-primary rounded-full mt-4" />
          <p className="text-textSecondary text-sm max-w-xl mt-4">
            Feel free to reach out for internship opportunities, project collaborations, or general technical inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Direct Contacts */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl bg-card border border-white/5 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-textPrimary">Contact Details</h3>
              <p className="text-sm text-textSecondary leading-relaxed">
                I am actively seeking software engineering internships where I can contribute to system design, API pipelines, or dynamic frontend interfaces.
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-4 font-mono text-sm text-textSecondary">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-accent/30 transition-all text-left"
              >
                <div className="p-2.5 rounded-lg bg-card text-accent">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-white/30 block">Email</span>
                  <span className="text-xs text-textPrimary break-all">{contactInfo.email}</span>
                </div>
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-surface border border-white/5 hover:border-accent/30 transition-all text-left"
              >
                <div className="p-2.5 rounded-lg bg-card text-accent">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-white/30 block">Phone</span>
                  <span className="text-xs text-textPrimary">{contactInfo.phone}</span>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-surface border border-white/5 text-left cursor-default">
                <div className="p-2.5 rounded-lg bg-card text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-white/30 block">Location</span>
                  <span className="text-xs text-textPrimary">{contactInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="flex items-center space-x-4 pt-6 border-t border-white/5">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs text-textSecondary hover:text-accent transition-colors"
              >
                <FaGithub className="h-4 w-4" />
                <span>GitHub</span>
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-xs text-textSecondary hover:text-accent transition-colors"
              >
                <FaLinkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </div>

          </motion.div>

          {/* Right Column: Simulated Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-7 p-8 rounded-3xl bg-card border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono text-textSecondary">Your Name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-white/5 text-textPrimary placeholder-white/20 text-sm focus:border-accent/40 focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono text-textSecondary">Your Email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-surface border border-white/5 text-textPrimary placeholder-white/20 text-sm focus:border-accent/40 focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-mono text-textSecondary">Subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship Inquiry / Partnership"
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/5 text-textPrimary placeholder-white/20 text-sm focus:border-accent/40 focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono text-textSecondary">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your role or project..."
                  className="w-full px-4 py-3 rounded-xl bg-surface border border-white/5 text-textPrimary placeholder-white/20 text-sm focus:border-accent/40 focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-4 rounded-xl font-medium text-sm flex items-center justify-center space-x-2 transition-all ${
                  status === 'success'
                    ? 'bg-green-600 text-textPrimary'
                    : 'bg-primary hover:bg-blue-700 text-textPrimary hover:shadow-lg hover:shadow-blue-500/10'
                } disabled:opacity-80`}
              >
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                )}
                {status === 'success' && (
                  <>
                    <Check className="h-5 w-5" />
                    <span>Message Sent Successfully!</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default Contact;
