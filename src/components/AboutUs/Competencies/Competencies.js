import React from 'react';
import './Competencies.css';

const Competencies = ({ competence }) => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center flex-wrap">
            <p className="competenciesAnimation p-4">{competence.icon}</p>
            <p className="text-center fw-bold">{competence.name}</p>
        </div>
    );
};

export default Competencies;