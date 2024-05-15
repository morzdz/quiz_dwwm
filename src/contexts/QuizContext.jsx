// QuizzContext.js

import { createContext, useState } from 'react';
import { quizz } from '../data/Questions';
export const QuizzContext = createContext();

export const QuizzProvider = ({ children }) => {
    const [maData, setMaData] = useState({ responses: [] });

    const addOrUpdateResponse = (newResponses) => {
        // Check if newResponses is an array
        if (Array.isArray(newResponses)) {
            // Quiz filtré : Mettre à jour maData.responses avec les données de newResponses
            setMaData({ responses: newResponses });
        } else {
            // Quiz habituel : Mettre à jour maData.responses avec la réponse individuelle
            const existingIndex = maData.responses.findIndex(response => response.question_id === newResponses.question_id);

            if (existingIndex !== -1) {
                setMaData(prevData => ({
                    ...prevData,
                    responses: [
                        ...prevData.responses.slice(0, existingIndex),
                        newResponses,
                        ...prevData.responses.slice(existingIndex + 1)
                    ]
                }));
            } else {
                setMaData(prevData => ({
                    ...prevData,
                    responses: [...prevData.responses, newResponses]
                }));
            }
        }
    };

    return (
        <QuizzContext.Provider value={{ maData, addOrUpdateResponse, quizz }}>
            {children}
        </QuizzContext.Provider>
    );
};
// import { createContext, useState } from 'react';

// // Création du contexte Quiz
// export const QuizzContext = createContext();

// // Fournisseur de contexte Quiz
// export const QuizzProvider = ({ children }) => {
//     // Initialisation des données du quiz
//     const [responses, setResponses] = useState({});

//     // Fonction pour ajouter ou mettre à jour une réponse dans les données du quiz
//     const addOrUpdateResponse = (questionId, newResponse) => {
//         setResponses(prevResponses => ({
//             ...prevResponses,
//             [questionId]: newResponse
//         }));
//     };

//     // Rendu du fournisseur de contexte avec les données et la fonction de mise à jour
//     return (
//         <QuizzContext.Provider value={{ responses, addOrUpdateResponse }}>
//             {children}
//         </QuizzContext.Provider>
//     );
// };