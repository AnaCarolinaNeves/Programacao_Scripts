import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Timemania } from "../pages/Timemania";
import { Megasena } from "../pages/Megasena";
import { Menu } from "../components/Menu";
import { Quina } from "../pages/Quina";


function Rotas() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/timemania' element={<Timemania />} />
                <Route path='/megasena' element={<Megasena />} />
                <Route path='/quina' element={<Quina />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;