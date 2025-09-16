import Link from "next/link";
import { FaInstagram, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-16">
      <div className="max-w-[1300px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Stephanie G. | Nail Designer</h2>
          <p className="text-sm text-gray-200 mt-2">
            Realçando sua beleza com cuidado e dedicação 💅
          </p>
        </div>

        <div className="flex flex-col xl:flex-row items-center gap-6">
          <Link
            href="https://www.instagram.com/stephaniegomes_naildesigner?igsh=OXNiZmk5Mmxrang2"
            target="_blank"
            className="flex items-center gap-2 hover:text-pink-400 transition"
          >
            <FaInstagram size={24} />
            <span>@stephaniegomes_naildesigner</span>
          </Link>

          <Link
            href="https://wa.me/5511960391030"
            target="_blank"
            className="flex items-center gap-2 hover:text-green-400 transition"
          >
            <FaWhatsapp size={24} />
            <span>(11) 96039-1030</span>
          </Link>

          <Link
            href="https://share.google/KUr7GRLHBdYDAfDLP"
            target="_blank"
            className="flex items-center gap-2 hover:text-yellow-300 transition"
          >
            <FaMapMarkerAlt size={22} />
            <span>R. Lúcio Petit da Silva, 15 - Jardim Progresso </span>
          </Link>
        </div>
      </div>

      {/* Linha final */}
      <div className="mt-6  pt-4 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} Stephanie G. | Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
