import {
  createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply";
import MyApplications from "../pages/MyApplications";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2>Not Found</h2>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/jobs/:id',
        element: <PrivateRoute>
          <JobDetails></JobDetails>
        </PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
      },
      {
        path: '/jobApply/:id',
        element: <PrivateRoute>
          <JobApply></JobApply>
        </PrivateRoute>,       
      },
      {
        path: '/viewApplications/:job_id',
        element: <PrivateRoute>
          <ViewApplications></ViewApplications>
        </PrivateRoute>,  
        loader: ({params}) => fetch(`http://localhost:3000/job-applications/jobs/${params.job_id}`)     
      },
      {
        path: '/myApplications',
        element: <PrivateRoute>
          <MyApplications></MyApplications>
        </PrivateRoute>,
      },
      {
        path: '/addJob',
        element: <PrivateRoute>
          <AddJob></AddJob>
        </PrivateRoute>,
      },
      {
        path: '/myPostedJobs',
        element: <PrivateRoute>
          <MyPostedJobs></MyPostedJobs>
        </PrivateRoute>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/signIn',
        element: <SignIn></SignIn>
      },
    ]
  },
]);
export default router;