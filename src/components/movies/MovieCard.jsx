import React from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";

const MovieCard = ({ item }) => {
    const result = item.vote_average.toFixed(1) * 10;
    return (
        <div className="w-[180px] h-[380px] mt-5 rounded-lg select-none flex flex-col cursor-pointer shadow-lg mb-10">
            <img
                src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                alt=""
                className="object-cover w-full h-[225px] rounded-lg"
            />
            <div className="pl-2 -translate-y-1/2">
                <CircularProgress
                    value={item.vote_average * 10}
                    color={
                        (item.vote_average * 10 > 60 && "#317414") ||
                        (item.vote_average * 10 > 30 && "#f1c232") ||
                        "#d21717"
                    }
                    className="bg-[#081c22] rounded-full"
                >
                    <CircularProgressLabel className="font-bold text-white">
                        {result ? `${result}%` : "NR"}
                    </CircularProgressLabel>
                </CircularProgress>
            </div>
            <div className="">
                <p className="px-2 text-lg font-semibold leading-tight text-black hover:text-blue-500">
                    {item.title || item.name}
                </p>
                <span className="px-2 pt-1">
                    {item.release_date || item.first_air_date}
                </span>
            </div>
        </div>
    );
};

export default MovieCard;
