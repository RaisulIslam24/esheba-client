import React from 'react';

const Competencies = ({ competence }) => {
    return (
        <section className="container">
            <div className="row p-3 effect">
                <div className="col-md-3">
                    {competence.icon}
                </div>
                <div className="col-md-9">
                    <h5 className="text-success">{competence.name}</h5>
                    <p>{competence.description}</p>
                </div>
            </div>
        </section>
    );
};

export default Competencies;