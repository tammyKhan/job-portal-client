import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const {
    _id,
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = useLoaderData();

  return (
    <div className="card w-full lg:w-96 bg-base-100 shadow-xl mb-6 mx-auto">
      <figure className="flex justify-center py-4">
        <img
          src={company_logo}
          alt={`${company} logo`}
          className="w-24 h-24 object-contain"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <h3 className="text-xl font-medium text-gray-700">{company}</h3>

        <p className="text-sm text-gray-500 mt-2">
          <strong>Location:</strong> {location}
        </p>
        <p>
          <strong>Salary Range:</strong> {salaryRange.min} - {salaryRange.max}{" "}
          {salaryRange.currency}
        </p>

        <p className="mt-4 text-sm text-gray-800">
          <strong>Description:</strong> {description}
        </p>

        <div className="mt-4">
          <h4 className="font-semibold">Requirements:</h4>
          <ul className="list-disc pl-6 text-sm">
            {requirements.map((req, index) => (
              <li key={index} className="text-gray-600">{req}</li>
            ))}
          </ul>
        </div>

        <div className="card-actions justify-center mt-6">
          <Link to={`/jobApply/${_id}`}>
          <button className="btn btn-primary">Apply Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
