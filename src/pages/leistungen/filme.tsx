import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../../components/0_common/Card";

const filme: NextPage = () => {
  return (
    <div className="mx-auto my-20 grid w-3/4 grid-cols-1 gap-x-4 gap-y-8 sm:my-40 sm:grid-cols-2 md:grid-cols-3">
      <h1 className="font-serif text-3xl font-bold leading-none sm:col-span-2 md:col-span-3">
        Was wir können
      </h1>
      <Card
        title="Imagefilme"
        image="/images/referenzen/Film/agron-min-2.png"
        content="Es steckt in unserem Namen, es steckt in unserem Blut. Wir machen Filme. Imagefilme, Unternehmensfilme, Produktfilme und viele mehr. Egal, ob Lebensmittel, Maschinen, Personen oder Landschaften. Wir stellen Ihre Motive in bester Qualität dar."
        link="/leistungen/filme/imagefilme"
      />
      <Card
        title="Tourismus"
        image="/images/referenzen/Film/agron-min-2.png"
        content="Es steckt in unserem Namen, es steckt in unserem Blut. Wir machen Filme. Imagefilme, Unternehmensfilme, Produktfilme und viele mehr. Egal, ob Lebensmittel, Maschinen, Personen oder Landschaften. Wir stellen Ihre Motive in bester Qualität dar."
        link="/leistungen/filme/imagefilme"
      />
      <Card
        title="Spot"
        image="/images/referenzen/Film/agron-min-2.png"
        content="Es steckt in unserem Namen, es steckt in unserem Blut. Wir machen Filme. Imagefilme, Unternehmensfilme, Produktfilme und viele mehr. Egal, ob Lebensmittel, Maschinen, Personen oder Landschaften. Wir stellen Ihre Motive in bester Qualität dar."
        link="/leistungen/filme/imagefilme"
      />
      <Card
        title="Unternehmensfilm"
        image="/images/referenzen/Film/agron-min-2.png"
        content="Es steckt in unserem Namen, es steckt in unserem Blut. Wir machen Filme. Imagefilme, Unternehmensfilme, Produktfilme und viele mehr. Egal, ob Lebensmittel, Maschinen, Personen oder Landschaften. Wir stellen Ihre Motive in bester Qualität dar."
        link="/leistungen/filme/unternehmensfilme"
      />

      <Card
        title="Recruiting"
        image="/images/referenzen/Film/agron-min-2.png"
        content="Es steckt in unserem Namen, es steckt in unserem Blut. Wir machen Filme. Imagefilme, Unternehmensfilme, Produktfilme und viele mehr. Egal, ob Lebensmittel, Maschinen, Personen oder Landschaften. Wir stellen Ihre Motive in bester Qualität dar."
        link="/leistungen/filme/recruiting"
      />
      <Card
        title="Event"
        image="/images/referenzen/Film/agron-min-2.png"
        content="Es steckt in unserem Namen, es steckt in unserem Blut. Wir machen Filme. Imagefilme, Unternehmensfilme, Produktfilme und viele mehr. Egal, ob Lebensmittel, Maschinen, Personen oder Landschaften. Wir stellen Ihre Motive in bester Qualität dar."
        link="/leistungen/filme/event"
      />
      <Card
        title="Produktfilme"
        image="/images/referenzen/Film/agron-min-2.png"
        content="Es steckt in unserem Namen, es steckt in unserem Blut. Wir machen Filme. Imagefilme, Unternehmensfilme, Produktfilme und viele mehr. Egal, ob Lebensmittel, Maschinen, Personen oder Landschaften. Wir stellen Ihre Motive in bester Qualität dar."
        link="/leistungen/filme/produktfilme"
      />
      <Card
        title="Portrait"
        image="/images/referenzen/Film/agron-min-2.png"
        content="Es steckt in unserem Namen, es steckt in unserem Blut. Wir machen Filme. Imagefilme, Unternehmensfilme, Produktfilme und viele mehr. Egal, ob Lebensmittel, Maschinen, Personen oder Landschaften. Wir stellen Ihre Motive in bester Qualität dar."
        link="/leistungen/filme/portrait"
      />
    </div>
  );
};

export default filme;
