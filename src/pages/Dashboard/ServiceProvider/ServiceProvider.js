import React, { useState, useEffect } from 'react';
import './ServiceProvider.css';
import Sidebar from '../Sidebar/Sidebar';
import TopBarDash from '../TopBarDash/TopBarDash';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const ServiceProvider = () => {
    const classes = useStyles();
    const [serviceProviders, setServiceProviders] = useState([]);
    useEffect(() => {
        fetch('https://e-sheba.herokuapp.com/loadAll/service-provider')
            .then(res => res.json())
            .then(data => setServiceProviders(data))
    }, [])
    return (
        <>
            <TopBarDash />
            <section className="serviceProviders">
                <Sidebar />
                <div className="serviceProvidersRight">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="tableHeadBold" align="left">Service Provider Name</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Service Provider Email</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Role</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {serviceProviders.map((serviceProvider) => (
                                    <TableRow key={serviceProvider._id}>
                                        <TableCell align="left">
                                            <img className="serviceProvidersImage" src={serviceProvider.photo} alt="" />
                                            &nbsp;{serviceProvider.name}
                                        </TableCell>
                                        <TableCell align="left">{serviceProvider.email}</TableCell>
                                        <TableCell align="left">{serviceProvider.role}</TableCell>
                                        <TableCell align="left"><DeleteOutlineIcon className="deleteServiceProviderIcon" /></TableCell>
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

export default ServiceProvider;