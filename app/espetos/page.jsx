"use client";
import { useCart } from "../../context/CartContext";
import Carrinho from "../../components/Carrinho";

export default function EspetosPage() {
  const { adicionar } = useCart();

    const produtos = [

    { id: 1, nome: "Carne Angus", preco: 12, imagem: "/alcatra.jpg", categoria: "Espetos" },
    { id: 2, nome: "Frango", preco: 10, imagem: "/frango.jpg", categoria: "Espetos" },
    { id: 3, nome: "Carne com Legumes", descricao:"Pimentão Amarelo, Verde, Vermelho e Cebola", preco: 13.50, imagem: "/carne-legume.jpg", categoria: "Espetos"},
    { id: 4, nome: "Frango com Legumes", descricao:"Pimentão Amarelo, Verde, Vermelho e Cebola", preco: 11.50, imagem: "/legumes-frango.jpg", categoria: "Espetos"},
    { id: 5, nome: "Kafta Angus", preco: 11, imagem: "/kafta.jpg", categoria: "Espetos" },
    { id: 6, nome: "Kafta Frango com Provolone e Manjericão", preco: 12.50, imagem: "/kafta-frango.jpg", categoria: "Espetos"},
    { id: 7, nome: "Kafta Angus com Queijo", preco: 12, imagem: "/kafta.jpg", categoria:"Espetos" },
    { id: 8, nome: "Kafta Angus com Pimenta Biquinho", preco: 12, imagem: "/kafta.jpg", categoria: "Espetos" },
    { id: 9, nome: "Kafta de Quibe com Queijo", preco: 12, imagem: "/kaftakibe.jpg", categoria: "Espetos" },
    { id: 10, nome: "Kafta de Costela com Cebola Roxa", preco: 12.50, imagem: "/kafta.jpg", categoria: "Espetos" },
    { id: 11, nome: "Cuiabana no Espeto", preco: 14, imagem: "/linguica-cuiabana.jpg", categoria: "Espetos" },
    { id: 12, nome: "Cuiabana de Frango", preco: 14, imagem: "/linguica-frango.jpg", categoria: "Espetos" },
    { id: 13, nome: "Linguiça Toscana", preco: 10, imagem: "/linguica.jpg", categoria: "Espetos" },
    { id: 14, nome: "Linguiça Toscana Ardida", preco: 10, imagem: "/linguica.jpg", categoria:"Espetos" },
    { id: 15, nome: "Costela Angus", preco: 11.50, imagem: "/costela-bovina.jpg", categoria: "Espetos" },
    { id: 16, nome: "Panceta", preco: 11.50, imagem: "/panceta.jpg", categoria: "Espetos" },
    { id: 17, nome: "Coração de Frango", preco: 11.50, imagem: "/coracao.jpg", categoria: "Espetos" },
    { id: 18, nome: "Tulipa de Frango", preco: 13.50, imagem: "/tulipa.jpg", categoria: "Espetos" },
    { id: 19, nome: "Medalhão de Frango", preco: 13.50, imagem: "/medfrango.jpg", categoria: "Espetos" },
    { id: 20, nome: "Medalhão de Cupim com Queijo Coalho", preco: 15, imagem: "/medcoalho.jpg", categoria: "Espetos" },
    { id: 21, nome: "Cudiguim", preco: 11.50, imagem: "/codeguim.png", categoria: "Espetos" },
    { id: 22, nome: "Queijo Coalho", preco: 6.5, imagem: "/queijo.jpg", categoria: "Espetos" },
    { id: 23, nome: "Queijo Coalho com Mel", preco: 9, imagem: "/queijo.jpg", categoria: "Espetos" },
    { id: 24, nome: "Romeu e Julieta", preco: 9, imagem: "/queigo.jpeg", categoria: "Espetos" },
    { id: 25, nome: "Queijo Provolone", preco: 7.5, imagem: "/provolone.jpg", categoria: "Espetos" },
    { id: 26, nome: "Pão de Alho", preco: 5.5, imagem: "/pao.jpg", categoria: "Espetos" },
    { id: 27, nome: "Catupiry + Alho Frito", descricao:"Pode adicionar em qualquer espeto", preco: 4, imagem: "/alho.jpg", categoria: "Espetos" }
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