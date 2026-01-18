"use client";

import { useCart } from "../../context/CartContext";
import Carrinho from "../../components/Carrinho";

import Image from "next/image";

export default function ArrozPage() {

  const { adicionar } = useCart();

  const produtos = [

     {
      id: 206,
      nome: "Arroz Branco Tipo A",
      preco: 6,
      imagem: "/arroz.jpg",
      categoria: "Arroz Temperado",
    },
     {
      id: 207,
      nome: "Arroz com Brócolis, Bacon e Calabresa",
      descricao: "250g",
      preco: 13,
      imagem: "/arroz.bacon.webp",
      categoria: "Arroz Temperado",
    },
     {
      id: 208,
      nome: "Arroz Temperado com Legumes",
      descricao: "250g",
      preco: 13,
      imagem: "/arroz.legumes.jpg",
      categoria: "Arroz Temperado",
    },
     {
      id: 209,
      nome: "Arroz à Grega com Frango Desfiado",
      preco: 13,
      imagem: "/arroz.frango.jpg",
      categoria: "Arroz Temperado",
    },
 
  
  ];

    function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  return (
    <div className="p-6 mb-76">
      <h1 className="text-3xl mb-6 text-[#F5C26B]">Arroz Temperado</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {produtos.map((p) => (
          <div key={p.id} className="bg-[#3A2217] p-4 rounded-xl">
            <Image width={320} height={320} alt="fotos de comida" src={p.imagem} className="rounded-xl mb-3" />
            <h3 className="text-xl font-bold text-white">{p.nome}</h3>
            <p className="mb-2 text-white">{p.descricao}</p>
            <p className="mb-2 text-white">{formatCurrency(p.preco)}</p>

            <button
              onClick={() => adicionar(p)}
              className="bg-[#D97925] w-full p-2 rounded-xl text-white font-bold"
            >
              Adicionar
            </button>
          </div>
        ))}
      </div>

      <Carrinho />

    <p className="text-center mt-8 font-bold">Desenvolvido por MD Infraestrutura e Tecnologia</p>
    </div>
  );
}