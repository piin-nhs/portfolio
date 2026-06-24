import React, { useState } from 'react';
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
    <section id="contact" className="py-20 bg-background relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16 w-full font-mono">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white flex items-center">
            <span className="text-accent mr-1">#</span>contact
          </h2>
          <span className="grow h-[1px] bg-accent max-w-[200px] sm:max-w-[400px]"></span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-mono">
          
          {/* Left Column: Direct Contacts Box */}
          <div className="lg:col-span-5 border border-[#3e4452] bg-[#21252b] p-5 flex flex-col justify-between gap-8">
            <div className="space-y-4">
              <h3 className="text-base font-bold text-white">// support_and_contact</h3>
              <p className="text-xs sm:text-sm text-textSecondary leading-relaxed">
                I am actively seeking software engineering intern positions. If you have any inquiries, suggestions, or potential collaborations, feel free to drop a line!
              </p>
            </div>

            {/* Direct Details */}
            <div className="space-y-3 text-xs text-textSecondary select-none">
              <div className="flex items-center space-x-3 p-3 border border-[#3e4452] hover:border-[#abb2bf]/40 transition-colors">
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-white hover:underline truncate">
                  {contactInfo.email}
                </a>
              </div>

              <div className="flex items-center space-x-3 p-3 border border-[#3e4452] hover:border-[#abb2bf]/40 transition-colors">
                <Phone className="h-4 w-4 text-accent flex-shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-white hover:underline">
                  {contactInfo.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3 p-3 border border-[#3e4452]">
                <MapPin className="h-4 w-4 text-accent flex-shrink-0" />
                <span className="text-white truncate">{contactInfo.location}</span>
              </div>
            </div>

            {/* Social handles list */}
            <div className="flex items-center space-x-4 pt-4 border-t border-[#3e4452]/40 text-xs">
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-white transition-colors"
              >
                <FaGithub className="h-4 w-4" />
                <span>github</span>
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1.5 hover:text-white transition-colors"
              >
                <FaLinkedin className="h-4 w-4" />
                <span>linkedin</span>
              </a>
            </div>
          </div>

          {/* Right Column: Contact form box */}
          <div className="lg:col-span-7 border border-[#3e4452] bg-[#21252b] p-5">
            <h3 className="text-base font-bold text-white mb-6">// send_message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs text-textSecondary">name *</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2 bg-transparent border border-[#3e4452] text-white text-xs placeholder-white/20 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs text-textSecondary">email *</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-3 py-2 bg-transparent border border-[#3e4452] text-white text-xs placeholder-white/20 focus:border-accent focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="subject" className="text-xs text-textSecondary">subject</label>
                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship Inquiry / Partnership"
                  className="w-full px-3 py-2 bg-transparent border border-[#3e4452] text-white text-xs placeholder-white/20 focus:border-accent focus:outline-none transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs text-textSecondary">message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your role or project..."
                  className="w-full px-3 py-2 bg-transparent border border-[#3e4452] text-white text-xs placeholder-white/20 focus:border-accent focus:outline-none transition-colors resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status !== 'idle'}
                className={`w-full py-2.5 border font-semibold text-xs flex items-center justify-center space-x-2 transition-all ${
                  status === 'success'
                    ? 'border-green-500 text-green-400 bg-green-500/5'
                    : 'border-accent text-accent hover:bg-accent/10'
                } disabled:opacity-80`}
              >
                {status === 'idle' && (
                  <>
                    <span>Send Message</span>
                    <Send className="h-3.5 w-3.5" />
                  </>
                )}
                {status === 'sending' && (
                  <>
                    <svg className="animate-spin h-3.5 w-3.5 text-accent" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                )}
                {status === 'success' && (
                  <>
                    <Check className="h-4 w-4" />
                    <span>Message Sent Successfully!</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
