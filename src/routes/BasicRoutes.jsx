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
import ManageVideoGallery from "../pages/admin/gallery/ManageVideoGallery";
import Register from "../pages/client/credentialPage/Register";
import Login from "../pages/client/credentialPage/Login";
import PrivateRoute from "./PrivateRoute";
import ManageUser from "../pages/admin/manageUser/ManageUser";
import ManageFeatures from "../pages/admin/features/ManageFeatures";
import PhotoGallery from "../pages/client/homePage/homeComponents/PhotoGallery";
import ManagePhotoGallery from "../pages/admin/gallery/ManagePhotoGallery";
import VideoGallery from "../pages/client/homePage/homeComponents/VideoGallery";
import AllBranch from "../pages/client/branch/AllBranch";
import BranchByPackages from "../pages/client/branch/BranchByPackages";
import UploadOffer from "../pages/admin/offers/UploadOffer";
import ManageOffer from "../pages/admin/offers/ManageOffer";
import UpdateOffer from "../pages/admin/offers/UpdateOffer";
import AddPhotoGallery from "../pages/admin/gallery/AddPhotoGallery";
import AddVideoGallery from "../pages/admin/gallery/AddVideoGallery";
import PhotoUpdate from "../pages/admin/gallery/PhotoUpdate";
import UpdateVideo from "../pages/admin/gallery/UpdateVideo";
import ManageContact from "../pages/admin/contact/ManageContact";
import BorderReview from "../pages/client/review/BorderReview";
import UploadAboutData from "../pages/admin/about-pages/UploadAboutData";

const router = createBrowserRouter([
    // Client related routes 
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <HomePage />
            },
            {
                path: 'about',
                element: <AboutPage></AboutPage>
            },

            {
                path: 'vission',
                element: <VissionPage></VissionPage>
            },
            {
                path: 'management-info',
                element: <ManagementInfoPage></ManagementInfoPage>
            },
            {
                path: 'contact-us',
                element: <ContactUsPage />
            },
            {
                path: 'blog',
                element: <BlogPage />
            },
            {
                path: 'blog-details',
                element: <BlogDetailsPage />
            },
            {
                path: 'all-packages',
                element: <AllPackages />
            },
            {
                path: 'package-details/:id',
                element: <DetailsPackagePage />
            },
            {
                path: "image-gallery",
                element: <PhotoGallery></PhotoGallery>
            },
            {
                path: "video-gallery",
                element: <VideoGallery></VideoGallery>
            },
            {
                path: "our-branch",
                element: <AllBranch></AllBranch>
            },
            {
                path: "branch-by-packages/:id",
                element: <BranchByPackages></BranchByPackages>
            },
            {
                path: 'mission',
                element: <div className="h-screen justify-center items-center flex flex-col " >Mission</div>
            },
            // reive related routes
            {
                path: "border-review",
                element: <BorderReview></BorderReview>
            }

        ]

    },
    {
        path: '/admin-register',
        element: <Register />
    },
    {
        path: "/admin-login",
        element: <Login />
    },
    // Dashboard related routes 
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },

            // package related routes 
            {
                path: 'add-package',
                element: <AddPackage />
            },
            {
                path: 'manage-package',
                element: <ManagePackage />
            },
            // location related routes 
            {
                path: 'add-location',
                element: <AddLocation />
            },
            {
                path: 'manage-location',
                element: <ManageLocation />
            },
            // branch related routes 
            {
                path: 'add-branch',
                element: <AddBranch />
            },
            {
                path: 'manage-branch',
                element: <ManageBranch />
            },
            // Banner related routes 
            {
                path: "add-banner",
                element: <AddBanner />
            },
            {
                path: "manage-banner",
                element: <ManageBanner />
            },
            // Privacy related routes 
            {
                path: "add-privacy",
                element: <AddPrivacy />
            },
            // Features related routes 
            {
                path: "add-features",
                element: <AddFeatures />
            },
            {
                path: "manage-features",
                element: <ManageFeatures />
            },
            // Review related routes 
            {
                path: "add-review",
                element: <AddReview />
            },
            {
                path: "manage-review",
                element: <ManageReview />
            },
            // Gallery related routes 
            {
                path: "manage-photo-gallery",
                element: <ManagePhotoGallery></ManagePhotoGallery>
            },
            {
                path: "manage-video-gallery",
                element: <ManageVideoGallery />
            },
            {
                path: "add-photo",
                element: <AddPhotoGallery></AddPhotoGallery>
            },
            {
                path: "add-video",
                element: <AddVideoGallery />
            },
            {
                path: "photo-update/:id",
                element: <PhotoUpdate />
            },
            {
                path: "video-update/:id",
                element: <UpdateVideo></UpdateVideo>
            },
            // manage user related routes 
            {
                path: "manage-users",
                element: <ManageUser />
            },

            // offer related routes

            {
                path: "upload-offer",
                element: <UploadOffer></UploadOffer>
            },
            {
                path: "manage-offer",
                element: <ManageOffer></ManageOffer>
            },
            {
                path: "update-offer/:id",
                element: <UpdateOffer></UpdateOffer>
            },

            // contact related api

            {
                path: "all-contacts",
                element: <ManageContact></ManageContact>
            },

            // about related routs

            {
                path: "about-data-upload",
                element : <UploadAboutData/>
            }

        ]
    }
])

export default router;