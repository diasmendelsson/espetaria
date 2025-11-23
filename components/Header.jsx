"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  const linkClasses = (href) =>
    `whitespace-nowrap px-4 py-2 rounded-lg transition ${
      path === href
        ? "bg-[#D97925] text-white"
        : "text-[#F5C26B] hover:bg-[#573726]"
    }`;

return(  
    <header className="w-full bg-[#3A2217] p-3 shadow-md fixed top-0 left-0 z-50">
      {/* MENU COM SCROLL HORIZONTAL */}

      
      <nav className="flex gap-4 overflow-x-auto scrollbar-none text-lg font-semibold mb-2">
        <Link href="/" className={linkClasses("/")}>Home</Link>
        <Link href="/espetos" className={linkClasses("/espetos")}>Espetos</Link>
        <Link href="/bebidas" className={linkClasses("/bebidas")}>Bebidas</Link>
        <Link href="/acompanhamentos" className={linkClasses("/acompanhamentos")}>Acompanhamentos</Link>
        <Link href="/checkout" className={linkClasses("/checkout")}>Checkout</Link>
      </nav>

        <div className="text-center text-sm text-[#F5C26B] mb-1">
        Arraste para o lado ➜
        </div>
    </header>
    

  );
}