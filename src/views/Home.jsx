import { Header } from "../components/Header";
import { Posts } from "../components/Posts";
import { Stories } from "../components/Stories";

export default function Home({ darkMode, setDarkMode }) {
  return (
    <div className="w-full h-full">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="container mt-5">
        <div className="w-3/5 overflow-hidden h-28 bg-white dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 flex items-center gap-7 pl-5">
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
        <Posts />
      </div>
    </div>
  );
}
