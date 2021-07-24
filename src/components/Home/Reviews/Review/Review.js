import React from 'react';

const cardText = {
    height: "180px",
    overflowY: "scroll",
    fontSize: "15px",
    fontWeight: "400",
}

const Review = () => {
    return (
        <div>
            <div className="card shadow-sm" style={{ width: '350px', height: '300px' }}>
                <div className="card-body">
                    <p className="card-text text-secondary" style={cardText}>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatibus alias facere at. Quaerat distinctio rem autem rerum inventore? Est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique asperiores adipisci maiores quibusdam minima et animi hic, debitis, rerum officia eaque assumenda at porro inventore, molestiae blanditiis aut! Sapiente, ullam!
                    </p>
                </div>
                <div className="card-footer d-flex justify-content-around align-items-center pr-5">
                    <img src="https://i.ibb.co/C0ZKSn5/5-BM9z-Ck-Hgs-Xq.jpg" width='50' style={{borderRadius:'50%'}} alt="" />
                    <div>
                        <h6 className="text-brand">Shahinur Alam Bhuiyan</h6>
                        <small>from Dhaka</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;