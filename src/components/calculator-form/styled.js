import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: 0 4px 6px 0 #e5e5e5;
  width: 60%;
  height: 25%;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: ${(props) => (props.advanced ? 25 : 100 / 3)}%;
`;

export const Input = styled.input`
  text-align: center;
`;
