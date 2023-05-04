import trevoTime from "../../assets/trevo-timemania.png";
import { Principal } from "../../components/Principal";
import { UseContexto } from "../../hooks";
import { time } from '../../styles/theme';

export function Timemania() {

    const { timemania } = UseContexto()

    return (
        <Principal
            trevo={trevoTime}
            alt="trevo-timemania"
            name="TIMEMANIA"
            color={time.loteria}
            colorPremio={time.estimativa}
            dataProximoConcurso={timemania.dataProximoConcurso}
            valorEstimadoProximoConcurso={timemania.valorEstimadoProximoConcurso}
            numeroDoConcurso={timemania.numeroDoConcurso}
            dataPorExtenso={timemania.dataPorExtenso}
            dezenas={timemania.dezenas}
            acumulado={timemania.acumulado}
        />
    )
}