import React, { useState } from "react";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import { data } from "./data.js";
import { useDarkMode } from "./hooks/useDarkMode.jsx";

const App = () => {
  const [coinData, setCoinData] = useState(data);
  const [geceModu, setGeceModu] = useDarkMode(false);

  return (
    <div className={`App ${geceModu ? "dark-mode" : ""}`}>
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      <Charts coinData={coinData} />
    </div>
  );
};

export default App;
