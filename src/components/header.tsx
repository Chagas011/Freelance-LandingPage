import { Instagram } from "lucide-react";
import { Great_Vibes, Poppins } from "next/font/google";
import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
});

export function Header() {
  return (
    <header className="bg-primary fixed top-0 left-0 z-50 flex h-[80px] w-full rounded-b-md p-4 text-white items-center  gap-2 shadow-md ">
      <Link href="/">
        <div className="flex">
          <h1 className={`${greatVibes.className} text-3xl`}>Stephanie G.</h1>
          <span className={`${poppins.className} text-lg font-medium mt-1`}>
            | Nail Designer
          </span>
        </div>
      </Link>

      <div className="flex ml-auto items-center">
        <Link
          href="https://www.instagram.com/stephaniegomes_naildesigner?igsh=OXNiZmk5Mmxrang2"
          target="_blank"
          className="flex flex-col items-center justify-center gap-1 text-center"
        >
          <FaInstagram size={32} />
          <span className={`${poppins.className} font-medium`}>Instagram</span>
        </Link>
      </div>
      <Link
        href="https://wa.me/5511960391030"
        target="_blank"
        className="fixed bottom-40 right-15 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition"
      >
        <FaWhatsapp size={32} />
      </Link>
    </header>
  );
}
