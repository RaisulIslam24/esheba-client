import React from 'react';
// import { useForm } from "react-hook-form";
import './AddReview.css';
import Sidebar from '../Sidebar/Sidebar';


const AddReview = () => {
    // const { register, handleSubmit } = useForm();

    return (
        <section className="addReview">
                <Sidebar />
            <div className="addReviewRight">
                <div>
                    <h3>Review</h3>
                    <br />
                    {/* <form onSubmit={handleSubmit}>
                        <input name="name" ref={register} className="form-control" placeholder="Your Name" />
                        <br />
                        <textarea name="description" ref={register} rows="3" className="form-control" placeholder="Description"></textarea>
                        <br />
                        <input className="btn btn-success" type="submit" value="Submit" />
                    </form> */}
                </div>
            </div>
        </section>
    );
};

export default AddReview;