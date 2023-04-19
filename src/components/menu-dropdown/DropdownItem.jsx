import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const DropdownItem = ({ children }) => {
    return (
        <Fragment>
            <NavLink>
                <li className="py-2 pl-5 hover:bg-slate-200">{children}</li>
            </NavLink>
        </Fragment>
    );
};

export default DropdownItem;
