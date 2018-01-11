import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// export const PublicRoute = ({
//   isAuthenticated,
//   component: Component,
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     component={(props) => {
//       if (isAuthenticated) {
//         return <Redirect to="/dashboard" />;
//       }

//       return <Component {...props} />;
//     }}
//   />
// );

// const mapStateToProps = (state) => ({
//   isAuthenticated: !!state.auth.uid
// });

// export default connect(mapStateToProps)(PublicRoute);

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
