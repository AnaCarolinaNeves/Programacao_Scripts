import trevoMega from "../../assets/trevo-megasena.png";
import { Principal } from "../../components/Principal";
import { UseContexto } from "../../hooks";
import { mega } from '../../styles/theme';

export function Megasena() {

    const { megasena } = UseContexto()

    return (
        <Principal
            trevo={trevoMega}
            alt="trevo-megasena"
            name="MEGA-SENA"
            color={mega.loteria}
            colorPremio={mega.estimativa}
            dataProximoConcurso={megasena.dataProximoConcurso}
            valorEstimadoProximoConcurso={megasena.valorEstimadoProximoConcurso}
            numeroDoConcurso={megasena.numeroDoConcurso}
            dataPorExtenso={megasena.dataPorExtenso}
            dezenas={megasena.dezenas}
            acumulado={megasena.acumulado}
        />
    )
}