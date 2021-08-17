import React, { useContext, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { userContext } from '../../../App';
import TopBarDash from '../TopBarDash/TopBarDash';
import Swal from 'sweetalert2';


const AddReview = () => {
    const [loggedInUser] = useContext(userContext);
    const [userReview, setUserReview] = useState({
        name: loggedInUser.name,
        email: loggedInUser.email,
        description: '',
        photo: loggedInUser.photo || 'https://i.ibb.co/CzkSST0/avater.png'
    });

    // For capturing form data
    const handleBlur = (e) => {
        const newReview = { ...userReview };
        newReview[e.target.name] = e.target.value;
        setUserReview(newReview);
    }


    // For uploading user review to the database
    const handleSubmit = (e) => {
        let today = new Date();
        let todayDate = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();
        let newData = { ...userReview, date: todayDate };
        fetch('https://e-sheba.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        title: 'Done!',
                        text: 'Thank you so much for your valuable review!',
                        icon: 'success'
                    })
                    console.log(data)
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Your review already exist!',
                    })
                }
            })

        e.preventDefault();
    }

    console.log(userReview);
    return (
        <>
            <TopBarDash />
            <div className="consumers">
                <Sidebar />
                <div className="consumersRight">
                    <h3>Add Review</h3>
                    <br />
                    <div className="d-flex justify-content-center">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="address" onBlur={handleBlur} className="form-control mt-2" id="address" placeholder="Your Address" required />
                                <textarea name="description" onBlur={handleBlur} className="form-control mt-2" rows={3} id="description" placeholder="Description" required></textarea>
                                <div className="text-center"><button type="submit" className="btn btn-success mt-3">Submit</button></div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default AddReview;