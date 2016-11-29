import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {
  render() {
    return(
      <div className="jumbotron">
        <h1>Home Paginator</h1>
        <p>React, redux router in es6 for ............sdcscd.....</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;