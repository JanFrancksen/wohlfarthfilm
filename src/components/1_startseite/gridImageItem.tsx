import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  image: string;
  title: string;
  link: string;
  colspan: number;
  rowspan: number;
}

const GridImageItem = ({ image, title, link, colspan, rowspan }: Props) => {
  return (
    <Link href={link}>
      <a
        className={`col-span-${colspan} row-span-${rowspan} flex items-center justify-center overflow-hidden border `}
      >
        <Image
          src={image}
          alt={title}
          width={2000}
          height={2000}
          objectFit="cover"
        />
      </a>
    </Link>
  );
};

export default GridImageItem;
