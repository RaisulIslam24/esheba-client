import React, { useState } from 'react';
import './MakeAdmin.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const MakeAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState();

    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', '5fb422405e02b3782f9ac55b36d77374');
        imageData.append('image', event.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageUrl(response.data.data.display_url);

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    console.log(imageUrl)

    const onSubmit = data => {
        if (imageUrl) {
            let newObject = { ...data }
            newObject.image = imageUrl;
            console.log(newObject);
            fetch('https://e-sheba.herokuapp.com/addAdmin', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newObject)
            })
                .then(response => {
                    response.json()
                        .then((res) => {
                            if (response.status === 200) {
                                alert('Admin of the website is created!')
                            }
                            if (response.status === 401) {
                                alert('something went wrong.Please, try again later!')
                            }
                        })
                })
                .catch(error => {
                    console.error(error)
                })
            reset()
        } else {
            alert('please upload  your service photo')
        }
    };

    return (
        <section className="makeAdmin">
            <Sidebar />
            <div className="makeAdminRight">
                <form onSubmit={handleSubmit(onSubmit)} className="makeAdminForm">
                    <div className="makeAdminItem">
                        <label>Admin Name</label>
                        <input type="text" {...register("adminName", { required: true })} placeholder="Shahinur Alam Bhuiyan" />
                    </div>
                    <div className="makeAdminItem">
                        <label htmlFor="file">
                            <span>Upload Admin Image</span>
                            <FontAwesomeIcon
                                className={imageUrl ? "makeAdminIconGreen" : "makeAdminIconRed"}
                                icon={faUpload} />
                        </label>
                        <input style={{ display: 'none' }} type="file" onChange={handleImageUpload} id="file" />
                    </div>
                    <div className="makeAdminItem">
                        <label>Admin Email</label>
                        <input type="email" {...register("adminEmail", { required: true })} placeholder="shahinur@gmail.com" />
                    </div>
                    <div className="makeAdminItem">
                        <label>Phone Number</label>
                        <input type="number" {...register("phoneNo", { required: true })} placeholder="+880 1839-78735" />
                    </div>
                    <input className="makeAdminButton" style={{ display: imageUrl ? 'block' : 'none' }} type="submit" />
                </form>
            </div>
        </section>
    );
};

export default MakeAdmin;