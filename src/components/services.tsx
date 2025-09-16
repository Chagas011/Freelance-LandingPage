import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function Services() {
  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center p-3 bg-secondary">
      <Card className="bg-secondary border-none flex flex-col items-center p-3">
        <CardContent className="border-none">
          <Image
            src="/unha.png"
            alt="Fibra de Vidro + Tips"
            width={35}
            height={84}
            className="md:w-[35px] md:h-[84px] w-[25px] h-[60px]"
            quality={100}
            priority
          />
        </CardContent>
        <h3
          className={`${playfair.className} text-center font-bold text-gray-900 mb-4 text-xl md:text-3xl`}
        >
          Fibra de Vidro + Tips
        </h3>
      </Card>

      <Card className="bg-secondary border-none flex flex-col items-center p-3">
        <CardContent className="border-none">
          <Image
            src="/lixa.png"
            alt="Nail Art"
            width={63}
            height={84}
            className="md:w-[63px] md:h-[84px] w-[40px] h-[55px]"
            quality={100}
            priority
          />
        </CardContent>
        <h3
          className={`${playfair.className} text-center font-bold text-gray-900 mb-4 text-xl md:text-3xl`}
        >
          Nail Art
        </h3>
      </Card>

      <Card className="bg-secondary border-none flex flex-col items-center p-3">
        <CardContent className="border-none">
          <Image
            src="/agenda.png"
            alt="Cursos Presenciais"
            width={71}
            height={84}
            className="md:w-[71px] md:h-[84px] w-[45px] h-[55px]"
            quality={100}
            priority
          />
        </CardContent>
        <h3
          className={`${playfair.className} text-center font-bold text-gray-900 mb-4 text-xl md:text-3xl`}
        >
          Cursos Presenciais
        </h3>
      </Card>
    </div>
  );
}
