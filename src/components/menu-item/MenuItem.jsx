import React, { Fragment } from "react";

const MenuItem = ({ children }) => {
    return (
        <Fragment>
            <li className="relative leading-tight group">{children}</li>
        </Fragment>
    );
};

export default MenuItem;
