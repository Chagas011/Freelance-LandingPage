"use client";

import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { slidesCarousel } from "@/slides";
import Image from "next/image";

export function CarrouselItem() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full flex justify-center pr-4">
      <Carousel setApi={setApi} className="w-full">
        <CarouselContent>
          {slidesCarousel.map((src, index) => (
            <CarouselItem
              key={index}
              className="w-full flex items-center justify-center"
            >
              <div className="relative w-full h-[550px] md:h-[600px] rounded-3xl overflow-hidden flex justify-center items-center bg-gray-100">
                <Image
                  src={src}
                  alt={`Carrossel ${index + 1}`}
                  fill
                  className="object-cover"
                  quality={100}
                  sizes="(max-width: 640px) 100vw,
           (max-width: 768px) 100vw,
           (max-width: 1024px) 100vw,
           1500px"
                  priority
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-primary transition" />
        <CarouselNext className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow hover:bg-primary transition" />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slidesCarousel.map((_, index) => (
            <span
              key={index - 1}
              className={`w-3 h-3 rounded-full transition ${
                index === current - 1 ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
}
