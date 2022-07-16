import { useState } from "react";
import Home from "./views/Home";
import Login from "./views/Login";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 pb-5">
      <Home darkMode={darkMode} setDarkMode={setDarkMode}/>
    </main>
  );
}

export default App;
