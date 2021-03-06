import { Switch, Route, HashRouter } from 'react-router-dom';
import NavbarView from './components/NavbarView';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import ErrorView from './components/ErrorView';
import CountryView from './components/CountryView';

import './App.scss';

function App() {
  return (
    <HashRouter >
      <NavbarView />
      <Switch>

        <Route exact path="/">
          <SearchView />
        </Route>

        <Route exact path="/about">
          <AboutView />
        </Route>

        <Route exact path="/country/:id">
          <CountryView />
        </Route>

        <Route exact path='/github' render={() => (window.location = "https://github.com/Jarsey45/CountriesDB" as unknown as Location)} />

        <Route path="*">
          <ErrorView />
        </Route>

      </Switch>
    </HashRouter>
  );
}

export default App;
