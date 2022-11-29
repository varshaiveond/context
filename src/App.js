import "./App.css";
import React, { createContext, useState } from "react";
import ComA from "./componants/ComA";
import ComB from "./componants/ComB";
import Count from "./componants/Count";

export const store = createContext();

const App = () => {
  const [data, setData] = useState(0);
  return (
    <div className="App">
      <center>Hello bunny!!</center>
      <store.Provider value={[data,setData]}>
        <ComA />
        <ComB />
        <button onClick={() => setData(data+1)}> Increment </button> 
      </store.Provider>
      <Count />
    </div>
  );
};

export default App;
