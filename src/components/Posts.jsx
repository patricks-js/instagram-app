import { Button } from "./Button";

import post1_1 from "../assets/1_1post-exemple.png";

import {
  BookmarkSimple,
  ChatCircle,
  DotsThree,
  Heart,
  NavigationArrow,
} from "phosphor-react";

import { useState } from "react";
import { Post } from "./Post";

export const Posts = () => {
  const [liked, setLiked] = useState(false);
  const [mark, setMark] = useState(false);
  const [likedCount, setLikedCount] = useState(0);

  return (
    <div className="w-3/5 bg-white border dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700 border-gray-300 mt-5">
      <Post />
      <Post />
    </div>
  );
};
