import { NextPage } from "next";
import React from "react";
import ScrollBox from "../components/2_referenzen/ScrollBox";
import { refData } from "../components/2_referenzen/ReferenzenData";

const referenzen: NextPage = () => {
  return (
    <div className="mx-auto my-20 w-3/4 sm:my-40">
      <h1 className="col-span-2 font-serif text-3xl font-bold">
        Unsere Referenzen
      </h1>
      <h2 className="col-span-2">
        Unsere Filme können bewerben oder erklären. Vor allem transportieren
        unsere Filme aber Emotionen.
      </h2>
      <div className="mt-80">
        {refData.map((item: any) => (
          <ScrollBox key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default referenzen;
