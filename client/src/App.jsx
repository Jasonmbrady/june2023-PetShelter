import './App.css';
import Header from './components/header';
import DisplayAllPets from "./components/DisplayAllPets";
import NewPet from './components/NewPet';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";

function App() {

  const [allPets, setAllPets] = useState([])
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/pets/")
      .then( res => setAllPets(res.data))
      .catch( err => console.log(err));
  }, [])
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DisplayAllPets allPets={allPets}/>}/>
        <Route path="/newPet" element={<NewPet allPets={allPets} setAllPets={setAllPets}/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
