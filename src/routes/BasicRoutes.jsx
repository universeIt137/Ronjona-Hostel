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
import AddTeam from "../pages/admin/tam/AddTeam";
import ManageTeam from "../pages/admin/tam/ManageTeam";
import UpdateTeam from "../pages/admin/tam/UpdateTeam";
import BookingFrom from "../pages/client/booking-from/BookingFrom";
import UploadWhyChoose from "../pages/admin/why-choose-us/UploadWhyChoose";
import UploadMissionVission from "../pages/admin/mission-vission/UploadMissionVission";
import Faq from "../pages/client/faq/Faq";
import PackagesUpdate from "../pages/admin/packages/PackagesUpdate";
import UploadKeyFeatures from "../pages/admin/key-feature/UploadKeyFeatures";
import ManageKeyFeatures from "../pages/admin/key-feature/ManageKeyFeatures";
import FaqUpload from "../pages/admin/faq-page/FaqUpload";
import FaqManage from "../pages/admin/faq-page/FaqManage";
import FaqUpdate from "../pages/admin/faq-page/FaqUpdate";
import WhyChosseDetails from "../pages/client/homePage/homeComponents/WhyChosseDetails";
import AddPayment from "../pages/admin/payment-page/AddPayment";
import ManagePayment from "../pages/admin/payment-page/ManagePayment";
import UpdatePayment from "../pages/admin/payment-page/UpdatePayment";
import FilterBranch from "../pages/client/home-filter/FilterBranch";
import FilterPackages from "../pages/client/home-filter/FilterPackages";
import NavFacility from "../pages/client/homePage/homeComponents/NavFacility";
import Privacy from "../pages/client/privacy/Privacy";
import UploadTermCondiction from "../pages/admin/term-condiction-page/UploadTermCondiction";
import TermCondiction from "../pages/admin/term-condiction-page/TermCondiction";
import RefundUpload from "../pages/admin/refund/RefundUpload";
import Refund from "../pages/admin/refund/Refund";
import Testemonial from "../components/client/testimonial/Testimonial";
import ManageBookingPackages from "../pages/admin/booking-pages/ManageBookingPackages";

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
            },
            // booking from

            {
                path: "packages-booking-from/:id",
                element: <BookingFrom></BookingFrom>
            },
            // Faq related routes
            {
                path: "faq",
                element: <Faq></Faq>
            },

            // choose us related routes

            {
                path: "choose-us-details",
                element: <WhyChosseDetails></WhyChosseDetails>
            },
            // home page filter
            {
                path: "branch/:id",
                element: <FilterBranch></FilterBranch>
            },


            {
                path: "packages/:id",
                element: <FilterPackages></FilterPackages>
            },
            {
                path: "our-facility",
                element: <NavFacility ></NavFacility>
            },
            {
                path: "privacy",
                element: <Privacy></Privacy>
            },
            {
                path: "term&condicton",
                element: <TermCondiction></TermCondiction>
            },
            {
                path: "refund",
                element: <Refund></Refund>
            },
            {
                path: "testmonial",
                element: <Testemonial></Testemonial>
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
            {
                path: 'packages-update/:id',
                element: <PackagesUpdate />
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
                element: <UploadAboutData />
            },
            // team related route
            {
                path: "add-team-member",
                element: <AddTeam></AddTeam>
            },
            {
                path: "manage-team-member",
                element: <ManageTeam></ManageTeam>
            },
            {
                path: "team-update/:id",
                element: <UpdateTeam></UpdateTeam>
            },

            // why choose us

            {
                path: "upload-why-choose-us",
                element: <UploadWhyChoose></UploadWhyChoose>
            },
            // visson vission routes

            {
                path: "mission-vission-from",
                element: <UploadMissionVission></UploadMissionVission>
            },
            // key features routes
            {
                path: "upload-key-features",
                element: <UploadKeyFeatures></UploadKeyFeatures>
            },
            {
                path: "manage-key-feature",
                element: <ManageKeyFeatures></ManageKeyFeatures>
            },

            // faq related routes

            {
                path: "faq-upload",
                element: <FaqUpload></FaqUpload>
            },
            {
                path: "manage-faq",
                element: <FaqManage></FaqManage>
            },
            {
                path: "faq-update/:id",
                element: <FaqUpdate></FaqUpdate>
            },


            // payment method related routes

            {
                path: "add-pyment-method",
                element: <AddPayment></AddPayment>
            },

            {
                path: "manage-payment-method",
                element: <ManagePayment></ManagePayment>
            },
            {
                path: "payment-update/:id",
                element: <UpdatePayment></UpdatePayment>
            },
            {
                path: "upload-term-condiction",
                element: <UploadTermCondiction></UploadTermCondiction>
            },
            {
                path: "refund-upload",
                element: <RefundUpload></RefundUpload>
            },
            {
                path: "booking-from",
                element: <ManageBookingPackages></ManageBookingPackages>
            },


        ]
    }
])

export default router;