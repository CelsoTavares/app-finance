import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 5px #ccc;
  border-radius: 10px;
  margin-top: 20px;

 span{
  margin-right: 10px;
 }
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 630px) {
    display: none;
  }
`;
export const Title = styled.h3<{ widht?: number }>`
  width: ${(props) => (props ? `${props.widht}px` : "auto")};
  padding: 10px;
  text-align: center;
`;

export const ContainerItens = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 630px) {
    flex-direction: column;
    gap: 5px;
  }
`;
export const Date = styled.h4`
  padding: 5px 10px;
  display: flex;

  span {
    display: none;
  }
  @media (max-width: 630px) {
    width: 90%;
    max-width: 300px;
    justify-content: center;
    border-radius: 5px;
    border: 1px solid #000;

    span {
      display: flex;
    }
  }
`;
export const Category = styled.h4<{ color: string }>`
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  width: 20%;
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.color};

  span {
    display: none;
  }

  @media (max-width: 630px) {
    width: 90%;
    max-width: 300px;

    span {
      display: flex;
    }
  }
`;
export const Titulo = styled.h4`
  padding: 5px 10px;
  width: 20%;
  display: flex;
  justify-content: center;

  span {
    display: none;
  }

  @media (max-width: 630px) {
    width: 90%;
    max-width: 300px;
    border-radius: 5px;
    border: 1px solid #000;
    
    span {
      display: flex;
    }
  }
`;
export const Value = styled.h4<{ color: string }>`
  padding: 5px 10px;
  color: ${(props) => props.color};
  width: 15%;
  display: flex;
  justify-content: space-between;

  svg {
    color: #4d4d4d;
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
  }

  span {
    display: none;
  }
  @media (max-width: 630px) {
    width: 90%;
    max-width: 300px;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 1px solid #000;
    
    span {
      display: flex;
    }
  }
`;
