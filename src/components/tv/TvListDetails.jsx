import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieCard from "../movies/MovieCard";
import { fetchDataTv } from "../../redux/slices/tvSlice";

const TvListDetails = ({ type }) => {
    const dispatch = useDispatch();
    const listDataTv = useSelector((state) => state.tv.listDataTv);
    const value = useSelector((state) => state.movie.value);
    const genreId = useSelector((state) => state.movie.genreId);
    const listMoviesNew = useSelector((state) => state.movie.listMoviesNew);
    const isButton = useSelector((state) => state.movie.isButton);

    useEffect(() => {
        dispatch(fetchDataTv(type));
    }, [type]);

    const listTvSort = [...listDataTv].sort((a, b) =>
        b.name.localeCompare(a.name)
    );

    const listTvReverse = [...listDataTv].reverse((a, b) =>
        b.name.localeCompare(a.name)
    );

    if (!isButton) {
        if (value === "title1") {
            return (
                <div className="grid grid-cols-5 ml-20 gap-x-5">
                    {listTvReverse.length > 0 &&
                        listTvReverse.map((item) => (
                            <MovieCard key={item.id} item={item}></MovieCard>
                        ))}
                </div>
            );
        }

        if (value === "title2") {
            return (
                <div className="grid grid-cols-5 ml-20 gap-x-5">
                    {listTvSort.length > 0 &&
                        listTvSort.map((item) => (
                            <MovieCard key={item.id} item={item}></MovieCard>
                        ))}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-5 ml-20 gap-x-5">
                {listDataTv.length > 0 &&
                    listDataTv.map((item) => (
                        <MovieCard key={item.id} item={item}></MovieCard>
                    ))}
            </div>
        );
    } else {
        if (listMoviesNew.length > 0) {
            isButton === false;
            return (
                <div className="grid grid-cols-5 ml-20 gap-x-5">
                    {listMoviesNew.map((item) => (
                        <MovieCard key={item.id} item={item}></MovieCard>
                    ))}
                </div>
            );
        } else {
            return (
                <div className="mt-4 ml-10 text-xl font-bold leading-tight">
                    No items were found that match your query.
                </div>
            );
        }
    }
};

export default TvListDetails;
