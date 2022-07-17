import { Button } from "./Button";
import { Input } from "./Input";

import { House, MoonStars, Sun, User } from "phosphor-react";

import { IgPost } from "../assets/ig-logo";

export const Header = ({ theme, setTheme }) => {
  function handleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <header className="w-full h-16 bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
      <div className="container w-full h-full flex items-center justify-between">
        <a href="#" className="block">
          <IgPost classToggle="black" />
        </a>
        <Input
          type="search"
          identifier="searchUser"
          placeholder="Search"
          classLabel="block"
          classInput="border border-gray-300 bg-gray-200 px-2 py-1 rounded-md outline-none focus:border-gray-500 dark:bg-gray-900 border-gray-700 dark:text-gray-100"
        />
        <div className="flex gap-5 items-center">
          <a href="#">
            <House size={28} />
          </a>
          <a href="#">
            <User size={28} />
          </a>
          <Button
            className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full"
            event={handleTheme}
          >
            <Sun size={28} weight="bold" />
          </Button>
        </div>
      </div>
    </header>
  );
};
