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
import PhotoGallery from "../pages/admin/gallery/ManagePhotoGallery";
import ManagePhotoGallery from "../pages/admin/gallery/ManagePhotoGallery";
import ManageVideoGallery from "../pages/admin/gallery/ManageVideoGallery";
import Register from "../pages/client/credentialPage/Register";
import Login from "../pages/client/credentialPage/Login";
import PrivateRoute from "./PrivateRoute";
import ManageUser from "../pages/admin/manageUser/ManageUser";
import ManageFeatures from "../pages/admin/features/ManageFeatures";

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
                path: 'about-us',
                element:<div className="h-screen justify-center items-center flex flex-col " >About Us Page</div>
            },
            
            {
                path: 'vission',
                element:<div className="h-screen justify-center items-center flex flex-col " >Vission Page</div>
            },
            {
                path: 'management-info',
                element:<div className="h-screen justify-center items-center flex flex-col " >Management Informaton</div>
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
                path: 'package-details/:id',
                element:<DetailsPackagePage/>
            },
            {
                path : "image-gallery",
                element : <div className="h-screen justify-center items-center flex flex-col " >Image Gallery</div>
            },
            {
                path : "video-gallery",
                element : <div className="h-screen justify-center items-center flex flex-col " >Video Gallery</div>
            },
            {
                path : "our-branch",
                element : <div className="h-screen justify-center items-center flex flex-col " >Our Branch</div>
            },
            {
                path: 'mission',
                element:<div className="h-screen justify-center items-center flex flex-col " >Mission</div>
            },
            
        ]
        
    },
    {
        path: '/admin-register',
        element: <Register/>
    },
    {
        path: "/admin-login",
        element: <Login/>
    },
    // Dashboard related routes 
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
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
            {
                path: "manage-features",
                element: <ManageFeatures/>
            },
            // Review related routes 
            {
                path: "add-review",
                element: <AddReview/>
            },
            {
                path: "manage-review",
                element: <ManageReview/>
            },
            // Gallery related routes 
            {
                path: "manage-photo-gallery",
                element: <ManagePhotoGallery/>
            },
            {
                path: "manage-video-gallery",
                element: <ManageVideoGallery/>
            },
            // manage user related routes 
            {
                path: "manage-users",
                element: <ManageUser/>
            }

        ]
    }
])

export default router;