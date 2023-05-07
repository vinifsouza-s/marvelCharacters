import Link from 'next/link'
import Image from "next/image";
import React from 'react'

import MarvelHeroes from '../assets/images/699916.jpg'

import { Container, Content, Text } from '../styles/pages/homePage'

const homePage: React.FC = () => {

  return (
      <Container>
     
  <Image
    src={MarvelHeroes}
    alt="Marvel Heroes"
    className='image_heroes'
    layout="fill"
    objectFit="cover"
    style={{ opacity: .4 }}
  />
  <Content>
    <Text>
      <h1>Marvel Heroes Search Page</h1>
      <p>
      Here you can search for your favorite hero and create your group of Avengers
      </p>
    </Text>
    <Link href={"/allCharacters"}>
      <button>Go to Search</button>
    </Link>
  </Content>
</Container>
   
  )
}

export default homePage
