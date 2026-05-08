import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Instagram, Facebook, Twitter, MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans bg-salon-bg text-salon-text selection:bg-salon-card">
      {/* Navigation */}
      <header 
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-salon-card py-4 shadow-sm' : 'bg-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="text-2xl md:text-3xl font-serif font-bold tracking-wider text-salon-text">
            ELEGANCE SALON
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className={`text-sm uppercase tracking-widest transition-all duration-300 hover:text-salon-gold ${
                  location.pathname === link.path ? 'text-salon-gold font-medium' : 'text-salon-text-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/booking"
              className="px-7 py-3 bg-salon-card hover:bg-salon-accent text-salon-text font-medium uppercase tracking-wider text-sm transition-all duration-300 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Book Appointment
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-salon-text hover:text-salon-gold z-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-white/95 pt-32 px-6 flex flex-col items-center"
          >
            <nav className="flex flex-col space-y-10 text-center w-full max-w-sm">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link 
                    to={link.path}
                    className={`text-3xl font-serif tracking-widest transition-colors ${
                      location.pathname === link.path ? 'text-salon-gold' : 'text-salon-text-light hover:text-salon-text'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full mt-8"
              >
                <Link 
                  to="/booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-8 py-4 bg-salon-card text-salon-text font-medium uppercase tracking-wider text-lg w-full rounded-full shadow-sm"
                >
                  Book Appointment
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-salon-accent pt-24 pb-12 border-t border-salon-card">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
            <div>
              <Link to="/" className="text-3xl font-serif font-bold tracking-wider text-salon-text mb-8 block">
                ELEGANCE SALON
              </Link>
              <p className="text-salon-text-light leading-relaxed mb-8 font-light">
                Experience the pinnacle of luxury beauty services. We combine artistry, premium products, and unparalleled service to reveal your perfect look.
              </p>
              <div className="flex space-x-5">
                <a href="#" className="w-12 h-12 rounded-full bg-white border border-salon-card flex items-center justify-center text-salon-text-light hover:bg-salon-card hover:text-salon-text transition-all duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white border border-salon-card flex items-center justify-center text-salon-text-light hover:bg-salon-card hover:text-salon-text transition-all duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white border border-salon-card flex items-center justify-center text-salon-text-light hover:bg-salon-card hover:text-salon-text transition-all duration-300">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-serif font-semibold text-salon-text mb-8 uppercase tracking-widest">Quick Links</h3>
              <ul className="space-y-5">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-salon-text-light hover:text-salon-gold transition-colors font-light">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-serif font-semibold text-salon-text mb-8 uppercase tracking-widest">Contact Us</h3>
              <ul className="space-y-6 text-salon-text-light font-light">
                <li className="flex items-start">
                  <MapPin size={22} className="mr-4 text-salon-gold shrink-0 mt-1" />
                  <span className="leading-relaxed">Mayfair, London, UK<br />(Near Green Park Station)</span>
                </li>
                <li className="flex items-center">
                  <Phone size={22} className="mr-4 text-salon-gold shrink-0" />
                  <a href="tel:+442071234567" className="hover:text-salon-gold transition-colors">+44 20 7123 4567</a>
                </li>
                <li className="flex items-center">
                  <Mail size={22} className="mr-4 text-salon-gold shrink-0" />
                  <a href="mailto:hello@elegancesalon.demo" className="hover:text-salon-gold transition-colors">hello@elegancesalon.demo</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-serif font-semibold text-salon-text mb-8 uppercase tracking-widest">Opening Hours</h3>
              <ul className="space-y-5 text-salon-text-light font-light">
                <li className="flex justify-between border-b border-salon-card pb-3">
                  <span>Mon - Sun</span>
                  <span className="text-salon-text">10:00 AM - 10:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-salon-card pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-salon-text-light font-light">
            <p>&copy; {new Date().getFullYear()} Elegance Beauty Salon. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6">
              <a href="#" className="hover:text-salon-text transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-salon-text transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Booking Button */}
      <Link 
        to="/booking"
        className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:scale-110 hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] transition-all duration-300"
        aria-label="Book Appointment"
      >
        <MessageCircle size={32} />
      </Link>
    </div>
  );
}
