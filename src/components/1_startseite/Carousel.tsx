import React from "react";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const CarouselItems = [
    {
      title: "1",
      image: "/images/referenzen/Kundenlogos/agrarfrost-min-1.png",
    },
    {
      title: "2",
      image: "/images/referenzen/Kundenlogos/agriDIALOG_logo-min.png",
    },
    {
      title: "3",
      image: "/images/referenzen/Kundenlogos/agron-min.png",
    },
    {
      title: "4",
      image: "/images/referenzen/Kundenlogos/Am-Around-min.png",
    },
    {
      title: "5",
      image: "/images/referenzen/Kundenlogos/at-nutzfahrzeuge.png",
    },
    {
      title: "6",
      image: "/images/referenzen/Kundenlogos/behrens_meyer-min.png",
    },
    {
      title: "7",
      image: "/images/referenzen/Kundenlogos/bell-min.png",
    },
    {
      title: "8",
      image: "/images/referenzen/Kundenlogos/Biochem-Logo-min.png",
    },
    {
      title: "9",
      image: "/images/referenzen/Kundenlogos/Buergerwindpark-min.png",
    },
  ];

  return (
    <section className="z-10 mx-auto -mt-16 flex h-auto w-3/4 flex-col">
      <h2 className="mb-2 font-serif font-bold">
        filmreifer Auftritt für (Auszug):
      </h2>

      <span className="flex gap-4 rounded-full bg-primary-color px-8 py-2">
        {CarouselItems.map((items, index) => {
          return <CarouselItem key={index} {...items} />;
        })}
      </span>
    </section>
  );
};

export default Carousel;
