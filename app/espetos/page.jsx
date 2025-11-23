"use client";
import { useCart } from "../../context/CartContext";
import Carrinho from "../../components/Carrinho";

export default function EspetosPage() {
  const { adicionar } = useCart();

    const produtos = [

    { id: 1, nome: "Carne Angus", preco: 11.50, imagem: "/alcatra.jpg", categoria: "Espetos" },
    { id: 2, nome: "Frango", preco: 9.50, imagem: "/frango.jpg", categoria: "Espetos" },
    { id: 3, nome: "Carne com Legumes", descricao:"Pimentão Amarelo, Verde, Vermelho e Cebola", preco: 13, imagem: "/carne-legume.jpg", categoria: "Espetos"},
    { id: 4, nome: "Frango com Legumes", descricao:"Pimentão Amarelo, Verde, Vermelho e Cebola", preco: 11, imagem: "/legumes-frango.jpg", categoria: "Espetos"},
    { id: 5, nome: "Kafta Angus", preco: 10.50, imagem: "/kafta.jpg", categoria: "Espetos" },
    { id: 6, nome: "Kafta Frango com Provolone e Manjericão", preco: 12, imagem: "/kafta-frango.jpg", categoria: "Espetos"},
    { id: 7, nome: "Kafta Angus com Queijo", preco: 11.50, imagem: "/kafta.jpg", categoria:"Espetos" },
    { id: 8, nome: "Kafta Angus com Pimenta Biquinho", preco: 11.50, imagem: "/kafta.jpg", categoria: "Espetos" },
    { id: 9, nome: "Kafta de Quibe com Queijo", preco: 11.50, imagem: "/kaftakibe.jpg", categoria: "Espetos" },
    { id: 10, nome: "Kafta de Costela com Cebola Roxa", preco: 12, imagem: "/costela-bovina.jpg", categoria: "Espetos" },
    { id: 11, nome: "Cuiabana no Espeto", preco: 12, imagem: "/linguica-cuiabana.jpg", categoria: "Espetos" },
    { id: 12, nome: "Linguiça Toscana", preco: 9.5, imagem: "/linguica.jpg", categoria: "Espetos" },
    { id: 13, nome: "Linguiça Toscana Ardida", preco: 9.5, imagem: "/linguica.jpg", categoria:"Espetos" },
    { id: 14, nome: "Costela Angus", preco: 11, imagem: "/costela-bovina.jpg", categoria: "Espetos" },
    { id: 15, nome: "Panceta", preco: 11, imagem: "/panceta.jpg", categoria: "Espetos" },
    { id: 16, nome: "Coração de Frango", preco: 11, imagem: "/coracao.jpg", categoria: "Espetos" }
  ];

    function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }


  return (
    <div className="p-6 mb-76">
      <h1 className="text-3xl mb-6 text-[#F5C26B]">Espetos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {produtos.map((p) => (
          <div key={p.id} className="bg-[#3A2217] p-4 rounded-xl">
            <img src={p.imagem} className="rounded-xl mb-3" />
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