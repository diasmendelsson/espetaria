import Link from "next/link";
import Carrinho from "../components/Carrinho";

export default function Home() {
  return (
    <div className="p-6 ">
      <h1 className="text-center text-4xl font-bold text-[#F5C26B] mb-8">
        Cardápio Espetaria Raiz
      </h1>

      <div className="flex flex-col gap-4 max-w-md mx-auto">
        <Link href="/espetos" className="bg-[#D97925] p-4 text-center rounded-xl text-white font-bold">
          Espetos
        </Link>
        <Link href="/bebidas" className="bg-[#D97925] p-4 text-center rounded-xl text-white font-bold">
          Bebidas
        </Link> 
        <Link href="/acompanhamentos" className="bg-[#D97925] p-4 text-center rounded-xl text-white font-bold">
          Acompanhamentos
        </Link>
         <Link href="/combos" className="bg-[#D97925] p-4 text-center rounded-xl text-white font-bold">
          Combos
        </Link>
      </div>
      
       

      <Carrinho />

      <p className="text-center mt-8 font-bold">Desenvolvido por MD Infraestrutura e Tecnologia</p>

      

      
    </div>
  );
}