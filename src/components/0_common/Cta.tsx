import Link from "next/link";
import React from "react";

interface cta {
  heading: string;
  subheading: string;
  link: string;
  button: string;
}

const Cta = ({ heading, subheading, link, button }: cta) => {
  return (
    <div className="flex w-full flex-col items-center gap-4 bg-primary-color p-4 text-white">
      <h4 className="text-center font-serif text-xl font-bold">{heading}</h4>
      <h5 className="font-serif text-lg font-bold">{subheading}</h5>
      <Link href={link}>
        <a className=" bg-white px-4 py-3 text-black transition-colors hover:bg-black hover:text-primary-color">
          {button}
        </a>
      </Link>
    </div>
  );
};

export default Cta;
