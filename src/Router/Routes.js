import { createBrowserRouter } from "react-router-dom";
import Main from "../Outlet/Main";
import AllService from "../Pages/AllService/AllService";
import Home from "../Pages/Home/Home/Home";
import Review from "../Pages/Review/Review";
import SingleService from "../Pages/Home/Service/SingleService";
import SignUp from "../Pages/SignUp/SignUp";
import Login from './../Pages/Login/Login';
import MyReview from "../Pages/MayReview/MyReview";
import AllFoodReview from "../Pages/AllFoodReview/AllFoodReview";
import PrivateRoute from "./PrivetRoute";
import AddItems from "../Pages/AddItems/AddItems";
import UpdateReview from "../Pages/UpdateReview/UpdateReview";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/ErrorPage/Error";


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
                path: '/blogs',
                element: <Blog></Blog>
            },
            {
                path: '/allService',
                element: <AllService></AllService>,
                loader: () => fetch(`https://food-server-two.vercel.app/allFoodService`)
            },
            {
                path: '/singleFood/:id',
                element: <SingleService></SingleService>,
                loader: ({ params }) => fetch(`https://food-server-two.vercel.app/singleFood/${params.id}`)
            },
            {
                path: '/review/:id',
                element: <PrivateRoute><Review></Review></PrivateRoute>,
                loader: ({ params }) => fetch(`https://food-server-two.vercel.app/singleFood/${params.id}`)
            },
            {
                path: '/foodReview/:id',
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://food-server-two.vercel.app/foodReview/${params.id}`)
            },
            {
                path: '/myReview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>

            },
            {
                path: '/addItem',
                element: <PrivateRoute><AddItems></AddItems></PrivateRoute>
            }
        ]

    },
    {
        path: '*',
        element: <Error></Error>
    }
])