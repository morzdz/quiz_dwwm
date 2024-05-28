import { Button } from '@mui/material';

const AutoEvaluation = ({ selectedEvaluationIndex, handleSelectEvaluation }) => {
    return (
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
    );
};

export default AutoEvaluation;
