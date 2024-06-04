import React, { useState, useContext, useEffect } from 'react';
import { Button, FormControl, OutlinedInput } from '@mui/material';
import { QuizzContext } from '../../contexts/QuizContext';
import AutoEvaluation from './AutoEvaluation';

const QuestionsQuizzPerso = () => {
    const { maData, addOrUpdateResponse, autoEvalIndex, category } = useContext(QuizzContext);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [showValidateButton, setShowValidateButton] = useState(true);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [evalIndex, setEvalIndex] = useState(-1);
    const [localResponses, setLocalResponses] = useState([]);

    useEffect(() => {
        let filtered = [];
        if (category) {
            if (autoEvalIndex === 'aleatoire') {
                filtered = maData.responses
                    .filter(response => response.questions.category === category)
                    .sort(() => 0.5 - Math.random());
            } else {
                switch (autoEvalIndex) {
                    case 'non-acquises':
                        filtered = maData.responses.filter(response => response.evalIndex === 0 && response.questions.category === category);
                        break;
                    case 'partiellement-acquises':
                        filtered = maData.responses.filter(response => response.evalIndex === 1 && response.questions.category === category);
                        break;
                    case 'acquises':
                        filtered = maData.responses.filter(response => response.evalIndex === 2 && response.questions.category === category);
                        break;
                    default:
                        filtered = [];
                }
            }
        }
        setFilteredQuestions(filtered);
    }, [maData, autoEvalIndex, category]);

    const onClickValidate = () => {
        setShowValidateButton(false);
        setCorrectAnswer(filteredQuestions[activeQuestion]?.questions.correctAnswer);
    };

    const onClickNext = () => {
        const updatedResponses = [...localResponses];
        updatedResponses[activeQuestion] = {
            ...filteredQuestions[activeQuestion],
            text: userAnswer,
            evalIndex: evalIndex
        };
        setLocalResponses(updatedResponses);

        if (activeQuestion !== filteredQuestions.length - 1) {
            setActiveQuestion(prev => prev + 1);
            setShowValidateButton(true);
        } else {
            setShowResult(true);
            addOrUpdateResponse(updatedResponses);
        }

        setUserAnswer('');
        setEvalIndex(-1);
    };

    const handleSelectEvaluation = (index) => {
        setEvalIndex(index);
    };

    return (
        <div className="quiz-container">
            {!showResult ? (
                               <div>
                               <h2>{filteredQuestions[activeQuestion]?.questions.question}</h2>
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
                                       <AutoEvaluation
                                           selectedEvaluationIndex={evalIndex}
                                           handleSelectEvaluation={handleSelectEvaluation}
                                       />
                                       <div className="flex-right">
                                           <Button
                                               id='next'
                                               onClick={onClickNext}
                                               disabled={evalIndex === -1}
                                               variant='outlined'
                                           >
                                               Suivant
                                           </Button>
                                       </div>
                                   </div>
                               )}
                           </div>
                       ) : (
                           <div>
                               <h2>Résultats</h2>
                               <p>Quiz terminé !</p>
                           </div>
                       )}
                   </div>
               );
           };
           
           export default QuestionsQuizzPerso;