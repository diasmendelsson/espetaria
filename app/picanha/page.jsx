"use client";
import { useCart } from "../../context/CartContext";
import Carrinho from "../../components/Carrinho";

import Image from "next/image";

export default function Combos(){

    const { adicionar } = useCart()

    const produtos = [
      {
        id: 400,
        nome: "Picanha Angus Meia Porção",
        descricao: "500g de picanha angus com catupiry e alho frito - Acompanha arroz, mandioca, patê, vinagrete e farofa",
        preco: 94.90,
        imagem: "/picanha.png",
        categoria: "Picanha",
        },
        {
        id: 401,
        nome: "Picanha Angus Porção Inteira",
        descricao: "1kg de picanha angus, com catupiry e alho frito - Acompanha arroz, mandioca, patê, vinagrete e farofa",
        preco: 144.90,
        imagem: "/picanha.png",
        categoria: "Picanha",
        },
   
    ]

        function formatCurrency(value) {
        return value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        });
    }
    return(
         <div className="p-6 mb-76">
              <h1 className="text-3xl mb-6 text-[#F5C26B]">Picanha</h1>
        
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
    )
}