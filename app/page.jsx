'use client'

import Link from "next/link";
import Carrinho from "../components/Carrinho";
import Modal from "@/components/Modal";

import Image from "next/image";

import { useState } from "react";


export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(true);


  return (
    <div className="p-6 ">
      <h1 className="text-center text-4xl font-bold text-[#F5C26B] mb-8">
        Cardápio Espetaria Raiz
      </h1>

      <div className="flex flex-col gap-4 max-w-md mx-auto">
         <Link href="https://www.google.com/search?client=ms-android-samsung-ss&hs=SJbU&sca_esv=ff9070007e97632b&sxsrf=ANbL-n41K-AYjsuBYjIwBoQu-2QyAJVxUw:1769888325899&q=avalia%C3%A7%C3%B5es+sobre+espetaria+raiz+cedral&uds=ALYpb_nM8TYGR588rjo7DSn-sJ9JyvmZi7STznA7K78MB3AvaSTKryfHxW0ujiL8FdhmegVd1D8aGNCCw5WaFoKMuY_rruwtrtH_W-cu0oF5UFk7dAG8O_jGp-WOjZGQBkeqc6y_M0E9dNtTOidjqzF_M28-gr6LfEqaEw2UFZb9bU5qQW7nlRp4vfwD_ZlTfLmFeuWJlZ7ro3KkJAnrbTfV6PfiW9SsveDuyCMgT7EQ60NF8qAeZt1xqQqQ5bOXybmB8P3tjRy6BCP44CA_aX2zaLd6-l4g-W8dmuow0YVTJk84OA4U82uUF26gNQErO20NPMODzT24BgkyeJG3Y3H3jdnG8AIx18XSgCvhIq1jcYJVt7Cq8g56kAcfcutfUxitl3SOv3OpOhPDwQewg5UkGEpQskXnbhg8lmY6ESrfnr35A6tdWgcbAn5g1Dn4K-skQs3EoRjn&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdQIdlfJ95e9QrllU_Cpbd_nK8vf_Kr10cCAsXM2urbJjJBHrnub-hpJkxGs0JhXLCE8StEi8spk9ku3tqtiKU3X20j7aTQxnHdyP9iYieCujLcX2l0JWsiXXJceunXDPtYSqQw%3D&sa=X&ved=2ahUKEwjc99Pnw7aSAxUoE7kGHfEJEgYQk8gLegQIGxAB&ictx=1&biw=384&bih=695&dpr=2.81&aic=0 " className="bg-[#D97925] p-4 text-center rounded-xl text-white font-bold flex items-center justify-center gap-2">
          Avaliar no Google
          <div className="flex">
            <Image src="/estrela.png" width={18} height={18} alt="estrela" />
            <Image src="/estrela.png" width={18} height={18} alt="estrela" />
            <Image src="/estrela.png" width={18} height={18} alt="estrela" />
          </div>
        </Link>
        <Link href="/espetos" className="bg-[#D97925] p-4 text-center rounded-xl text-white font-bold">
          Espetos
        </Link>
        <Link href="/bebidas" className="bg-[#D97925] p-4 text-center rounded-xl text-white font-bold">
          Bebidas
        </Link> 
        <Link href="/acompanhamentos" className="bg-[#D97925] p-4 text-center rounded-xl text-white font-bold">
          Acompanhamentos
        </Link>
         <Link href="/combos" className="bg-[#D97925] p-4 text-center rounded-xl text-white font-bold">
          Jantinha
        </Link>
        <Link href="/arroz" className="bg-[#D97925] p-4 text-center rounded-xl text-white font-bold">
          Arroz Temperado
        </Link>
       
      </div>
    

      <p className="text-center mt-8 font-bold">Desenvolvido por MD Infraestrutura e Tecnologia</p>

      

    <div className="bg-red-500">
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-xl font-bold mb-4 text-[#F5C26B] flex items-center gap-2">Avalie-nos no Google
          <Image src="/estrela.png" width={18} height={18} alt="estrela" />
          <Image src="/estrela.png" width={18} height={18} alt="estrela" />
          <Image src="/estrela.png" width={18} height={18} alt="estrela" />
        </h2>
        <p>Deixe uma avaliação no Google</p>
         <div className="flex gap-4">
            <Link href="https://www.google.com/search?client=ms-android-samsung-ss&hs=SJbU&sca_esv=ff9070007e97632b&sxsrf=ANbL-n41K-AYjsuBYjIwBoQu-2QyAJVxUw:1769888325899&q=avalia%C3%A7%C3%B5es+sobre+espetaria+raiz+cedral&uds=ALYpb_nM8TYGR588rjo7DSn-sJ9JyvmZi7STznA7K78MB3AvaSTKryfHxW0ujiL8FdhmegVd1D8aGNCCw5WaFoKMuY_rruwtrtH_W-cu0oF5UFk7dAG8O_jGp-WOjZGQBkeqc6y_M0E9dNtTOidjqzF_M28-gr6LfEqaEw2UFZb9bU5qQW7nlRp4vfwD_ZlTfLmFeuWJlZ7ro3KkJAnrbTfV6PfiW9SsveDuyCMgT7EQ60NF8qAeZt1xqQqQ5bOXybmB8P3tjRy6BCP44CA_aX2zaLd6-l4g-W8dmuow0YVTJk84OA4U82uUF26gNQErO20NPMODzT24BgkyeJG3Y3H3jdnG8AIx18XSgCvhIq1jcYJVt7Cq8g56kAcfcutfUxitl3SOv3OpOhPDwQewg5UkGEpQskXnbhg8lmY6ESrfnr35A6tdWgcbAn5g1Dn4K-skQs3EoRjn&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOdQIdlfJ95e9QrllU_Cpbd_nK8vf_Kr10cCAsXM2urbJjJBHrnub-hpJkxGs0JhXLCE8StEi8spk9ku3tqtiKU3X20j7aTQxnHdyP9iYieCujLcX2l0JWsiXXJceunXDPtYSqQw%3D&sa=X&ved=2ahUKEwjc99Pnw7aSAxUoE7kGHfEJEgYQk8gLegQIGxAB&ictx=1&biw=384&bih=695&dpr=2.81&aic=0"
            className="bg-[#D97925] mt-4 px-4 py-2 h-10 bg-green-500 text-white rounded">
            Avaliar agora
          </Link>
          <button
            onClick={() => setIsModalOpen(false)}
            className="mt-4 h-10 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Avaliar depois
          </button>
         </div>
      </Modal>
    </div>
    </div>
  );
}