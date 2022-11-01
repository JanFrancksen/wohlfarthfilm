import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import ImageHead from "../components/0_common/ImageHead";
import EntryText from "../components/5_about/EntryText";
import PersonalCard from "../components/5_about/PersonalCard";
const about: NextPage = () => {
  return (
    <div>
      <ImageHead
        image="/images/ueber-uns/IMG_7278-2-scaled.jpg"
        title="Über Uns"
      />
      <EntryText />
      <div className="mx-auto grid w-3/4 gap-8 sm:grid-cols-2 sm:gap-4">
        <PersonalCard
          image="/images/personal/Stefan_linie.webp"
          title="Stefan Ganseforth"
          position="Kamera"
          mail="mailto:ganseforth@wohlfarth-film.de"
        />
        <PersonalCard
          image="/images/personal/Christian_linie.webp"
          title="Christian Wohlfarth"
          position="Geschäftsführung"
          mail="mailto:wohlfarth@wohlfarth-film.de"
        />
        <PersonalCard
          image="/images/personal/Katha_linie.webp"
          title="Anne Scheele"
          position="Büro & Social Media"
          mail="mailto:scheele@wohlfarth-film.de"
        />
        <PersonalCard
          image="/images/personal/Julz_linie.webp"
          title="Nico Janßen"
          position="Schnitt"
          mail="mailto:janßen@wohlfarth-film.de"
        />
        <PersonalCard
          image="/images/personal/Julz_linie.webp"
          title="Ischil ..."
          position="Schnitt"
          mail="mailto:janßen@wohlfarth-film.de"
        />
        <PersonalCard
          image="/images/personal/Katha_linie.webp"
          title="..."
          position="..."
          mail="mailto:scheele@wohlfarth-film.de"
        />
        <PersonalCard
          image="/images/personal/Julz_linie.webp"
          title="Jan Francksen"
          position="Grafik"
          mail="mailto:francksen@wohlfarth-film.de"
        />
      </div>
      <div className="mx-auto my-20 grid w-3/4 grid-cols-3 gap-x-8">
        <h2 className="col-span-3 place-self-center font-serif text-xl font-bold">
          Mitglied im:
        </h2>
        <Image
          src="/images/referenzen/Kundenlogos/om.png"
          alt=""
          width={400}
          height={300}
          objectFit="contain"
        />
        <Image
          src="/images/referenzen/Kundenlogos/bvmw.png"
          alt=""
          width={400}
          height={300}
          objectFit="contain"
        />
        <Image
          src="/images/referenzen/Kundenlogos/bni.png"
          alt=""
          width={400}
          height={300}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default about;
