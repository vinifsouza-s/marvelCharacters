import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, CharacterCard } from "./styles";
import Image from "next/image";
import md5 from "md5";
import Pagination from "../Pagination";
import { ClipLoader } from "react-spinners";

export interface CharactersProps {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

const InitialPage: React.FC = () => {
  const publicKey = process.env.NEXT_PUBLIC_MARVEL_API;
  const privateKey = process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE;

  const baseCharacters = `https://gateway.marvel.com:443/v1/public/characters?`;
  const time = Number(new Date());

  const hash = md5(time + String(privateKey) + String(publicKey));

  const [characters, setCharacters] = useState<CharactersProps[]>([]);

  const [isLoading, setIsLoading] = useState(false);

  const getCharacters = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `${baseCharacters}limit=${100}&ts=${time}&apikey=${publicKey}&hash=${hash}`
      );
      setCharacters(response.data.data.results);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <>
          <p>Fetching Data</p>
          <ClipLoader size={14} color={"grey"} />
        </>
      ) : (
        <Pagination
          data={characters}
          pageSize={10}
          renderItem={(character) => (
            <CharacterCard key={character.id}>
              <p className="character_name">{character.name}</p>
              <Image
                src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                alt="my-image"
                width={200}
                height={200}
              />
            </CharacterCard>
          )}
        />
      )}
    </Container>
  );
};

export default InitialPage;
