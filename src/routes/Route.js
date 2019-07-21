import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
/**
 * Wrapper para Route do react-router-dom
 * Faz as devidas validações antes do usuário acessar a página
 */
export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  // flag para usuário logado
  const signed = false;

  // caso o usuário não esteja logado e a rota for privada
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // caso o usuário já esteja logado, redireciona o usuário
  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  // retorna o componente acessado
  return <Route {...rest} component={Component} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
