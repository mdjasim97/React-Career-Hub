import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStorageData } from '../../Utility/handleStorage';
import { Link } from 'react-router-dom';
import { CiLocationOn, CiDollar } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";

const AppliedJobs = () => {

    const jobs = useLoaderData()


    const [appliedJobs, setAppliedJobs] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])


    useEffect(() => {
        const storeJobId = getStorageData();
        if (jobs.length > 0) {

            // const jobsApplied = jobs.filter(job => storeJobId.includes(job.id));


            const jobsApplied = []
            for (const id of storeJobId) {
                const job = jobs.find(job => job.id === id);
                if (job) {
                    jobsApplied.push(job)
                    console.log(job)
                }
            }

            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied)
        }
    }, [])



    const handleFillterJob = (filter) => {
        if (filter === "Remote") {
            const remoteJob = appliedJobs.filter(remote => remote["remote_or_onsite"] === "Remote")
            setDisplayJobs(remoteJob)
        }
        else if (filter === "Onsite") {
            const remoteJob = appliedJobs.filter(remote => remote["remote_or_onsite"] === "Onsite")
            setDisplayJobs(remoteJob)
        }
        else if (filter === "All") {
            setDisplayJobs(appliedJobs)
        }

    }


    // console.log(job)

    return (
        <div>
            <div className='bg-[#e7e4e4] p-24 my-10'>
                <h1 className='text-5xl font-bold text-center'>Applied Job : {appliedJobs.length} </h1>
            </div>

            <div className='text-end'>
                <details className="dropdown">
                    <summary className="m-1 btn">Filter By <IoMdArrowDropdown /></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 text-end rounded-box w-52">
                        <li><button onClick={() => handleFillterJob("All")}>All</button></li>
                        <li><button onClick={() => handleFillterJob("Remote")}>Remote</button></li>
                        <li><button onClick={() => handleFillterJob("Onsite")}>Onsite</button></li>
                    </ul>
                </details>
            </div>

            {
                displayJobs.map(job => <div className='grid grid-cols-1 border p-6 my-6 lg:grid-cols-6'>
                    <div className=' card-body min-h-44 w-44 border justify-center items-center bg-red-200'>
                        <figure><img src={job.logo} alt="Shoes" /></figure>
                    </div>

                    <div className="col-span-4  card-body">
                        <h2 className="card-title">{job["job_title"]}</h2>
                        <p>{job["company_name"]}</p>
                        <div>
                            <button className='btn btn-sm btn-outline mr-4'>{job["remote_or_onsite"]}</button>
                            <button className='btn btn-sm btn-outline mr-4'>{job["job_type"]}</button>
                        </div>
                        <div className='flex'>
                            <h3 className='flex flex-row items-center mr-4'> <CiLocationOn className='text-xl mr-2' /> {job["location"]}</h3>
                            <h3 className='flex items-center'> <CiDollar className='text-xl mr-2' /> {job["salary"]}</h3>
                        </div>
                    </div>

                    <div className="card-actions justify-end items-center">
                        <Link to={`/job/${job["id"]}`} className="btn btn-primary">View Details</Link>
                    </div>
                </div>)
            }

        </div>
    );
};

export default AppliedJobs;