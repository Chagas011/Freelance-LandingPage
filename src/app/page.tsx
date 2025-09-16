import { CarrouselItem } from "@/components/carrousel";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Services } from "@/components/services";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />

      <div className="w-full flex justify-center mt-24 pl-4">
        <div className="w-[1500px]">
          <CarrouselItem />
        </div>
      </div>

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 py-12">
        {/* Texto */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-6">
            Sobre nós
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed font-sans">
            Somos um estúdio especializado em realçar a beleza e a confiança de
            cada mulher através do cuidado com as unhas. Nosso foco é o{" "}
            <span className="font-semibold">alongamento de unhas</span>,
            oferecendo técnicas modernas e de alta durabilidade, como
            <span className="italic">
              {" "}
              fibra de vidro, tips, molde, blindagem e esmaltação em gel
            </span>
            .
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-sans mt-4">
            Também realizamos construção de alongamento nas unhas dos pés e
            <span className="font-semibold"> plástica dos pés</span>, trazendo
            bem-estar e sofisticação em cada detalhe. Além dos atendimentos,
            ministramos{" "}
            <span className="font-semibold">cursos profissionais </span>
            para quem deseja ingressar ou se aperfeiçoar na área, compartilhando
            conhecimento e técnicas exclusivas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-sans mt-4">
            Nosso compromisso é entregar resultados impecáveis, com dedicação,
            qualidade e carinho em cada atendimento. 💅✨
          </p>

          <Link
            href="https://share.google/KUr7GRLHBdYDAfDLP"
            target="_blank"
            className="flex items-center gap-2 hover:text-primary transition mt-5"
          >
            <FaMapMarkerAlt size={22} />
            <span className="text-xl">
              R. Lúcio Petit da Silva, 15 - Jardim Progresso{" "}
            </span>
          </Link>
        </div>

        {/* Imagem */}
        <div className="flex justify-center">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/sobrenos.JPG"
              alt="Sobre nós"
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 mb-6 text-center">
          Serviços
        </h2>
        <Services />

        <div className="flex justify-center">
          <Button
            variant={"default"}
            className="w-[300px] p-6  mt-5 mb-5"
            asChild
          >
            <Link
              href="https://www.instagram.com/stephaniegomes_naildesigner?igsh=OXNiZmk5Mmxrang2"
              target="_blank"
              className="flex flex-col items-center justify-center gap-1 text-center p-5"
            >
              Venha Conferir
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
