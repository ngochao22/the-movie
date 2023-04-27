import React, { Fragment } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { handleButton } from "../../redux/slices/movieSlice";

const DropdownItem = ({ children }) => {
    const dispatch = useDispatch();
    return (
        <Fragment>
            <NavLink>
                <li
                    className="py-2 pl-5 hover:bg-slate-200"
                    onClick={() => dispatch(handleButton())}
                >
                    {children}
                </li>
            </NavLink>
        </Fragment>
    );
};

export default DropdownItem;
