import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataTv } from "../../redux/slices/tvSlice";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCard from "../movies/MovieCard";

const TvList = () => {
    const dispatch = useDispatch();
    const listDataTv = useSelector((state) => state.tv.listDataTv);
    const onLeft = useSelector((state) => state.toggle.onLeft);

    const type = onLeft ? "popular" : "top_rated";

    useEffect(() => {
        dispatch(fetchDataTv(type));
    }, [type]);

    console.log(listDataTv);

    return (
        <div className="movie-list">
            <Swiper
                grabCursor={"true"}
                slidesPerView={"auto"}
                spaceBetween={40}
            >
                {listDataTv.length > 0 &&
                    listDataTv.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard item={item}></MovieCard>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default TvList;
