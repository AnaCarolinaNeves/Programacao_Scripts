import { useContext } from "react";
import { Contexto } from "../contexts/Contexto";

function UseContexto(){
    const contexto = useContext(Contexto);
    return contexto;
}

export default UseContexto;