import React, { useState, useContext, useEffect } from 'react';
import { Button, FormControl, OutlinedInput } from '@mui/material';
import { QuizzContext } from '../../contexts/QuizContext';

const QuestionsQuizzPerso = () => {
    const { maData, addOrUpdateResponse } = useContext(QuizzContext);
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [showValidateButton, setShowValidateButton] = useState(true);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [evalIndex, setEvalIndex] = useState(-1);
    const [localResponses, setLocalResponses] = useState([]);
    const [quizCompleted, setQuizCompleted] = useState(false);

    useEffect(() => {
        const filtered = maData.responses.filter(response => response.evalIndex === 2);
        setFilteredQuestions(filtered);
    }, [maData]);

    const onClickValidate = () => {
        setShowValidateButton(false);
        setCorrectAnswer(filteredQuestions[activeQuestion]?.questions.correctAnswer);
    };

    const onClickNext = () => {
        if (activeQuestion !== filteredQuestions.length - 1) {
            setActiveQuestion(prev => prev + 1);
            setShowValidateButton(true);
        } else {
            setShowResult(true);
            setQuizCompleted(true); // Marquer le quizz comme terminé
        }
        const updatedResponses = [...localResponses];
        updatedResponses[activeQuestion] = {
            ...filteredQuestions[activeQuestion],
            text: userAnswer,
            evalIndex: evalIndex
        };
        setLocalResponses(updatedResponses);
        setUserAnswer('');
        setEvalIndex(-1);
    };

    const handleSelectEvaluation = (index) => {
        setEvalIndex(index);
    };

    useEffect(() => {
        console.log("MaData après mise à jour :", maData);
    }, [maData]);

    useEffect(() => {
        console.log("Local Responses après mise à jour :", localResponses);
    }, [localResponses]);

    useEffect(() => {
        if (quizCompleted) {
            // Mettre à jour maData.responses avec les données locales
            const updatedResponses = maData.responses.map((response, index) => {
                return localResponses[index] ? localResponses[index] : response;
            });
            addOrUpdateResponse(updatedResponses);
        }
    }, [quizCompleted]);

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
                            <p>Comment évaluez-vous votre réponse :</p>
                            <div id="eval-btn">
                                {['Non acquis', 'Partiellement acquis', 'Acquis'].map((evaluation, index) => (
                                    <Button
                                        key={index}
                                        id={evalIndex === index ? 'selected-answer' : ''}
                                        onClick={() => handleSelectEvaluation(index)}
                                        variant='outlined'
                                    >
                                        {evaluation}
                                    </Button>
                                ))}
                            </div>
                            <div className="flex-right">
                                <Button
                                    id='submit'
                                    onClick={onClickNext}
                                    variant='outlined'
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