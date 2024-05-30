import { useState } from 'react';
import { Button, FormControl, OutlinedInput } from '@mui/material';
import { quiz } from '../../data/Questions';
import { useCategory } from '../Context/CategoriesContext.jsx' 
import './Quizzcategoriescss.css';

const Quiz = () => {
    const { filteredQuestions } = useCategory();
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [showValidateButton, setShowValidateButton] = useState(true);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [scores, setScores] = useState(Array(filteredQuestions.length).fill(0));
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
    const [selectedEvaluationIndex, setSelectedEvaluationIndex] = useState(-1);

    const questions = filteredQuestions;
    const question = questions[activeQuestion].question;

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
        setCorrectAnswer('');
        setNextButtonDisabled(true);
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion(prev => prev + 1);
        } else {
            setShowResult(true);
        }
        setUserAnswer('');
        setSelectedEvaluationIndex("");
    };

    const userScore = scores.reduce((acc, score) => acc + score, 0);
    const maxScore = 2 * questions.length;

    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);


    return (
        <div className="quiz-container">
            {!showResult ? (
                <div>
                    <div style={{width: '1em', position: 'relative', top: '8px', left: '8px'}}>
                        <span>{addLeadingZero(activeQuestion + 1)}</span>
                        <span>/{addLeadingZero(questions.length)}</span>
                    </div>
                    <h2 style={{paddingTop: '1em'}}>{question}</h2>
                    <FormControl id='input' style={{width: '30rem'}}>
                        <OutlinedInput
                            autoComplete='off'
                            id='answer'
                            type="text"
                            value={userAnswer}
                            onChange={(e) => setUserAnswer(e.target.value)}
                            sx={{width: '30rem'}}
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
                            <p>Comment évaluer vous votre réponse :</p>
                            <div id="eval-btn">
                                {['Non acquis', 'Partiellement acquis', 'Acquis'].map((evaluation, index) => (
                                    <Button
                                        key={index}
                                        id={selectedEvaluationIndex === index ? 'selected-answer' : ''}
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
                                    disabled={nextButtonDisabled}
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
                    <p>Votre score : {userScore} / {maxScore}</p>
                    <p>Votre résultats en détail :</p>
                    <ul>
                        {scores.filter(score => score === 0).length > 0 && (
                            <li>
                            <p>Nombre de questions non acquises :</p>
                                <div style={{display: 'flex', width: '200px'}}>
                                    <div
                                        className="non-acquise"
                                        style={{ width: `${(scores.filter(score => score === 0).length / questions.length) * 100}%` }}
                                        ><p className='invisible'>{scores.filter(score => score === 0).length}</p></div>
                                    {scores.filter(score => score === 0).length}
                                </div>
                            </li>
                        )}
                        {scores.filter(score => score === 1).length > 0 && (
                            <li>
                                <p>Nombre de questions partiellement acquises :</p>
                                <div style={{display: 'flex', width: '200px'}}>
                                    <div
                                        className="partiellement-acquise"
                                        style={{ width: `${(scores.filter(score => score === 1).length / questions.length) * 100}%` }}
                                        ><p className='invisible'>{scores.filter(score => score === 1).length}</p></div>
                                    {scores.filter(score => score === 1).length}
                                </div>
                            </li>
                        )}
                        {scores.filter(score => score === 2).length > 0 && (
                            <li>
                                <p>Nombre de questions acquises :</p>
                                <div style={{display: 'flex', width: '200px'}}>
                                    <div
                                        className="acquise"
                                        style={{ width: `${(scores.filter(score => score === 2).length / questions.length) * 100}%` }}
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
