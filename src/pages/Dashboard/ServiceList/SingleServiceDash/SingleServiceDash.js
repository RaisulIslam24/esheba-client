import React, { useEffect, useState } from 'react';
import './SingleServiceDash.css';
import { Publish } from '@material-ui/icons';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import TopBarDash from '../../TopBarDash/TopBarDash';


const SingleServiceDash = () => {
    const { register, handleSubmit, reset } = useForm();
    const [serviceInfo, setServiceInfo] = useState({})
    const [imageUrl, setImageUrl] = useState();
    const { id } = useParams();


    const getService = () => {
        axios.get('https://e-sheba.herokuapp.com/serviceDetails/' + id)
            .then((response) => {
                if (response.status === 200) {
                    setServiceInfo(response.data);
                }
            })
    }
    useEffect(() => {
        getService();
    }, [id])


    // Upload Image to imgBB and take url
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

    // ............handle update ..........
    const onSubmit = (data) => {
        let newServiceInfo = { ...serviceInfo }
        if (data.serviceName) {
            newServiceInfo.serviceName = data.serviceName;
        }
        if (data.price) {
            newServiceInfo.price = data.price;
        }
        if (data.isAvaiable) {
            newServiceInfo.isAvaiable = data.isAvaiable;
        }

        if (imageUrl) {
            newServiceInfo.serviceImage = imageUrl;
        }

        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: `Save`,
            denyButtonText: `Don't save`,
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://e-sheba.herokuapp.com/updateService/${id}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newServiceInfo)
                })
                    .then(res => res.json())
                    .then(data => {


                        Swal.fire('Saved!', '', 'success');
                        getService();
                        reset();


                    }).catch((err) => console.log(err))

            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info');
                reset();
            }
        })

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
        <>
            <TopBarDash />
            <section className="service">
                <Sidebar />
                <div className="serviceRight">
                    <div className="serviceItemContainer">
                        <h1 className="serviceTitle">Service Info</h1>
                        <Link to='/addService'>
                            <button className="serviceAddButton">Create</button>
                        </Link>
                    </div>
                    <div className="serviceTop">
                        <div className="serviceTopRight">
                            <div>
                                <div className="serviceInfoTop">
                                    <img src={serviceInfo?.serviceImage} alt={serviceInfo?.serviceName} className="serviceInfoImg" />
                                    <span className="serviceName">{serviceInfo?.serviceName}</span>
                                </div>
                                <div className="serviceInfoBottom">

                                    <div className="serviceInfoItem">
                                        <span className="serviceInfoKey">Price:</span><span className="serviceInfoValue">$ {serviceInfo?.price}</span>
                                    </div>
                                    <div className="serviceInfoItem">
                                        <span className="serviceInfoKey">Is Available:</span><span className="serviceInfoValue">{serviceInfo?.isAvaiable}</span>
                                    </div>
                                    <div className="providerInfoDash">
                                        <h6>Provider Info</h6>
                                        <div className="serviceInfoItem">
                                            <span className="serviceInfoKey">Name: </span><span className="serviceInfoValue"> {serviceInfo?.serviceProviderName}</span>
                                        </div>
                                        <div className="serviceInfoItem">
                                            <span className="serviceInfoKey">Email:</span><span className="serviceInfoValue">{serviceInfo?.serviceProviderEmail}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ maxWidth: '450px' }}>
                                <h6>Details: </h6>
                                <p>{serviceInfo?.serviceDetails}</p>
                            </div>
                        </div>
                    </div>


                    {/* for updating data */}
                    <div className="serviceBottom">
                        <form className="serviceForm" onSubmit={handleSubmit(onSubmit)}>

                            <div className="serviceFormLeft">

                                <label>Service Name</label>
                                <input type="text"  {...register("serviceName")} placeholder={serviceInfo?.serviceName} />


                                <label>Price</label>
                                <input type="number"  {...register("price")} placeholder={`$ ${serviceInfo?.price}`} />

                                <Select label="Age" {...register("isAvaiable")} />
                            </div>
                            <div className="serviceFormRight">
                                <div className="serviceUpload">
                                    <img src={serviceInfo?.serviceImage} alt="" className="serviceUploadImg" />
                                    <label for="file">
                                        <Publish className={imageUrl ? "serviceUpdateIconGreen" : "serviceUpdateIconRed"} />
                                    </label>
                                    <input type="file" id="file" style={{ display: 'none' }} onChange={handleImageUpload} />

                                </div>
                                <button type="submit" className="serviceButton">Update</button>

                            </div>
                        </form>
                    </div>


                </div>
            </section>
        </>
    );
};

export default SingleServiceDash;