import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  content: string;
  image: string | undefined;
  colored: boolean;
  colspan: number;
  rowspan: number;
  link: string;
}

const GridItem = ({
  title,
  content,
  image,
  colored,
  rowspan,
  colspan,
  link,
}: Props) => {
  return (
    <Link href={link}>
      <a
        className={`relative grow col-span-${colspan} row-span-${rowspan} basis-0 overflow-hidden border p-4 transition-colors hover:border-primary-color`}
      >
        <div
          className={`absolute inset-0 z-20 flex h-full w-full flex-col justify-end p-4 ${
            colored ? "bg-primary-color bg-opacity-40" : ""
          }`}
        >
          <h2 className="font-serif text-xl font-bold leading-none">{title}</h2>
          <p className="text-sm">{content} </p>
        </div>

        {image && (
          <div className="absolute inset-0 flex h-full w-full items-center justify-center before:absolute before:inset-0 before:z-10 before:bg-black before:bg-opacity-60">
            <Image
              src={image}
              width={600}
              height={600}
              objectFit="cover"
              alt={title}
            />
          </div>
        )}
      </a>
    </Link>
  );
};

export default GridItem;
