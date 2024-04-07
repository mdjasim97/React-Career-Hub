import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './component/Root/Root.jsx';
import Home from './component/Home/Home.jsx';
import ErrorPage from './component/ErrorPage/ErrorPage';
import AppliedJobs from './component/AppliedJobs/AppliedJobs.jsx';
import JobDetails from './component/JobDetails/JobDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path:'/',
        element : <Home></Home>
      },
      {
        path:'/applied',
        element : <AppliedJobs></AppliedJobs>,
        loader : ()=> fetch("../public/jobs.json")
      },
      {
        path:'/job/:id',
        element : <JobDetails></JobDetails>,
        loader : ()=> fetch('./jobs.json')
      },
      {
        path:'/',
        element : <Home></Home>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
