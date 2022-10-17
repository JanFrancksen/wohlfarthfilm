import Image from "next/image";
import Link from "next/link";
import React from "react";

const RelatedProjects = ({
  title1,
  title2,
  title3,
  image1,
  image2,
  image3,
  link1,
  link2,
  link3,
}: any) => {
  return (
    <section className="my-20 grid grid-cols-3 gap-4">
      <h4 className="col-span-3 font-serif text-xl font-bold">
        Weitere tolle Projekte von uns:
      </h4>
      <article>
        <Link href={link1}>
          <a>
            <Image src={image1} alt={title1} />
            <h5 className="mb-4 font-serif text-lg font-bold">{title1}</h5>
            <button className="border-2 border-primary-color px-4 py-3 hover:bg-primary-color">
              jetzt ansehen ...
            </button>
          </a>
        </Link>
      </article>
      <article>
        <Link href={link2}>
          <a>
            <Image src={image2} alt={title2} />
            <h5 className="mb-4 font-serif text-lg font-bold">{title2}</h5>
            <button className="border-2 border-primary-color px-4 py-3 hover:bg-primary-color">
              jetzt ansehen ...
            </button>
          </a>
        </Link>
      </article>
      <article>
        <Link href={link3}>
          <a>
            <Image src={image3} alt={title3} />
            <h5 className="mb-4 font-serif text-lg font-bold">{title3}</h5>
            <button className="border-2 border-primary-color px-4 py-3 hover:bg-primary-color">
              jetzt ansehen ...
            </button>
          </a>
        </Link>
      </article>
    </section>
  );
};

export default RelatedProjects;
