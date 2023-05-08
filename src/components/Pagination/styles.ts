import styled from "styled-components";

export const Container = styled.div`

`;

export const DividerData = styled.div`
display: grid !important; 
   grid-template-columns: repeat(5, 1fr) !important;
   gap:2rem !important;

`

export const PaginationGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1.2rem;

  button{
  border: none;
  padding: 1rem 2rem;
  background: #f78f3f;
  color: white;
  font-size: 1.4rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #ac6128;
  }
  }
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
