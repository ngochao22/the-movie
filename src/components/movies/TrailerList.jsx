import React, { Fragment, useEffect } from "react";
import TrailerCard from "./TrailerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchTrailers } from "../../redux/slices/trailerSlice";

const TrailerList = () => {
    const dispatch = useDispatch();
    const listTrailer = useSelector((state) => state.trailer.listTrailer);

    useEffect(() => {
        dispatch(fetchTrailers());
    }, []);

    return (
        <div className="w-full trailer-list">
            <Swiper
                grabCursor={"true"}
                slidesPerView={"auto"}
                spaceBetween={40}
            >
                {listTrailer.length > 0 &&
                    listTrailer.map((item) => (
                        <SwiperSlide key={item.id}>
                            <TrailerCard item={item}></TrailerCard>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default TrailerList;
