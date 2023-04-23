import React, { useState } from "react";
import axios from "axios";
import { Conteiner, CharactersList } from "./styles";
import Image from "next/image";
import md5 from "md5";

interface CharactersProps {
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

  const getCharacters = async () => {
    try {
      const response = await axios.get(
        `${baseCharacters}limit=${10}&ts=${time}&apikey=${publicKey}&hash=${hash}`
      );
      setCharacters(response.data.data.results);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(characters);

  return (
    <Conteiner>
      <button onClick={() => getCharacters()}>Search from API</button>
      <CharactersList>
        {characters.map((item) => {
          return (
            <div key={item.id} className="character_card">
              <p className="character_name">{item.name}</p>
              <Image
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt="my-image"
                width={140}
                height={140}
              />
            </div>
          );
        })}
      </CharactersList>
      <button>Previous Page</button>
      <button>Next Page</button>
    </Conteiner>
  );
};

export default InitialPage;
