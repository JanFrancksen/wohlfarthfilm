import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import RefOverviewCard from "../components/2_referenzen/RefOverviewCard";
import {
  IoChevronForwardCircleOutline,
  IoChevronBackCircleOutline,
} from "react-icons/io5";

const referenzen: NextPage = () => {
  const category = [
    {
      title: "Events",
      items: [
        {
          image: "/images/referenzen/Film/bni-2019-recap-min.png",
          title: "BNI 2019 recap",
          categories: ["Event", "..."],
          link: "/",
        },
        {
          image: "/images/referenzen/Film/gogreat-2018-min.png",
          title: "GOGREAT 2018",
          categories: ["Event", "..."],
          link: "/",
        },
        {
          image: "/images/referenzen/Film/wiesenhof-tach-der-fans-min.png",
          title: "Wiesenhof",
          categories: ["Event", "Recruiting"],
          link: "/",
        },
      ],
    },
    {
      title: "Imagefilme",
      items: [
        {
          image: "/images/referenzen/Film/feuerwehr-min.jpg",
          title: "Feuerwehr Cloppenburg",
          categories: ["Imagefilm", "..."],
          link: "/",
        },
        {
          image: "/images/referenzen/Film/Küche-min.jpg",
          title: "Beckermann Küchen",
          categories: ["Imagefilm", "..."],
          link: "/",
        },
        {
          image: "/images/referenzen/Film/asoni-min.png",
          title: "Asoni",
          categories: ["Imagefilm", "..."],
          link: "/",
        },
        {
          image: "/images/referenzen/Film/Cloppenburg-Imagefilm-2-min.jpg",
          title: "Landkreis Cloppenburg",
          categories: ["Imagefilm", "Tourismus"],
          link: "/",
        },
        {
          image: "/images/referenzen/Film/om_01.png",
          title: "Oldenburger Münsterland",
          categories: ["Imagefilm", "Tourismus"],
          link: "/",
        },
        {
          image: "/images/referenzen/Film/olfry-min.png",
          title: "OLFRY",
          categories: ["Imagefilm", "..."],
          link: "/",
        },
        {
          image:
            "/images/referenzen/Film/schulte-Vollkornbäckerei-Image-min.jpg",
          title: "Schulte's Vollkornbäckerei",
          categories: ["Imagefilm", ".."],
          link: "/",
        },
        {
          image: "/images/referenzen/Film/Volksbank-Imagefilm-2.png",
          title: "Volksbank Essen / Cappeln",
          categories: ["Imagefilm", "Essen", "Cappeln", "Bank"],
          link: "/",
        },
        {
          image: "/images/referenzen/Film/wiesenhof-tach-der-fans-min.png",
          title: "Wehrhahn",
          categories: ["Imagefilm", "..."],
          link: "/",
        },
        {
          image: "/images/referenzen/Film/wiesenhof-tach-der-fans-min.png",
          title: "Wessendorf Systembeschichtungen",
          categories: ["Imagefilm", "..."],
          link: "/",
        },
        {
          image: "/images/referenzen/Film/wiesenhof-tach-der-fans-min.png",
          title: "Zentri-Jet",
          categories: ["Imagefilm", "..."],
          link: "/",
        },
      ],
    },
    {
      title: "Portrait",
      items: [
        {
          image: "/images/ref2.jpg",
          title: "Preisträger Lebenswerk Zerhusen",
          categories: ["Portrait", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Preisträger Innovation Zentri-Jet",
          categories: ["Portrait", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Preisträger Existenzgründer Luebbehusen",
          categories: ["Portrait", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "LBZ Echem",
          categories: ["Portrait", "..."],
          link: "/",
        },
      ],
    },
    {
      title: "Produktfilm",
      items: [
        {
          image: "/images/ref2.jpg",
          title: "Weda Be.Well",
          categories: ["Produktfilm", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Biochem",
          categories: ["Produktfilm", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Kröger Nutzfahrzeuge",
          categories: ["Produktfilm", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Fog-Eye",
          categories: ["Produktfilm", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "GST",
          categories: ["Produktfilm", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "PK Design",
          categories: ["Produktfilm", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "PK Design",
          categories: ["Produktfilm", "..."],
          link: "/",
        },
      ],
    },
    {
      title: "Recruiting",
      items: [
        {
          image: "/images/ref2.jpg",
          title: "Die Genossenschaftsbanken im Landkreis Cloppenburg",
          categories: ["Recruiting", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Füngers",
          categories: ["Recruiting", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Mählmann Gemüsebau",
          categories: ["Recruiting", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Oldenburgische IHK",
          categories: ["Recruiting", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Landkreis Cloppenburg",
          categories: ["Recruiting", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Wiesenhof",
          categories: ["Recruiting", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Wiesenhof",
          categories: ["Recruiting", "Event"],
          link: "/",
        },
      ],
    },
    {
      title: "Spot",
      items: [
        {
          image: "/images/ref2.jpg",
          title: "Beckermann Küchen",
          categories: ["Spot", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Behrens-Meyer",
          categories: ["Spot", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Der Norddeutsche Wirtschaftskongress",
          categories: ["Spot", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Der Norddeutsche Wirtschaftskongress",
          categories: ["Spot", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Die Genossenschaftsbanken im Landkreis Cloppenburg",
          categories: ["Spot", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Gemeinde Großenkneten",
          categories: ["Spot", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Oldenburgische IHK",
          categories: ["Spot", "..."],
          link: "/",
        },
      ],
    },
    {
      title: "Tourismus",
      items: [
        {
          image: "/images/ref2.jpg",
          title: "Gemeinde Großenkneten",
          categories: ["Tourismus", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Landkreis Cloppenburg",
          categories: ["Imagefilm", "Tourismus"],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Oldenburger Münsterland",
          categories: ["Imagefilm", "Tourismus"],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Oldenburger Münsterland",
          categories: ["Tourismus"],
          link: "/",
        },
      ],
    },
    {
      title: "Unternehmensfilm",
      items: [
        {
          image: "/images/ref2.jpg",
          title: "Behrens-Meyer",
          categories: ["Unternehmensfilm", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "DSH-V Straßenbau",
          categories: ["Unternehmensfilm", "..."],
          link: "/",
        },
        {
          image: "/images/ref2.jpg",
          title: "Agron",
          categories: ["Unternehmensfilm", "..."],
          link: "/",
        },
      ],
    },
  ];

  const scrl = useRef<any | null>(null);
  const [scrollX, setscrollX] = useState(0); // For detecting start scroll postion
  const [scrollEnd, setscrollEnd] = useState(false); // For detecting end of scrolling

  const slide = (shift: number) => {
    scrl.current!.scrollLeft += shift;
    setscrollX(scrollX + shift); // Updates the latest scrolled postion
    console.log("first");
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

  const items = category.map((item) => {
    return (
      <>
        <div className="flex justify-between">
          <h3
            key={item.title}
            id={item.title}
            className="my-8 font-serif text-xl font-bold"
          >
            {item.title}
          </h3>
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
          {item.items.map((item) => (
            <RefOverviewCard
              key={item.title}
              image={item.image}
              title={item.title}
              categories={item.categories}
              link={item.link}
            />
          ))}
        </div>
      </>
    );
  });

  return (
    <div className="mx-auto my-20 w-3/4 sm:my-40">
      <h1 className="col-span-2 font-serif text-3xl font-bold">
        Unsere Referenzen{" "}
      </h1>
      <h2 className="col-span-2">
        Unsere Filme können bewerben oder erklären. Vor allem transportieren
        unsere Filme aber Emotionen.
      </h2>
      <div className="mt-20 flex flex-wrap gap-4">
        {category.map((item) => {
          return (
            <Link key={item.title} href={`#${item.title}`}>
              <a className="bg-white px-4 py-3 font-serif font-bold text-black hover:bg-primary-color">
                {item.title}
              </a>
            </Link>
          );
        })}
      </div>
      <section className="my-20">{items}</section>
    </div>
  );
};

export default referenzen;
