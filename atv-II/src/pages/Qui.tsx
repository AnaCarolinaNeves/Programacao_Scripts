import { useContext } from "react";
import UseContexto from "../hooks/useContexto";
import Quina from "../components/Quina";
import Loading from "../components/Loading";

function Qui(){
    const {quina} = UseContexto();

    return(
        <>
            {quina.dataApuracao ? <Quina /> : <Loading />}
        </>
    )
}

export default Qui;