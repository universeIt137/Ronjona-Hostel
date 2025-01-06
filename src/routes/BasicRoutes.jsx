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
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import AddPackage from "../pages/admin/packages/AddPackage";
import ManagePackage from "../pages/admin/packages/ManagePackage";
import AddLocation from "../pages/admin/location/AddLocation";
import ManageLocation from "../pages/admin/location/ManageLocation";
import AddBranch from "../pages/admin/branch/AddBranch";
import ManageBranch from "../pages/admin/branch/ManageBranch";
import AddBanner from "../pages/admin/bannerPages/AddBanner";
import ManageBanner from "../pages/admin/bannerPages/ManageBanner";
import AddPrivacy from "../pages/admin/privacy/AddPrivacy";
import AddFeatures from "../pages/admin/features/AddFeatures";
import AddReview from "../pages/admin/reviews/AddReview";
import ManageReview from "../pages/admin/reviews/ManageReview";

const router = createBrowserRouter([
    // Client related routes 
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
        
    },
    // Dashboard related routes 
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },

            // package related routes 
            {
                path: 'add-package',
                element: <AddPackage/>
            },
            {
                path: 'manage-package',
                element: <ManagePackage/>
            },
            // location related routes 
            {
                path: 'add-location',
                element: <AddLocation/>
            },
            {
                path: 'manage-location',
                element: <ManageLocation/>
            },
            // branch related routes 
            {
                path: 'add-branch',
                element: <AddBranch/>
            },
            {
                path: 'manage-branch',
                element: <ManageBranch/>
            },
            // Banner related routes 
            {
                path: "add-banner",
                element: <AddBanner/>
            },
            {
                path: "manage-banner",
                element: <ManageBanner/>
            },
            // Privacy related routes 
            {
                path: "add-privacy",
                element: <AddPrivacy/>
            },
            // Features related routes 
            {
                path: "add-features",
                element: <AddFeatures/>
            },
            // Review related routes 
            {
                path: "add-review",
                element: <AddReview/>
            },
            {
                path: "manage-review",
                element: <ManageReview/>
            }

        ]
    }
])

export default router;