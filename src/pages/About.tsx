import { motion } from 'motion/react';

export default function About() {
  const team = [
    { name: 'Fatima Al Zahra', role: 'Master Stylist & Founder', img: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2536&auto=format&fit=crop' },
    { name: 'Aisha Khan', role: 'Senior Colorist', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2564&auto=format&fit=crop' },
    { name: 'Zara Malik', role: 'Lead Esthetician', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop' },
  ];

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
            Our <span className="text-salon-gold italic font-light">Story</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-salon-text-light max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            A legacy of luxury, artistry, and unparalleled service.
          </motion.p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden rounded-3xl border border-salon-card shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2669&auto=format&fit=crop" 
                alt="Salon Interior" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white rounded-full hidden md:flex items-center justify-center p-8 text-center border border-salon-card shadow-md">
              <div>
                <span className="block text-4xl font-serif font-bold text-salon-gold mb-2">Est.</span>
                <span className="block text-2xl text-salon-text font-light tracking-widest">2014</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-salon-text mb-8 leading-tight">Redefining Beauty <br/><span className="text-salon-gold italic font-light">Standards</span></h2>
            <div className="space-y-6 text-salon-text-light font-light text-lg leading-relaxed">
              <p>
                Founded in 2014, Rubaab Ladies Beauty Salon was born from a vision to create a sanctuary where luxury meets artistry in the heart of Dubai. We believe that every client deserves a bespoke experience tailored to their unique features and lifestyle.
              </p>
              <p>
                Our salon is more than just a place to get your hair done; it's an immersive experience. From the moment you step through our doors, you are enveloped in an atmosphere of sophistication, cleanliness, and tranquility.
              </p>
              <p>
                We partner with the world's most exclusive beauty brands and continuously educate our team on the latest global trends and techniques, ensuring you receive nothing but the absolute best.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="bg-salon-card rounded-3xl p-12 md:p-20 border border-white shadow-sm mb-32 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-salon-text mb-6">Our Philosophy</h2>
            <p className="text-salon-text-light max-w-2xl mx-auto text-lg font-light">The core principles that guide every cut, color, and treatment.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {[
              { title: 'Premium Quality', desc: 'We never compromise on the products we use or the techniques we employ.' },
              { title: 'Personalized Care', desc: 'Every service begins with a thorough consultation to understand your unique needs.' },
              { title: 'Continuous Education', desc: 'Our stylists regularly train with global industry leaders to stay ahead of trends.' }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-full border border-salon-gold/30 flex items-center justify-center mb-6 text-salon-gold font-serif text-2xl shadow-sm">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-serif text-salon-text mb-4">{value.title}</h3>
                <p className="text-salon-text-light font-light leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-salon-text mb-6">Meet The <span className="text-salon-gold italic font-light">Masters</span></h2>
            <p className="text-salon-text-light max-w-2xl mx-auto text-lg font-light">The talented artists behind the chair.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 border border-salon-card shadow-sm relative">
                  <img 
                    src={member.img} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-salon-text/80 via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-serif text-salon-text mb-2 group-hover:text-salon-gold transition-colors">{member.name}</h3>
                  <p className="text-salon-text-light uppercase tracking-widest text-sm font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
