import PostLikes from "./PostLikes";
import PostAuthor from "./PostAuthor";

const PostInfo = () => {
  return (
    <div className="mb-6 flex items-center gap-2">
      <PostAuthor />
      <div className="h-[4px] w-[4px] rounded-full bg-neutral-800" />
      <PostLikes />
    </div>
  );
};

export default PostInfo;
