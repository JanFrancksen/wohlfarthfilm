import Link from "next/link";
import React from "react";

interface Props {
  link: string;
  buttonText: string;
}

const InDevelopment = ({ link, buttonText }: Props) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h1 className="font-serif text-xl font-bold">
        Diese Seite befindet sich gerade im Aufbau
      </h1>
      <Link href={link}>
        <a className="border-2 border-primary-color p-4 hover:bg-primary-color ">
          {buttonText}{" "}
        </a>
      </Link>
    </div>
  );
};

export default InDevelopment;
