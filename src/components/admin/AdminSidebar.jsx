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