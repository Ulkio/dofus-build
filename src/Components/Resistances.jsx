import React from "react";

const Resistances = () => {
  return (
    <div className="flex flex-col lg:w-96 w-full gap-2">
      <p className="font-black text-2xl italic">Résistances</p>
      <div className="border rounded-3xl p-4">
        <div className="grid grid-cols-2">
          <p>Ré Neutre</p>
          <p>% Ré Neutre</p>
          <p>Ré Terre</p>
          <p>% Ré Terre</p>
          <p>Ré Feu</p>
          <p>% Ré Feu</p>
          <p>Ré Eau</p>
          <p>% Ré Eau</p>
          <p>Ré Air</p>
          <p>% Ré Air</p>
          <p>Ré Critique</p>
          <p>Ré Poussée</p>
          <p>% Ré Mélée</p>
          <p>% Ré Dist</p>
          <p>% Ré Armes</p>
        </div>
      </div>
    </div>
  );
};

export default Resistances;
