import Image from 'next/image';
import Link from 'next/link';

export default function EncontreGrupo() {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/culto_simples_church_igreja_alphaville.jpg" 
          alt="Grupo Simples Church" 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Encontre o seu grupo</h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Participar de um grupo e uma maneira incrivel de crescer na sua fe e construir relacionamentos significativos. Venha fazer parte desta comunidade!
        </p>
        <Link href="/grupos" className="btn-primary text-lg">
          Ver Mais
        </Link>
      </div>
    </div>
  );
}
