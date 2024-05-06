import { useState } from 'react';
import { Button, FormControl, OutlinedInput, TextField  } from '@mui/material';
import { quiz } from '../../data/Questions';
import './Quizz.css';

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [showResult, setShowResult] = useState(false);
    const [showValidateButton, setShowValidateButton] = useState(true);
    const [correctAnswer, setCorrectAnswer] = useState('');
    const [scores, setScores] = useState(Array(quiz.questions.length).fill(0)); // Initialise les scores à 0 pour chaque question
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true);
    const [selectedEvaluationIndex, setSelectedEvaluationIndex] = useState(-1);

    // Données du quiz
    const { questions } = quiz;
    const question = questions[activeQuestion].question;

    // Fonction appelée lorsque l'utilisateur valide sa réponse
    const onClickValidate = () => {
        setShowValidateButton(false);
        setCorrectAnswer(questions[activeQuestion].correctAnswer);
    };

    // Fonction appelée lorsque l'utilisateur sélectionne une évaluation
    const handleSelectEvaluation = (index) => {
        setSelectedEvaluationIndex(index);
        // Mettre à jour le score en fonction de l'évaluation sélectionnée
        handleScore(index);
    };

    // Fonction pour gérer l'évaluation de la réponse par l'utilisateur
    const handleScore = (index) => {
        // Mettre à jour le score de la question active en fonction de l'évaluation
        setScores(prevScores => {
            const newScores = [...prevScores];
            newScores[activeQuestion] = index; // Vous pouvez ajuster cela en fonction de votre logique de notation
            return newScores;
        });
        // Activer le bouton "Suivant" car l'utilisateur a évalué sa réponse
        setNextButtonDisabled(false);
    };

    // Fonction appelée lorsque l'utilisateur passe à la question suivante
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
        setSelectedEvaluationIndex(""); // Réinitialiser l'index de l'évaluation sélectionnée
    };

    // Calcul du score de l'utilisateur en ajoutant tous les scores du tableau
    const userScore = scores.reduce((acc, score) => acc + score, 0);

    // Calcul du score maximal possible en multipliant le nombre de questions par 2 (chaque question vaut jusqu'à 2 points)
    const maxScore = 2 * questions.length;

    // Fonction utilitaire pour ajouter un zéro en tête aux nombres inférieurs à 10
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