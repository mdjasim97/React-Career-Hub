import { CiLocationOn, CiPhone, CiDollar } from "react-icons/ci";
import { PiHandbagFill } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import {saveLocalStorage} from "../../Utility/handleStorage";

// react toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
  // toast area
  const handleToast = () => {
    saveLocalStorage(idInt);
    // saveDataStorage(idInt)
    toast("Job Applied Successfull");
  };

  const jobData = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const job = jobData.find((jobs) => jobs.id === idInt);
  // console.log(idInt, job)
  return (
    <div>
      <div className="bg-base-200 ">
        <h1 className="text-5xl font-bold text-center p-10 my-5">
          Job ID : {idInt}
        </h1>
      </div>

      <ToastContainer />

      <div className="grid grid-cols-3 my-10">
        <div className="grid col-span-2 space-y-4 mr-10 text-justify">
          <p>
            <span className="font-semibold">Job Description :</span>
            {job["job_description"]}
          </p>
          <p>
            <span className="font-semibold">Job Responsibility :</span>
            {job["job_responsibility"]}
          </p>
          <p>
            <span className="font-semibold">Educational Requirements: </span>{" "}
            <br />
            {job["educational_requirements"]}
          </p>
          <p>
            <span className="font-semibold">Experiences: </span> <br />
            {job["experiences"]}
          </p>
        </div>

        <div className="">
          <div className="border-2 bg-[#c7ceff]">
            <div className="card-body">
              <h2 className="card-title">Job Details</h2>
              <div className="space-y-2">
                <h3 className="flex flex-row items-center mr-4">
                  {" "}
                  <CiDollar className="text-xl mr-2" />{" "}
                  <span className="font-bold">Salary :</span> {job["salary"]}{" "}
                  per month
                </h3>
                <h3 className="flex">
                  {" "}
                  <PiHandbagFill className="text-xl mr-2" />{" "}
                  <span className="font-bold">Job Title : </span>{" "}
                  {job["job_title"]}
                </h3>
              </div>
              <hr />
              <div className="">
                <h2 className="card-title mb-2">Contact Information</h2>
                <div className="space-y-2">
                  <h3 className="flex flex-row items-center mr-4">
                    {" "}
                    <CiPhone className="text-xl mr-2" />{" "}
                    <span className="font-bold">Phone : </span>{" "}
                    {job["contact_information"]["phone"]}
                  </h3>
                  <h3 className="flex">
                    {" "}
                    <MdOutlineMail className="text-xl mr-2" />{" "}
                    <span className="font-bold">Email : </span>{" "}
                    {job["contact_information"]["email"]}
                  </h3>
                  <h3 className="flex">
                    {" "}
                    <CiLocationOn className="text-xl mr-2" />{" "}
                    <span className="font-bold">Address : </span>{" "}
                    {job["contact_information"]["address"]}
                  </h3>
                </div>
              </div>
              <div className="card-actions justify-center">
                <button
                  onClick={handleToast}
                  className="btn px-10 bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white"
                >
                  Applied Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
