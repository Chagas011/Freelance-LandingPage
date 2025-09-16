import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function Services() {
  return (
    <div className="flex gap-8 justify-center p-3 bg-secondary">
      <Card className="bg-secondary border-none flex justify-center items-center p-3">
        <CardContent className="border-none">
          <Image
            src="/unha.png"
            alt="Sobre nós"
            width={34.54}
            height={84}
            quality={100}
            priority
          />
        </CardContent>
        <h3
          className={`${playfair.className} text-center text-3xl md:text-4xl font-bold text-gray-900 mb-8`}
        >
          Fibra de Vidro + Tips
        </h3>
      </Card>

      <Card className="bg-secondary border-none flex justify-center items-center p-3">
        <CardContent className="border-none">
          <Image
            src="/lixa.png"
            alt="lixa"
            width={62.75}
            height={84}
            quality={100}
            priority
          />
        </CardContent>
        <h3
          className={`${playfair.className} text-center text-3xl md:text-4xl font-bold text-gray-900 mb-8`}
        >
          Nail Art
        </h3>
      </Card>

      <Card className="bg-secondary p-3 border-none flex justify-center items-center">
        <CardContent className="border-none">
          <Image
            src="/agenda.png"
            alt="lixa"
            width={71.33}
            height={84}
            quality={100}
            priority
          />
        </CardContent>
        <h3
          className={`${playfair.className} text-center text-3xl md:text-4xl font-bold text-gray-900 mb-8`}
        >
          Cursos Presenciais
        </h3>
      </Card>
    </div>
  );
}
