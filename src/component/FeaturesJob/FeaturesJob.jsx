import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturesJob = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("/jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <h1 className="text-5xl text-center font-bold p-4">Featured Jobs </h1>
      <p className="text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 my-10">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>

      <div className={dataLength === jobs.length && "hidden"}>
        <div className="text-center">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white justify-center"
          >
            See All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesJob;
