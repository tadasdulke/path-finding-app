import React from 'react';
import Board from "./components/Board"
import GeneratePannel from "./components/GeneratePannel"
import UIStatesComponent from "./components/UIStatesComponent"
import WelcomeModal from "./components/WelcomeModal";
import "./App.css";


function App() {
  return (
    <div className="App">
      <WelcomeModal/>
      <GeneratePannel/>
      <Board/>
      <UIStatesComponent/>
    </div>
  );
}

export default App;
