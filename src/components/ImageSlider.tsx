"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { image: '/images/culto_irmaos_maos_pro_alto_orando_igreja_simples_church.jpg', alt: 'Culto irmu00e3os orando' },
    { image: '/images/culto_irmaos_orando_joelhos_simples_church.jpg', alt: 'Irmu00e3os orando de joelhos' },
    { image: '/images/culto_simples_church_igreja_alphaville.jpg', alt: 'Culto Simples Church Alphaville' },
    { image: '/images/irma_no_altar_orando_microfone_simples_church.jpg', alt: 'Irmu00e3 orando no altar' },
    { image: '/images/irma_orando_maos_ao_busto_simples_church.jpg', alt: 'Irmu00e3 orando' },
    { image: '/images/placas_voce_pertence_a_jesus_simples_church.jpg', alt: 'Placas Vocu00ea pertence a Jesus' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 2000); // Mudar slide a cada 2 segundos

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slide-container">
      <div 
        className="slides" 
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="slide relative">
            <Image 
              src={slide.image} 
              alt={slide.alt} 
              fill 
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
          {slides.map((_, index) => (
            <button 
              key={index} 
              className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-primary' : 'bg-white'}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
