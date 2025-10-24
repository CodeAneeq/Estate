import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Properties from "../pages/properties/Properties";

const publicRoutes = createBrowserRouter([
    {
        path:  '/',
        element: <Home/>
    },
    {
        path:  '/properties',
        element: <Properties/>
    },
])

export default publicRoutes;