import React, {Fragment} from "react";
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import {logout} from '../../actions/auth';

const Navbar=({ auth: { isAuthenticated, loading }, logout })=>{
  const authLinks=(
    <ul>
      {/* <li>
        <Link to='/profiles'>
          Developers
        </Link>
      </li> */}
      {/* <li>
        <Link to='/posts'>
          Posts
        </Link>
      </li> */}
      <li>
        <Link to='/menus'>
          Menu
        </Link>
      </li>
      <li>
        <Link to='/transactions'>
          <i className="fas fa-list"></i>{''}
          <span className="hide-sm">&nbsp;&nbsp;Transactions</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='/'>
          <i className="fas fa-sign-out-alt"></i>{''}
          <span className="hide-sm">&nbsp;&nbsp;Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks=(
    <ul>
      <li>
        <Link to='/profiles'>
          Developers
        </Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <a href='/'>Login</a>
      </li>
    </ul>
  );

  const navbar=(
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/">Archipelago's</Link>
        </h1>
        <ul>
          {!loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
        </ul>
      </nav>
  );

  return(
    <nav className="navbar bg-dark">
        <Link to="/">
        <img class="logo" src='/img/logo.png' />
        </Link>
    <ul>
      {!loading && (<Fragment>{ isAuthenticated ? authLinks : guestLinks }</Fragment>)}
    </ul>
  </nav>
  );
};

Navbar.propTypes={
    logout:propTypes.func.isRequired,
    auth:propTypes.object.isRequired
};

const mapStateToProps=state=>({
    auth:state.auth
});

export default connect(mapStateToProps,{logout})(Navbar);