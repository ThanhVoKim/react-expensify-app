import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Header } from '../components/Header';

export default (WrapComponent) => {
  class Authenticate extends React.Component {
    render() {
      if (this.isAuthenticated) {
        return <WrapComponent />;
      } else {
        return <Redirect to="/" />
      }
    }
  }
  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.uid
  });

  return connect(mapStateToProps)(WrapComponent);
};

