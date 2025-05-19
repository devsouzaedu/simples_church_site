import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary pt-12 pb-6 text-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Logo e CNPJ */}
          <div className="flex flex-col items-center md:items-start">
            <div className="w-40 mb-4">
              <Image 
                src="/images/logo_sem_fundo_simples_church.png" 
                alt="Simples Church Logo" 
                width={160} 
                height={80} 
              />
            </div>
            <p className="text-sm">CNPJ: 49.800.080/0001-59</p>
          </div>
          
          {/* Informações de Contato */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <p className="mb-2">Alameda Araguaia, 122 - Alphaville</p>
            <p className="mb-2">CEP: 06455-0000</p>
            <p className="mb-4">Barueri - SP, Brazil</p>
            <p className="mb-4 font-semibold">📍 Cultos Alphaville:</p>
            <p className="mb-2">Domingo 10h e 19h | Quarta 20h</p>
            <p className="mb-2">Telefone: (11) 99999-9999</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.instagram.com/simpleschurch" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.youtube.com/@SimplesChurch" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Mapa */}
          <div className="w-full h-[250px] relative rounded-lg overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.3839963377064!2d-46.853650223848996!3d-23.515786278982985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf026ffa201de3%3A0xcf19c62aa8a02ca1!2sAl.%20Araguaia%2C%20122%20-%20Alphaville%20Industrial%2C%20Barueri%20-%20SP%2C%2006455-000!5e0!3m2!1spt-BR!2sbr!4v1716911581!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Localizacao da Simples Church"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
        
        {/* Links e Copyright */}
        <div className="border-t border-gray-200 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">&copy; 2025 Simples Church. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-4 text-sm">
              <Link href="/termos" className="hover:text-primary">Termos de Uso</Link>
              <Link href="/politica-conteudo" className="hover:text-primary">Politica de Conteudo</Link>
              <Link href="/privacidade" className="hover:text-primary">Politica de Privacidade</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
