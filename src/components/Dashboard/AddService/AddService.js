import React, { useState } from 'react';
import './AddService.css';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const AddService = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [imageUrl, setImageUrl] = useState();
    const [serviceInfo, setServiceInfo] = useState();

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

    const onSubmit = data => {
        if (imageUrl) {
            let newObject = { ...data }
            newObject.image = imageUrl;
            newObject.serviceProviderName = "Shahinur Alam Bhuiyan"
            newObject.serviceProviderEmail = "shahin12@gmail.com"
            console.log(newObject);

            fetch('http://localhost:5000/addService', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newObject)
            })
                .then(response => {
                    response.json()
                        .then((res) => {
                            if (response.status === 200) {
                                alert('your service uploaded')
                            }
                            if (response.status === 401) {
                                alert('data not uploaded')
                            }
                        })
                })
                .catch(error => {
                    console.error(error)
                })
            // axios.post('http://localhost:5000/addService', newObject)
            //     .then(response => console.log(response.data));
            reset()
        } else {
            alert('please upload  your service photo')
        }
    };

    const Select = React.forwardRef(({ onChange, onBlur, name }, ref) => (
        <>
            <label>Is service available ?</label>
            <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
            </select>
        </>
    ));


    return (
        <section className="addService">
            <div className="addServiceLeft">
                <Sidebar ></Sidebar>
            </div>
            <div className="addServiceRight">
                <h2 className="text-center p-3">Add your service information</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="addProductForm">
                    <div className="addProductItem">
                        <label>Service Name</label>
                        <input type="text" {...register("serviceName", { required: true })} placeholder="Car Washing" />
                    </div>
                    <div className="addProductItem">
                        <label htmlFor="file">
                            <span>Upload Service Image</span>
                            <FontAwesomeIcon
                                className={imageUrl ? "serviceUpdateIconGreen" : "serviceUpdateIconRed"}
                                icon={faUpload} />
                        </label>
                        <input style={{ display: 'none' }} type="file" onChange={handleImageUpload} id="file" />
                    </div>
                    <div className="addProductItem">
                        <label>Service Details</label>
                        <input type="text" {...register("serviceDetails", { required: true })} placeholder="This service is about ..." />
                    </div>
                    <div className="addProductItem">
                        <label>Price</label>
                        <input type="number" {...register("price", { required: true })} placeholder="$ 23" />
                    </div>
                    <div className="addProductItem">

                        <Select label="Age" {...register("isAvaiable", { required: true })} />

                    </div>
                    <input className="addProductButton" type="submit" />
                </form>
            </div>
        </section>
    );
};

export default AddService;