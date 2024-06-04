import React, { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import Characteristic from "../Components/Characteristic";
import { getAllItems } from "../api";

const useItems = () => {
  return useInfiniteQuery("items", getAllItems, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 60 * 1000,
  });
};

const ItemList = ({ category }) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useItems();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (data) {
      console.log(data.pages[0].data);
    }
  }, []);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  // const filteredItems = () =>{
  //   if (!data) return;
  //   return data.pages.filter((item)=>{
  //     item.
  //   })
  // }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="flex flex-col h-full gap-4 p-4 text-white lg:p-16">
      {category && <p>Liste des {category}</p>}
      <div className="px-16 py-2 border rounded-3xl w-fit">Search</div>
      <div>Filtres</div>
      <div className="flex flex-wrap gap-6">
        {data.pages.map((page, pageIndex) =>
          page.data.map((item, key) => (
            <div
              key={`${pageIndex}-${key}`}
              className="flex flex-col gap-2 p-2 border divide-gray-500 w-80 rounded-3xl"
            >
              <div className="flex gap-4">
                <img src={item.img} alt={item.name.fr} />
                <div className="flex flex-col">
                  <p>{item.name.fr}</p>
                  <p className="text-xs">Niv. {item.level}</p>
                </div>
              </div>
              <hr />
              <div className="flex flex-col ">
                {item.effects?.map((effect, key) => (
                  <Characteristic
                    key={key}
                    range={[effect.from, effect.to]}
                    id={effect.characteristic}
                  />
                ))}
              </div>
              <hr />
              <div>
                <p className="font-bold text-blue-300">
                  {item.itemSet?.name.fr}
                </p>
                <p className="italic">{item.type?.name.fr}</p>
              </div>
            </div>
          ))
        )}
        <div ref={ref} className="loading">
          {isFetchingNextPage && <p>Loading more...</p>}
        </div>
      </div>
    </section>
  );
};

export default ItemList;
