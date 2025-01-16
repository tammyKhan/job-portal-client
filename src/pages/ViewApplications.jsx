import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const applications = useLoaderData();

  const handleStatusUpdate = (e, id) => {
     console.log(e.target.value, id)

     const data = {
      status: e.target.value
     }

     fetch(`http://localhost:3000/job-applications/${id}`,{
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
     })
     .then(res => res.json())
     .then(data => {
        if(data.modifiedCount){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Status has been updated",
              showConfirmButton: false,
              timer: 1500
            });
           
          }
     })
  }

  return (
    <div>
      <h2 className="text-3xl">
        Applications for this job : {applications.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>Status</th>
              <th>Update Status</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{app.applicant_email}</td>
                <td>{app.linkedIn}</td>
                <td>
                  <select 
                  onChange={(e) => handleStatusUpdate(e, app._id)}
                  defaultValue={app.status || 'Change Status'}
                  className="select select-bordered select-xs w-full max-w-xs">
                    <option disabled >
                      Change Status
                    </option>
                    <option>Under Review</option>
                    <option>Set InterView</option>
                    <option>Hired</option>
                    <option>Rejected</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewApplications;
