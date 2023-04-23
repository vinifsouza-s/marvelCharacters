import styled from 'styled-components'

export const Conteiner = styled.div`
`

export const CharactersList = styled.div`

display: grid;
grid-template-columns: repeat(6, 1fr);
gap: 1.2rem;

.character_card{
    border-radius: 4px;
    background-color: #74737d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.character_name{
    background-color:#cbc7f0;
    color:#685dc9;
}


p{
    display:flex;
    justify-content: center;
    align-items: center;
    height: .3rem;
    padding: 2rem;
  
}

`