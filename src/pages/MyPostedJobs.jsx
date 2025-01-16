import React, { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";

const MyPostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:3000/jobs?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user.email]);

  return (
    <div>
      <h2 className="text-3xl">myPostedJobs : {jobs.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Job Title</th>
              <th>Deadline</th>
              <th>Application Count</th>
            </tr>
          </thead>
          <tbody>
            {
              jobs.map((job, i) => <tr>
                <th>{i + 1}</th>
                <td>{job.title}</td>
                <td>{job.applicationDeadline}</td>
                <td>{job.applicationCount}</td>
              </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedJobs;
