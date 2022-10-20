import Image from "next/image";
import React from "react";

const ImageHead = ({ image, title }: any) => {
  return (
    <section className="relative h-[80vh] w-screen overflow-hidden before:absolute before:inset-0 before:z-10 before:bg-gradient-to-b before:from-transparent before:to-black">
      <Image
        src={image}
        alt={title}
        objectFit="cover"
        loading="eager"
        layout="fill"
      />
      <h1 className="absolute bottom-8 left-16 z-20 font-serif text-3xl font-bold">
        {title}
      </h1>
    </section>
  );
};

export default ImageHead;
