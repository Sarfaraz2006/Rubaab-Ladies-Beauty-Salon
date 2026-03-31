import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop', alt: 'Salon Interior', span: 'col-span-1 md:col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2669&auto=format&fit=crop', alt: 'Hair Styling', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=2669&auto=format&fit=crop', alt: 'Nails', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?q=80&w=2671&auto=format&fit=crop', alt: 'Makeup', span: 'col-span-1 md:col-span-2 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2670&auto=format&fit=crop', alt: 'Facial', span: 'col-span-1 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=2673&auto=format&fit=crop', alt: 'Threading', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2670&auto=format&fit=crop', alt: 'Stylist Working', span: 'col-span-1 md:col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1516975080661-422fc2f59566?q=80&w=2670&auto=format&fit=crop', alt: 'Spa', span: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=2536&auto=format&fit=crop', alt: 'Portrait', span: 'col-span-1 row-span-1' },
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
            Our <span className="text-salon-gold italic font-light">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-salon-text-light max-w-2xl mx-auto text-lg font-light leading-relaxed"
          >
            A visual journey through our luxurious space and the stunning transformations we create every day.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[250px]">
          {images.map((image, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer border border-salon-card shadow-sm hover:shadow-md transition-shadow ${image.span}`}
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-salon-text/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                <div className="w-16 h-16 rounded-full bg-white/80 flex items-center justify-center border border-salon-card backdrop-blur-md transform scale-50 group-hover:scale-100 transition-transform duration-500 shadow-sm">
                  <ZoomIn className="text-salon-text w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(10px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              className="fixed inset-0 z-[100] bg-salon-text/90 flex items-center justify-center p-6"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-8 right-8 text-white/70 hover:text-white transition-colors bg-salon-text p-3 rounded-full border border-white/20 hover:border-white z-[110]"
                onClick={() => setSelectedImage(null)}
              >
                <X size={24} />
              </button>
              <motion.img 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={selectedImage} 
                alt="Enlarged gallery image" 
                className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/20 bg-white"
                onClick={(e) => e.stopPropagation()}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
