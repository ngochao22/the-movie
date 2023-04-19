import React from "react";

const TrailerCard = ({ item }) => {
    return (
        <div className="cursor-pointer select-none">
            {/* <img src="./play.png" alt="" className="w-10 h-auto" /> */}

            <div className="relative w-full h-[200px] hover:h-[220px] transition-all">
                <img
                    src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                    alt=""
                    className="object-cover h-full mt-8 rounded-lg"
                />
                <img
                    src="./play.png"
                    alt=""
                    className="absolute w-10 h-auto top-[50%] left-[50%] -translate-y-1/3 -translate-x-1/2"
                />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-center text-white">
                {item.name}
            </h3>
        </div>
    );
};

export default TrailerCard;
