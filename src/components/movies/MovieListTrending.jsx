import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMoviesTrending } from "../../redux/slices/movieTrendingSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCard from "./MovieCard";

const MovieListTrending = () => {
    const dispatch = useDispatch();
    const onLeft = useSelector((state) => state.toggle.onLeft);
    const listMovies = useSelector((state) => state.trending.listMovies);

    const type = onLeft ? "day" : "week";

    useEffect(() => {
        dispatch(fetchMoviesTrending(type));
    }, [type]);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={"true"}
                slidesPerView={"auto"}
                spaceBetween={40}
            >
                {listMovies.length > 0 &&
                    listMovies.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item}></MovieCard>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default MovieListTrending;
