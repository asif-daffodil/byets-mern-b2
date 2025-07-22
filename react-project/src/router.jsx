import { createBrowserRouter } from "react-router";
import Layout from "./Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [ 
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/login",
                element: <Login />,
            }
        ],
    },
]);

export default router;