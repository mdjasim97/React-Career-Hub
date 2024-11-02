
import { Link } from "react-router-dom";
import { CiLocationOn, CiDollar } from "react-icons/ci";
import PropTypes from "prop-types";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    location,
    salary,
    remote_or_onsite,
    job_type,
  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl border p-8">
        <div className="card-body">
          <div>
            <img src={logo} alt="Shoes"/>
          </div>
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="btn btn-sm btn-outline text-[#9873FF] mr-4">
              {remote_or_onsite}
            </button>
            <button className="btn btn-sm btn-outline text-[#9873FF] mr-4">
              {job_type}
            </button>
          </div>
          <div className="flex">
            <h3 className="flex flex-row items-center mr-4">
              <CiLocationOn className="text-xl mr-2" /> {location}
            </h3>
            <h3 className="flex items-center">
              <CiDollar className="text-xl mr-2" /> {salary}
            </h3>
          </div>
          <div className="card-actions">
            <Link
              to={`/job/${id}`}
              className="btn text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
    job : PropTypes.object
}

export default Job;
