import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 10px;
  padding: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 560px) {
    flex-direction: column;
  }
`;
export const InputLabel = styled.label`
  flex: 1;
  margin: 10px;
`;
export const InputTitle = styled.div`
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;

  @media (max-width: 560px) {
    width: 250px;
  }
`;
export const Select = styled.select`
  width: 100%;
  height: 30px;
  padding: 0 5px;
  border: 1px solid lightblue;
  border-radius: 5px;

  @media (max-width: 560px) {
    width: 250px;
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 30px;
  padding: 5px 8px;
  border: 1px solid lightblue;
  border-radius: 5px;
  background-color: lightblue;
  color: black;
  font-size: 18px;
  font-weight: bold;
  box-shadow: 0px 0px 5px #ccc;
  cursor: pointer;

  &:hover {
    background-color: blue;
    color: white;
  }
`;
