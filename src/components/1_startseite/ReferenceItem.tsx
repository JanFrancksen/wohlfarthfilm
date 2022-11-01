import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReferenceItem = ({ link, image, title }: any) => {
  return (
    <Link href={link}>
      <a className="relative block w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          objectFit="cover"
          layout="responsive"
          placeholder="blur"
          blurDataURL={image}
        />
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white bg-opacity-50 px-8 py-4 font-serif text-base backdrop-blur-sm transition-colors hover:bg-white hover:text-black">
          {title}
        </span>
      </a>
    </Link>
  );
};

export default ReferenceItem;
