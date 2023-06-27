import React from "react";
import CountdownTimer from "./CountdownTimer";

const App = () => {
  return (
    <div className="app">
      <h1>Приложение с таймером</h1>
      <CountdownTimer initialTime={60} />
    </div>
  );
};

export default App;