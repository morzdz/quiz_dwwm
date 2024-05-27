import React, { useState, useContext, useEffect } from 'react';
import { Button, FormControl, OutlinedInput } from '@mui/material';
import { QuizzContext } from '../../contexts/QuizContext';
import AutoEvaluation from './AutoEvaluation';

const QuestionsQuizzPerso = ({ filter }) => {
    const { maData, addOrUpdateResponse } = useContext(QuizzContext);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [showValidateButton, setShowValidateButton] = useState(true);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [evalIndex, setEvalIndex] = useState(-1);
    const [localResponses, setLocalResponses] = useState([]);

    // Filtrer les questions en fonction de l'evalIndex
    useEffect(() => {
        console.log('Filtrage des questions avec le filtre:', filter);
        let filtered;
        switch (filter) {
            case 'non-acquises':
                filtered = maData.responses.filter(response => response.evalIndex === 0);
                break;
            case 'partiellement-acquises':
                filtered = maData.responses.filter(response => response.evalIndex === 1);
                break;
            case 'acquises':
                filtered = maData.responses.filter(response => response.evalIndex === 2);
                break;
            default:
                filtered = [];
        }
        setFilteredQuestions(filtered);
    }, [maData, filter]);

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

        console.log("réponse locale après question:", updatedResponses);

        setUserAnswer('');
        setEvalIndex(-1);
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
                                evalIndex={evalIndex}
                                handleSelectEvaluation={setEvalIndex}
                            />
                            <div className="flex-right">
                                <Button
                                    id='submit'
                                    onClick={onClickNext}
                                    variant='outlined'
                                    disabled={evalIndex === -1}
                                >
                                    {activeQuestion === filteredQuestions.length - 1 ? 'Terminer' : 'Question suivante'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="result">
                    <h3>Résultat</h3>
                    <p>
                        Nombre total de questions : <span>{filteredQuestions.length}</span>
                    </p>
                    <p>Votre résultat en détail :</p>
                    <ul>
                        {localResponses.map((response, index) => (
                            <li key={index}>
                                <p>Question {index + 1} :</p>
                                <p>Réponse : {response.text}</p>
                                <p>Évaluation : {['Non acquis', 'Partiellement acquis', 'Acquis'][response.evalIndex]}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default QuestionsQuizzPerso;