// import { useState } from "react";
//import Sign_Up from './components/Sign_Up/Sign_Up'
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <h1>Quizz</h1>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
