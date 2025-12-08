"use client";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  
  const { selecionados } = useCart();

  const [tipoEntrega, setTipoEntrega] = useState("retirada");
  const [endereco, setEndereco] = useState("");

  const TAXA_ENTREGA = 3;

  function formatCurrency(value) {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  const totalProdutos = selecionados.reduce(
    (acc, item) => acc + item.preco * item.qtd,
    0
  );

  const totalFinal =
    tipoEntrega === "entrega" ? totalProdutos + TAXA_ENTREGA : totalProdutos;

  function enviarWhatsApp() {
    if (selecionados.length === 0) {
      alert("Seu carrinho está vazio!");
      return;
    }

    if (tipoEntrega === "entrega" && endereco.trim() === "") {
      alert("Informe o endereço para entrega!");
      return;
    }

    const texto = selecionados
      .map(
        (p) =>
          `• ${p.nome} *x${p.qtd}* - ${formatCurrency(p.preco * p.qtd)}${
            p.categoria === "Espetos" ? ` *( ${p.ponto} )*` : ""
          }`
      )
      .join("%0A");

    const mensagem =
      `Olá, Espetaria Raiz! Quero fazer um pedido:%0A%0A${texto}` +
      `%0A%0AEntrega: ${
        tipoEntrega === "entrega" ? "Sim" : "Retirada no local"
      }` +
      (tipoEntrega === "entrega" ? `%0AEndereço: ${endereco}` : "") +
      `%0A%0ATotal: *${formatCurrency(totalFinal)}*`;

    const numero = "5517996567779";
    window.location.href = `https://wa.me/${numero}?text=${mensagem}`;
  }

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl mb-6 text-[#F5C26B]">Checkout</h1>

      {selecionados.length === 0 ? (
        <p className="text-gray-300">Seu carrinho está vazio.</p>
      ) : (
        <>
          <div className="bg-[#3A2217] p-4 rounded-xl mb-6 ">
            <h2 className="text-xl font-bold mb-4 text-[#F5C26B]">Resumo do Pedido</h2>

            <ul className="space-y-3 text-white">
              {selecionados.map((item) => (
                <li key={item.id} className="border-b border-[#5b3a2a] pb-2">
                  <p className="font-semibold">
                    {item.nome} — {item.qtd} un
                  </p>
                  <p>{formatCurrency(item.preco * item.qtd)}</p>

                  {item.categoria === "Espetos" && (
                    <p className="text-sm text-gray-300 text-[#F5C26B]">
                      Ponto: {item.ponto}
                    </p>
                  )}
                </li>
              ))}
            </ul>

            <p className="mt-4 text-white">
              <strong>Total dos produtos:</strong>{" "}
              {formatCurrency(totalProdutos)}
            </p>

            {tipoEntrega === "entrega" && (
              <p className="text-[#F5C26B]">
                <strong>Taxa de entrega:</strong> {formatCurrency(TAXA_ENTREGA)}
              </p>
            )}

            <p className="mt-2 text-xl text-[#F5C26B]">
              <strong>Total final: </strong>{" "}
              <span className="">{formatCurrency(totalFinal)}</span>
            </p>
          </div>

          {/* Tipo de entrega */}
          <div className="bg-[#3A2217] p-4 rounded-xl mb-6 text-white">
            <h2 className="text-xl font-bold mb-4">Entrega</h2>

            <label className="mr-4">
              <input
                type="radio"
                checked={tipoEntrega === "retirada"}
                onChange={() => setTipoEntrega("retirada")}
              />{" "}
              Retirada
            </label>

            <label>
              <input
                type="radio"
                checked={tipoEntrega === "entrega"}
                onChange={() => setTipoEntrega("entrega")}
              />{" "}
              Entrega (+ R$ 3,00)
            </label>

            {tipoEntrega === "entrega" && (
              <input
                type="text"
                className="mt-3 w-full p-2 rounded-lg bg-[#2C1B12]"
                placeholder="Digite seu endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
              />
            )}
          </div>

          <button
            onClick={enviarWhatsApp}
            className="bg-[#D97925] hover:bg-[#BF661F] w-full p-4 rounded-xl text-xl font-bold"
          >
            Enviar pedido pelo WhatsApp
          </button>
        </>
      )}
    </div>
  );
}