import { postAtoms } from "@/atoms/postAtoms";
import parse from "html-react-parser";
import { useAtomValue } from "jotai";
import { selectAtom } from "jotai/utils";

const selectedAtom = selectAtom(postAtoms, (state) => state.body);

const PostBody = () => {
  const body = useAtomValue(selectedAtom);

  return <article className="rich-text">{parse(body)}</article>;
};

export default PostBody;
