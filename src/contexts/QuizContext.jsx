import { createContext, useState } from 'react';
import { quizz } from '../data/Questions';

export const QuizzContext = createContext();

export const QuizzProvider = ({ children }) => {
    const [maData, setMaData] = useState({ responses: [] });

    const addOrUpdateResponse = (newResponses) => {
        if (Array.isArray(newResponses)) {
            // Cas des réponses filtrées : mise à jour de l'ensemble des réponses
            setMaData(prevData => ({
                ...prevData,
                responses: newResponses.map(newResponse => {
                    const existingIndex = prevData.responses.findIndex(response => response.question_id === newResponse.question_id);
                    if (existingIndex !== -1) {
                        return {
                            ...prevData.responses[existingIndex],
                            ...newResponse
                        };
                    } else {
                        return newResponse;
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
        <QuizzContext.Provider value={{ maData, addOrUpdateResponse, quizz }}>
            {children}
        </QuizzContext.Provider>
    );
};



