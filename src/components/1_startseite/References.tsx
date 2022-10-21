import Image from "next/image";
import Link from "next/link";
import React from "react";
import ReferenceItem from "./ReferenceItem";

const References = ({ items }: any) => {
  return (
    <section className="my-20 grid w-full gap-4 p-4 sm:grid-cols-2">
      {items.map((item: object, index: number) => {
        return <ReferenceItem {...item} key={index} />;
      })}
    </section>
  );
};

export default References;
