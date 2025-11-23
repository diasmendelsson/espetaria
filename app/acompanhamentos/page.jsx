"use client";
import { useCart } from "../../context/CartContext";
import Carrinho from "../../components/Carrinho";

import Image from "next/image";

export default function AcompanhamentosPage() {
  const { adicionar } = useCart();

  const produtos = [
    {
      id: 201,
      nome: "Farofa Temperada",
      preco: 2.50,
      imagem: "/farofa.png",
      categoria: "Acompanhamentos",
    },
    {
      id: 202,
      nome: "Vinagrete Fresco",
      preco: 2.50,
      imagem: "/vinagrete.png",
      categoria: "Acompanhamentos",
    },
     {
      id: 203,
      nome: "Mandioca",
      descricao: "Cozida na manteiga + temperos 250g",
      preco: 6,
      imagem: "/mandioca.jpg",
      categoria: "Acompanhamentos",
    },
     {
      id: 204,
      nome: "Geleia de Pimenta",
      preco: 3,
      imagem: "/geleia.png",
      categoria: "Acompanhamentos",
    },
     {
      id: 205,
      nome: "Patê de Alho Verde",
      preco: 2.50,
      imagem: "/pate.jpg",
      categoria: "Acompanhamentos",
    },
     {
      id: 206,
      nome: "Arroz Branco Tipo A",
      preco: 6,
      imagem: "/arroz.jpg",
      categoria: "Acompanhamentos",
    },
      {
      id:207,
      nome: "Combo Acompanhamento",
       descricao: "1 arroz branco 250g, 1 mandioca 250g, 1 patê alho verde,1 vinagrete, 1 farofa",
      preco: 16.90,
      imagem: "/combo.jpg",
      categoria: "Acompanhamentos",
    },
     {
      id: 208,
      nome: "Combo Individual",
      descricao: "1 espeto de alcatra, 1 kafta com queijo, 1 arroz branco 100g, 1 mandioca 150g, 1 patê alho verde,1 vinagrete, 1 farofa",
      preco: 31.90,
      imagem: "/combo.jpg",
      categoria: "Acompanhamentos",
    },
     {
      id: 209,
      nome: "Combo Casal",
      descricao: "1 espeto de alcatra, 1 kafta com queijo, 1 kafta tradicional, 1 arroz branco 250g, 1 mandioca 250g, 1 patê alho verde,1 vinagrete, 1 farofa",
      preco: 48.90,
      imagem: "/combo.jpg",
      categoria: "Acompanhamentos",
    },
     {
      id: 210,
      nome: "Combo Família",
      descricao: "1 espeto de alcatra, 1 kafta com queijo, 1 espeto de frango, 1 linguiça e 1 livre (escolha), 1 arroz branco 250g, 1 mandioca 250g, 1 patê alho verde,1 vinagrete, 1 farofa",
      preco: 68.90,
      imagem: "/combo.jpg",
      categoria: "Acompanhamentos",
    },
     {
      id: 211,
      nome: "Combo Raiz",
      descricao: "2 espeto de alcatra,2 kafta com queijo, 1 kafta tradicional, 1 espeto de frango,1 linguiça e 1 livre (escolha), 2 arroz branco 250g, 1 mandioca 250g, 1 patê alho verde,2 vinagrete, 1 farofa",
      preco: 104.90,
      imagem: "/combo.jpg",
      categoria: "Acompanhamentos",
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
      <h1 className="text-3xl mb-6 text-[#F5C26B]">Acompanhamentos</h1>

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