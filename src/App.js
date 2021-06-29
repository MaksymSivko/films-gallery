import styled from 'styled-components/macro';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { MainNav } from './components/MainNav/MainNav';
import { Movies } from './Pages/Movies/Movies';
import { Series } from './Pages/Series/Series';
import { Search } from './Pages/Search/Search';
import { Trending } from './Pages/Trending/Trending';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <AppWrapp>
        <Container>
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/movies" component={Movies} />
            <Route path="/series" component={Series} />
            <Route path="/search" component={Search} />
          </Switch>
        </Container>
      </AppWrapp>
      <MainNav />
    </BrowserRouter>
  );
};

const AppWrapp = styled.div`
  min-height: 100vh;
  background: #39445a;
  color: #ffffff;
  padding: 10px 0 100px;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1300px) {
    width: 95%;
    max-width: 100%;
    padding: 0;
  }
`;
