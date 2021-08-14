import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar';
import './ServiceList.css';

const ServiceList = () => {
    const [services, setServices] = useState([]);
    const [deleteServices, setDeleteServices] = useState([]);
    useEffect(() => {
        fetch('https://e-sheba.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const editService = (id) => {
        const editData = {
            
        }
        fetch(`https://e-sheba.herokuapp.com/editService/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('updated')
            })
    }

    const deleteService = id => {
        fetch(`https://e-sheba.herokuapp.com/deleteService/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                const remainService = deleteServices.filter(service => service._id !== result)
                setDeleteServices(remainService)
                alert('Service have been deleted successfully')
            })
    }
    return (
        <section className="serviceList">
            <div className="serviceListLeft">
                <Sidebar></Sidebar>
            </div>
            <div className="serviceListRight">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Service Name</th>
                            <th scope="col">Image</th>
                            <th scope="col">Price</th>
                            <th scope="col">Available</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {
                        services.map(service =>
                            <tbody>
                                <tr>
                                    <td>{service.serviceName}</td>
                                    <td><img className="serviceImageDashboard" src={service.image} alt="" /></td>
                                    <td>$ {service.price}</td>
                                    <td>{service.isAvaiable}</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <button onClick={() => editService(service._id)} className="btn btn-success me-2"><FontAwesomeIcon icon={faEdit} /></button>
                                            <button onClick={() => deleteService(service._id)} className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>)
                    }
                </table>
            </div>
        </section>
    );
};

export default ServiceList;