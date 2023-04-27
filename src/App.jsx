import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import TvPage from "./pages/TvPage";
import PersonPage from "./pages/PersonPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Header></Header>}>
                    <Route path={"/"} element={<HomePage></HomePage>}></Route>
                    <Route
                        path={"/signup"}
                        element={<SignUpPage></SignUpPage>}
                    ></Route>
                    <Route
                        path={"/movie"}
                        element={
                            <MoviePage
                                title="Popular Movies"
                                type="popular"
                            ></MoviePage>
                        }
                    ></Route>
                    <Route
                        path={"/movie/now_playing"}
                        element={
                            <MoviePage
                                title="Now Playing Movies"
                                type="now_playing"
                            ></MoviePage>
                        }
                    ></Route>
                    <Route
                        path={"/movie/upcoming"}
                        element={
                            <MoviePage
                                title="Upcoming Movies"
                                type="upcoming"
                            ></MoviePage>
                        }
                    ></Route>
                    <Route
                        path={"/movie/top_rated"}
                        element={
                            <MoviePage
                                title="Top Rated Movies"
                                type="top_rated"
                            ></MoviePage>
                        }
                    ></Route>
                    <Route
                        path={"/tv"}
                        element={
                            <TvPage
                                title="Popular TV Shows"
                                type="popular"
                            ></TvPage>
                        }
                    ></Route>
                    <Route
                        path={"/tv/airing_today"}
                        element={
                            <TvPage
                                title="TV Shows Airing Today"
                                type="airing_today"
                            ></TvPage>
                        }
                    ></Route>
                    <Route
                        path={"/tv/on_tv"}
                        element={
                            <TvPage
                                title="Currently Airing TV Shows"
                                type="on_the_air"
                            ></TvPage>
                        }
                    ></Route>
                    <Route
                        path={"/tv/top_rated"}
                        element={
                            <TvPage
                                title="Top Rated TV Shows"
                                type="top_rated"
                            ></TvPage>
                        }
                    ></Route>
                    <Route
                        path={"/person"}
                        element={<PersonPage></PersonPage>}
                    ></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
