import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import { PaginationWrap } from './style';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export const CustomPagination = ({ numberOfPages = 10, setPage }) => {
  const handlePagaChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <PaginationWrap
        count={numberOfPages}
        onChange={(e) => handlePagaChange(e.target.textContent)}
        hideNextButton
        hidePrevButton
      />
    </ThemeProvider>
  );
};
