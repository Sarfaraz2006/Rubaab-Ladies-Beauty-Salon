import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';

export default function Services() {
  const categories = [
    {
      title: 'Hair',
      desc: 'Expert hair care and styling for a flawless look.',
      img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop',
      services: [
        { name: 'Haircut & Styling', price: 'From £35', duration: '60 min', desc: 'Precision cuts tailored to your face shape.' },
        { name: 'Hair Coloring', price: 'From £75', duration: '120 min', desc: 'Vibrant, long-lasting color with premium products.' },
        { name: 'Keratin & Hair Treatments', price: 'From £100', duration: '150 min', desc: 'Smooth, frizz-free hair with deep nourishment.' },
      ]
    },
    {
      title: 'Nails',
      desc: 'Beautifully crafted nails for every occasion.',
      img: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669&auto=format&fit=crop',
      services: [
        { name: 'Manicure & Pedicure', price: 'From £30', duration: '60 min', desc: 'Complete nail care, shaping, and polish.' },
        { name: 'Nail Extensions & Nail Art', price: 'From £60', duration: '90 min', desc: 'Custom designs and durable extensions.' },
      ]
    },
    {
      title: 'Skin',
      desc: 'Rejuvenating treatments for a radiant, healthy glow.',
      img: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop',
      services: [
        { name: 'Facials & Skincare', price: 'From £50', duration: '60 min', desc: 'Deep cleansing and hydration for all skin types.' },
        { name: 'Cleanup & Bleach', price: 'From £25', duration: '45 min', desc: 'Quick refresh for a bright, even complexion.' },
      ]
    },
    {
      title: 'Hair Removal',
      desc: 'Smooth, hair-free skin with gentle techniques.',
      img: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2673&auto=format&fit=crop',
      services: [
        { name: 'Waxing', price: 'From £15', duration: '30 min', desc: 'Effective hair removal for long-lasting smoothness.' },
        { name: 'Threading', price: 'From £10', duration: '15 min', desc: 'Precise shaping for eyebrows and facial hair.' },
      ]
    },
    {
      title: 'Makeup',
      desc: 'Look your absolute best for your special moments.',
      img: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2671&auto=format&fit=crop',
      services: [
        { name: 'Bridal Makeup', price: 'From £400', duration: '180 min', desc: 'Flawless, long-lasting makeup for your big day.' },
        { name: 'Party Makeup', price: 'From £100', duration: '90 min', desc: 'Glamorous looks tailored to your event.' },
        { name: 'Henna Design', price: 'From £25', duration: '60 min', desc: 'Intricate, beautiful henna patterns.' },
      ]
    }
  ];

  return (
    <div className="w-full bg-salon-bg min-h-screen pt-40 pb-32">
      {/* Header */}
      <div className="container mx-auto px-6 md:px-12 text-center mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-serif font-bold text-salon-text mb-6"
        >
          Our <span className="text-salon-gold italic font-light">Services</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-salon-text-light max-w-2xl mx-auto text-lg font-light leading-relaxed"
        >
          Discover our comprehensive menu of luxury beauty treatments, designed to help you look and feel your absolute best.
        </motion.p>
      </div>

      {/* Services List */}
      <div className="container mx-auto px-6 md:px-12 space-y-32">
        {categories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2">
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl border border-white/50">
                <img 
                  src={category.img} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-salon-text/5"></div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center py-8">
              <h2 className="text-5xl md:text-6xl font-serif text-salon-text mb-6">{category.title}</h2>
              <p className="text-salon-text-light text-lg mb-12 font-light leading-relaxed max-w-lg">{category.desc}</p>
              
              <div className="space-y-12 w-full">
                {category.services.map((service, sIdx) => (
                  <div key={sIdx} className="group/item">
                    <div className="flex justify-between items-end mb-3">
                      <h3 className="text-2xl font-medium text-salon-text group-hover/item:text-salon-gold transition-colors">{service.name}</h3>
                      <div className="flex-grow border-b border-dotted border-salon-text/20 mx-6 mb-2 opacity-50"></div>
                      <span className="text-2xl font-serif text-salon-gold whitespace-nowrap">{service.price}</span>
                    </div>
                    <p className="text-salon-text-light mb-5 font-light leading-relaxed max-w-md">{service.desc}</p>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-xs text-salon-text-light uppercase tracking-widest font-medium">
                        <Clock size={14} className="mr-2 text-salon-gold" />
                        {service.duration}
                      </div>
                      <Link 
                        to="/booking"
                        state={{ name: service.name, price: service.price, image: category.img }}
                        className="text-xs font-medium text-salon-text hover:text-salon-gold uppercase tracking-widest transition-colors flex items-center group-hover/item:translate-x-2 duration-300"
                      >
                        Book Now <ArrowRight size={14} className="ml-2" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="container mx-auto px-6 md:px-12 mt-32 text-center">
        <div className="bg-salon-card border border-white rounded-3xl p-12 md:p-20 max-w-4xl mx-auto shadow-md relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/40 via-transparent to-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-4xl font-serif text-salon-text mb-6">Not sure what you need?</h3>
            <p className="text-salon-text-light mb-10 text-lg font-light">Book a complimentary consultation with one of our master stylists.</p>
            <Link 
              to="/consultation"
              className="inline-block px-10 py-4 bg-white text-salon-text font-medium uppercase tracking-widest rounded-full hover:bg-salon-accent transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              Request Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
