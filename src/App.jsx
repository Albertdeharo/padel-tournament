import "./App.scss";
import * as React from "react";

import FirstTable from "./components/First table/FirstTable";
import ModalTest from "./components/ModalTest";
import Cart from "./components/Cart/Cart";

function App() {

  return (
    <div className="App">
      <h1>Padel Tournament</h1>
      <ModalTest/>
      <FirstTable/>
      <Cart />

    </div>
  );
}

export default App;