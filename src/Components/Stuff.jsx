import React from "react";

const Stuff = () => {
  return (
    <section className="flex flex-col p-4 border rounded-3xl lg:w-1/3 gap-4">
      <p>[Titre] Niveau 200</p>
      <div className="flex">
        <div className="basis-1/3 flex flex-col gap-4 items-start">
          <div className="border size-20"></div>
          <div className="border size-20"></div>
          <div className="border size-20"></div>
          <div className="border size-20"></div>
          <div className="border size-20"></div>
        </div>
        <div className="basis-1/3 flex flex-col items-center">
          <div className="border w-full max-w-96 h-full">avatar</div>
        </div>
        <div className="basis-1/3 flex flex-col gap-4 items-end">
          <div className="border size-20"></div>
          <div className="border size-20"></div>
          <div className="border size-20"></div>
          <div className="border size-20"></div>
          <div className="border size-20"></div>
        </div>
      </div>
      <div className="flex w-full justify-between">
        <div className="border size-20"></div>
        <div className="border size-20"></div>
        <div className="border size-20"></div>
        <div className="border size-20"></div>
        <div className="border size-20"></div>
      </div>
    </section>
  );
};

export default Stuff;
