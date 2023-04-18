"use client";

import {
  informationBarAtom,
  searchAtom,
  sortAtom,
} from "@/atoms/productsAtoms";
import { useAtom, useAtomValue } from "jotai";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useAtom(searchAtom);
  const { totalProductsNumber, filteredProductsNumber } =
    useAtomValue(informationBarAtom);
  const [sort, setSort] = useAtom(sortAtom);

  const sortHandler = () => {
    setSort((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  return (
    <>
      <div className="overflow-hidden rounded-md border border-neutral-200 outline-neutral-900 focus-within:outline">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="text"
          className="w-full bg-transparent px-4 py-4 outline-none"
          placeholder="Search products..."
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        {/* Total Products */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs">
            <div className="font-medium">Total Products:</div>
            <div>{totalProductsNumber}</div>
          </div>
          <div className="flex items-center gap-1 text-xs">
            <div className="font-medium">Products Found:</div>
            <div>{filteredProductsNumber}</div>
          </div>
        </div>
        {/* Sort By Price Button */}
        <div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input
              type="checkbox"
              className="peer sr-only"
              onChange={sortHandler}
            />
            <div
              className="
                peer-focus:ring-3
                peer
                h-6
                w-11
                rounded-full
                bg-gray-200
                after:absolute
                after:left-[2px]
                after:top-[2px]
                after:h-5
                after:w-5
                after:rounded-full
                after:border
                after:border-gray-300
                after:bg-white
                after:transition-all
                after:content-['']
                peer-checked:bg-blue-600
                peer-checked:after:translate-x-full
                peer-checked:after:border-white
                peer-focus:outline-none
                peer-focus:ring-blue-300
                dark:border-gray-600
                dark:bg-gray-700
                dark:peer-focus:ring-blue-800
              "
            />
            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              {sort === "asc"
                ? "Sort by Price: Low to High"
                : "Sort by Price: High to Low"}
            </span>
          </label>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
