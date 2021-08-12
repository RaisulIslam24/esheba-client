import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faShoppingCart,
    faCommentAlt,
    faShoppingBasket,
    faPlus,
    faUserPlus,
    faTrash,
    faHome,
    faSignOutAlt,
    faList
  } from "@fortawesome/free-solid-svg-icons";
import './ServiceProviderDetails.css';

const ServiceProviderDetails = (props) => {
    const {_id,photo,role,email,name,isSignedIn} =props.serviceProviders;
    return (
        <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
              <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">DashBoard</span>
              </a>
              <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
         
              
                <li className="my-2">  
                <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faUserPlus}/> <span className="ms-1 d-none d-sm-inline">Add Service</span> 
                  
                </li>
                <li className="my-2">
                <Link to="/loadAll/service-provider" style={{ textDecoration:"none"}}> 
                     <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faList}/>  <span className="ms-1 d-none d-sm-inline">Service Provider List</span> 
                   </Link> 
                 </li>
                 <li className="my-2">
                <Link to="/loadAll/consumer" style={{ textDecoration:"none"}}> 
                     <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faList}/>  <span className="ms-1 d-none d-sm-inline">Consumer List</span> 
                   </Link> 
                 </li>
                 
             
                <li className="my-2">
               <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faHome}/> <span className="ms-1 d-none d-sm-inline">Home</span> 
                   
                </li>
                 
                <li className="my-2">
               <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faSignOutAlt}/> <span className="ms-1 d-none d-sm-inline">Logout</span> 
                   
                </li>
               
               
              </ul>
              <hr />
              
            </div>
          </div>
          <div className="col py-3">
            <div>
          <table className="table table-dark table-hover">
            <thead>
              <tr>
              <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td> <img src={photo} alt="" style={{width:"50px",borderRadius:"50%"}} /> </td>
              <th scope="row">{name}</th>
              <td>{email}</td>
              <td>{role}</td>
              </tr>
              <tr>
              <td> <img src={photo} alt="" style={{width:"50px",borderRadius:"50%"}} /> </td>
              <th scope="row">{name}</th>
              <td>{email}</td>
              <td>{role}</td>
              </tr>
              <tr>
              <td> <img src={photo} alt="" style={{width:"50px",borderRadius:"50%"}} /> </td>
              <th scope="row">{name}</th>
              <td>{email}</td>
              <td>{role}</td>
              </tr>
           
            </tbody>
          </table>
        </div>
          </div>
        </div>
      </div>
      );
  };

export default ServiceProviderDetails;