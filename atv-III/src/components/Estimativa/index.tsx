import styled from "styled-components";

export function Estimativa({ dataProximoConcurso, valorEstimadoProximoConcurso, colorPremio }: any) {
    const value = valorEstimadoProximoConcurso ? valorEstimadoProximoConcurso.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : '';

    return (
        <Wrapper>
            <Text>Estimativa de prêmio do próximo concurso. Sorteio em {dataProximoConcurso}:</Text>
            <Premio style={{ color: colorPremio }}>{value}</Premio>
        </Wrapper>
    )
}

const Text = styled.p`
    color: #4c556c;
`

const Premio = styled.div`
    color: #209869;
    font-weight: bold;
    font-size: large;
`

const Wrapper = styled.div`
    max-width: 300px;
    margin-left: 55px;
`
