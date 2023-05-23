import React, { useEffect } from "react";
import axios from "axios";
import { Container, CharacterCard } from "./styles";
import Image from "next/image";
import md5 from "md5";
import Pagination from "../../components/Pagination";
import { useQuery } from "react-query";
import AssembleIcon from "@/components/AssembleFavorite";

export interface CharactersProps {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const AllCharacters: React.FC = () => {
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_API;
  const privateKey = process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE;
  const baseCharacters = `https://gateway.marvel.com:443/v1/public/characters?`;
  const time = Number(new Date());
  const hash = md5(time + String(privateKey) + String(publicKey));

  const fetchCharacters = async () => {
    const response = await axios.get(
      `${baseCharacters}limit=${100}&ts=${time}&apikey=${publicKey}&hash=${hash}`
    );
    return response.data.data.results;
  };

  const { data: characters, isLoading } = useQuery<CharactersProps[]>("characters", fetchCharacters);

  const getCharacters = async () => {

    try {
      const response = await axios.get(
        `${baseCharacters}limit=${100}&ts=${time}&apikey=${publicKey}&hash=${hash}`
      );
      console.log(response.data);
      return response.data.data.results
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);


  return (
    <Container>
      <Pagination
        data={characters || []}
        pageSize={10}
        isLoading={isLoading}
        renderItem={(character) => (
          <CharacterCard key={character.id}>
            <AssembleIcon />
            <p className="character_name">{character.name}</p>
            <Image
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt="my-image"
              className="image_character"
              width={200}
              height={200}
            />
          </CharacterCard>
        )}
      />
    </Container>
  );
};

export default AllCharacters;



