import { Button } from "./Button";
import { Input } from "./Input";

import { House, MoonStars, Sun, User } from "phosphor-react";

import { IgPost } from "../assets/ig-logo";

export const Header = ({ darkMode, setDarkMode }) => {
  const root = document.querySelector("html");
  function toggleTheme() {
    setDarkMode(root.classList.toggle("dark"));
  }

  return (
    <header className="w-full h-16 bg-white dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
      <div className="container w-full h-full flex items-center justify-between">
        <a href="#" className="block">
          {darkMode ? (
            <IgPost classToggle="white" />
          ) : (
            <IgPost classToggle="black" />
          )}
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
            {darkMode ? (
              <House size={28} color="#ffffff" />
            ) : (
              <House size={28} />
            )}
          </a>
          <a href="#">
            {darkMode ? <User size={28} color="#ffffff" /> : <User size={28} />}
          </a>
          <Button
            event={toggleTheme}
            className="cursor-pointer flex items-center justify-center w-10 h-10 rounded-full"
          >
            {darkMode ? (
              <MoonStars color="#ffffff" size={28} />
            ) : (
              <Sun size={28} weight="bold" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};
