import Link from "next/link";
import React from "react";

const CTA = ({ leistung }: any) => {
  return (
    <section className="flex flex-col items-center justify-center">
      <h3 className="font-serif text-xl font-bold">
        Sie wollen auch {leistung}
      </h3>
      <p>Zögern Sie nicht und kontaktieren uns unverbindlich.</p>
      <Link href="kontakt">
        <a className="mt-6 border-2 border-primary-color py-4 px-6 transition-colors hover:bg-primary-color">
          Jetzt Kontakt aufnehmen
        </a>
      </Link>
    </section>
  );
};

export default CTA;
