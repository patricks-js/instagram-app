import { House, User } from "phosphor-react";
import igLogo from "../assets/ig-logo.svg";
import { Input } from "./Input";

export const Header = () => {
  return (
    <header className="w-full h-16 bg-white border border-gray-300">
      <div className="container w-full h-full flex items-center justify-between">
        <a href="#" className="block">
          <img src={igLogo} alt="" />
        </a>
        <Input
          type="search"
          identifier="searchUser"
          placeholder="Search"
          classLabel="block"
          classInput="border border-gray-300 bg-gray-200 px-2 py-1 rounded-md outline-none focus:border-gray-500"
        />
        <div className="flex gap-5">
          <a href="#">
            <House size={28} />
          </a>
          <a href="#">
            <User size={28} />
          </a>
        </div>
      </div>
    </header>
  );
};
