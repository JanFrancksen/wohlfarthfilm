import { NextPage } from "next";
import Image from "next/image";
import React from "react";
import ImageHead from "../components/0_common/ImageHead";

const Kontakt: NextPage = () => {
  return (
    <div>
      <ImageHead
        image="/images/ueber-uns/IMG_7278-2-scaled.jpg"
        title="Kontakt"
      />
      <div className="mx-auto grid w-3/4 sm:my-20 sm:grid-cols-2">
        <div>
          <Image
            src="/images/kontakt/Deutschlandkarte1000px-min.png"
            alt=""
            width={300}
            height={500}
            className="invert"
          />
          <h2 className="font-serif text-xl">Bürozeiten</h2>
          <p className="mb-4">
            Montag - Freitag <br />
            08:30 - 17:30 Uhr
          </p>
          <p className="mb-4">
            wohlfarth film GmbH <br />
            Bakumer Straße 1 <br />
            49692 Cappeln
          </p>
          <p>
            Telefon:{" "}
            <a
              href="tel:04478 95 49 000"
              className="transition-colors hover:text-primary-color"
            >
              04478 95 49 000
            </a>
            <br />
            Mail:{" "}
            <a
              href="mailto:kontakt@wohlfarth-film.de"
              className="transition-colors hover:text-primary-color"
            >
              kontakt@wohlfarth-film.de
            </a>
          </p>
        </div>
        <div>
          <h2 className="font-serif text-xl">
            Schreiben Sie uns eine Nachricht
          </h2>
          <form className="flex flex-col">
            <label>Name</label>
            <input type="text" className="inputField" />
            <label>E-Mail</label>
            <input type="email" className="inputField" />
            <label>Telefonnummer</label>
            <input type="tel" className="inputField" />
            <label>Nachricht*</label>
            <textarea className="inputField" rows={5} />
            <div className="mb-4">
              <input
                type="checkbox"
                className="mr-2 inline h-4 w-4 accent-primary-color"
              />
              <strong>Einwilligung:</strong> Ich habe die Einwilligungserklärung
              gelesen und bin mit der Speicherung und Nutzung meiner Daten
              einverstanden. Ohne Einwilligungserklärung ist leider eine
              Kontaktaufnahme laut Telemediengesetz nicht möglich.
            </div>
            <input type="submit" className="self-start bg-primary-color p-4" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kontakt;
