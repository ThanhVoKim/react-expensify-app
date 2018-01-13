import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export default (WrapComponent) => {
  const Authenticate = (props) => {
    if (props.isAuthenticated) {
      return <Redirect to="/dashboard" />;
    }
    return <WrapComponent {...props} />;
  };

  const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
  });

  return connect(mapStateToProps)(Authenticate);
};
