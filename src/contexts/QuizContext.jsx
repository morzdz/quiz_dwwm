import { createContext, useState } from 'react';
import { quizz } from '../data/Questions';

export const QuizzContext = createContext();

export const QuizzProvider = ({ children }) => {
    // const [nombreQuestions, setNombreQuestions] = useState(20); 

    // const updateNombreQuestions = (nombre) => {
    //     setNombreQuestions(nombre);
    // }; pour passer le système de nombre de questions dans le contexts

    const [maData, setMaData] = useState({ responses: [] });

    const addOrUpdateResponse = (newResponses) => {
        if (Array.isArray(newResponses)) {
            // Cas des réponses filtrées : mise à jour de l'ensemble des réponses
            setMaData(prevData => ({
                ...prevData,
                responses: prevData.responses.map(prevResponse => {
                    const newResponseIndex = newResponses.findIndex(newResponse => newResponse.question_id === prevResponse.question_id);
                    if (newResponseIndex !== -1) {
                        return {
                            ...prevResponse,
                            ...newResponses[newResponseIndex]
                        };
                    } else {
                        return prevResponse; // Conserver les réponses existantes
                    }
                })
            }));
        } else {
            // Cas des réponses individuelles : mise à jour d'une seule réponse
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
        <QuizzContext.Provider value={{ maData, addOrUpdateResponse, quizz}}>
            {children}
        </QuizzContext.Provider>
    );
};
//pour passer le systeme de nombre de questions par quizz classique dans le contexts ajouter nombreQuestions, updateNombreQuestions 