import Loading from "../components/Loading";
import LotoFacil from "../components/LotoFacil";
import Megasena from "../components/MegaSena";
import { UseContexto } from "../hooks";

function Principal(){
    const {megasena} = UseContexto();
    return (
        <>
        {megasena.numeroDoConcurso?
            <div>
                <Megasena />
                <LotoFacil />
            </div>
            :
            <Loading/>
        }
        </>
           
    );
}

export default Principal;