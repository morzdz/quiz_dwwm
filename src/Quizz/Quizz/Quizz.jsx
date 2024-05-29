import React, { useState, useContext } from 'react';
import { Button, FormControl, OutlinedInput } from '@mui/material';
import { QuizzContext } from '../../contexts/QuizContext';
import AutoEvaluation from '../Quizzperso/AutoEvaluation';
import './Quizz.css';

const Quiz = ({ chosenNum, questions }) => {
  const { maData, addOrUpdateResponse, quizz } = useContext(QuizzContext);
  const selectedQuestions = questions.slice(0, chosenNum);

  const [activeQuestion, setActiveQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [showValidateButton, setShowValidateButton] = useState(true);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [scores, setScores] = useState(Array(chosenNum).fill(0));
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
  const [selectedEvaluationIndex, setSelectedEvaluationIndex] = useState(-1);

  const onClickValidate = () => {
    setShowValidateButton(false);
    setCorrectAnswer(selectedQuestions[activeQuestion].correctAnswer);
  };

  const handleSelectEvaluation = (index) => {
    setSelectedEvaluationIndex(index);
    handleScore(index);
  };

  const handleScore = (index) => {
    setScores(prevScores => {
      const newScores = [...prevScores];
      newScores[activeQuestion] = index;
      return newScores;
    });
    setNextButtonDisabled(false);
  };

  const onClickNext = () => {
    setSelectedEvaluationIndex(-1);
    setShowValidateButton(true);
    setNextButtonDisabled(true);
    if (activeQuestion !== selectedQuestions.length - 1) {
      setActiveQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
    setUserAnswer('');
    handleResponse();
  };

  const handleResponse = () => {
    const questionId = selectedQuestions[activeQuestion].question_id;
    const response = {
      question_id: questionId,
      user_id: 101,
      text: userAnswer,
      evalIndex: selectedEvaluationIndex,
      questions: selectedQuestions[activeQuestion]
    };

    console.log("Nouvelle réponse :", response);
    addOrUpdateResponse(response);
    console.log("MaData après mise à jour :", maData);
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const userScore = scores.reduce((acc, score) => acc + score, 0);
  const maxScore = 2 * selectedQuestions.length;

  return (
    <div className="quiz-container">
      {!showResult ? (
        <div>
          <div style={{ width: '1em', position: 'relative', top: '8px', left: '8px' }}>
            <span>{addLeadingZero(activeQuestion + 1)}</span>
            <span>/{addLeadingZero(selectedQuestions.length)}</span>
          </div>
          <h2>{selectedQuestions[activeQuestion].question}</h2>
          <div style={{ marginBottom: '1rem' }}>
            Question {activeQuestion + 1} sur {selectedQuestions.length}
          </div>
          <FormControl id='input' style={{ width: '30rem' }}>
            <OutlinedInput
              autoComplete='off'
              id='answer'
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              sx={{ width: '30rem' }}
            />
          </FormControl>
          {showValidateButton && (
            <div className="flex-right">
              <Button
                id='submit'
                onClick={onClickValidate}
                disabled={!userAnswer.trim()}
                variant='outlined'
              >
                Valider
              </Button>
            </div>
          )}
          {!showValidateButton && (
            <div>
              <h4>Voici la réponse type !</h4>
              <div className='answer-container'>
                <p>{correctAnswer}</p>
              </div>
              <p>Comment évaluez-vous votre réponse :</p>
              <AutoEvaluation
                key={activeQuestion}
                selectedEvaluationIndex={selectedEvaluationIndex}
                handleSelectEvaluation={handleSelectEvaluation}
              />
              <div className="flex-right">
                <Button
                  id='submit'
                  onClick={() => onClickNext()}
                  disabled={nextButtonDisabled}
                  variant='outlined'
                >
                  {activeQuestion === selectedQuestions.length - 1 ? 'Terminer' : 'Question suivante'}
                </Button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="result">
          <h3>Résultat</h3>
          <p>
            Nombre total de questions : <span>{selectedQuestions.length}</span>
          </p>
          <p>Votre score : {userScore} / {maxScore}</p>
          <p>Votre résultats en détail :</p>
          <ul>
            {scores.filter(score => score === 0).length > 0 && (
              <li>
                <p>Nombre de questions non acquises :</p>
                <div style={{ display: 'flex', width: '200px' }}>
                  <div
                    className="non-acquise"
                    style={{ width: `${(scores.filter(score => score === 0).length / selectedQuestions.length) * 100}%` }}
                  ><p className='invisible'>{scores.filter(score => score === 0).length}</p></div>
                  {scores.filter(score => score === 0).length}
                </div>
              </li>
            )}
            {scores.filter(score => score === 1).length > 0 && (
              <li>
                <p>Nombre de questions partiellement acquises :</p>
                <div style={{ display: 'flex', width: '200px' }}>
                  <div
                    className="partiellement-acquise"
                    style={{ width: `${(scores.filter(score => score === 1).length / selectedQuestions.length) * 100}%` }}
                  ><p className='invisible'>{scores.filter(score => score === 1).length}</p></div>
                  {scores.filter(score => score === 1).length}
                </div>
              </li>
            )}
            {scores.filter(score => score === 2).length > 0 && (
              <li>
                <p>Nombre de questions acquises :</p>
                <div style={{ display: 'flex', width: '200px' }}>
                  <div
                    className="acquise"
                    style={{ width: `${(scores.filter(score => score === 2).length / selectedQuestions.length) * 100}%` }}
                  ><p className='invisible'>{scores.filter(score => score === 2).length}</p></div>
                  {scores.filter(score => score === 2).length}
                </div>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Quiz;