import React from "react";
import CarouselItem from "./CarouselItem";

const Carousel = () => {
  const CarouselItems = [
    {
      title: "1",
      image: "/images/ref2.jpg",
    },
    {
      title: "2",
      image: "/images/ref2.jpg",
    },
    {
      title: "3",
      image: "/images/ref2.jpg",
    },
    {
      title: "4",
      image: "/images/ref2.jpg",
    },
  ];

  return (
    <section className="z-10 mx-auto -mt-16 flex h-auto w-3/4 flex-col">
      <h2 className="mb-2 font-serif font-bold">
        filmreifer Auftritt für (Auszug):
      </h2>

      <span className="flex gap-8 rounded-full bg-primary-color px-8 py-2">
        {CarouselItems.map((items, index) => {
          return <CarouselItem key={index} {...items} />;
        })}
      </span>
    </section>
  );
};

export default Carousel;
