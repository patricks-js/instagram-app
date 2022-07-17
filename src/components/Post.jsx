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

export const Post = () => {
  const [liked, setLiked] = useState(false);
  const [mark, setMark] = useState(false);
  const [likedCount, setLikedCount] = useState(0);

  return (
    <div className="pb-5">
      <header className="flex items-center justify-between w-full h-16 border-b border-gray-300 dark:border-gray-700 px-5">
        <div id="logo" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-slate-400 rounded-full"></div>
          <div>name</div>
        </div>
        <Button className="">
          <DotsThree size={40} />
        </Button>
      </header>
      <div id="post" className="aspect-square ">
        <img src={post1_1} alt="" className="w-full" />
      </div>
      <div id="footer" className="px-5 w-full">
        <div className="flex items-center justify-between w-full h-16">
          <div className="flex gap-3">
            <Button
              event={() => {
                setLiked(!liked);
                setLikedCount(likedCount > 0 ? 0 : likedCount + 1);
              }}
            >
              {liked ? (
                <Heart
                  size={30}
                  color="#f9595f"
                  weight="fill"
                  className="animate-hearth"
                />
              ) : (
                <Heart size={30} />
              )}
            </Button>
            <ChatCircle size={30} />
            <NavigationArrow size={30} />
          </div>
          <div>
            <Button event={() => setMark(!mark)}>
              {mark ? (
                <BookmarkSimple
                  size={30}
                  weight="fill"
                  className="animate-hearth"
                />
              ) : (
                <BookmarkSimple size={30} />
              )}
            </Button>
          </div>
        </div>
        <div className="font-bold">{likedCount} Likes</div>
      </div>
    </div>
  );
};
