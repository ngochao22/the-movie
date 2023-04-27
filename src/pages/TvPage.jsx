import React from "react";
import SortSearch from "../components/search/SortSearch";
import FilterGenres from "../components/search/FilterGenres";
import Button from "../components/button/Button";
import TvListDetails from "../components/tv/TvListDetails";
import { useDispatch, useSelector } from "react-redux";
import { handleSubmit } from "../redux/slices/movieSlice";

const TvPage = ({ title = "", type = "popular" }) => {
    const dispatch = useDispatch();
    const genreId = useSelector((state) => state.movie.genreId);
    const listDataTv = useSelector((state) => state.tv.listDataTv);

    return (
        <div>
            <div className="w-[1300px] mx-auto mt-10 mb-28 flex gap-x-1">
                <div className="w-[260px]">
                    <h2 className="text-[28px] font-semibold leading-tight mb-6">
                        {title}
                    </h2>
                    <SortSearch></SortSearch>
                    <FilterGenres type="tv"></FilterGenres>
                    <Button
                        onClick={() =>
                            dispatch(
                                handleSubmit(
                                    listDataTv.filter((item) =>
                                        item.genre_ids.some(
                                            (id) => id === genreId
                                        )
                                    )
                                )
                            )
                        }
                    >
                        Search
                    </Button>
                </div>
                <section className="w-[1040px] mt-10">
                    <TvListDetails type={type}></TvListDetails>
                </section>
            </div>
        </div>
    );
};

export default TvPage;
