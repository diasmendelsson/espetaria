"use client";
import { useCart } from "../../context/CartContext";
import Carrinho from "../../components/Carrinho";

import Image from "next/image";

export default function BebidasPage() {
  const { adicionar } = useCart();

  const produtos = [
    {
      id: 101,
      nome: "Coca Cola Lata",
      preco: 5,
      imagem: "/coca.jpg",
      categoria: "Bebidas",
    },
    {
      id: 102,
      nome: "Coca Cola Lata Zero",
      preco: 5,
      imagem: "/cocazero.png",
      categoria: "Bebidas",
    },
    {
      id: 103,
      nome: "Coca Cola 1 Litro Zero",
      preco: 9,
      imagem: "/coca1l.png",
      categoria: "Bebidas",
    },
    {
      id: 104,
      nome: "Coca Cola 1 Litro Zero",
      preco: 9,
      imagem: "/coca1l0.png",
      categoria: "Bebidas",
    },
    {
      id: 105,
      nome: "Coca Cola 2 Litros",
      preco: 13,
      imagem: "/coca2l.png",
      categoria: "Bebidas",
    },
    {
      id: 106,
      nome: "Coca Cola 2 Litros Zero",
      preco: 13,
      imagem: "/coca2l0.png",
      categoria: "Bebidas",
    },
    {
      id: 107,
      nome: "Guaraná Poty 2 Litros",
      preco: 10,
      imagem: "/poty.png",
      categoria: "Bebidas",
    },
    {
      id: 108,
      nome: "Roller 2 Litros",
      preco: 10,
      imagem: "/roller.png",
      categoria: "Bebidas",
    },
    {
      id: 109,
      nome: "Cerveja Antártica Boa Lata 350ml",
      preco: 5,
      imagem: "/boalata.png",
      categoria: "Bebidas",
    },
    {
      id: 110,
      nome: "Cerveja Heineken Lata 350ml",
      preco: 8,
      imagem: "/heineken.png",
      categoria: "Bebidas",
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
      <h1 className="text-3xl mb-6 text-[#F5C26B]">Bebidas</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {produtos.map((p) => (
          <div key={p.id} className="bg-[#3A2217] p-4 rounded-xl text-center flex  items-center flex-col border">
            <Image alt="Imagens de bebidas" width={140} height={140} src={p.imagem} className="rounded-xl mb-3" />
            <h3 className="text-xl font-bold text-white">{p.nome}</h3>
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