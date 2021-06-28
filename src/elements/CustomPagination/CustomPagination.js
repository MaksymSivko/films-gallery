import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import styled from 'styled-components/macro';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

export const CustomPagination = ({ numberOfPages = 10, setPage }) => {
  const handlePagaChange = (page) => {
    setPage(page);
    window.scroll(0, 0, 'smooth');
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

const PaginationWrap = styled(Pagination)`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0 0 0;
`;
