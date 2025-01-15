import React from "react";

const AddJob = () => {
  return (
    <div>
      <h2 className="text-3xl">Post a new job</h2>

      <form className="card-body">
        {/* job title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            className="input input-bordered"
            required
          />
        </div>

        {/* job location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Job Location"
            className="input input-bordered"
            required
          />
        </div>

        {/* Company Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Name</span>
          </label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            className="input input-bordered"
            required
          />
        </div>

        {/* hr email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Hr_Email</span>
          </label>
          <input
            type="text"
            name="hr_email"
            placeholder="Hr_Email"
            className="input input-bordered"
            required
          />
        </div>

        {/*Hr-NAme*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Hr_Name</span>
          </label>
          <input
            type="text"
            name="hr_name"
            placeholder="Hr_Name"
            className="input input-bordered"
            required
          />
        </div>

        {/*Company_logo*/}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Company Logo</span>
          </label>
          <input
            type="text"
            name="company_logo"
            placeholder="Company Logo"
            className="input input-bordered"
            required
          />
        </div>

        {/* job jobType */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Type</span>
          </label>
          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Pick a job Type
            </option>
            <option>Full-Time</option>
            <option>Intern</option>
            <option>Part-Time</option>
            <option>Hybrid</option>
          </select>
        </div>

        {/* job category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Category</span>
          </label>
          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              Pick a job Category
            </option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Teaching</option>
          </select>
        </div>

        {/* salary range */}
        
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-end">
       <div className="form-control">
          <label className="label">
            <span className="label-text">Salary range</span>
          </label>
          <input
            type="text"
            name="min"
            placeholder="Min"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          
          <input
            type="text"
            name="max"
            placeholder="Max"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          
          <select className="select select-ghost w-full max-w-xs">
            <option disabled selected>
              currency
            </option>
            <option>BDT</option>
            <option>USD</option>
            <option>INR</option>
          </select>
        </div>

       </div>

        {/* job description */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job description</span>
          </label>
          
          <textarea className="textarea textarea-bordered" name="description" placeholder="Job description" required></textarea>
        </div>

        {/* requirements */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job requirements</span>
          </label>
          
          <textarea className="textarea textarea-bordered" name="requirements" placeholder="Put each requirements in a new line" required></textarea>
        </div>

        {/* responsibilities */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job responsibilities</span>
          </label>
          
          <textarea className="textarea textarea-bordered" name="responsibilities" placeholder="Write each responsibilities in a new line" required></textarea>
        </div>

        {/* Submit button */}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
