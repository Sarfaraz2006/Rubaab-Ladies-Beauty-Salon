import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="w-full bg-salon-bg min-h-screen pt-40 pb-32">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif font-bold text-salon-text mb-6"
          >
            Get in <span className="text-salon-gold italic font-light">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-salon-text-light max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            We are here to answer any questions and help you schedule your next luxury experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-serif text-salon-text mb-8">Visit Our Salon</h2>
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-white border border-salon-card flex items-center justify-center text-salon-gold shrink-0 mt-1 group-hover:border-salon-gold/50 transition-colors shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-serif text-salon-text mb-2">Location</h3>
                    <p className="text-salon-text-light font-light leading-relaxed">Mayfair, London, UK<br />(Near Green Park Station)</p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-white border border-salon-card flex items-center justify-center text-salon-gold shrink-0 mt-1 group-hover:border-salon-gold/50 transition-colors shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-serif text-salon-text mb-2">Phone</h3>
                    <p className="text-salon-text-light font-light leading-relaxed">
                      <a href="tel:+442071234567" className="hover:text-salon-gold transition-colors">+44 20 7123 4567</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-white border border-salon-card flex items-center justify-center text-salon-gold shrink-0 mt-1 group-hover:border-salon-gold/50 transition-colors shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-serif text-salon-text mb-2">Email</h3>
                    <p className="text-salon-text-light font-light leading-relaxed">
                      <a href="mailto:hello@elegancesalon.demo" className="hover:text-salon-gold transition-colors">hello@elegancesalon.demo</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-14 h-14 rounded-full bg-white border border-salon-card flex items-center justify-center text-salon-gold shrink-0 mt-1 group-hover:border-salon-gold/50 transition-colors shadow-sm">
                    <Clock size={24} />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-serif text-salon-text mb-2">Hours</h3>
                    <ul className="text-salon-text-light font-light leading-relaxed space-y-1">
                      <li>Mon - Sun: 10:00 AM - 10:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-salon-card p-8 rounded-3xl border border-white shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/40 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <h3 className="text-2xl font-serif text-salon-text mb-4 relative z-10">Instant Booking</h3>
              <p className="text-salon-text-light font-light mb-8 relative z-10">Secure your appointment instantly through our premium booking system.</p>
              <Link 
                to="/booking"
                className="flex items-center justify-center w-full px-8 py-4 bg-white text-salon-text font-medium uppercase tracking-widest rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 relative z-10"
              >
                Book Appointment
              </Link>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-salon-card p-10 md:p-14 rounded-3xl border border-white shadow-sm"
          >
            <h2 className="text-3xl font-serif text-salon-text mb-8">Send a Message</h2>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm uppercase tracking-widest text-salon-text-light font-medium">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    className="w-full bg-transparent border-b border-salon-text/20 px-0 py-3 text-salon-text focus:outline-none focus:border-salon-gold transition-colors font-light placeholder:text-salon-text-light/50"
                    placeholder="Jane"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm uppercase tracking-widest text-salon-text-light font-medium">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    className="w-full bg-transparent border-b border-salon-text/20 px-0 py-3 text-salon-text focus:outline-none focus:border-salon-gold transition-colors font-light placeholder:text-salon-text-light/50"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm uppercase tracking-widest text-salon-text-light font-medium">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b border-salon-text/20 px-0 py-3 text-salon-text focus:outline-none focus:border-salon-gold transition-colors font-light placeholder:text-salon-text-light/50"
                  placeholder="jane@example.com"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="service" className="text-sm uppercase tracking-widest text-salon-text-light font-medium">Interested Service</label>
                <select 
                  id="service" 
                  className="w-full bg-transparent border-b border-salon-text/20 px-0 py-3 text-salon-text focus:outline-none focus:border-salon-gold transition-colors font-light appearance-none cursor-pointer"
                >
                  <option value="" className="text-salon-text-light">Select a service...</option>
                  <option value="hair" className="text-salon-text">Hair Services</option>
                  <option value="nails" className="text-salon-text">Nail Services</option>
                  <option value="skin" className="text-salon-text">Skin & Facials</option>
                  <option value="hair_removal" className="text-salon-text">Hair Removal</option>
                  <option value="special" className="text-salon-text">Special Occasion</option>
                  <option value="other" className="text-salon-text">Other Inquiry</option>
                </select>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm uppercase tracking-widest text-salon-text-light font-medium">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full bg-transparent border-b border-salon-text/20 px-0 py-3 text-salon-text focus:outline-none focus:border-salon-gold transition-colors font-light resize-none placeholder:text-salon-text-light/50"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="w-full px-8 py-5 bg-white text-salon-text font-medium uppercase tracking-widest rounded-full hover:bg-salon-accent transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 mt-4 border border-salon-card"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 rounded-3xl overflow-hidden border border-salon-card shadow-sm h-[500px] relative"
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72810577907!2d-0.24168153703905953!3d51.52877184087611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sus!4v1709825634567!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Salon Location"
          ></iframe>
          <div className="absolute inset-0 pointer-events-none bg-salon-bg/10 mix-blend-multiply"></div>
        </motion.div>

      </div>
    </div>
  );
}
