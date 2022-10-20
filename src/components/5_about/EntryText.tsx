import { useState } from "react";

const EntryText = () => {
  const [value, setValue] = useState(1);

  setTimeout(myMethod, 1500);

  function myMethod() {
    if (value === 3) {
      setValue(value - 2);
    } else {
      setValue(value + 1);
    }
  }

  return (
    <div className="mx-auto my-20 grid w-3/4 grid-cols-2 items-center gap-8">
      <h2 className="text-3xl font-bold">
        <span
          className={
            value === 1
              ? "relative px-1 before:absolute before:bottom-3 before:left-0 before:right-0 before:-z-10 before:h-2 before:bg-red-500 before:transition-all"
              : "relative px-1 before:absolute before:bottom-3 before:left-0 before:right-full before:-z-10 before:h-2 before:bg-red-500 before:transition-all"
          }
        >
          zuhören.
        </span>
        <br />
        <span
          className={
            value === 2
              ? "relative px-1 before:absolute before:bottom-3 before:left-0 before:right-0 before:-z-10 before:h-2 before:bg-red-500 before:transition-all"
              : "relative px-1 before:absolute before:bottom-3 before:left-0 before:right-full before:-z-10 before:h-2 before:bg-red-500 before:transition-all"
          }
        >
          verstehen.
        </span>
        <br />
        <span
          className={
            value === 3
              ? "relative px-1 before:absolute before:bottom-3 before:left-0 before:right-0 before:-z-10 before:h-2 before:bg-red-500 before:transition-all"
              : "relative px-1 before:absolute before:bottom-3 before:left-0 before:right-full before:-z-10 before:h-2 before:bg-red-500 before:transition-all"
          }
        >
          machen.
        </span>
      </h2>
      <div>
        Wir hören zu. So nehmen wir komplexe Sachverhalte auf und brechen diese
        auf die relevanten Kernaussagen herunter, welche wir wiederum für Dritte
        verständlich in einem Film kommunizieren. Wir verstehen unsere Kunden
        und konzeptionieren individuell. Abgerundet wird das Ganze durch eine
        menge Erfahrung und die nötige Portion „Herzblut“. In erster Linie
        machen wir das alleine. Wir haben alle nötigen Kompetenzen in unserem
        festen Team vereint und sind jederzeit bereit loszulegen.
      </div>
    </div>
  );
};

export default EntryText;
