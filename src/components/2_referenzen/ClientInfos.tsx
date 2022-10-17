import React from "react";

const ClientInfos = ({ title, content }: any) => {
  return (
    <section className="my-8">
      <h2 className="font-serif text-2xl font-bold">{title}</h2>
      <p>{content}</p>
    </section>
  );
};

export default ClientInfos;
