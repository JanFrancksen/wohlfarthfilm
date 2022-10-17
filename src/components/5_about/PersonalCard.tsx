import Image from "next/image";
import React from "react";

const PersonalCard = ({ image, title, position, mail }: any) => {
  return (
    <a href={`mailto:${mail}`} className="relative">
      <span className="absolute top-0 left-0 z-20 flex h-full w-full flex-col items-center justify-center gap-y-2 bg-black bg-opacity-40 opacity-0 transition-opacity hover:opacity-100">
        <h2 className="text-lg">{title}</h2>
        <p>{position}</p>
        <p className="underline">{mail}</p>
      </span>
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        objectFit="cover"
      />
    </a>
  );
};

export default PersonalCard;
