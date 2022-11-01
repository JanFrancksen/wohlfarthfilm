import Image from "next/image";
import Link from "next/link";
import React from "react";

interface card {
  title: string;
  image: string | any;
  categories: string[];
  link: string;
}
const RefOverviewCard = ({ title, image, categories, link }: card) => {
  return (
    <article className=" w-60 flex-none snap-start sm:w-[400px]">
      <Link href={link}>
        <a className="flex flex-col gap-4">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            objectFit="cover"
            placeholder="blur"
            blurDataURL={image}
          />
          <h3 className="font-serif text-lg font-bold">{title}</h3>
          <div className="flex gap-x-4">
            {categories.map((item) => {
              return (
                <span
                  key={item}
                  className="bg-white px-2 py-1  text-xs text-black transition-colors hover:bg-primary-color hover:text-white"
                >
                  {item}
                </span>
              );
            })}
          </div>
        </a>
      </Link>
    </article>
  );
};

export default RefOverviewCard;
