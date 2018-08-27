import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="row">
    <div className="col s12">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Ping Pong much?</span>
          <p>
            Office ping pong driving you nuts? Here is a great way to keep score!
          </p>
        </div>
        <div className="card-action center-align">
          <Link to="/register">
            Register
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Landing;
