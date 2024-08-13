import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { generateImageURL } from "../../utils/imageUtils";
import style from "./style.module.scss";
import Grid from "../../components/Grid";
import Card from "../../components/Card";
import { getCharacter as getCharacterAPI } from "../../utils/apiURL.ts";
import Loader from "../../components/Loader";

export default function Character() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const getCharacter = useCallback(async () => {
    const url = getCharacterAPI({
      id,
    });

    setLoading(true);
    const response = await axios.get(url);
    setCharacters(response?.data?.data?.results);
    setLoading(false);
  }, [id]);

  useEffect(() => {
    getCharacter();
  }, [getCharacter]);
  if (loading) return <Loader />;

  return (
    <div className={style.characterContainer}>
      {characters.map(
        (character: {
          name: string;
          thumbnail: { path: string; extension: string };
          description?: string;
          id: number;
          urls: { type: string; url: string }[];
        }) => (
          <>
            <img src={generateImageURL(character?.thumbnail)} />
            <h3>{character.name}</h3>
            <em>{character?.description}</em>
            <Grid numColumns={4}>
              <Card
                name={"Comics"}
                imageURL={generateImageURL(character?.thumbnail)}
                onClick={() => navigate(`/${character?.id}/comics`)}
              />
              <Card
                name={"Series"}
                imageURL={generateImageURL(character?.thumbnail)}
                onClick={() => navigate(`/${character?.id}/series`)}
              />
              <Card
                name={"Stories"}
                imageURL={generateImageURL(character?.thumbnail)}
                onClick={() => navigate(`/${character?.id}/stories`)}
              />
              <Card
                name={"Events"}
                imageURL={generateImageURL(character?.thumbnail)}
                onClick={() => navigate(`/${character?.id}/events`)}
              />
            </Grid>
            <ul className={style.links}>
              {character.urls.map((item) => (
                <li>
                  <a rel="noreferrer" target="_blank" href={item?.url}>
                    {item?.type}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )
      )}
    </div>
  );
}
