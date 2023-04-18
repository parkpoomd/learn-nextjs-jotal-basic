"use client";

import { TileI } from "@/app/tiles/page";
import { Dispatch, SetStateAction, type FC } from "react";

interface TileProps {
  tile: TileI;
  setter: Dispatch<SetStateAction<TileI[]>>;
}

const Tile: FC<TileProps> = ({ tile, setter }) => {
  return (
    <div
      onClick={() => {
        setter((prev) => {
          return prev.map((t) => {
            if (t.id === tile.id) {
              return { ...t, isSelected: !t.isSelected };
            } else {
              return t;
            }
          });
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
