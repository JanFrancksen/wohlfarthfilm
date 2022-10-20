import type { NextPage } from "next";
import ScrollBox from "../components/2_referenzen/ScrollBox";

const MakingOf: NextPage = () => {
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
  ];

  return (
    <div className="mt-80">
      {category.map((item: any) => (
        <ScrollBox item={item} />
      ))}
    </div>
  );
};

export default MakingOf;
