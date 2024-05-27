import React, { useState } from 'react';
import { Button } from '@mui/material';

const AutoEvaluation = ({ selectedEvaluationIndex, handleSelectEvaluation }) => {
    const [evalIndex, setEvalIndex] = useState(selectedEvaluationIndex);

    const handleEvaluationClick = (index) => {
        setEvalIndex(index);
        handleSelectEvaluation(index);
    };

    return (
        <div id="eval-btn">
            {['Non acquis', 'Partiellement acquis', 'Acquis'].map((evaluation, index) => (
                <Button
                    key={index}
                    id={evalIndex === index ? 'selected-answer' : ''}
                    onClick={() => handleEvaluationClick(index)}
                    variant='outlined'
                >
                    {evaluation}
                </Button>
            ))}
        </div>
    );
};

export default AutoEvaluation;