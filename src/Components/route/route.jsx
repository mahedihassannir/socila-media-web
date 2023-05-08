import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";

let router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,

        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "About",
                element: <About></About>
            },

            {
                path: "Login",
                element: <Login></Login>
            },
            {
                path: "Register",
                element: <Register></Register>
            },


        ]
    }
])

export default router