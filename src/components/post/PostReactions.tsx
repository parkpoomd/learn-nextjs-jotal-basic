import ReactionButton from "./ReactionButton";

const PostReactions = () => {
  return (
    <div className="mt-6 flex items-center gap-6">
      <ReactionButton type="likes" />
      <ReactionButton type="dislikes" />
    </div>
  );
};

export default PostReactions;
