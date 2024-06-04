import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col lg:w-96 w-full gap-2">
      <p className="font-black text-2xl italic">Caractéristiques</p>
      <div className="border rounded-3xl p-4">
        <div className="flex gap-6">
          <div className="flex flex-col ">
            <br />
            <p>Vitalité</p>
            <p>Sagesse</p>
            <p>Force</p>
            <p>Intelligence</p>
            <p>Change</p>
            <p>Agilité</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Base</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold">Bonus</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
            <p>0</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
