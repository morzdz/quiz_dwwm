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
        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <h1>Quizz classique</h1>
          <h2>Choisissez le nombre de questions :</h2>
          <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto', marginBottom: '40px' }}>
            <Button variant="contained" onClick={() => userChoice(20)} style={{ marginBottom: '20px', width: '100%', fontSize: '16px', padding: '10px' }}>20 questions</Button>
            <Button variant="contained" onClick={() => userChoice(50)} style={{ marginBottom: '20px', width: '100%', fontSize: '16px', padding: '10px' }}>50 questions</Button>
            <Button variant="contained" onClick={() => userChoice(100)} style={{ marginBottom: '20px', width: '100%', fontSize: '16px', padding: '10px' }}>100 questions</Button>
            <Button variant="contained" onClick={() => userChoice(150)} style={{ width: '100%', fontSize: '16px', padding: '10px' }}>150 questions</Button>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default QuizzClassique;