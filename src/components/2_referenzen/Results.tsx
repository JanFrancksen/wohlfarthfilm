import Image from "next/image";
import React from "react";

const Results = ({ title, content, image }: any) => {
  return (
    <section className="my-20 grid grid-cols-2 items-center gap-8">
      <div>
        <h3 className="font-serif text-xl font-bold">{title}</h3>
        <p>{content}</p>
      </div>
      <Image
        src={image}
        alt={title}
        width={600}
        height={800}
        objectFit="cover"
      />
    </section>
  );
};

export default Results;
