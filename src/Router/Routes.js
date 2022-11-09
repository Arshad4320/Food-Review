import { createBrowserRouter } from "react-router-dom";
import Main from "../Outlet/Main";
import AllService from "../Pages/AllService/AllService";
import Home from "../Pages/Home/Home/Home";
import Review from "../Pages/Review/Review";
import SingleService from "../Pages/Home/Service/SingleService";
import SignUp from "../Pages/SignUp/SignUp";
import Login from './../Pages/Login/Login';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/allService',
                element: <AllService></AllService>,
                loader: () => fetch(`http://localhost:5000/allFoodService`)
            },
            {
                path: '/singleFood/:id',
                element: <SingleService></SingleService>,
                loader: ({ params }) => fetch(`http://localhost:5000/singleFood/${params.id}`)
            }
        ]
    }
])