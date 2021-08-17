import React from 'react';
import './ServiceProviderDetails.css';

const ServiceProviderDetails = (props) => {

  const { _id, photo, role, email, name, isSignedIn } = props.serviceProviders;
  console.log()
  return (
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
  );
};

export default ServiceProviderDetails;