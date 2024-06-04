import React from "react";
import { getCharacteristicById } from "../api";
import { useQuery } from "react-query";

const Characteristic = ({ id, range }) => {
  const { isLoading, data } = useQuery({
    queryKey: [id],
    queryFn: () => getCharacteristicById(id.toString()),
    staleTime: 60 * 1000,
  });
  if (isLoading) return;

  return (
    <div className="flex gap-2">
      <p>
        • {Math.min(range[0], range[1])} à {Math.max(range[0], range[1])}
      </p>

      <p>{data?.name.fr}</p>
    </div>
  );
};

export default Characteristic;
