"use client";

import { type FC } from "react";
import { ProductI } from "@/dummy-products";

interface ProductItemProps {
  product: ProductI;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="rounded-md border border-neutral-200 px-4 py-3">
      <div className="mb-4 flex items-center gap-2">
        <div className="max-w-fit rounded-md bg-neutral-900 px-2 py-1 text-xs font-light text-neutral-100">
          {product.price}
        </div>
        <div className="max-w-fit rounded-md bg-neutral-100 px-2 py-1 text-xs font-light">
          {product.category}
        </div>
      </div>
      <h2 className="truncate text-lg font-medium">{product.title}</h2>
      <p className="truncate text-neutral-600">{product.description}</p>
    </div>
  );
};

export default ProductItem;
