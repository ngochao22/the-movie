import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../../redux/slices/movieSlice";
import MovieCard from "./MovieCard";

const MovieList = ({ type }) => {
    const dispatch = useDispatch();
    const listMovies = useSelector((state) => state.movie.listMovies);
    const value = useSelector((state) => state.movie.value);
    let isButton = useSelector((state) => state.movie.isButton);
    const listMoviesNew = useSelector((state) => state.movie.listMoviesNew);

    useEffect(() => {
        dispatch(fetchMovies(type));
    }, [type]);

    const listMoviesSort = [...listMovies].sort((a, b) =>
        b.title.localeCompare(a.title)
    );

    const listMoviesReverse = [...listMoviesSort].reverse((a, b) =>
        b.title.localeCompare(a.title)
    );

    if (!isButton) {
        if (value === "title2") {
            return (
                <div className="grid grid-cols-5 ml-20 gap-x-5">
                    {listMoviesSort.length > 0 &&
                        listMoviesSort.map((item) => (
                            <MovieCard key={item.id} item={item}></MovieCard>
                        ))}
                </div>
            );
        }

        if (value === "title1") {
            return (
                <div className="grid grid-cols-5 ml-20 gap-x-5">
                    {listMoviesReverse.length > 0 &&
                        listMoviesReverse.map((item) => (
                            <MovieCard key={item.id} item={item}></MovieCard>
                        ))}
                </div>
            );
        }

        return (
            <div className="grid grid-cols-5 ml-20 gap-x-5">
                {listMovies.length > 0 &&
                    listMovies.map((item) => (
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

export default MovieList;
