import { NextPage } from "next";
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
      <div className="mx-auto grid w-3/4 grid-cols-2 gap-4">
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
          image="/images/personal/Julz_linie.webp"
          title="Jan Francksen"
          position="Grafik"
          mail="mailto:francksen@wohlfarth-film.de"
        />
        <PersonalCard
          image="/images/personal/Katha_linie.webp"
          title="Anne Scheele"
          position="Büro & Social Media"
          mail="mailto:scheele@wohlfarth-film.de"
        />
      </div>
    </div>
  );
};

export default about;
