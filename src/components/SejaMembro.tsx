import Image from 'next/image';
import Link from 'next/link';

export default function SejaMembro() {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/irma_orando_maos_ao_busto_simples_church.jpg" 
          alt="Seja Membro" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Seja Membro</h2>
        <h3 className="text-xl md:text-2xl mb-4 font-medium">Quem pode se tornar um membro da Simples Church?</h3>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Qualquer pessoa que tenha aceitado Jesus Cristo como seu Salvador e queira se comprometer com nossa comunidade pode se tornar membro. Junte-se a nos nessa jornada de fe!
        </p>
        <Link href="/membro" className="btn-primary text-lg">
          Quero
        </Link>
      </div>
    </div>
  );
}
