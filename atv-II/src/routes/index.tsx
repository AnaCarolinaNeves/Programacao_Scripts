import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mega from "../pages/Mega";
import Loto from "../pages/Loto";
import Qui from "../pages/Qui";
import NavBar from "../components/NavBar";

function Rotas() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/megasena' element={<Mega />} />
                <Route path='/lotofacil' element={<Loto />} />
                <Route path='/quina' element={<Qui />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;