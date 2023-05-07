import styled from 'styled-components';

export const Container = styled.div`
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 0 1px rgb(0 0 0 / 13%), 0 1px 3px rgb(0 0 0 / 20%);
  background: white;
  
  button{
  border: none;
  padding: 2rem 3rem;
  margin-bottom: 2rem;
  position: relative;
  background: #518cca;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #31567e;
  }
  }


`;


export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem;
  position: relative;

  h1 {
    font-size: 5.4rem;
    font-weight: 600;
    color: #e23636;
    opacity: 1;
  }

  p {
    font-size: 2rem;
    color: #000000;
    margin-top: 2rem;
    opacity: 1;
  }
`;