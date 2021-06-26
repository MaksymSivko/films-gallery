import React from 'react';
import { img_300, unavailable } from './../../config/config';
import { SingleCard, CardImage, CardTitle, CardMedia } from './style';
import { Badge } from '@material-ui/core';

export const SingleContent = ({
  posters,
  title,
  media_type,
  vote_average,
  data,
}) => {
  const ratingColors = vote_average > 6 ? 'primary' : 'secondary';

  return (
    <SingleCard>
      <Badge badgeContent={vote_average} color={ratingColors} />
      <CardImage
        src={posters ? `${img_300}/${posters}` : unavailable}
        alt={title}
      />
      <CardTitle>{title}</CardTitle>
      <CardMedia>
        {media_type === 'tv' ? 'TV Series' : 'Movie'}
        <CardMedia>{data}</CardMedia>
      </CardMedia>
    </SingleCard>
  );
};
