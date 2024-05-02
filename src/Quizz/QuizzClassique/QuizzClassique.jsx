import React from 'react';
import { Button } from '@mui/material'; 
import { Link } from "react-router-dom";
import theme from "../../customTheme";
import { ThemeProvider } from '@mui/material/styles'; 
import './QuizzClassique.css';

const QuizzClassique = () => {
  const userChoice = (nombreQuestions) => {
    // console.log(`L'utilisateur a choisi ${nombreQuestions} questions`);
  };

  return (
    <>
      <ThemeProvider theme={theme}> 
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Quizz classique</h1>
        <h2>Choisissez le nombre de questions :</h2>
        <div style={{ display: 'flex', textAlign: 'center', flexDirection: 'column' }}>
          <Link to="/Quizz">
            <Button variant="contained" className="custom-button" onClick={() => userChoice(20)}>20 questions</Button>
          </Link>
          <Button variant="contained" className="custom-button" onClick={() => userChoice(50)}>50 questions</Button>
          <Button variant="contained" className="custom-button" onClick={() => userChoice(100)}>100 questions</Button>
          <Button variant="contained" className="custom-button" onClick={() => userChoice(150)}>150 questions</Button>
        </div>
      </div>
    </ThemeProvider>
    </>
  );
};

export default QuizzClassique;