import React from 'react';
import { Button } from '@mui/material'; 
import { Link } from "react-router-dom";
import theme from "../../customTheme";
import { ThemeProvider } from '@mui/material/styles'; 
import './QuizzClassique.css';
import { QuizzContext } from '../../contexts/QuizContext';
import { useContext } from 'react';


const QuizzClassique = () => {
  const {questions, updateNombreQuestions } = useContext(QuizzContext);
  console.log(questions);

  return (
    <>
   <ThemeProvider theme={theme}>
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <h1>Quizz classique</h1>
          <h2>Choisissez le nombre de questions :</h2>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto', marginBottom: '40px' }}>
          <Link to="/Quizz?nb=20">
            <Button variant="contained" onClick={() => updateNombreQuestions(20)} style={{ marginBottom: '20px', width: '100%', fontSize: '16px', padding: '10px' }}>20 questions</Button>
          </Link>
          <Link to="/Quizz?nb=50">
            <Button variant="contained" onClick={() => updateNombreQuestions(50)} style={{ marginBottom: '20px', width: '100%', fontSize: '16px', padding: '10px' }}>50 questions</Button>
          </Link>
          <Link to="/Quizz?nb=100">
            <Button variant="contained" onClick={() => updateNombreQuestions(100)} style={{ marginBottom: '20px', width: '100%', fontSize: '16px', padding: '10px' }}>100 questions</Button>
          </Link>
          <Link to="/Quizz?nb=150">
            <Button variant="contained" onClick={() => updateNombreQuestions(150)} style={{ width: '100%', fontSize: '16px', padding: '10px' }}>150 questions</Button>
          </Link>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default QuizzClassique;