import React from "react";

const Damage = () => {
  return (
    <div className="flex flex-col lg:w-96 w-full gap-2">
      <p className="font-black text-2xl italic">Dommages</p>
      <div className="border rounded-3xl p-4">
        <div className="grid grid-cols-2">
          <p>Do Terre</p>
          <p>Do Feu</p>
          <p>Do Eau</p>
          <p>Do Air</p>
          <p>Do Neutre</p>
          <p>% Do Armes</p>
          <p>% Do Sorts</p>
          <p>% Do Mélée</p>
          <p>% Do Dist</p>
          <p>Do Poussée</p>
          <p>Do Critique</p>
        </div>
      </div>
    </div>
  );
};

export default Damage;
