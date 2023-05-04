import styled from "styled-components";
import { Estimativa } from "../Estimativa";
import { NomeLoteria } from "../NomeLoteria";

export function Esquerda({ trevo, alt, color, name, dataProximoConcurso, valorEstimadoProximoConcurso, colorPremio }: any) {
    return (
        <Wrapper>
            <NomeLoteria trevo={trevo} alt={alt} name={name} color={color} />
            <Estimativa
                dataProximoConcurso={dataProximoConcurso}
                valorEstimadoProximoConcurso={valorEstimadoProximoConcurso}
                colorPremio={colorPremio}
            />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin-right: 50px;
`;
