import React from "react";

const UtilityStats = () => {
  return (
    <div className="flex flex-col lg:w-96 w-full gap-2">
      <p className="font-black text-2xl italic">Utilitaires</p>
      <div className="border rounded-3xl p-4">
        <div className="grid grid-cols-2">
          <p>Fuite</p>
          <p>Esq. PA</p>
          <p>Esq. PM</p>
          <p>Pods</p>
          <p>Tacle</p>
          <p>Ret. PA</p>
          <p>Ret. PM</p>
        </div>
      </div>
    </div>
  );
};

export default UtilityStats;
