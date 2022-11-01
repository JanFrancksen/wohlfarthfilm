import React from "react";
import GridImageItem from "./gridImageItem";
import GridItem from "./gridItem";

const Grid = () => {
  return (
    <div className="grid grid-cols-4 grid-rows-[24vw_24vw_24vw_24vw_24vw] gap-[1vw] p-[1vw]">
      <GridImageItem
        image="/images/referenzen/Film/referenz-1.jpg"
        title="Referenz"
        link="referenzen"
        colspan={2}
        rowspan={1}
      />
      <GridItem
        title="Referenz 1"
        content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
        image="/images/referenzen/Film/referenz-1.jpg"
        colored={true}
        colspan={1}
        rowspan={1}
        link="/kontakt"
      />{" "}
      <GridItem
        title="Auch ein Imagevideo benötigt?"
        content="Hier klicken um direkt unverbindlich anzufragen."
        image="/images/referenzen/Film/Bildschirmfoto-2020-09-22-um-16.59.16-1.png"
        colored={false}
        colspan={1}
        rowspan={1}
        link="/kontakt"
      />{" "}
      <GridItem
        title="Test"
        content="Lorem Ipsum"
        image="/images/referenzen/Film/referenz-1.jpg"
        colored={true}
        colspan={1}
        rowspan={1}
        link="/kontakt"
      />
      <GridImageItem
        image="/images/referenzen/Film/Kröger-Mulde.jpg"
        title="Referenz"
        link="referenzen"
        colspan={2}
        rowspan={2}
      />
      <GridItem
        title="Test"
        content="Lorem Ipsum"
        image="/images/referenzen/Film/referenz-1.jpg"
        colored={false}
        colspan={1}
        rowspan={1}
        link="/kontakt"
      />
      <GridItem
        title="Über uns"
        content="Mehr darüber erfahren, wo wir herkommen, wer wir sind und was wir können ..."
        image="/images/referenzen/Film/referenz-1.jpg"
        colored={false}
        colspan={1}
        rowspan={1}
        link="/kontakt"
      />
      <GridItem
        title="Test"
        content="Lorem Ipsum"
        image={undefined}
        colored={false}
        colspan={1}
        rowspan={1}
        link="/kontakt"
      />
    </div>
  );
};

export default Grid;
