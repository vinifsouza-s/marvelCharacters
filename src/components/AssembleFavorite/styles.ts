
import styled from "styled-components";

export const Conteiner = styled.div`
  display: flex;
  padding-bottom: 0.8rem;
  margin: 0.2rem;
  cursor: pointer;
  transition: fill 0.2s;

  :hover path {
    fill: red;
  }
`;