import React from 'react';
import { Router } from 'react-router-dom';

// iniciar o Reactotron
import './config/ReactotronConfig';

// rotas
import Routes from './routes';
// gerenciador de historico de seção
import history from './services/history';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
