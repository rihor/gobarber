import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

// iniciar o Reactotron, precisa ser iniciado antes da store
import './config/ReactotronConfig';

// rotas
import Routes from './routes';
// gerenciador de historico de seção
import history from './services/history';
import store from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyle />
      </Router>
    </Provider>
  );
}

export default App;
