"use client";

import { type FC } from "react";
import { DUMMY_PRODUCTS as products } from "@/dummy-products";
import ProductItem from "./ProductItem";

interface ProductsListProps {}

const ProductsList: FC<ProductsListProps> = ({}) => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-full">
          <div className="mb-2 w-full text-center text-sm">
            There is no match.
          </div>
          <button className="w-full rounded-md bg-neutral-100 px-4 py-3 text-neutral-500">
            Reset Search
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
