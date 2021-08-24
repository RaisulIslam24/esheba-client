import React, { useState, useEffect, useContext } from 'react';
import './ProviderOwnServices.css';
import Sidebar from '../Sidebar/Sidebar';
import TopBarDash from '../TopBarDash/TopBarDash';
import Swal from 'sweetalert2';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from '@material-ui/icons/Edit';
import { userContext } from '../../../App';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const ProviderOwnServices = () => {
    const classes = useStyles();
    const [loggedInUser] = useContext(userContext)
    const [providerOwnServices, setProviderOwnServices] = useState([]);
    const [ids, setIds] = useState(null);

    useEffect(() => {
        fetch(`https://e-sheba.herokuapp.com/provider-own-service/${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setProviderOwnServices(data))
    }, [])

    // Immediately delete form frontEnd
    useEffect(() => {
        setProviderOwnServices(providerOwnServices.filter((item) => item._id !== ids))
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
                fetch(`https://e-sheba.herokuapp.com/delete-provider-own-service/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(result => { console.log(result) })
            }
        })
    }


    return (
        <>
            <TopBarDash />
            <section className="providerOwnServices">
                <Sidebar />
                <div className="providerOwnServicesRight">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="tableHeadBold" align="left">Sl.</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Service Name</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Price</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Is Available</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {providerOwnServices.map((providerOwnService, index) => (
                                    <TableRow key={providerOwnService._id}>
                                        <TableCell align="left">{index + 1}</TableCell>
                                        <TableCell align="left">
                                            <img className="providerOwnServiceImage" src={providerOwnService.serviceImage} alt="" />
                                            &nbsp;  &nbsp;{providerOwnService.serviceName}
                                        </TableCell>
                                        <TableCell align="left">$ {providerOwnService.price}</TableCell>
                                        <TableCell align="left">{providerOwnService.isAvaiable}</TableCell>
                                        <TableCell align="left">
                                            <Link to={"/singleService/" + providerOwnService._id}>
                                                <EditIcon className="serviceListEdit" />
                                            </Link>
                                            <DeleteOutlineIcon
                                                className="deleteProviderOwnServiceIcon"
                                                onClick={() => deleteService(providerOwnService._id)} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </section>
        </>
    );
};

export default ProviderOwnServices;