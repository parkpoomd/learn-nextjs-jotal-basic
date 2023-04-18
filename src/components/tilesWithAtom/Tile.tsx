"use client";

import { type FC } from "react";
import { PrimitiveAtom, useAtom } from "jotai";
import { TileI } from "@/app/tiles/page";

interface TileProps {
  atom: PrimitiveAtom<TileI>;
}

const Tile: FC<TileProps> = ({ atom }) => {
  const [tile, setter] = useAtom(atom);

  return (
    <div
      onClick={() => {
        setter((prev) => {
          return {
            ...prev,
            isSelected: !prev.isSelected,
          };
        });
      }}
      style={{
        backgroundColor: tile.isSelected ? tile.color + "40" : "transparent",
        color: tile.isSelected ? tile.color : "inherit",
        borderColor: tile.isSelected ? tile.color + "40" : "#e5e5e5",
      }}
      className="flex h-16 w-16 cursor-pointer items-center justify-center border border-neutral-200 text-2xl font-medium"
    >
      {tile.id}
    </div>
  );
};

export default Tile;
