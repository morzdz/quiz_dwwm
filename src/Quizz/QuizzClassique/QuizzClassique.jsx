import React, { useState, useContext } from 'react';
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../customTheme";
import './QuizzClassique.css';
import { QuizzContext } from '../../contexts/QuizContext';
import Quiz from '../Quizz/Quizz';
import { quizz } from '../../data/Questions'; 

const QuizzClassique = () => {
  const [startQuizz, setStartQuizz] = useState(false);
  const [chosenNum, setChosenNum] = useState(0);
  const [questions, setQuestions] = useState([]);

  const userChoice = (numQuestions) => {
    setChosenNum(numQuestions);
    startQuiz(numQuestions); // Démarrer le quiz lorsque l'utilisateur choisit le nombre de questions
  };

  // Fonction pour mélanger les questions
  const shuffleQuestions = (questions) => {
    const shuffledQuestions = [...questions]; // Copie des questions
    // Algorithme de mélange
    for (let i = shuffledQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
    }
    return shuffledQuestions;
  };

  // Démarrer le quiz avec des questions mélangées
  const startQuiz = (numQuestions) => {
    const shuffledQuestions = shuffleQuestions(quizz.questions);
    // Utilisez le nombre choisi de questions pour le quiz
    const selectedQuestions = shuffledQuestions.slice(0, numQuestions);
    setQuestions(selectedQuestions);
    setStartQuizz(true);
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ textAlign: 'center', marginTop: '30px' }}>
        {!startQuizz ? (
          <>
            <h1>Quizz classique</h1>
            <h2>Choisissez le nombre de questions :</h2>
            <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto', marginBottom: '40px' }}>
              <Button variant="contained" onClick={() => userChoice(20)} style={{ marginBottom: '20px', width: '100%', fontSize: '16px', padding: '10px' }}>20 questions</Button>
              <Button variant="contained" onClick={() => userChoice(50)} style={{ marginBottom: '20px', width: '100%', fontSize: '16px', padding: '10px' }}>50 questions</Button>
              <Button variant="contained" onClick={() => userChoice(100)} style={{ marginBottom: '20px', width: '100%', fontSize: '16px', padding: '10px' }}>100 questions</Button>
              <Button variant="contained" onClick={() => userChoice(150)} style={{ width: '100%', fontSize: '16px', padding: '10px' }}>150 questions</Button>
            </div>
          </>
        ) : (
          <Quiz chosenNum={chosenNum} questions={questions} />
        )}
      </div>
    </ThemeProvider>
  );
};

export default QuizzClassique;