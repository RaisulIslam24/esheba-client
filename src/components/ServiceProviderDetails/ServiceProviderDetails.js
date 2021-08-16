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
import Sidebar from '../../pages/Dashboard/Sidebar/Sidebar';

const ServiceProviderDetails = (props) => {
  const { _id, photo, role, email, name, isSignedIn } = props.serviceProviders;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
            <Sidebar />
        </div>
        <div className="col-9">
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
                  <td> <img src={photo} alt="" style={{ width: "50px", borderRadius: "50%" }} /> </td>
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