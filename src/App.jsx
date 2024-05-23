import './App.css';
import Accueil from './components/Accueil/Accueil.jsx';
import Ressources from './components/Ressources/Ressources.jsx';
import Sign_Up from './components/Sign_Up/Sign_Up';
import Sign_In from './components/Sign_In/Sign_In';
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Quizz from './Quizz/Quizz/Quizz.jsx';
import QuizzClassique from './Quizz/QuizzClassique/QuizzClassique.jsx';
import Quizzperso from "./Quizz/Quizzperso/Quizzperso.jsx";
import Questionsquizzperso from "./Quizz/Quizzperso/Questionsquizzperso.jsx";
import { QuizzProvider } from './contexts/QuizContext';

function App() {
  return (
    <QuizzProvider>
      <BrowserRouter>
        <Header />
        <div id="content" style={{ minHeight: '100vh', overflow: 'auto' }}>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/ressources" element={<Ressources />} />
            <Route path="/signup" element={<Sign_Up />} />
            <Route path="/signin" element={<Sign_In />} />
            <Route path="/QuizzClassique" element={<QuizzClassique />} />
            <Route path="/Quizzperso" element={<Quizzperso />} />
            <Route path="/Questionsquizzperso/acquises" element={<Questionsquizzperso filter="acquises" />} />
            <Route path="/Questionsquizzperso/partiellement-acquises" element={<Questionsquizzperso filter="partiellement-acquises" />} />
            <Route path="/Questionsquizzperso/non-acquises" element={<Questionsquizzperso filter="non-acquises" />} />
            <Route path="/Quizz" element={<Quizz />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </QuizzProvider>
  );
}

export default App;