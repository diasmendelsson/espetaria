import Image from "next/image";


export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#2C1B12] rounded-lg shadow-lg p-6 max-w-md w-94 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <Image src="/close.svg" width={22} height={22} alt="Icone de X" />
        </button>
        {children}
      </div>
    </div>
  );
}