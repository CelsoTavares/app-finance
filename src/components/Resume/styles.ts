import styled from "styled-components";

export const Container = styled.div`
  flex: 1;

  @media (max-width: 500px) {
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    padding: 5px;
    margin: 5px;
  }
`;
export const Title = styled.div`
  text-align: center;
  font-weight: bold;
  color: #888;
  margin-bottom: 8px;
`;
export const Value = styled.div<{ color?: string }>`
  text-align: center;
  font-weight: bold;
  color: ${(props) => props.color ?? "#000"};
`;
