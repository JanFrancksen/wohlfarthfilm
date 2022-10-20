import React, { useEffect, useRef, useState } from "react";
import RefOverviewCard from "../../components/2_referenzen/RefOverviewCard";
import {
  IoChevronForwardCircleOutline,
  IoChevronBackCircleOutline,
} from "react-icons/io5";

const ScrollBox = ({ item }: any) => {
  const scrl = useRef<any | null>(null);
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrollEnd, setscrollEnd] = useState(false); // For detecting end of scrolling

  const slide = (shift: number) => {
    scrl.current!.scrollLeft += shift;
    setscrollX(scrollX + shift); // Updates the latest scrolled postion
  };

  const scrollCheck = () => {
    setscrollX(scrl.current!.scrollLeft);
    if (
      Math.floor(scrl.current!.scrollWidth - scrl.current!.scrollLeft) <=
      scrl.current!.offsetWidth
    ) {
      setscrollEnd(true);
    } else {
      setscrollEnd(false);
    }
  };

  useEffect(() => {
    if (
      scrl.current &&
      scrl?.current?.scrollWidth === scrl?.current?.offsetWidth
    ) {
      setscrollEnd(true);
    } else {
      setscrollEnd(false);
    }
  }, [scrl?.current?.scrollWidth, scrl?.current?.offsetWidth]);

  return (
    <>
      <div className="flex justify-between">
        <h3 className="my-8 font-serif text-xl font-bold">{item.title}</h3>
        <div className="flex gap-x-4">
          <button
            onClick={() => slide(-288)}
            className={`${scrollX === 0 && "text-gray-700"} text-lg `}
          >
            <IoChevronBackCircleOutline />
          </button>
          <button
            onClick={() => slide(288)}
            className={`${scrollEnd && "text-gray-700"} text-lg `}
          >
            <IoChevronForwardCircleOutline />
          </button>
        </div>
      </div>

      <div
        className="flex snap-x snap-mandatory flex-nowrap gap-x-8 overflow-x-auto overflow-y-hidden scroll-smooth"
        ref={scrl}
        onScroll={scrollCheck}
      >
        {item.items.map((item: any) => (
          <RefOverviewCard
            key={item.index}
            image={item.image}
            title={item.title}
            categories={item.categories}
            link={item.link}
          />
        ))}
      </div>
    </>
  );
};

export default ScrollBox;
