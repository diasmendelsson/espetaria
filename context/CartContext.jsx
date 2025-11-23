"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [selecionados, setSelecionados] = useState([]);

  function adicionar(prod) {
    const existe = selecionados.find((p) => p.id === prod.id);

    if (existe) {
      setSelecionados(
        selecionados.map((p) =>
          p.id === prod.id ? { ...p, qtd: p.qtd + 1 } : p
        )
      );
    } else {
      const pontoDefault = prod.categoria === "Espetos" ? "Ao ponto" : null;
      setSelecionados([...selecionados, { ...prod, qtd: 1, ponto: pontoDefault }]);
    }
  }

  function remover(id) {
    const item = selecionados.find((p) => p.id === id);
    if (!item) return;

    if (item.qtd === 1)
      setSelecionados(selecionados.filter((p) => p.id !== id));
    else
      setSelecionados(
        selecionados.map((p) =>
          p.id === id ? { ...p, qtd: p.qtd - 1 } : p
        )
      );
  }

  function atualizarPonto(id, novoPonto) {
    setSelecionados(
      selecionados.map((p) =>
        p.id === id ? { ...p, ponto: novoPonto } : p
      )
    );
  }

  return (
    <CartContext.Provider
      value={{ selecionados, adicionar, remover, atualizarPonto }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}