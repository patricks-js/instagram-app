import { Header } from "../components/Header";
import { Stories } from "../components/Stories";
import { Button } from "../components/Button";

import post1_1 from "../assets/1_1post-exemple.png";

import {
  BookmarkSimple,
  ChatCircle,
  DotsThree,
  Heart,
  NavigationArrow,
} from "phosphor-react";

export default function Home() {
  return (
    <div class="w-full h-full">
      <Header />
      <main className="container mt-5">
        <div className="w-full h-28 bg-white border border-gray-300 flex items-center gap-7 pl-5">
          <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories />
          <Stories />
        </div>
        <div className="w-3/5 h-full bg-white border border-gray-300 my-5">
          <header className="flex items-center justify-between w-full h-16 border-b border-gray-300 px-5">
            <div id="logo" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-slate-400 rounded-full"></div>
              <div>name</div>
            </div>
            <Button className="">
              <DotsThree size={40} />
            </Button>
          </header>
          <div id="post" className="aspect-square">
            <img src={post1_1} alt="" className="w-full" />
          </div>
          <div
            id="footer"
            className="flex items-center justify-between border-t border-gray-300 px-5 w-full h-16"
          >
            <div className="flex gap-3">
              <Heart size={30} />
              <ChatCircle size={30} />
              <NavigationArrow size={30} />
            </div>
            <div>
              <BookmarkSimple size={30} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
