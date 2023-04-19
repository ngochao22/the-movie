import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleLeft, handleRight } from "../../redux/slices/toggleSlice";

const Toggle = ({ leftTitle, RightTitle }) => {
    const dispatch = useDispatch();

    const onLeft = useSelector((state) => state.toggle.onLeft);
    const onRight = useSelector((state) => state.toggle.onRight);

    return (
        <div>
            <div className="select-none toggle">
                <div
                    className={`spinner w-[40%] ${onLeft ? "active" : ""}`}
                    onClick={() => dispatch(handleLeft())}
                >
                    {leftTitle}
                </div>
                <div
                    className={`spinner w-[60%] ${onRight ? "active" : ""}`}
                    onClick={() => dispatch(handleRight())}
                >
                    {RightTitle}
                </div>
            </div>
        </div>
    );
};

export default Toggle;
