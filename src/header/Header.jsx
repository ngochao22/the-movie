import React, { Fragment } from "react";
import MenuItem from "../components/menu-item/MenuItem";
import MenuLink from "../components/menu-link/MenuLink";
import Dropdown from "../components/menu-dropdown/Dropdown";
import DropdownItem from "../components/menu-dropdown/DropdownItem";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <header className="py-5 bg-[#032541]">
                <div className="max-w-[1300px] flex justify-between items-center m-auto">
                    <div className="flex gap-5">
                        <NavLink to={"/"}>
                            <img
                                src="./logo.svg"
                                alt=""
                                className="w-[150px] h-5"
                            />
                        </NavLink>
                        <ul className="z-30 flex gap-4">
                            <MenuItem>
                                <MenuLink>Movies</MenuLink>
                                <Dropdown>
                                    <DropdownItem>
                                        <NavLink to={"/movie"}>Popular</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to={"/movie/now_playing"}>
                                            Now Playing
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to={"/movie/upcoming"}>
                                            Upcoming
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to={"/movie/top_rated"}>
                                            Top Rated
                                        </NavLink>
                                    </DropdownItem>
                                </Dropdown>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink>TV Shows</MenuLink>
                                <Dropdown>
                                    <DropdownItem>
                                        <NavLink to={"/tv"}>Popular</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to={"/tv/airing_today"}>
                                            {" "}
                                            Airing Today
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to={"/tv/on_tv"}>
                                            On TV{" "}
                                        </NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink to={"/tv/top_rated"}>
                                            Top Rated{" "}
                                        </NavLink>
                                    </DropdownItem>
                                </Dropdown>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink>People</MenuLink>
                                <Dropdown>
                                    <DropdownItem>
                                        <NavLink to={"/person"}>
                                            Popular People
                                        </NavLink>
                                    </DropdownItem>
                                </Dropdown>
                            </MenuItem>
                        </ul>
                    </div>
                    <div className="px-1 text-lg font-semibold text-white">
                        <button>Sign in</button>
                    </div>
                </div>
            </header>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Header;
