import styled from "styled-components";

export function Acumulou({ acumulado }: any) {

    if (acumulado == true) {
        return <Text>ACUMULOU!</Text>
    } else {
        return <Text>NÃO ACUMULOU!</Text>
    }

}

const Text = styled.div`
    color: #0066b3;
    margin-top: 15px;
    font-size: 30px;
    font-weight: bold;
`;
