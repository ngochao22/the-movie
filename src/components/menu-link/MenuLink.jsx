import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const MenuLink = ({ children }) => {
    return (
        <Fragment>
            <NavLink className="p-2 font-semibold text-white">
                {children}
            </NavLink>
        </Fragment>
    );
};

export default MenuLink;
