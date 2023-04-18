import Tiles from "@/components/tiles/Tiles";
import TilesWithAtom from "@/components/tilesWithAtom/Tiles";

export interface TileI {
  id: number;
  color: string;
  isSelected: boolean;
}

const Page = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-20">
      {/* Container */}
      <Tiles />
      <TilesWithAtom />
    </div>
  );
};

export default Page;
