import React, { createContext, useState } from 'react';
import { quizz } from '../data/Questions';

export const QuizzContext = createContext();

export const QuizzProvider = ({ children }) => {
    const [maData, setMaData] = useState({ responses: [] });
    const [autoEvalIndex, setAutoEvalIndex] = useState('');
    const [category, setCategory] = useState('');
    const [nombreQuestions, setNombreQuestions] = useState(10);

    const updateFilters = (evalIndex, category) => {
        setAutoEvalIndex(evalIndex);
        setCategory(category);
    };

    const updateNombreQuestions = (number) => {
        setNombreQuestions(number);
    };

    const addOrUpdateResponse = (newResponses) => {
        if (Array.isArray(newResponses)) {
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
                        return prevResponse;
                    }
                })
            }));
        } else {
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

    const getFilteredQuestions = () => {
        const filteredQuestions = quizz.questions.filter(question => {
            const response = maData.responses.find(response => response.question_id === question.question_id);
            const evalMatch = autoEvalIndex ? response?.evalIndex === parseInt(autoEvalIndex, 10) : true;
            const categoryMatch = category ? question.category === category : true;
            return evalMatch && categoryMatch;
        });

        if (autoEvalIndex === 'aleatoire') {
            return filteredQuestions.sort(() => 0.5 - Math.random()).slice(0, nombreQuestions);
        }

        return filteredQuestions.slice(0, nombreQuestions);
    };

    return (
        <QuizzContext.Provider value={{ maData, autoEvalIndex, category, nombreQuestions, updateFilters, updateNombreQuestions, addOrUpdateResponse, getFilteredQuestions }}>
            {children}
        </QuizzContext.Provider>
    );
};