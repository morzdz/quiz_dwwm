
import React, { useState, useEffect, useContext } from 'react';
import { Button, FormControl, OutlinedInput } from '@mui/material';
import { QuizzContext } from '../../contexts/QuizContext';
import AutoEvaluation from '../Quizzperso/AutoEvaluation';
import './Quizz.css';
import { quizz } from '../../data/Questions';


const Quiz = () => {
    const { maData, addOrUpdateResponse } = useContext(QuizzContext);
    const { questions } = quizz;

    const [activeQuestion, setActiveQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [showValidateButton, setShowValidateButton] = useState(true);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [scores, setScores] = useState(Array(quizz.questions.length).fill(0));
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
    const [selectedEvaluationIndex, setSelectedEvaluationIndex] = useState(-1);

    useEffect(() => {
        setSelectedEvaluationIndex(0);
    }, []);

    const onClickValidate = () => {
        setShowValidateButton(false);
        setCorrectAnswer(questions[activeQuestion].correctAnswer);
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
        setShowValidateButton(true);
        setNextButtonDisabled(true);
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion(prev => prev + 1);
        } else {
            setShowResult(true);
        }
        setUserAnswer('');
        handleResponse(); // Appel de handleResponse pour mettre à jour maData.responses
    };
    
    const handleResponse = () => {
        const questionId = questions[activeQuestion].question_id;
        const response = {
            question_id: questionId,
            user_id: 101,
            text: userAnswer,
            evalIndex: selectedEvaluationIndex,
            questions: questions[activeQuestion]
        };

        console.log("Nouvelle réponse :", response);
        addOrUpdateResponse(response); // Mettre à jour le contexte global avec la nouvelle réponse
        console.log("MaData après mise à jour :", maData);
    };

    return (
        <div className="quiz-container">
            {!showResult ? (
                <div>
                    <h2>{questions[activeQuestion].question}</h2>
                    <div style={{ marginBottom: '1rem' }}>
                        Question {activeQuestion + 1} sur {questions.length}
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
                            <AutoEvaluation // Utilisation du composant AutoEvaluation
                                selectedEvaluationIndex={selectedEvaluationIndex}
                                handleSelectEvaluation={handleSelectEvaluation}
                            />
                            <div className="flex-right">
                                <Button
                                    id='submit'
                                    onClick={onClickNext}
                                    variant='outlined'
                                >
                                    {activeQuestion === questions.length - 1 ? 'Terminer' : 'Question suivante'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            ) : (
                <div className="result">
                    <h3>Résultat</h3>
                    <p>
                        Nombre total de questions : <span>{questions.length}</span>
                    </p>
                    <p>Votre résultat en détail :</p>
                    <ul>
                        {maData.responses.map((response, index) => (
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

export default Quiz;
