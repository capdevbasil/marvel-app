import { useCallback, useEffect, useState } from "react";
import { getCharacters as getCharactersAPI } from "../../utils/apiURL.ts";
import axios from "axios";
import Card from "../../components/Card";
import Grid from "../../components/Grid";
import Pagination from "../../components/Pagination";
import style from "./style.module.scss";
import { generateImageURL } from "../../utils/imageUtils.ts";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader";
function Homme() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(1);
  const navigate = useNavigate();

  const getCharacters = useCallback(async () => {
    const url = getCharactersAPI({
      limit: 6,
      offset: (current - 1) * 6,
    });

    setLoading(true);
    const response = await axios.get(url);
    setCharacters(response?.data?.data?.results);
    setTotal(response?.data?.data?.total);
    setLoading(false);
  }, [current]);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const onPageChange = (page: number) => [setCurrent(page)];

  if (loading) return <Loader />;
  return (
    <div className={style.homeContainer}>
      <span>Total:{total}</span>
      <Grid>
        {characters?.map(
          (item: {
            name: string;
            id: number;
            thumbnail: { path: string; extension: string };
            description?: string;
          }) => (
            <Card
              key={item?.id}
              name={item?.name}
              imageURL={generateImageURL(item?.thumbnail)}
              description={item?.description}
              onClick={() => navigate(`/character/${item?.id}`)}
            />
          )
        )}
      </Grid>
      {total > 0 ? (
        <Pagination
          current={current}
          limit={6}
          totalPages={total}
          onPageChange={onPageChange}
        />
      ) : null}
    </div>
  );
}

export default Homme;
