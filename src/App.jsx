import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MyH4 from "./components/Myh4";
import MyImg from "./components/MyImg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MyH4 text="Viva Ugo" customClass="animatedText" />
      <MyH4 text="Mannaggia Ugo" customClass="animatedText" />

      <MyImg link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2ewdxlptJFVCfpfo6QaQoQn-VHjh3rd_sQ&s" alt="Ugo" />
    </>
  );
}

export default App;
