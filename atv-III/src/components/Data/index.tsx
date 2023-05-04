import styled from "styled-components";

export function Data({numeroDoConcurso, dataPorExtenso}:any){
    return(
        <Text>Concurso {numeroDoConcurso} - {dataPorExtenso}</Text>
    )
}

const Text = styled.p`
    color: #4c556c;
`