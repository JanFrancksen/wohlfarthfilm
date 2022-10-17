import Image from "next/image";
import React from "react";

const ImageHead = ({ image, title }: any) => {
  return (
    <section className="relative h-[80vh] w-screen overflow-hidden">
      <Image src={image} alt={title} objectFit="cover" />
      <h1 className="absolute bottom-8 left-16 font-serif text-3xl font-bold">
        {title}
      </h1>
    </section>
  );
};

export default ImageHead;
