import { NextPage } from "next";
import React from "react";
import ImageHead from "../components/0_common/ImageHead";
import EntryText from "../components/5_about/EntryText";
import PersonalCard from "../components/5_about/PersonalCard";
import imgStefan from "../images/Referenzen/ref.jpg";
import imgChristian from "../images/Referenzen/ref.jpg";
import imgJan from "../images/Referenzen/ref.jpg";
import imgAnne from "../images/Referenzen/ref.jpg";

const about: NextPage = () => {
  return (
    <div>
      <ImageHead image="" title="Über Uns" />
      <EntryText />
      <div className="mx-auto grid w-3/4 grid-cols-2 gap-4">
        <PersonalCard
          image={imgStefan}
          title="Stefan Ganseforth"
          position="Kamera"
          mail="mailto:ganseforth@wohlfarth-film.de"
        />
        <PersonalCard
          image={imgChristian}
          title="Christian Wohlfarth"
          position="Geschäftsführung"
          mail="mailto:wohlfarth@wohlfarth-film.de"
        />
        <PersonalCard
          image={imgJan}
          title="Jan Francksen"
          position="Grafik"
          mail="mailto:francksen@wohlfarth-film.de"
        />
        <PersonalCard
          image={imgAnne}
          title="Anne Scheele"
          position="Büro & Social Media"
          mail="mailto:scheele@wohlfarth-film.de"
        />
      </div>
    </div>
  );
};

export default about;
