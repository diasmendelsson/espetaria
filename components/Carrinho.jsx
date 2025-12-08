"use client";
import { useCart } from "../context/CartContext";


import Link from "next/link";

export default function Carrinho() {
  const { selecionados, adicionar, remover, atualizarPonto } = useCart();

  const TAXA_ENTREGA = 3;

  const totalSemTaxa = selecionados.reduce(
    (acc, item) => acc + item.preco * item.qtd,
    0
  );

  const totalFinal = totalSemTaxa;

  function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

 


  return (
    <div className="fixed bottom-4 right-4 bg-[#3A2217] p-4 rounded-2xl shadow-2xl w-80 border border-[#5b3a2a]">
      <h2 className="text-xl font-bold mb-3 text-[#F5C26B]">Carrinho</h2>

      {selecionados.length === 0 ? (
        <p className="text-gray-300 text-sm">Nenhum item adicionado.</p>
      ) : (
        <ul className="space-y-2 max-h-48 overflow-y-auto pr-2">
          {selecionados.map((item) => (
            <li key={item.id} className="pb-2 border-b border-[#5b3a2a]">
              <div className="flex justify-between items-center">
                <span className="text-white">{item.nome}</span>
                <div className="flex items-center gap-2 text-white font-bold">
                  <button onClick={() => remover(item.id)} className="font-bold px-2 py-1 bg-red-600 rounded-lg">-</button>
                  <span>{item.qtd}</span>
                  <button onClick={() => adicionar(item)} className="font-bold px-2 py-1 bg-green-600 rounded-lg">+</button>
                </div>
              </div>

              {item.categoria === "Espetos" && (
                <select
                  value={item.ponto}
                  onChange={(e) => atualizarPonto(item.id, e.target.value)}
                  className="mt-2 w-full bg-[#2C1B12] border border-[#5b3a2a] p-1 rounded-lg text-sm text-white"
                >
                  <option>Mal passado</option>
                  <option>Ao ponto</option>
                  <option>Bem passado</option>
                </select>
              )}
            </li>
          ))}
        </ul>
      )}

      

      <p className="text-lg mt-4 text-[#F5C26B] mb-4">
        Total:{" "}
        <span className="text-[#F5C26B] font-bold">
          {formatCurrency(totalFinal)}
        </span>
      </p>

      <Link href="/checkout" className=" bg-[#D97925] w-full p-2 rounded-xl text-white font-bold">Finalizar Pedido</Link>
    </div>
  );
}