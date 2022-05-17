import { Fragment } from 'react';
import GlobalStyle from './reset';
import { Home } from './home';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Home />
    </Fragment>
  );
}

export default App;
