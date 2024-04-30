import './App.css';
import Accueil from './components/Accueil/Accueil.jsx';
import Ressources from './components/Ressources/Ressources.jsx';
// import { useState } from "react";
import Sign_Up from './components/Sign_Up/Sign_Up'
import Sign_In from './components/Sign_In/Sign_In'
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import {Routes,Route} from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import { Link } from "react-router-dom";
import QuizzClassique from './Quizz/QuizzClassique/QuizzClassique.jsx';



function App() {
  //const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Accueil />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/ressources" element={<Ressources />} />
        <Route path="/signup" element={<Sign_Up />} />
        <Route path="/signin" element={<Sign_In />} />
        <Route path="/QuizzClassique" element={<QuizzClassique />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
