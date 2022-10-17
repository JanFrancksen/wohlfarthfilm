import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ref from "../images/Referenzen/ref.jpg";

const leistungen: NextPage = () => {
  return (
    <div className="mx-auto my-40 grid w-3/4 grid-cols-2 gap-x-4 gap-y-8">
      <h1 className="col-span-2 font-serif text-3xl font-bold">
        Was wir können
      </h1>
      <article className="flex flex-col gap-4">
        <Image src={ref} alt=" " />
        <h2 className="font-serif text-xl font-bold">Filme</h2>
        <p>
          Es steckt in unserem Namen, es steckt in unserem Blut. Wir machen
          Filme. Imagefilme, Unternehmensfilme, Produktfilme und viele mehr.
          Egal, ob Lebensmittel, Maschinen, Personen oder Landschaften. Wir
          stellen Ihre Motive in bester Qualität dar.
        </p>
        <Link href="/referenzen/filme">
          <a className="self-start border-2 border-primary-color px-4 py-3 transition-colors hover:bg-primary-color">
            {" "}
            mehr erfahren ...
          </a>
        </Link>
      </article>
      <article className="flex flex-col gap-4">
        <Image src={ref} alt=" " />
        <h2 className="font-serif text-xl font-bold">Fotos</h2>
        <p>
          Es steckt in unserem Namen, es steckt in unserem Blut. Wir machen
          Filme. Imagefilme, Unternehmensfilme, Produktfilme und viele mehr.
          Egal, ob Lebensmittel, Maschinen, Personen oder Landschaften. Wir
          stellen Ihre Motive in bester Qualität dar.
        </p>
        <Link href="/referenzen/filme">
          <a className="self-start border-2 border-primary-color px-4 py-3 transition-colors hover:bg-primary-color">
            {" "}
            mehr erfahren ...
          </a>
        </Link>
      </article>
      <article className="flex flex-col gap-4">
        <Image src={ref} alt=" " />
        <h2 className="font-serif text-xl font-bold">Marken</h2>
        <p>
          Es steckt in unserem Namen, es steckt in unserem Blut. Wir machen
          Filme. Imagefilme, Unternehmensfilme, Produktfilme und viele mehr.
          Egal, ob Lebensmittel, Maschinen, Personen oder Landschaften. Wir
          stellen Ihre Motive in bester Qualität dar.
        </p>
        <Link href="/referenzen/filme">
          <a className="self-start border-2 border-primary-color px-4 py-3 transition-colors hover:bg-primary-color">
            {" "}
            mehr erfahren ...
          </a>
        </Link>
      </article>
      <article className="flex flex-col gap-4">
        <Image src={ref} alt=" " />
        <h2 className="font-serif text-xl font-bold">Grafik</h2>
        <p>
          Es steckt in unserem Namen, es steckt in unserem Blut. Wir machen
          Filme. Imagefilme, Unternehmensfilme, Produktfilme und viele mehr.
          Egal, ob Lebensmittel, Maschinen, Personen oder Landschaften. Wir
          stellen Ihre Motive in bester Qualität dar.
        </p>
        <Link href="/referenzen/filme">
          <a className="self-start border-2 border-primary-color px-4 py-3 transition-colors hover:bg-primary-color">
            {" "}
            mehr erfahren ...
          </a>
        </Link>
      </article>
    </div>
  );
};

export default leistungen;