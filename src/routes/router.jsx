import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/signUp/SignUp";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <h1>Page NOt Found!!!</h1>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'signIn',
                element: <SignIn></SignIn>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            }
        ]


    }
])


export default router;