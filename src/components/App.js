//This component handles the App template used on every page.
import React, { Component, PropTypes } from 'react';
import Header from './common/Header';

class App extends Component {
  render() {
    return(
      <div className="container-fluid">
        <Header />
        //Here the following children will be passed from the 
        //react router
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;