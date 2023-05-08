import React from 'react'

import Skeleton from '../Skeleton/styles'
import { Container, CharacterImage, CharacterName } from './styles'

const LoadingCharacterCard: React.FC = () => {
  return (
    <Container>
      <CharacterName>
        <Skeleton className="name-skeleton" />
      </CharacterName>
      <CharacterImage>
        <Skeleton className="image-skeleton" />
      </CharacterImage>
      
    </Container>
  )
}

export default LoadingCharacterCard
