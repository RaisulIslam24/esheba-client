import React, { useEffect, useState } from 'react';
import './ServiceList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../Sidebar/Sidebar';
import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { Link } from "react-router-dom";

const ServiceList = () => {
    const [services, setServices] = useState([]);
    const [ids, setIds] = useState(null);

    // Fetch all service
    useEffect(() => {
        fetch('https://e-sheba.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    // Immediately delete form frontEnd
    useEffect(() => {
        setServices(services.filter((item) => item._id !== ids))
    }, [ids])

    // Delete service onClick
    const deleteService = (id) => {
        setIds(id)
        console.log(id, 'clicked')
        fetch(`http://localhost:5000/deleteService/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    }

    const columns = [
        { field: "_id", hide: true },
        {
            field: "service",
            headerName: "Service",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="productListItem">
                        <img className="productListImg" src={params?.row?.image} alt="" />
                        {params?.row?.serviceName}
                    </div>
                );
            },
        },
        {
            field: "price",
            headerName: "Price",
            width: 120,
        },
        {
            field: "isAvaiable",
            headerName: "Availability",
            width: 160,
        },
        {
            field: "serviceProviderName",
            headerName: "Provider name",
            width: 260,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/singleService/" + params?.row?._id}>
                            <button className="productListEdit">Edit</button>
                        </Link>
                        <DeleteOutlineIcon
                            className="productListDelete"
                            onClick={() => deleteService(params?.row?._id)}
                        />
                    </>
                );
            },
        },
    ];

    // const editService = (id) => {
    //     const editData = {

    //     }
    //     fetch(`https://e-sheba.herokuapp.com/editService/${id}`, {
    //         method: 'PATCH',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(editData)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('updated')
    //         })
    // }

    return (
        <section className="serviceList">
            <div className="serviceListLeft">
                <Sidebar></Sidebar>
            </div>
            <div className="productList">
                <DataGrid
                    className="productDataTable"
                    rows={services}
                    columns={columns}
                    getRowId={(row) => row?._id}
                    pageSize={12}
                    checkboxSelection
                    disableSelectionOnClick
                />
            </div>
        </section>

    );
};

export default ServiceList;

{/* onClick={() => editService(service._id)} */ }
{/*  onClick={() => deleteService(service._id)} */ }



//     <section className="serviceList">
        //         <div className="serviceListLeft">
        //             <Sidebar></Sidebar>
        //         </div>
        //         <div className="serviceListRight">
        //             <table class="table table-striped">
        //                 <thead>
        //                     <tr>
        //                         <th scope="col">Service Name</th>
        //                         <th scope="col">Image</th>
        //                         <th scope="col">Price</th>
        //                         <th scope="col">Available</th>
        //                         <th scope="col">Action</th>
        //                     </tr>
        //                 </thead>
        //                 { 
        //                     services.map(service =>
        //                         <tbody>
        //                             <tr>
        //                                 <td>{service.serviceName}</td>
        //                                 <td><img className="serviceImageDashboard" src={service.image} alt="" /></td>
        //                                 <td>$ {service.price}</td>
        //                                 <td>{service.isAvaiable}</td>
        //                                 <td>
        //                                     <div className="d-flex align-items-center">
        //                                         <button className="btn btn-success me-2"><FontAwesomeIcon icon={faEdit} /></button>
        //                                         <button className="btn btn-danger"><FontAwesomeIcon icon={faTrashAlt} /></button>
        //                                     </div>
        //                                 </td>
        //                             </tr>
        //                         </tbody>)
        //                 }
        //             </table>
        //         </div>
        // </section>