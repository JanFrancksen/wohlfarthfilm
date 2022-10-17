import Image from "next/image";
import React from "react";

const ReferenzEntryText = ({ image, content, title }: any) => {
  return (
    <section>
      <h2 className="font-serif text-3xl font-bold">{title}</h2>
      <p className="mb-8">{content}</p>
      <Image src={image} width={1000} height={400} objectFit="cover" alt="" />
    </section>
  );
};

export default ReferenzEntryText;
