import React from 'react';
import { Sidebar } from "flowbite-react";
import {
    HiArrowSmRight,
    HiChartPie,
    HiInbox,
    HiOutlineMinusSm,
    HiOutlinePlusSm,
    HiShoppingBag,
    HiTable,
    HiUser,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { Link, useNavigate } from 'react-router-dom';
import { BiGitBranch, BiLocationPlus } from 'react-icons/bi';
import { TbBrandChrome } from 'react-icons/tb';
import { GiBranchArrow, GiBrassKnuckles } from 'react-icons/gi';
import { FcGallery, FcPrivacy } from 'react-icons/fc';
import { MdFeaturedPlayList } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
const AdminSidebar = () => {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear('token');
        localStorage.clear('user');
        navigate('/');
    }

    return (
        <div className='h-[100vh]'>
            <Sidebar aria-label="Sidebar with multi-level dropdown example">
                <Sidebar.Items>
                    <Sidebar.ItemGroup>
                        <Link to={'/dashboard'}>
                            <Sidebar.Item icon={HiChartPie}>
                                Dashboard
                            </Sidebar.Item>
                        </Link>
                        <Sidebar.Collapse
                            icon={BiLocationPlus}
                            label="Location"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >
                            <Link to={'/dashboard/add-location'}>
                                <Sidebar.Item>
                                    Add Location
                                </Sidebar.Item>
                            </Link>

                            <Link to={'/dashboard/manage-location'}>
                                <Sidebar.Item>
                                    Manage Location
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>


                        <Sidebar.Collapse
                            icon={BiGitBranch}
                            label="Branch"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >
                            <Link to={'/dashboard/add-branch'}>
                                <Sidebar.Item>
                                    Add Branch
                                </Sidebar.Item>
                            </Link>

                            <Link to={'/dashboard/manage-branch'}>
                                <Sidebar.Item>
                                    Manage Branch
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>



                        <Sidebar.Collapse
                            icon={HiShoppingBag}
                            label="Packages"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >
                            <Link to={'/dashboard/add-package'}>
                                <Sidebar.Item>
                                    Add Package
                                </Sidebar.Item>
                            </Link>

                            <Link to={'/dashboard/manage-package'}>
                                <Sidebar.Item>
                                    Manage Package
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>

                        <Sidebar.Collapse
                            icon={HiShoppingBag}
                            label="Offer"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >
                            <Link to={'/dashboard/upload-offer'}>
                                <Sidebar.Item>
                                    Upload Offer
                                </Sidebar.Item>
                            </Link>

                            <Link to={'/dashboard/manage-offer'}>
                                <Sidebar.Item>
                                    Manage Offer
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>

                        <Sidebar.Collapse
                            icon={BiGitBranch}
                            label="Banner"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >
                            <Link to={'/dashboard/add-banner'}>
                                <Sidebar.Item>
                                    Add Banner
                                </Sidebar.Item>
                            </Link>

                            <Link to={'/dashboard/manage-banner'}>
                                <Sidebar.Item>
                                    Manage Banner
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>




                        <Link to={'/dashboard/manage-users'}>
                            <Sidebar.Item icon={FaUser}>
                                Manage Users
                            </Sidebar.Item>
                        </Link>

                        <Link to={'/dashboard/add-privacy'}>
                            <Sidebar.Item icon={FcPrivacy}>
                                Privacy
                            </Sidebar.Item>
                        </Link>

                        <Link to={'/dashboard/upload-term-condiction'}>
                            <Sidebar.Item icon={FcPrivacy}>
                                Term & Condiction
                            </Sidebar.Item>
                        </Link>

                        <Link to={'/dashboard/refund-upload'}>
                            <Sidebar.Item icon={FcPrivacy}>
                                Refund
                            </Sidebar.Item>
                        </Link>


                        <Link to={'/dashboard/manage-booking-from'}>
                            <Sidebar.Item icon={FcPrivacy}>
                                Booking Packages
                            </Sidebar.Item>
                        </Link>




                        <Sidebar.Collapse
                            icon={BiGitBranch}
                            label="HomePage Features"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >
                            <Link to={'/dashboard/add-features'}>
                                <Sidebar.Item icon={MdFeaturedPlayList}>
                                    Hompage Features
                                </Sidebar.Item>
                            </Link>

                            <Link to={'/dashboard/manage-features'}>
                                <Sidebar.Item icon={MdFeaturedPlayList}>
                                    Manage Features
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>



                        <Sidebar.Collapse
                            icon={BiGitBranch}
                            label="Reviews"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >
                            <Link to={'/dashboard/add-review'}>
                                <Sidebar.Item>
                                    Add Review
                                </Sidebar.Item>
                            </Link>

                            <Link to={'/dashboard/manage-review'}>
                                <Sidebar.Item>
                                    Manage Review
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>



                        <Sidebar.Collapse
                            icon={BiGitBranch}
                            label="Contact"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >


                            <Link to={'/dashboard/all-contacts'}>
                                <Sidebar.Item>
                                    Manage Contact
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>

                        <Sidebar.Collapse
                            icon={BiGitBranch}
                            label="About Page"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >


                            <Link to={'/dashboard/about-data-upload'}>
                                <Sidebar.Item>
                                    Upload About Data
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>

                        <Sidebar.Collapse
                            icon={BiGitBranch}
                            label="Management"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >


                            <Link to={'/dashboard/add-team-member'}>
                                <Sidebar.Item>
                                    Add Management Member
                                </Sidebar.Item>
                            </Link>
                            <Link to={'/dashboard/manage-team-member'}>
                                <Sidebar.Item>
                                    Manage Management Member
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>




                        <Sidebar.Collapse
                            icon={FcGallery}
                            label="Gallery"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >
                            <Link to={'/dashboard/add-photo'}>
                                <Sidebar.Item>
                                    Add Photo
                                </Sidebar.Item>
                            </Link>
                            <Link to={'/dashboard/add-video'}>
                                <Sidebar.Item>
                                    Add Video
                                </Sidebar.Item>
                            </Link>
                            <Link to={'/dashboard/manage-photo-gallery'}>
                                <Sidebar.Item>
                                    Manage Photo Gallery
                                </Sidebar.Item>
                            </Link>

                            <Link to={'/dashboard/manage-video-gallery'}>
                                <Sidebar.Item>
                                    Manage Video Gallery
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>

                        {/* why choose us */}

                        <Sidebar.Collapse
                            icon={FcGallery}
                            label="Why Choose Us"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >
                            <Link to={'/dashboard/upload-why-choose-us'}>
                                <Sidebar.Item>
                                    Why Choose us
                                </Sidebar.Item>
                            </Link>




                        </Sidebar.Collapse>

                        {/* key features */}

                        <Sidebar.Collapse
                            icon={FcGallery}
                            label="Key Features"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >
                            <Link to={'/dashboard/upload-key-features'}>
                                <Sidebar.Item>
                                    Upload Key Features
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>

                        {/* faq */}


                        <Sidebar.Collapse
                            icon={FcGallery}
                            label="FAQ"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >
                            <Link to={'/dashboard/faq-upload'}>
                                <Sidebar.Item>
                                    Upload Faq
                                </Sidebar.Item>
                            </Link>
                            <Link to={'/dashboard/manage-faq'}>
                                <Sidebar.Item>
                                    Manage Faq
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>


                        <Sidebar.Collapse
                            icon={FcGallery}
                            label="Payment"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >
                            <Link to={'/dashboard/add-pyment-method'}>
                                <Sidebar.Item>
                                    Add Payment Method
                                </Sidebar.Item>
                            </Link>
                            <Link to={'/dashboard/manage-payment-method'}>
                                <Sidebar.Item>
                                    Manage payment method
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>





                        {/* mission vission */}


                        <Sidebar.Collapse
                            icon={FcGallery}
                            label="Mission & Vission"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >
                            <Link to={'/dashboard/mission-vission-from'}>
                                <Sidebar.Item>
                                    Mission & Vission
                                </Sidebar.Item>
                            </Link>




                        </Sidebar.Collapse>


                        {/* hotline  */}

                        <Sidebar.Collapse
                            icon={BiGitBranch}
                            label="Hotline"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >


                            <Link to={'/dashboard/upload-hotline'}>
                                <Sidebar.Item>
                                    Upload Hotline
                                </Sidebar.Item>
                            </Link>
                            <Link to={'/dashboard/manage-hotline'}>
                                <Sidebar.Item>
                                    Manage HotLine
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>

                        {/* address  */}

                        <Sidebar.Collapse
                            icon={BiGitBranch}
                            label="Address"
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >


                            <Link to={'/dashboard/upload-address'}>
                                <Sidebar.Item>
                                    Upload Address
                                </Sidebar.Item>
                            </Link>
                            <Link to={'/dashboard/manage-address'}>
                                <Sidebar.Item>
                                    Manage Address
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>


                        <Link to={'/dashboard/price-upload'}>
                            <Sidebar.Item icon={FcPrivacy}>
                                Price Upload
                            </Sidebar.Item>
                        </Link>





                        {/* payment  */}

                        <Sidebar.Collapse
                            icon={BiGitBranch}
                            label="Payment Type "
                            renderChevronIcon={(theme, open) => {
                                const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

                                return <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />;
                            }}
                        >


                            <Link to={'/dashboard/upload-payment-type'}>
                                <Sidebar.Item>
                                    Upload Pyment Type
                                </Sidebar.Item>
                            </Link>
                            <Link to={'/dashboard/manage-payment-type'}>
                                <Sidebar.Item>
                                    Manage Payment Type
                                </Sidebar.Item>
                            </Link>

                        </Sidebar.Collapse>















                        <Sidebar.Item icon={HiUser}>
                            <button onClick={handleLogout}>
                                Logout
                            </button>
                        </Sidebar.Item>

                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default AdminSidebar;