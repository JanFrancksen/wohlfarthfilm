import { NextPage } from "next";
import React from "react";
import Card from "../components/0_common/Card";

const referenzen: NextPage = () => {
  return (
    <div className="mx-auto my-20 grid w-3/4 grid-cols-2 gap-4 sm:my-40">
      <h1 className="col-span-2 font-serif text-3xl font-bold">
        Unsere Referenzen
      </h1>
      <h2 className="col-span-2">
        Unsere Filme können bewerben oder erklären. Vor allem transportieren
        unsere Filme aber Emotionen.
      </h2>
      <Card
        image="/images/referenzen/Film/referenz-1.jpg"
        title="Filme"
        content="Sehen Sie hier einen Auszug der Filme die wir für unsere Kunden erstellt haben ..."
        link="/referenzen/filme"
      />
      <Card
        image="/images/referenzen/Foto/IMGL3656-1-scaled.jpg"
        title="Fotos"
        content="Hier finden Sie eine Auswahl an profiessionellen Fotos, von uns für unsere Kunden erstellt ..."
        link="/referenzen/fotografie"
      />
    </div>
  );
};

export default referenzen;
