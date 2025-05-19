import Image from 'next/image';
import Link from 'next/link';

export default function Batismo() {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/placas_voce_pertence_a_jesus_simples_church.jpg" 
          alt="Batismo" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Batismo</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          O batismo e um passo importante na sua caminhada crista. E um simbolo publico da sua decisao de seguir a Jesus Cristo e fazer parte do corpo de Cristo.
        </p>
        <Link href="/batismo" className="btn-primary text-lg">
          Quero
        </Link>
      </div>
    </div>
  );
}
