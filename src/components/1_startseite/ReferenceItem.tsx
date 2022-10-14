import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReferenceItem = ({ link, image, title }: any) => {
  return (
    <Link href={link}>
      <a className="relative block w-full ">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          objectFit="cover"
          layout="responsive"
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-4 font-serif text-lg">
          {title}
        </span>
      </a>
    </Link>
  );
};

export default ReferenceItem;
