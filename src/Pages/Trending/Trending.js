import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PageTitle } from './../../elements/PageTitle/PageTitle';
import { SingleContent } from '../../elements/SingleContent/SingleContent';
import { CustomPagination } from './../../elements/CustomPagination/CustomPagination';
import { TrendingContainet } from './style';

export const Trending = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setContent(data.results);
  };

  useEffect(() => {
    fetchTrending();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      {/* <PageTitle title="Trending" /> */}
      <TrendingContainet>
        {content &&
          content.map((elem) => (
            <SingleContent
              key={`key-${elem.id}`}
              id={elem.id}
              posters={elem.poster_path}
              title={elem.title || elem.name}
              media_type={elem.media_type}
              vote_average={elem.vote_average}
              data={elem.release_date || elem.first_air_date}
            />
          ))}
      </TrendingContainet>
      {/* <CustomPagination setPage={setPage} /> */}
    </>
  );
};
