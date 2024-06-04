import React, { useState } from 'react';
import { Button } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../customTheme";
import './QuizzClassique.css';
import Quiz from '../Quizz/Quizz';
import { quizz } from '../../data/Questions';

const QuizzClassique = () => {
  const [startQuizz, setStartQuizz] = useState(false);
  const [chosenNum, setChosenNum] = useState(0);
  const [questions, setQuestions] = useState([]);

  const userChoice = (numQuestions) => {
    setChosenNum(numQuestions);
    startQuiz(numQuestions);
  };

  const groupQuestionsByCategory = (questions) => {
    const categories = {
      HTML: [],
      CSS: [],
      JavaScript: [],
      ReactJS: [],
      SQL: [],
      'Méthode Agile': [],
      'Maquettage/Prototypage': [],
      'Méthode Merise': []
    };

    questions.forEach((question) => {
      const { question_id } = question;
      if (question_id >= 1 && question_id <= 20) {
        categories.HTML.push(question);
      } else if (question_id >= 21 && question_id <= 40) {
        categories.CSS.push(question);
      } else if (question_id >= 41 && question_id <= 60) {
        categories.JavaScript.push(question);
      } else if (question_id >= 61 && question_id <= 80) {
        categories.ReactJS.push(question);
      } else if (question_id >= 81 && question_id <= 100) {
        categories.SQL.push(question);
      } else if (question_id >= 101 && question_id <= 120) {
        categories['Méthode Agile'].push(question);
      } else if (question_id >= 121 && question_id <= 140) {
        categories['Maquettage/Prototypage'].push(question);
      } else if (question_id >= 141 && question_id <= 160) {
        categories['Méthode Merise'].push(question);
      }
    });

    return categories;
  };

  const getRandomQuestions = (questions, count) => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const distributeQuestionsEqually = (groupedQuestions, totalQuestions) => {
    const categories = Object.keys(groupedQuestions);
    const numCategories = categories.length;
    const questionsPerCategory = Math.floor(totalQuestions / numCategories);
    const remainder = totalQuestions % numCategories;

    let selectedQuestions = [];

    categories.forEach((category) => {
      const categoryQuestions = groupedQuestions[category];
      if (categoryQuestions.length >= questionsPerCategory) {
        selectedQuestions = [
          ...selectedQuestions,
          ...getRandomQuestions(categoryQuestions, questionsPerCategory)
        ];
      } else {
        console.warn(`Pas assez de questions dans la catégorie ${category}`);
      }
    });

    // Ajouter des questions supplémentaires pour atteindre le total requis
    if (remainder > 0) {
      const allQuestions = Object.values(groupedQuestions).flat();
      const additionalQuestions = getRandomQuestions(allQuestions, remainder);
      selectedQuestions = [...selectedQuestions, ...additionalQuestions];
    }

    return selectedQuestions;
  };

  const startQuiz = (numQuestions) => {
    const categorizedQuestions = groupQuestionsByCategory(quizz.questions);
    const selectedQuestions = distributeQuestionsEqually(categorizedQuestions, numQuestions);
    const shuffledQuestions = selectedQuestions.sort(() => 0.5 - Math.random());
    setQuestions(shuffledQuestions);
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
              <Button variant="contained" onClick={() => userChoice(16)} style={{ marginBottom: '20px', width: '100%', fontSize: '16px', padding: '10px' }}>16 questions</Button>
              <Button variant="contained" onClick={() => userChoice(32)} style={{ marginBottom: '20px', width: '100%', fontSize: '16px', padding: '10px' }}>32 questions</Button>
              <Button variant="contained" onClick={() => userChoice(64)} style={{ marginBottom: '20px', width: '100%', fontSize: '16px', padding: '10px' }}>64 questions</Button>
              <Button variant="contained" onClick={() => userChoice(128)} style={{ width: '100%', fontSize: '16px', padding: '10px' }}>128 questions</Button>
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