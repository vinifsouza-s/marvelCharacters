import styled from 'styled-components'

export const Container = styled.div`
 display: flex;
    justify-content: center;

`



export const CharacterCard = styled.div`
 background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.2s;
margin-top: 1.5rem;

  &:hover {
    transform: translateY(-5px);
  }
  .character_name {
    font-size: 20px;
    font-weight: bold;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
`;

