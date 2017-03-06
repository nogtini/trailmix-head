import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet title="Trailmix" />
        <div className="App-header">
          <h2>Hello World</h2>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({}) // Direct reducer state here
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch) // Direct actions here

export default connect(mapStateToProps, mapDispatchToProps)(App)