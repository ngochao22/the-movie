import React from "react";

const Field = ({ children }) => {
    return (
        <div className="flex flex-col gap-2 select-none field">{children}</div>
    );
};

export default Field;
