import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Cta from "../../../components/0_common/Cta";
import ImageHead from "../../../components/0_common/ImageHead";

const portrait: NextPage = () => {
  return (
    <section>
      <ImageHead
        image="/images/referenzen/Film/agron-min-2.png"
        title="Portraits"
      />
      <section className="mx-auto my-20 flex w-3/4 flex-col gap-8">
        <article className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-xl font-bold">
              Darauf kommt es an...
            </h2>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint est
              libero dolore atque laborum eaque molestias laudantium eveniet
              consectetur. Autem ipsa esse explicabo a distinctio, qui debitis
              deleniti quasi quidem? Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Sint est libero dolore atque laborum eaque
              molestias laudantium eveniet consectetur. Autem ipsa esse
              explicabo a distinctio, qui debitis deleniti quasi quidem?
            </p>
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold">
              Das tun wir für sie
            </h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint est
              libero dolore atque laborum eaque molestias laudantium eveniet
              consectetur. Autem ipsa esse explicabo a distinctio, qui debitis
              deleniti quasi quidem?
            </p>
          </div>
        </article>
        <section className="grid grid-cols-1 gap-8 gap-x-8 sm:grid-cols-2 md:grid-cols-3">
          <h2 className="font-serif text-xl font-bold sm:col-span-2 md:col-span-3">
            Beispiele für Portraits:
          </h2>
          <Link href="">
            <a>
              <Image
                src="/images/referenzen/Film/agron-min-2.png"
                alt=""
                width={400}
                height={250}
                objectFit="cover"
              />
              <h3 className="font-serif text-lg font-bold">Beispiel Projekt</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                asperiores et porro eos id architecto dolores
              </span>
            </a>
          </Link>{" "}
          <Link href="">
            <a>
              <Image
                src="/images/referenzen/Film/agron-min-2.png"
                alt=""
                width={400}
                height={250}
                objectFit="cover"
              />
              <h3 className="font-serif text-lg font-bold">Beispiel Projekt</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                asperiores et porro eos id architecto dolores
              </span>
            </a>
          </Link>{" "}
          <Link href="">
            <a>
              <Image
                src="/images/referenzen/Film/agron-min-2.png"
                alt=""
                width={400}
                height={250}
                objectFit="cover"
              />
              <h3 className="font-serif text-lg font-bold">Beispiel Projekt</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                asperiores et porro eos id architecto dolores
              </span>
            </a>
          </Link>
        </section>
        <section></section>
      </section>
      <Cta
        heading="Klingt interessant?"
        subheading="Wir erstellen Ihnen Ihr ganz persönliches Portrait!"
        link="/kontakt"
        button="jetzt anfragen!"
      />
    </section>
  );
};

export default portrait;
