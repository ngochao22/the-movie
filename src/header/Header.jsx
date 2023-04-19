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
                                    <DropdownItem>Popular</DropdownItem>
                                    <DropdownItem>Now Playing</DropdownItem>
                                    <DropdownItem>Upcoming</DropdownItem>
                                    <DropdownItem>Top Rated</DropdownItem>
                                </Dropdown>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink>TV Shows</MenuLink>
                                <Dropdown>
                                    <DropdownItem>Popular</DropdownItem>
                                    <DropdownItem>Airing Today</DropdownItem>
                                    <DropdownItem>On TV</DropdownItem>
                                    <DropdownItem>Top Rated</DropdownItem>
                                </Dropdown>
                            </MenuItem>
                            <MenuItem>
                                <MenuLink>People</MenuLink>
                                <Dropdown>
                                    <DropdownItem>Popular People</DropdownItem>
                                </Dropdown>
                            </MenuItem>
                        </ul>
                    </div>
                    <div className="user">
                        <button>Sign up</button>
                    </div>
                </div>
            </header>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Header;
