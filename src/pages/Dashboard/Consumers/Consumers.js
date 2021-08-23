import React, { useState, useEffect } from 'react';
import './Consumers.css';
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

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});


const Consumer = () => {
    const classes = useStyles();
    const [consumers, setConsumers] = useState([]);
    const [ids, setIds] = useState(null);


    useEffect(() => {
        fetch('https://e-sheba.herokuapp.com/loadAll/consumer')
            .then(res => res.json())
            .then(data => setConsumers(data))
    }, [])


    // Immediately delete form frontEnd
    useEffect(() => {
        setConsumers(consumers.filter((item) => item._id !== ids))
    }, [ids])

    // Delete service onClick
    const deleteProvider = (id) => {
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
                fetch(`https://e-sheba.herokuapp.com/deleteConsumer/${id}`, {
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
            <section className="consumers">
                <Sidebar />
                <div className="consumersRight">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="tableHeadBold" align="left">Consumers Name</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Consumers Email</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Role</TableCell>
                                    <TableCell className="tableHeadBold" align="left">Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {consumers.map((consumer) => (
                                    <TableRow key={consumer._id}>
                                        <TableCell align="left">
                                            <img className="consumerImage" src={consumer.photo} alt="" />
                                            &nbsp;  &nbsp;{consumer.name}
                                        </TableCell>
                                        <TableCell align="left">{consumer.email}</TableCell>
                                        <TableCell align="left">{consumer.role}</TableCell>
                                        <TableCell align="left">
                                            <DeleteOutlineIcon
                                                className="deleteConsumerIcon"
                                                onClick={() => deleteProvider(consumer._id)}
                                            />
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

export default Consumer;