import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ image, title, content, link }: any) => {
  return (
    <article className="flex flex-col gap-4">
      {" "}
      <Image src={image} alt="" width={400} height={250} objectFit="cover" />
      <h2 className="font-serif text-xl font-bold">{title}</h2>
      <p>{content}</p>
      <Link href={link}>
        <a className="self-start border-2 border-primary-color px-4 py-3 transition-colors hover:bg-primary-color">
          mehr erfahren ...
        </a>
      </Link>
    </article>
  );
};

export default Card;
