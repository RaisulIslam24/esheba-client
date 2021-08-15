import React, { useEffect, useState } from 'react';
import './SingleServiceDash.css';
import { Publish } from '@material-ui/icons';
import { Link, useParams } from 'react-router-dom';
import Sidebar from '../../Sidebar/Sidebar';
import axios from 'axios';
// import Chart from '../../components/Chart/Chart';


const SingleServiceDash = () => {
    const [serviceInfo, setServiceInfo] = useState({})
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
    console.log(serviceInfo)
    return (
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
                    {/* <div className="serviceTopLeft">
                    <Chart data={serviceData} dataKey="Sales" title="Sales Performance" />
                </div> */}
                    <div className="serviceTopRight">
                        <div>
                            <div className="serviceInfoTop">
                                <img src={serviceInfo.image} alt={serviceInfo.serviceName} className="serviceInfoImg" />
                                <span className="serviceName">{serviceInfo.serviceName}</span>
                            </div>
                            <div className="serviceInfoBottom">

                                <div className="serviceInfoItem">
                                    <span className="serviceInfoKey">Price:</span><span className="serviceInfoValue">$ {serviceInfo.price}</span>
                                </div>
                                <div className="serviceInfoItem">
                                    <span className="serviceInfoKey">Is Available:</span><span className="serviceInfoValue">{serviceInfo.isAvaiable}</span>
                                </div>
                                <div className="providerInfoDash">
                                    <h6>Provider Info</h6>
                                    <div className="serviceInfoItem">
                                        <span className="serviceInfoKey">Name: </span><span className="serviceInfoValue"> {serviceInfo.serviceProviderName}</span>
                                    </div>
                                    <div className="serviceInfoItem">
                                        <span className="serviceInfoKey">Email:</span><span className="serviceInfoValue">{serviceInfo.serviceProviderEmail}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ maxWidth: '450px' }}>
                            <h6>Details: </h6>
                            <p>{serviceInfo.serviceDetails}</p>
                        </div>
                    </div>
                </div>
                <div className="serviceBottom">
                    <form className="serviceForm">
                        <div className="serviceFormLeft">
                            <label>Service Name</label>
                            <input type="text" placeholder={serviceInfo.serviceName} />
                            <label>In Stock</label>
                            <select name="inStock" id="inStock">
                                <option value="yes">No</option>
                                <option value="no">No</option>
                            </select>
                        </div>
                        <div className="serviceFormRight">
                            <div className="serviceUpload">
                                <img src={serviceInfo.image} alt="" className="serviceUploadImg" />
                                <label for="file">
                                    <Publish />
                                </label>
                                <input type="file" id="file" style={{ display: 'none' }} />
                            </div>
                            <button className="serviceButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SingleServiceDash;