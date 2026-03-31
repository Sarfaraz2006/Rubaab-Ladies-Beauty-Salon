import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, CheckCircle, Clock, ArrowRight } from 'lucide-react';

export default function Home() {
  const features = [
    { title: 'Expert Stylists', desc: 'Our team consists of award-winning professionals.', icon: <Star className="text-salon-gold w-6 h-6" /> },
    { title: 'Premium Products', desc: 'We use only the finest luxury hair and skin products.', icon: <CheckCircle className="text-salon-gold w-6 h-6" /> },
    { title: 'Relaxing Vibe', desc: 'A serene environment designed for your ultimate comfort.', icon: <Clock className="text-salon-gold w-6 h-6" /> },
  ];

  const testimonials = [
    { name: 'Sarah Jenkins', text: 'Absolutely love my new haircut! The service here is unmatched. I felt like royalty from the moment I walked in.', rating: 5 },
    { name: 'Emily Chen', text: 'The facial treatment was divine. My skin has never looked so glowing and healthy. Highly recommend Royal Cuts.', rating: 5 },
    { name: 'Jessica Alba', text: 'Best balayage I have ever had. The colorist really listened to what I wanted and delivered perfection.', rating: 5 },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop" 
            alt="Luxury Salon Interior" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-salon-text mb-8 leading-tight tracking-tight"
          >
            Your Beauty, <span className="text-salon-gold italic font-light">Our Passion</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-lg md:text-2xl text-salon-text-light mb-12 font-light tracking-wide max-w-3xl mx-auto"
          >
            Premium beauty services in the heart of Dubai
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8"
          >
            <div className="flex flex-col items-center gap-3 w-full sm:w-auto">
              <Link 
                to="/booking"
                className="w-full sm:w-auto px-10 py-5 bg-salon-card hover:bg-salon-accent text-salon-text font-medium uppercase tracking-widest transition-all duration-300 rounded-full shadow-md hover:shadow-lg hover:-translate-y-1"
              >
                Book Appointment
              </Link>
              <span className="text-xs text-salon-text-light font-medium tracking-wide">Quick and easy booking via WhatsApp</span>
            </div>
            
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-10 py-5 border border-salon-text/20 hover:border-salon-gold text-salon-text hover:text-salon-gold font-medium uppercase tracking-widest transition-all duration-300 rounded-full backdrop-blur-sm hover:bg-salon-card/50"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-32 bg-salon-bg">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-salon-text mb-6">Signature Services</h2>
              <p className="text-salon-text-light font-light text-lg">Experience our most sought-after treatments, delivered with precision and care by our master stylists.</p>
            </div>
            <Link to="/services" className="group flex items-center text-salon-gold uppercase tracking-widest text-sm font-medium hover:text-salon-gold-hover transition-colors">
              View All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: 'Hair Styling', img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop' },
              { title: 'Nail Care', img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669&auto=format&fit=crop' },
              { title: 'Facial Treatments', img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop' }
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.15 }}
                className="group relative overflow-hidden cursor-pointer rounded-2xl shadow-lg border border-salon-card"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-salon-text via-salon-text/20 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-80"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="text-3xl font-serif text-white mb-3">{service.title}</h3>
                  <Link to="/services" className="text-salon-card text-sm uppercase tracking-widest flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Discover <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 bg-salon-accent border-y border-salon-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-salon-text mb-8 leading-tight">The Rubaab <br/><span className="text-salon-gold italic font-light">Experience</span></h2>
              <p className="text-salon-text-light mb-12 leading-relaxed text-lg font-light">
                We believe that beauty is an art form. Our salon is a sanctuary where you can escape the hustle of daily life and indulge in premium treatments designed to enhance your natural beauty.
              </p>
              
              <div className="space-y-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start group">
                    <div className="shrink-0 mt-1 bg-white p-4 rounded-2xl border border-salon-card group-hover:border-salon-gold/50 transition-colors duration-300 shadow-sm">
                      {feature.icon}
                    </div>
                    <div className="ml-6">
                      <h3 className="text-2xl font-serif text-salon-text mb-2">{feature.title}</h3>
                      <p className="text-salon-text-light font-light leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-salon-card shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2670&auto=format&fit=crop" 
                  alt="Stylist at work" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-salon-card rounded-full flex items-center justify-center p-8 text-center hidden md:flex shadow-lg border-8 border-white">
                <div>
                  <span className="block text-5xl font-serif font-bold text-salon-text mb-1">10+</span>
                  <span className="block text-xs uppercase tracking-widest text-salon-text font-semibold">Years of<br/>Excellence</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-salon-bg">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-salon-text mb-6">Client Love</h2>
            <p className="text-salon-text-light font-light text-lg max-w-2xl mx-auto">Read what our esteemed clients have to say about their experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white p-10 rounded-3xl border border-salon-card relative shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-500"
              >
                <div className="flex text-salon-gold mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" className="mr-1" />
                  ))}
                </div>
                <p className="text-salon-text-light italic mb-8 leading-relaxed font-light text-lg">"{testimonial.text}"</p>
                <h4 className="text-salon-text font-serif tracking-wide text-lg">— {testimonial.name}</h4>
                <div className="absolute top-6 right-8 text-8xl text-salon-card font-serif leading-none">"</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-32 bg-salon-card border-t border-white text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent"></div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 text-salon-text">Ready for a <span className="text-salon-gold italic font-light">Transformation?</span></h2>
          <p className="text-xl mb-12 font-light text-salon-text-light max-w-2xl mx-auto">
            Book your appointment today and let our master stylists take care of you.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Link 
              to="/booking"
              className="inline-block px-12 py-5 bg-white text-salon-text font-medium uppercase tracking-widest hover:bg-salon-accent transition-all duration-300 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Book Appointment
            </Link>
            <span className="text-sm text-salon-text-light font-medium tracking-wide mt-2">Quick and easy booking via WhatsApp</span>
          </div>
        </div>
      </section>
    </div>
  );
}
