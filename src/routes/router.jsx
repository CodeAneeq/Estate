import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Properties from "../pages/properties/Properties";
import Contact from "../pages/contact/Contact";
import PropertyPage from "../pages/properties/PropertyPage";

const publicRoutes = createBrowserRouter([
    {
        path:  '/',
        element: <Home/>
    },
    {
        path:  '/properties',
        element: <Properties/>
    },
    {
        path:  '/contact',
        element: <Contact/>
    },
])

export default publicRoutes;