import React from 'react';
import { Router } from 'react-router-dom';

// iniciar o Reactotron
import './config/ReactotronConfig';

// rotas
import Routes from './routes';
// gerenciador de historico de seção
import history from './services/history';

function App() {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
}

export default App;
