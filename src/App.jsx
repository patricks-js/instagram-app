import usePersistedTheme from "./utils/usePersistedTheme";
import Home from "./views/Home";
import Login from "./views/Login";

function App() {
  const [theme, setTheme] = usePersistedTheme("theme", "light");
  //   localStorage.clear();
  return (
    <main className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 pb-5">
      <Home theme={theme} setTheme={setTheme} />
    </main>
  );
}

export default App;
