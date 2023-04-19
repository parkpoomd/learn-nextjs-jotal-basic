"use client";

import { type FC } from "react";
import { PostI } from "@/dummy-posts";
import PostHeader from "./PostHeader";
import PostReactions from "./PostReactions";
import PostBody from "./PostBody";
import { useHydrateAtoms } from "jotai/utils";
import { postAtoms } from "@/atoms/postAtoms";

interface PostProps {
  post: PostI;
}

const Post: FC<PostProps> = ({ post }) => {
  useHydrateAtoms([[postAtoms, post] as const]);

  return (
    <div className="mx-auto w-full max-w-7xl px-8 py-10">
      <PostHeader />
      <PostReactions />
      <PostBody />
    </div>
  );
};

export default Post;
