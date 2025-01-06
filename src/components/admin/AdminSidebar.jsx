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
import { Link } from 'react-router-dom';
import { BiGitBranch, BiLocationPlus } from 'react-icons/bi';
import { TbBrandChrome } from 'react-icons/tb';
import { GiBranchArrow, GiBrassKnuckles } from 'react-icons/gi';
import { FcPrivacy } from 'react-icons/fc';
import { MdFeaturedPlayList } from 'react-icons/md';
const AdminSidebar = () => {
    return (
        <div className=''>
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




                        <Link to={'/dashboard/add-privacy'}>
                        <Sidebar.Item  icon={FcPrivacy}>
                            Privacy
                        </Sidebar.Item>
                        </Link>

                        <Link to={'/dashboard/add-features'}>
                        <Sidebar.Item  icon={MdFeaturedPlayList}>
                            Hompage Features
                        </Sidebar.Item>
                        </Link>

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

                        
                        <Sidebar.Item href="#" icon={HiUser}>
                            Users
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiShoppingBag}>
                            Products
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiArrowSmRight}>
                            Sign In
                        </Sidebar.Item>
                        <Sidebar.Item href="#" icon={HiTable}>
                            Sign Up
                        </Sidebar.Item>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>
        </div>
    );
};

export default AdminSidebar;