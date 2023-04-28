import "./App.scss";
import * as React from "react";
import FirstTable from "./components/FirstTable";
import ModalTest from "./components/ModalTest";

function App() {

  return (
    <div className="App">
      <h1>Padel Tournament</h1>
      <ModalTest/>
      <FirstTable/>
    </div>
  );
}

export default App;