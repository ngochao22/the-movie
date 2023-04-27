import React, { Fragment } from "react";

const Button = ({ children, onClick = () => {} }) => {
    return (
        <Fragment>
            <button
                type="submit"
                className="w-full py-2 mt-4 text-xl font-semibold text-center text-white bg-blue-500 rounded-full"
                onClick={onClick}
            >
                {children}
            </button>
        </Fragment>
    );
};

export default Button;
