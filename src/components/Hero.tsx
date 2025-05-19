"use client";

import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Erro ao reproduzir vídeo automaticamente:', error);
      });
    }
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/images/video_simples_pastor_lucas.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl">
          Faça parte do nosso time de voluntários!
        </h1>
        <Link href="/voluntarios" className="btn-primary text-lg">
          Quero fazer parte
        </Link>
      </div>
    </div>
  );
}
