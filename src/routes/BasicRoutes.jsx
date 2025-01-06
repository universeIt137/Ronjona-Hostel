import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/client/homePage/HomePage";
import AboutPage from "../pages/client/aboutPage/AboutPage";
import MissionPage from "../pages/client/aboutPage/MissionPage";
import VissionPage from "../pages/client/aboutPage/VissionPage";
import BlogPage from "../pages/client/blogPage/BlogPage";
import BlogDetailsPage from "../pages/client/blogPage/BlogDetailsPage";
import ContactUsPage from "../pages/client/contucUsPage/ContactUsPage";
import ManagementInfoPage from "../pages/client/managementaInfoPage/ManagementInfoPage";
import AllPackages from "../pages/client/packagesPage/AllPackages";
import DetailsPackagePage from "../pages/client/packagesPage/DetailsPackagePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element:<HomePage/>
            },
            {
                path: 'about',
                element:<AboutPage/>
            },
            {
                path: 'mission',
                element:<MissionPage/>
            },
            {
                path: 'vission',
                element:<VissionPage/>
            },
            {
                path: 'management-information',
                element:<ManagementInfoPage/>
            },
            {
                path: 'contact-us',
                element:<ContactUsPage/>
            },
            {
                path: 'blog',
                element:<BlogPage/>
            },
            {
                path: 'blog-details',
                element:<BlogDetailsPage/>
            },
            {
                path: 'all-packages',
                element:<AllPackages/>
            },
            {
                path: 'package-details',
                element:<DetailsPackagePage/>
            },
        ]
        
    }
])

export default router;