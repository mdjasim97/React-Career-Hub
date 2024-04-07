import React from 'react';
import { Link } from 'react-router-dom';
import { CiLocationOn, CiDollar } from "react-icons/ci";

const Job = ({ job }) => {
    // console.log(job)
    const {id, logo, job_title, company_name, location, salary, remote_or_onsite, job_type } = job
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl border p-8">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className='btn btn-sm btn-outline mr-4'>{remote_or_onsite}</button>
                        <button className='btn btn-sm btn-outline mr-4'>{job_type}</button>
                    </div>
                    <div className='flex'>
                        <h3 className='flex flex-row items-center mr-4'> <CiLocationOn className='text-xl mr-2' /> {location}</h3>
                        <h3 className='flex items-center'> <CiDollar className='text-xl mr-2' /> {salary}</h3>
                    </div>
                    <div className="card-actions">
                        <Link to={`/job/${id}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;