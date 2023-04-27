import React, { Fragment } from "react";
import Banner from "../components/banner/Banner";
import Toggle from "../components/toggle/Toggle";
import TrailerList from "../components/movies/TrailerList";
import TvList from "../components/tv/TvList";
import MovieListTrending from "../components/movies/MovieListTrending";

const HomePage = () => {
    return (
        <Fragment>
            <Banner></Banner>
            <section className="max-w-[1300px] mx-auto pl-10 mt-10">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-semibold">Trending</h2>
                    <Toggle
                        leftTitle={"Today"}
                        RightTitle={"This Week"}
                    ></Toggle>
                </div>
                <MovieListTrending></MovieListTrending>
            </section>
            <section className="max-w-[1300px] h-[400px] mx-auto relative">
                <div className="absolute w-full h-full bg-[#0d253f] opacity-80"></div>
                <img
                    src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt=""
                    className="object-cover object-bottom w-full h-full"
                />
                <div className="absolute items-center w-full gap-4 pl-14 top-10">
                    <h2 className="text-2xl font-semibold text-white">
                        Latest Trailers
                    </h2>
                    <TrailerList></TrailerList>
                </div>
            </section>
            <section className="max-w-[1300px] mx-auto pl-10 my-10">
                <div className="flex items-center gap-4">
                    <h2 className="text-2xl font-semibold">What's Popular</h2>
                    <Toggle
                        leftTitle={"On Tv"}
                        RightTitle={"In Theaters"}
                    ></Toggle>
                </div>
                <TvList></TvList>
            </section>
        </Fragment>
    );
};

export default HomePage;
