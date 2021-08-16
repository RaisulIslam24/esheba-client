import React from 'react';

const ConsumerDetails = (props) => {
  const { _id, photo, role, email, name, isSignedIn } = props.consumers;
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

export default ConsumerDetails;