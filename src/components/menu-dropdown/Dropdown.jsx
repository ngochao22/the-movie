import React from "react";

const Dropdown = ({ children }) => {
    return (
        <div className="absolute w-[170px] rounded-lg bg-white mt-2 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-2 transition-all duration-200">
            <ul className="mt-2 mb-2">{children}</ul>
        </div>
    );
};

export default Dropdown;
