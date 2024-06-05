import React, { useEffect, useState } from "react";
import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import Characteristic from "../Components/Characteristic";
import { getAllItems } from "../api";

const categories = [
  { name: "Amulettes", id: "1" },
  { name: "Anneaux", id: "9" },
  { name: "Ceintures", id: "10" },
  { name: "Bottes", id: "11" },
  { name: "Coiffes", id: "16" },
  { name: "Capes", id: "17" },
  { name: "Arcs", id: "2" },
  { name: "Baguettes", id: "3" },
  { name: "Bâtons", id: "4" },
  { name: "Dagues", id: "5" },
  { name: "Épées", id: "6" },
  { name: "Marteaux", id: "7" },
  { name: "Pelles", id: "8" },
];

const useItems = (typeId) => {
  return useInfiniteQuery(["items", typeId], getAllItems, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
    staleTime: 60 * 1000,
  });
};

const ItemList = () => {
  const [selectedCategory, setSelectedCategory] = useState({
    name: "Amulettes",
    id: "1",
  });
  const [searchName, setSearchName] = useState("");

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useItems(selectedCategory.id, searchName);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (data) {
      console.log(data.pages[0].data[0]);
    }
    console.log(selectedCategory);
  }, [data, selectedCategory]);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <section className="flex flex-col h-full gap-4 p-4 text-white lg:p-16">
      {selectedCategory && <p>Liste des {selectedCategory.name}</p>}
      <div className="px-16 py-2 border rounded-3xl w-fit">Search</div>
      <div className="flex gap-4">
        {categories.map((category, index) => (
          <p
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`cursor-pointer ${
              selectedCategory.id === category.id
                ? "text-blue-500 font-bold"
                : ""
            }`}
          >
            {category.name}
          </p>
        ))}
      </div>
      <div>
        {/* <input
          type="text"
          placeholder="Rechercher par nom"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          className="px-4 py-2 border rounded"
        /> */}
      </div>
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
