import React from 'react';

const FeaturesDetails = (props) => {
  const { id, name, image } = props.feature;
  return (
    <div className="col-md-4 mt-3">
      <div className="card mx-2">
        <img src={image} className="card-img-top" alt="..." style={{ height: '18rem' }} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
      </div>
    </div>
  );
};

export default FeaturesDetails;