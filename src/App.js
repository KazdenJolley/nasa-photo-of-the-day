import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Title from './components/Title';
import Photo from './components/Photo';
import Info from './components/Info';

function App() {
  const [dayInfo, setDayInfo] = useState(null);
  const URL = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

  useEffect(() => {
    axios
      .get(URL)
      .then(res => {
        setDayInfo(res.data);
      })
      .catch(err => {
        console.log('Oops! We have an error:\n', err);
      })
  }, [])
  return (
    <div className="App">
    {
      dayInfo && 
      <>
        <Title title={dayInfo.title}/>
        <Photo photoUrl={dayInfo.hdurl}/>
        <Info info={dayInfo.explanation}/>
      </>
    }
    </div>
  );
}

export default App;
