// import React, { useState, useContext, useEffect } from 'react';
// import { Button, FormControl, OutlinedInput } from '@mui/material';
// import { QuizzContext } from '../../contexts/QuizContext';
// // import './Quizz.css';

// const QuizzPerso = () => {
//     const { maData, addOrUpdateResponse } = useContext(QuizzContext);
//     const [filteredQuestions, setFilteredQuestions] = useState([]);
//     const [activeQuestion, setActiveQuestion] = useState(0);
//     const [userAnswer, setUserAnswer] = useState('');
//     const [showResult, setShowResult] = useState(false);
//     const [showValidateButton, setShowValidateButton] = useState(true);
//     const [correctAnswer, setCorrectAnswer] = useState('');
//     const [evalIndex, setEvalIndex] = useState(-1);

//     // Mettre à jour les questions filtrées lorsque maData change
//     useEffect(() => {
//         const filtered = maData.responses.filter(response => response.evalIndex === 2);
//         setFilteredQuestions(filtered);
//     }, [maData]);

//     // Fonction appelée lorsque l'utilisateur clique sur le bouton Valider
//     const onClickValidate = () => {
//         setShowValidateButton(false);
//         setCorrectAnswer(filteredQuestions[activeQuestion]?.questions.correctAnswer);
//     };

//     // Fonction appelée lorsque l'utilisateur clique sur le bouton Suivant
//     const onClickNext = () => {
//         if (activeQuestion !== filteredQuestions.length - 1) {
//             setActiveQuestion(prev => prev + 1);
//             setShowValidateButton(true);
//         } else {
//             setShowResult(true);
//         }
//         // Ajouter ou mettre à jour la réponse dans maData
//         addOrUpdateResponse({
//             ...filteredQuestions[activeQuestion],
//             text: userAnswer,
//             evalIndex: evalIndex
//         });
//         setUserAnswer('');
//         setEvalIndex(-1); // Réinitialiser l'index de l'évaluation
//     };

//     // Fonction appelée lorsque l'utilisateur sélectionne une évaluation
//     const handleSelectEvaluation = (index) => {
//         setEvalIndex(index);
//     };
//     useEffect(() => {
//       console.log("Contenu de maData :", maData);
//   }, [maData]);


//     return (
//         <div className="quiz-container">
//             {!showResult ? (
//                 <div>
//                     <h2>{filteredQuestions[activeQuestion]?.questions.question}</h2>
//                     <FormControl id='input' style={{ width: '30rem' }}>
//                         <OutlinedInput
//                             autoComplete='off'
//                             id='answer'
//                             type="text"
//                             value={userAnswer}
//                             onChange={(e) => setUserAnswer(e.target.value)}
//                             sx={{ width: '30rem' }}
//                         />
//                     </FormControl>
//                     {showValidateButton && (
//                         <div className="flex-right">
//                             <Button
//                                 id='submit'
//                                 onClick={onClickValidate}
//                                 disabled={!userAnswer.trim()}
//                                 variant='outlined'
//                             >
//                                 Valider
//                             </Button>
//                         </div>
//                     )}
//                     {!showValidateButton && (
//                         <div>
//                             <h4>Voici la réponse type !</h4>
//                             <div className='answer-container'>
//                                 <p>{correctAnswer}</p>
//                             </div>
//                             <p>Comment évaluez-vous votre réponse :</p>
//                             <div id="eval-btn">
//                                 {['Non acquis', 'Partiellement acquis', 'Acquis'].map((evaluation, index) => (
//                                     <Button
//                                         key={index}
//                                         id={evalIndex === index ? 'selected-answer' : ''}
//                                         onClick={() => handleSelectEvaluation(index)}
//                                         variant='outlined'
//                                     >
//                                         {evaluation}
//                                     </Button>
//                                 ))}
//                             </div>
//                             <div className="flex-right">
//                                 <Button
//                                     id='submit'
//                                     onClick={onClickNext}
//                                     variant='outlined'
//                                 >
//                                     {activeQuestion === filteredQuestions.length - 1 ? 'Terminer' : 'Question suivante'}
//                                 </Button>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             ) : (
//                 <div className="result">
//                     <h3>Résultat</h3>
//                     <p>
//                         Nombre total de questions : <span>{filteredQuestions.length}</span>
//                     </p>
//                     <p>Votre résultat en détail :</p>
//                     <ul>
//                         {maData.responses.map((response, index) => (
//                             <li key={index}>
//                                 <p>Question {index + 1} :</p>
//                                 <p>Réponse : {response.text}</p>
//                                 <p>Évaluation : {['Non acquis', 'Partiellement acquis', 'Acquis'][response.evalIndex]}</p>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default QuizzPerso;


// import React, { useState, useContext } from 'react';
// import { Grid, Button } from "@mui/material";
// import Card from "@mui/material/Card";
// import { QuizzContext } from '../../contexts/QuizContext'; 

// function Quizzperso() {
//   const { maData, addOrUpdateResponse } = useContext(QuizzContext);

//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [selectedEvaluation, setSelectedEvaluation] = useState(null);

//   const categories = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'ReactJS',
//     'SQL',
//     'Méthode Agile',
//     'Maquettage/Prototypage',
//     'Méthode Merise',
//     // Ajoutez d'autres catégories ici
//   ];

//   const evaluationStatuses = [
//     'acquises',
//     'non-acquises',
//     'partiellement-acquises',
//     'aléatoires'
//   ];

//   const handleCategoryFilter = (category) => {
//     setSelectedCategory(category);
//     setSelectedEvaluation(null); 
//   };

//   const handleEvaluationFilter = (status) => {
//     setSelectedEvaluation(status);
//     setSelectedCategory(null); 
//   };

//   const generateCustomQuiz = () => {
//     const filteredQuestions = maData.responses.filter(response => {
//       return response.evalIndex === 2; // Filtrer les questions avec un evalIndex de 2
//     });
//     console.log(filteredQuestions);
//     // Maintenant, vous pouvez utiliser les questions filtrées pour générer votre quiz personnalisé
//   };

//   return (
//     <div>
//       <h1 style={{ textAlign: "center", color: "#0E4749" }}>Quizz personnalisé</h1>

//       <h1 style={{ color: "#0E4749" }}>Catégories</h1>
//       <Grid container spacing={2} justifyContent="center">
//         {categories.map(category => (
//           <Grid key={category} item xs={12} sm={6} md={3}>
//             <Card
//               sx={{
//                 height: "100%",
//                 backgroundColor: selectedCategory === category ? "#0E4749" : "#002626",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 minHeight: "100px",
//                 minWidth: "50px",
//                 cursor: "pointer",
//                 transition: "all 0.3s ease",
//                 "&:hover": {
//                   transform: "scale(0.9)",
//                 },
//               }}
//               onClick={() => handleCategoryFilter(category)}
//             >
//               <span
//                 style={{
//                   color: selectedCategory === category ? "white" : "white",
//                   fontFamily: "ABeeZee",
//                   fontSize: "1.5rem",
//                 }}
//               >
//                 {category}
//               </span>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <h1 style={{ color: "#0E4749" }}>Auto-évaluation</h1>
//       <Grid container spacing={2} justifyContent="center">
//         {evaluationStatuses.map(status => (
//           <Grid key={status} item xs={12} sm={6} md={3}>
//             <Button
//               variant="contained"
//               onClick={() => handleEvaluationFilter(status)}
//               style={{ backgroundColor: selectedEvaluation === status ? "#0E4749" : "#002626" }}
//             >
//               {status}
//             </Button>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Bouton pour générer le quiz personnalisé */}
//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <Button variant="contained" onClick={generateCustomQuiz} disabled={!selectedCategory || !selectedEvaluation}>
//           Générer Quiz Personnalisé
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Quizzperso;

import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";

function Quizzperso() {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#0E4749" }}>
        Quizz personnalisé
      </h1>

      {/* SECTION PERSO */}

      <h1 style={{ color: "#0E4749" }}>Difficulté des questions</h1>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            Non-acquises
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
        <Link to="/Questionsquizzperso" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#002626",
                color: "white",
                fontFamily: "ABeeZee",
                fontSize: "1.5rem",
                minHeight: "100px",
                minWidth: "50px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "scale(0.9)",
                },
              }}
            >
             Acquises
            </Button>
          </Link>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            Partiellement
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            Aléatoire
          </Button>
        </Grid>
      </Grid>

      {/* SECTION CATEGORIES */}

      <Grid item xs={12} sm={6} md={6}>
        <h1 style={{ color: "#0E4749" }}>Catégories</h1>
      </Grid>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            HTML
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            CSS
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            JavaScript
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            React
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            SQL
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            Méthode agile
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            Maquettage
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#002626",
              color: "white",
              fontFamily: "ABeeZee",
              fontSize: "1.5rem",
              minHeight: "100px",
              minWidth: "50px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(0.9)",
              },
            }}
          >
            Méthode Merise
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default Quizzperso;


