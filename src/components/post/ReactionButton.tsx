import { postAtoms } from "@/atoms/postAtoms";
import { useAtom } from "jotai";
import { focusAtom } from "jotai-optics";
import dynamic from "next/dynamic";
import { useMemo, type FC } from "react";
const ThumsUp = dynamic(() =>
  import("lucide-react").then((mod) => mod.ThumbsUp)
);
const ThumsDown = dynamic(() =>
  import("lucide-react").then((mod) => mod.ThumbsDown)
);

interface ReactionButtonProps {
  type: "likes" | "dislikes";
}

const ReactionButton: FC<ReactionButtonProps> = ({ type }) => {
  const focusedAtom = useMemo(
    () => focusAtom(postAtoms, (optic) => optic.prop("reactions").prop(type)),
    [type]
  );
  const [state, setter] = useAtom(focusedAtom);

  const handleReaction = () => {
    setter((state) => state + 1);
  };

  return (
    <button
      className="flex w-full items-center justify-center gap-2 rounded-md bg-neutral-100 px-8 py-3 text-neutral-800 transition-colors duration-75 hover:bg-neutral-200"
      onClick={handleReaction}
    >
      {type === "likes" ? (
        <>
          {state} <ThumsUp size="16" />
        </>
      ) : (
        <>
          {state} <ThumsDown size="16" />
        </>
      )}
    </button>
  );
};

export default ReactionButton;
