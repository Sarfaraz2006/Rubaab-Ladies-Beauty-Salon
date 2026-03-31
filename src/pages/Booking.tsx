import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, User, Phone, Scissors, Loader2, ArrowLeft, ChevronDown, Check } from 'lucide-react';

export default function Booking() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const preselectedService = location.state?.name || '';
  const preselectedPrice = location.state?.price || '';
  const preselectedImage = location.state?.image || 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: preselectedService
  });

  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServiceDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
    '05:00 PM', '06:00 PM', '07:00 PM'
  ];

  const allServices = [
    "Haircut & Styling", "Hair Coloring", "Keratin & Hair Treatments",
    "Manicure & Pedicure", "Nail Extensions & Nail Art",
    "Facials & Skincare", "Cleanup & Bleach",
    "Waxing", "Threading",
    "Bridal Makeup", "Party Makeup", "Henna Design"
  ];

  const handleServiceSelect = (service: string) => {
    setFormData({ ...formData, service });
    setIsServiceDropdownOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const message = `*Rubaab Ladies Beauty Salon - Booking Request*

Hello Rubaab Ladies Beauty Salon,

I would like to book an appointment.

----------------------------
*Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}

Service: ${formData.service || 'General Consultation'}
Date: ${formData.date}
Time: ${formData.time}
----------------------------

Please confirm my booking. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/971543727666?text=${encodedMessage}`;

    setTimeout(() => {
      window.location.href = whatsappUrl;
      setTimeout(() => setIsSubmitting(false), 1000);
    }, 2000);
  };

  return (
    <div className="w-full bg-salon-bg min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12">
        
        <Link to="/services" className="inline-flex items-center text-salon-text-light hover:text-salon-gold transition-colors mb-8">
          <ArrowLeft size={20} className="mr-2" />
          <span className="uppercase tracking-widest text-sm font-medium">Back to Services</span>
        </Link>

        <div className="bg-salon-card rounded-3xl border border-white shadow-sm overflow-hidden flex flex-col lg:flex-row">
          
          {/* Left Side - Service Summary */}
          <div className="lg:w-2/5 relative overflow-hidden min-h-[300px] lg:min-h-full">
            <img 
              src={preselectedImage} 
              alt={preselectedService || 'Luxury Salon'} 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-salon-text via-salon-text/60 to-transparent opacity-80"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-end p-10 md:p-14">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                  {preselectedService || 'Luxury Salon Experience'}
                </h2>
                {preselectedPrice && (
                  <p className="text-2xl font-serif text-salon-gold mb-6">{preselectedPrice}</p>
                )}
                <p className="text-white/80 font-light leading-relaxed">
                  Complete your booking details. Our master stylists are ready to provide you with an unforgettable experience.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className="lg:w-3/5 p-10 md:p-14 relative">
            <AnimatePresence>
              {isSubmitting && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center lg:rounded-r-3xl"
                >
                  <Loader2 className="w-12 h-12 text-salon-gold animate-spin mb-6" />
                  <h3 className="text-2xl font-serif text-salon-text mb-2">Preparing Your Booking</h3>
                  <p className="text-salon-text-light font-light">Redirecting to WhatsApp to confirm...</p>
                </motion.div>
              )}
            </AnimatePresence>

            <h3 className="text-2xl font-serif text-salon-text mb-8">Appointment Details</h3>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 relative">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest text-salon-text-light font-medium">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-0 top-3 text-salon-text-light w-5 h-5" />
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-salon-text/20 pl-8 pr-0 py-3 text-salon-text focus:outline-none focus:border-salon-gold transition-colors font-light placeholder:text-salon-text-light/50"
                      placeholder="Jane Doe"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 relative">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-salon-text-light font-medium">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-0 top-3 text-salon-text-light w-5 h-5" />
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-salon-text/20 pl-8 pr-0 py-3 text-salon-text focus:outline-none focus:border-salon-gold transition-colors font-light placeholder:text-salon-text-light/50"
                      placeholder="+971 54 372 7666"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2 relative" ref={dropdownRef}>
                <label htmlFor="service" className="text-xs uppercase tracking-widest text-salon-text-light font-medium">Service</label>
                <div className="relative">
                  <Scissors className="absolute left-0 top-3 text-salon-text-light w-5 h-5 z-10" />
                  
                  {/* Custom Dropdown Trigger */}
                  <div 
                    onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                    className="w-full bg-transparent border-b border-salon-text/20 pl-8 pr-8 py-3 text-salon-text focus:outline-none focus:border-salon-gold transition-colors font-light cursor-pointer flex items-center justify-between"
                  >
                    <span className={formData.service ? "text-salon-text" : "text-salon-text-light"}>
                      {formData.service || "Select a service..."}
                    </span>
                    <ChevronDown className={`w-4 h-4 text-salon-text-light transition-transform duration-300 ${isServiceDropdownOpen ? 'rotate-180' : ''}`} />
                  </div>

                  {/* Custom Dropdown Menu */}
                  <AnimatePresence>
                    {isServiceDropdownOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-50 w-full mt-2 bg-white border border-salon-card rounded-2xl shadow-xl overflow-hidden max-h-[300px] overflow-y-auto"
                      >
                        <div className="p-2">
                          {preselectedService && !allServices.includes(preselectedService) && (
                            <div 
                              onClick={() => handleServiceSelect(preselectedService)}
                              className={`px-4 py-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors ${formData.service === preselectedService ? 'bg-salon-card text-salon-text font-medium' : 'hover:bg-salon-accent/50 text-salon-text-light'}`}
                            >
                              <span>{preselectedService}</span>
                              {formData.service === preselectedService && <Check className="w-4 h-4 text-salon-gold" />}
                            </div>
                          )}
                          {allServices.map(s => (
                            <div 
                              key={s} 
                              onClick={() => handleServiceSelect(s)}
                              className={`px-4 py-3 rounded-xl cursor-pointer flex items-center justify-between transition-colors ${formData.service === s ? 'bg-salon-card text-salon-text font-medium' : 'hover:bg-salon-accent/50 text-salon-text-light'}`}
                            >
                              <span>{s}</span>
                              {formData.service === s && <Check className="w-4 h-4 text-salon-gold" />}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2 relative">
                  <label htmlFor="date" className="text-xs uppercase tracking-widest text-salon-text-light font-medium">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-0 top-3 text-salon-text-light w-5 h-5" />
                    <input 
                      type="date" 
                      id="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full bg-transparent border-b border-salon-text/20 pl-8 pr-0 py-3 text-salon-text focus:outline-none focus:border-salon-gold transition-colors font-light cursor-pointer"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 relative">
                  <label htmlFor="time" className="text-xs uppercase tracking-widest text-salon-text-light font-medium">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-0 top-3 text-salon-text-light w-5 h-5" />
                    <select 
                      id="time" 
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-salon-text/20 pl-8 pr-0 py-3 text-salon-text focus:outline-none focus:border-salon-gold transition-colors font-light appearance-none cursor-pointer"
                    >
                      <option value="" className="text-salon-text-light">Select time...</option>
                      {timeSlots.map(t => (
                        <option key={t} value={t} className="text-salon-text">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full px-8 py-5 bg-white text-salon-text font-medium uppercase tracking-widest rounded-full hover:bg-salon-accent transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 mt-8 flex items-center justify-center disabled:opacity-70 disabled:hover:translate-y-0 border border-salon-card"
              >
                Confirm & Proceed to WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
