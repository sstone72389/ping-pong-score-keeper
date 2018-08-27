import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = () => {
  const styles = { marginRight: '10px' };
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="left brand-logo" id="logo">
          Ping Pong Score Keeper
        </Link>
        <Link style={styles} to="/login" className="right">
          Login
        </Link>
      </div>
    </nav>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
