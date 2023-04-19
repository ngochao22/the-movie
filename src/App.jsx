import { Route, Routes } from "react-router-dom";
import Header from "./header/Header";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Header></Header>}>
                    <Route path={"/"} element={<HomePage></HomePage>}></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
