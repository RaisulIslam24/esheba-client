import React, { useEffect, useState } from 'react';
import './ServiceList.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

import { DataGrid } from "@material-ui/data-grid";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from '@material-ui/icons/Edit';

import Sidebar from '../Sidebar/Sidebar';
import TopBarDash from '../TopBarDash/TopBarDash';


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

        // Fancy pop up
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                );

                setIds(id)
                console.log(id, 'clicked')
                fetch(`https://e-sheba.herokuapp.com/deleteService/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(result => { console.log(result) })
            }
        })

    }




    const columns = [
        { field: "_id", hide: true },
        {
            field: "service",
            headerName: "Service",
            editable: true,
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="serviceListItem">
                        <img className="serviceListImg" src={params?.row?.serviceImage} alt="" />
                        {params?.row?.serviceName}
                    </div>
                );
            },
        },
        {
            field: "price",
            headerName: "Price",
            width: 120,
            editable: true,
        },
        {
            field: "isAvaiable",
            headerName: "Availability",
            width: 160,
            editable: true,
        },
        {
            field: "serviceProviderName",
            headerName: "Provider name",
            width: 260,
            editable: true,
        },
        {
            field: "action",
            headerName: "Action",
            width: 150,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/singleService/" + params?.row?._id}>
                            <EditIcon className="serviceListEdit" />
                        </Link>

                        <DeleteOutlineIcon
                            className="serviceListDelete"
                            onClick={() => deleteService(params?.row?._id)}
                        />
                    </>
                );
            },
        },
    ];

    return (
        <>
            <TopBarDash />
            <section className="serviceList">
                <Sidebar></Sidebar>
                <div className="serviceListRight">
                    <DataGrid
                        className="serviceDataTable"
                        rows={services}
                        columns={columns}
                        getRowId={(row) => row?._id}
                        pageSize={12}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </div>
            </section>
        </>
    );
};

export default ServiceList;