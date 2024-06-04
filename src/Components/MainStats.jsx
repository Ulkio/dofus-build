import React from "react";

const MainStats = () => {
  return (
    <div className="flex flex-col lg:w-96 w-full gap-2">
      <p className="font-black text-2xl italic">IOP TERRE NIVEAU 200</p>
      <div className="border rounded-3xl p-4 ">
        <div className="grid grid-cols-2">
          <p>PDV</p>
          <p>PA</p>
          <p>PM</p>
          <p>PO</p>
          <p>INI</p>
          <p>PP</p>
          <p>CRIT</p>
          <p>INVO</p>
          <p>SOIN</p>
        </div>
      </div>
    </div>
  );
};

export default MainStats;
