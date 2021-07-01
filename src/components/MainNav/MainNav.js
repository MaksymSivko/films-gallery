import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core/styles';
import MovieIcon from '@material-ui/icons/Movie';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    backgroundColor: '#2d313a',
    zIndex: 100,
  },
});

export const MainNav = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const history = useHistory();

  const upAndPush = (route) => {
    window.scroll(0, 0);
    history.push(route);
  };

  useEffect(() => {
    if (value === 0) upAndPush('/');
    if (value === 1) upAndPush('/movies');
    if (value === 2) upAndPush('/series');
    if (value === 3) upAndPush('/search');
    // eslint-disable-next-line
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        style={{ color: '#ffffff' }}
        label="Trending"
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        style={{ color: '#ffffff' }}
        label="Movies"
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        style={{ color: '#ffffff' }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        style={{ color: '#ffffff' }}
        label="Search"
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
};
