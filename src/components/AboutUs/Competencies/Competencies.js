import React from 'react';
import './Competencies.css';

const Competencies = ({ competence }) => {
    return (
        <section className="container">
            <div className="p-5 animation">
                <p className="text-center">{competence.icon}</p>
                <h6 className="text-center">{competence.name}</h6>
            </div>
        </section>
    );
};

export default Competencies;