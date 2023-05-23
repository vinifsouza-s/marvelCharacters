import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 16rem;
  padding: 2rem;
  margin-top: 2rem;
  border-radius: 0.8rem;
  box-shadow: 0px 8px 24px rgba(21, 6, 51, 0.08);
  transition: all 0.4s;
`;

export const CharacterName = styled.div`
  & + div {
    margin-top: 1.8rem;
  }

  .name-skeleton {
    width: 100%;
    height: 1.1rem;
  }
`;
export const CharacterImage = styled.div`
  display: flex;

  .image-skeleton {
    display: flex;
    width: 16rem;
    height: 10rem;
  }
`;