import Image from "next/image";
import React from "react";

const CarouselItem = ({ image, title }: any) => {
  return <Image src={image} alt={title} width={200} height={50} />;
};

export default CarouselItem;
