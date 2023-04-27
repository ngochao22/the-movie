import React from "react";
import SortSearch from "../components/search/SortSearch";
import FilterGenres from "../components/search/FilterGenres";
import MovieList from "../components/movies/MovieList";
import Button from "../components/button/Button";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmit } from "../redux/slices/movieSlice";

const MoviePage = ({ title = "", type = "popular" }) => {
    const dispatch = useDispatch();
    const genreId = useSelector((state) => state.movie.genreId);
    const listMovies = useSelector((state) => state.movie.listMovies);

    return (
        <div className="w-[1300px] mx-auto mt-10 mb-28 flex gap-x-1">
            <div className="w-[260px]">
                <h2 className="text-[28px] font-semibold leading-tight mb-6">
                    {title}
                </h2>
                <SortSearch></SortSearch>
                <FilterGenres type="movie"></FilterGenres>
                <Button
                    onClick={() =>
                        dispatch(
                            handleSubmit(
                                listMovies.filter((item) =>
                                    item.genre_ids.some((id) => id === genreId)
                                )
                            )
                        )
                    }
                >
                    Search
                </Button>
            </div>
            <section className="w-[1040px] mt-10">
                <MovieList type={type}></MovieList>
            </section>
        </div>
    );
};

export default MoviePage;
