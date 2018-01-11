import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = (props) => (
  <div>
    <header className="header">
      <div className="content-container">
        <div className="header__content">
          <Link to="/dashboard" className="header__title">
            <h1>Expensify</h1>
          </Link>
          <button className="button button--logout" onClick={props.Logout}>Logout</button>
        </div>
      </div>
    </header>
    {props.children}
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  Logout: () => {
    console.log('object');
    return dispatch(startLogout());
  },
  dispatch
});

export default connect(undefined, mapDispatchToProps)(Header);
