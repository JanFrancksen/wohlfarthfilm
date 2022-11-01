import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import ImageHead from "../../../components/0_common/ImageHead";
import InDevelopment from "../../../components/0_common/InDevelopment";
import ClientInfos from "../../../components/2_referenzen/ClientInfos";
import CTA from "../../../components/2_referenzen/CTA";
import ReferenzEntryText from "../../../components/2_referenzen/ReferenzEntryText";
import RelatedProjects from "../../../components/2_referenzen/relatedProjects";
import Results from "../../../components/2_referenzen/Results";

const bni2019recap: NextPage = () => {
  const released = false;

  if (!released) {
    return (
      <InDevelopment
        link="/referenzen/filme"
        buttonText="zurück zu den Referenzen"
      />
    );
  }

  return (
    <div>
      <ImageHead
        image="/images/referenzen/Film/referenz-1.jpg"
        title="Test Referenz"
      />
      <div className="mx-auto my-20 w-3/4">
        <ReferenzEntryText
          title="Projektname"
          image="/images/referenzen/Film/referenz-1.jpg"
          content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        />
        <ClientInfos
          title="Infos über den Kunden"
          content="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy"
        />
        <Results
          title="Ergebniserläuterung"
          content="Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est "
          image="/images/referenzen/Film/referenz-1.jpg"
        />
        <CTA leistung="einen Imagefilm" />
        <RelatedProjects
          title1="Lorem Ipsum Dolor Sit Amet "
          link1="#"
          image1="/images/referenzen/Film/referenz-1.jpg"
          title2="Lorem Ipsum Dolor Sit Amet "
          link2="#"
          image2="/images/referenzen/Film/referenz-1.jpg"
          title3="Lorem Ipsum Dolor Sit Amet "
          link3="#"
          image3="/images/referenzen/Film/referenz-1.jpg"
        />
      </div>
    </div>
  );
};

export default bni2019recap;
