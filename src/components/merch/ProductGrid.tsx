import { useState } from 'react';
import { Section } from '../layout/Section';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';

const PRODUCTS = [
  {
    id: 'KTF-HD-01',
    name: 'KTF Official Hoodie',
    description: 'Premium heavy-weight hoodie with official KTF branding. Engineered for the builders of the future ecosystem.',
    price: '25,000',
    image: '/merch/hoodies 1.jpg',
    isLimited: true
  },
  {
    id: 'KTF-TS-01',
    name: 'KTF Tech T-Shirt (V1)',
    description: 'The core KTF aesthetic in high-density print. A testament to technical excellence and student-led innovation.',
    price: '10,000',
    image: '/merch/t-shirt 1 (1).png',
    isLimited: false
  },
  {
    id: 'KTF-TS-02',
    name: 'KTF Tech T-Shirt (V2)',
    description: 'Signature KTF typography on premium cotton. Minimalist design for the modern innovator and creative logician.',
    price: '10,000',
    image: '/merch/t-shirt 1 (3).png',
    isLimited: false
  },
  {
    id: 'KTF-TB-01',
    name: 'KTF Ecosystem Tote',
    description: 'Durable, high-capacity canvas tote for your hardware and essentials. The nomad\'s companion for the tech ecosystem.',
    price: '5,000',
    image: '/merch/totebag.png',
    isLimited: false
  },
  {
    id: 'KTF-WB-01',
    name: 'KTF Hydro Flask',
    description: 'Insulated high-performance water bottle. Stay hydrated while you build the future of technology.',
    price: '15,000',
    image: '/merch/water bottle.png',
    isLimited: true
  }
];

export function ProductGrid() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <Section id="product-grid" className="bg-background py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-24 text-center max-w-2xl mx-auto">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-secondary mb-8">Ecosystem_Supply</h4>
          <h2 className="text-4xl sm:text-6xl font-display font-medium tracking-tight text-primary leading-[1.1] uppercase mb-12">
            Featured <br />
            <span className="text-secondary italic">Products.</span>
          </h2>
          <p className="text-on-surface-variant text-lg font-light leading-relaxed px-4">
             Each piece is a verification of your participation in the movement. 
             Engineered for comfort and technical identity.
          </p>
        </div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((prod) => (
            <ProductCard 
               key={prod.id} 
               product={prod} 
               onOpen={openModal} 
            />
          ))}
        </div>

        <ProductModal 
           product={selectedProduct} 
           isOpen={isModalOpen} 
           onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </Section>
  );
}
