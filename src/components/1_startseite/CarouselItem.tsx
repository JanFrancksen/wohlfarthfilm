import Image from "next/image";
import React from "react";

const CarouselItem = ({ image, title }: any) => {
  return (
    <Image src={image} alt={title} width={100} height={50} objectFit="cover" />
  );
};

export default CarouselItem;
