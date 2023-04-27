import styled from "styled-components";

export const Container = styled.div`
 
  .divider_data{
   display: grid;
   grid-template-columns: repeat(5, 1fr);
   gap:2rem
  }
`;

export const PaginationGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2rem;
  gap: 1.2rem;
`;

export const InputSearch = styled.div`
   display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  input{
    border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  font-size: 1rem;
  width: 100%;
  max-width: 400px;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
  }

  &::placeholder {
    color: #999;
  }
  }
`;
