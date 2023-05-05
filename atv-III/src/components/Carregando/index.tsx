import { useEffect, useState } from "react";
import styled from "styled-components";

export function Carregando({ dataApuracao }: any) {
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (dataApuracao) {
      setCarregando(false);
    }
  }, [dataApuracao]);

  return (
    <>
      {carregando && (
        <Wrapper>
          <Text>Carregando...</Text>
        </Wrapper>
      )}
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Text = styled.div`
  font-size: x-large;
  font-weight: bold;
`;