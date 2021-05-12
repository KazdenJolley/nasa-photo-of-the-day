import React, { useState, useEffect } from "react";
import "./App.css";
import Title from './components/Title';
import Photo from './components/Photo';
import Info from './components/Info';

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
