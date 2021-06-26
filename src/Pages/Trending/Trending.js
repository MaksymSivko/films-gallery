import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PageTitle } from './../../elements/PageTitle/PageTitle';
import styled from 'styled-components';
import { SingleContent } from '../../elements/SingleContent/SingleContent';

export const Trending = () => {
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data.results);
    setContent(data.results);
  };
  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <PageTitle title="Trending" />
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
    </div>
  );
};

const TrendingContainet = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
