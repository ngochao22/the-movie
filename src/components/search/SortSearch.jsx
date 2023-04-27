import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "../../redux/slices/movieSlice";

const SortSearch = () => {
    const options = [
        { id: 1, label: "Popular Descending", value: "descending" },
        { id: 2, label: "Title (A-Z)", value: "title1" },
        { id: 3, label: "Title (Z-A)", value: "title2" },
    ];
    const dispatch = useDispatch();

    return (
        <div className="shadow-lg">
            <h3 className="p-4 text-lg font-semibold border rounded-t-lg border-slate-200">
                Sort
            </h3>
            <div className="p-4 border rounded-b-lg border-slate-200">
                <h4 className="text-base font-normal text-[#989393]">
                    Sort Results By
                </h4>
                <select
                    className="p-2 mt-2 bg-[#d8dadc] w-full rounded-md text-[#212529] outline-none select:bg-white cursor-pointer"
                    onChange={(e) => dispatch(setValue(e.target.value))}
                >
                    {options.map((option) => (
                        <option value={option.value} key={option.id}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};

export default SortSearch;
