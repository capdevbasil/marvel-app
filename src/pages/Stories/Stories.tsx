import axios from "axios";
import { Fragment, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { getCharacterSubUrls } from "../../utils/apiURL";

export default function Stories() {
  const [stories, setStories] = useState([]);

  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const getStories = useCallback(async () => {
    const url = getCharacterSubUrls({
      id,
      path: "stories",
    });

    setLoading(true);
    const response = await axios.get(url);
    setStories(response?.data?.data?.results);

    setLoading(false);
  }, [id]);

  useEffect(() => {
    getStories();
  }, [getStories]);

  if (loading) return <Loader />;

  return (
    <div>
      {stories.map(
        (item: { title: string; description: string; id: number }) => (
          <Fragment key={id}>
            <span>{item.title}</span>
            <p>{item.description}</p>
          </Fragment>
        )
      )}
    </div>
  );
}
