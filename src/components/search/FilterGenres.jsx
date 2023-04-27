import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataGenres } from "../../redux/slices/genresSlice";
import { handleClick } from "../../redux/slices/movieSlice";

const FilterGenres = ({ type }) => {
    const dispatch = useDispatch();
    const listGenres = useSelector((state) => state.genres.listGenres);

    useEffect(() => {
        dispatch(fetchDataGenres(type));
    }, [type]);

    return (
        <div className="mt-5 rounded-lg shadow-lg">
            <h3 className="p-4 text-lg font-semibold border rounded-t-lg border-slate-200">
                Filters
            </h3>
            <div className="p-4 border rounded-b-lg border-slate-200">
                {listGenres.length > 0 &&
                    listGenres.map((item) => (
                        <span
                            className="inline-block px-6 mx-2 mt-2 text-sm font-normal text-center border rounded-full cursor-pointer border-slate-300 hover:bg-blue-400 hover:text-white"
                            key={item.id}
                            onClick={() => dispatch(handleClick(item.id))}
                        >
                            {item.name}
                        </span>
                    ))}
            </div>
        </div>
    );
};

export default FilterGenres;
