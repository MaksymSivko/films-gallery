import axios from 'axios';
import { useEffect, useState } from 'react';
import { PageTitle } from './../../elements/PageTitle/PageTitle';
import { CustomPagination } from './../../elements/CustomPagination/CustomPagination';

import { SingleContent } from './../../elements/SingleContent/SingleContent';
import { Genres } from './../../components/Genres/Genres';
import { MoviesContainet } from './style';

export const Movies = () => {
  const [page, setPage] = useState(1);
  const [content, setContent] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState();

  const [genres, setGenres] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    // console.log(data.results);
    //&with_genres=${genreforURL}
    setContent(data.results);
    setNumberOfPages(data.total_pages);
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [page]);

  return (
    <>
      <PageTitle title="Movies" />
      <Genres
        type="movie"
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        setPage={setPage}
      />
      <MoviesContainet>
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
      </MoviesContainet>

      {numberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={numberOfPages} />
      )}
    </>
  );
};
