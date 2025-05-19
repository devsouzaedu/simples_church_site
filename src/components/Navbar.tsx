"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: 'Início', path: '/' },
    { label: 'Sobre Nós', path: '/sobre' },
    { label: 'Grupos', path: '/grupos' },
    { label: 'Membros', path: '/membros' },
    { label: 'Batismo', path: '/batismo' },
    { label: 'Contato', path: '/contato' },
  ];

  return (
    <>
      <nav className="w-full bg-primary py-4 shadow-md fixed top-0 left-0 z-40">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="w-40">
            <Image 
              src="/images/logo_sem_fundo_simples_church.png" 
              alt="Simples Church Logo" 
              width={160} 
              height={80} 
              className="w-full"
            />
          </div>
          <button 
            onClick={toggle} 
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Full screen navigation menu */}
      <div className={`nav-full ${isOpen ? 'open' : ''}`}>
        <div className="absolute top-4 right-4">
          <button 
            onClick={toggle} 
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mb-8">
          <Image 
            src="/images/logo_sem_fundo_simples_church.png" 
            alt="Simples Church Logo" 
            width={200} 
            height={100} 
            className="w-48"
          />
        </div>
        <ul className="flex flex-col items-center space-y-6">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link 
                href={item.path} 
                onClick={toggle}
                className="text-xl font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Spacer to account for fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}
