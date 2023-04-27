import React from "react";

const Label = ({ htmlFor, children, ...props }) => {
    return (
        <label
            htmlFor={htmlFor}
            {...props}
            className="text-lg font-medium cursor-pointer text-[#333334]"
        >
            {children}
        </label>
    );
};

export default Label;
