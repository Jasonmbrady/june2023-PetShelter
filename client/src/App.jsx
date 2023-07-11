import './App.css';
import Header from './components/header';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from 'react';

function App() {

  const [allPets, setAllPets] = useState([])
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<DisplayAllPets allPets={allPets}/>}/>
        <Route path="/newPet" element={} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
