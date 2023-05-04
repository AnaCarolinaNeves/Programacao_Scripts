import styled from "styled-components";

export function Resultado({ dezenas, color }: any) {
  return (
    <>
      {dezenas && dezenas.map((item: any) => {
        return (
          <Circle style={{ backgroundColor: color }}>{item.split("")}</Circle>
        );
      })}
    </>
  );
}

const Circle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 20px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: large;
  color: white;
  font-weight: bold;
`;
