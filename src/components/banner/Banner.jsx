import React from "react";

const Banner = () => {
    return (
        <section className="max-w-[1300px] h-[350px] mx-auto relative">
            <div className="absolute w-full h-full bg-[#0d253f] opacity-95"></div>
            <img
                src="./banner.png"
                alt=""
                className="object-cover object-center w-full h-full"
            />
            <div className="absolute top-[70px] mx-10 w-full">
                <h2 className="text-4xl font-bold text-white">Welcome.</h2>
                <p className="mt-2 text-3xl font-semibold text-white">
                    Millions of movies, TV shows and people to discover. Explore
                    now.
                </p>
                <form className="w-[calc(100%-80px)] relative mt-14">
                    <input
                        type="text"
                        className="w-full py-3 pl-5 rounded-full outline-none text-slate-400"
                        placeholder="Search for a movie...."
                    />
                    <button
                        type="submit"
                        className=" px-8 h-full bg-[#90cea1] rounded-full absolute right-0 text-white font-semibold  text-lg hover:text-[#0d253f]"
                    >
                        Search
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Banner;
