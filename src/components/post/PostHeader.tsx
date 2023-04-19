import Image from "next/image";
import PostInfo from "./PostInfo";
import { useAtomValue } from "jotai";
import { postAtoms } from "@/atoms/postAtoms";
import { selectAtom } from "jotai/utils";
const selectedAtom = selectAtom(postAtoms, (state) => state.header);

const PostHeader = () => {
  const header = useAtomValue(selectedAtom);

  return (
    <header>
      <h1 className="mb-2 text-4xl font-bold">{header.title}</h1>
      <p className="font-lg mb-4 text-neutral-600">{header.description}</p>
      <PostInfo />
      <Image
        width={1200}
        height={500}
        priority
        alt={header.title}
        src={header.image}
        className="max-h-[500px] rounded-md"
      />
    </header>
  );
};

export default PostHeader;
