import Image from "next/image";
import React from "react";

const PersonalCard = ({ image, title, position, mail }: any) => {
  return (
    <a href={`mailto:${mail}`} className="relative">
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        objectFit="cover"
      />
      <span className="z-20 flex flex-col items-center justify-center gap-y-2 bg-black bg-opacity-40 transition-opacity hover:opacity-100 sm:absolute sm:top-0 sm:left-0 sm:h-full sm:w-full sm:opacity-0">
        <h2 className="font-serif text-lg font-bold">{title}</h2>
        <p>{position}</p>
        <p className="underline">{mail}</p>
      </span>
    </a>
  );
};

export default PersonalCard;
