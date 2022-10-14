import Image from "next/image";
import React from "react";
import ImageHead from "../components/0_common/ImageHead";
import ref from "../images/Referenzen/ref.jpg";

const jobs = () => {
  return (
    <div>
      <ImageHead title="Produktiv? Kreativ? Bock?" image="" />
      <article className="mx-auto my-20 w-3/4 md:w-1/2">
        <h2 className="mb-2 font-serif text-xl font-bold">
          Aktuell sind leider keine Stellen frei
        </h2>
        <p>
          Dennoch kannst du dich gerne initiativ auf eine Stelle in unserem
          Hause bewerben. Wir freuen uns sehr über dein Interesse.
        </p>
      </article>
      <article className="mx-auto my-20 w-3/4 md:w-1/2">
        <h2 className="mb-2 font-serif text-xl font-bold">Langzeit Praktika</h2>
        <p>
          In Form von Schulpraktika, Studienpraktika oder Ähnlichem suchen wir
          jederzeit Praktikanten über einen Zeitraum von mindestens 3 Monaten.
        </p>
      </article>
      <aside className="mx-auto my-20 w-3/4 md:w-1/2">
        <h3 className="mb-2 font-serif text-lg font-bold">
          Interesse geweckt?
        </h3>
        <p>
          Dann sende deine Bewerbungsunterlagen unter Angabe des frühesten
          Eintrittstermins per Mail an:{" "}
          <a
            className="transition-colors hover:text-primary-color"
            href="mailto:wohlfarth@wohlfarth-film.de"
          >
            wohlfarth@wohlfarth-film.de
          </a>
        </p>
      </aside>
      <div className="grid grid-cols-2">
        <Image src={ref} alt="" width={800} height={600} objectFit="cover" />
        <Image src={ref} alt="" width={800} height={600} objectFit="cover" />
      </div>
    </div>
  );
};

export default jobs;
