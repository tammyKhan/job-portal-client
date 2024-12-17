import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {
  const {title, company} = useLoaderData();
  
  return (
    <div>
      <h2>Title:{title}</h2>
      <h2>Company:{company}</h2>
    </div>
  );
};

export default JobDetails;