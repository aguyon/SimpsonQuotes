import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Quotes from "./Quotes";
// import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true
    };
  }
  handleClick = () => {
    this.setState({ working: !this.state.working });
  };
  render() {
    const homer = this.state.working ? 'Working' : 'Not Working';
    const logoReact = this.state.working ? 'logoWorking' : 'logoNotWorking';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={logoReact} alt="logo" />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <h2>Is Homer Working ?</h2>
        <button className="buttonWork" onClick={this.handleClick}>
          {homer.toUpperCase()}
        </button>
        {/* <Lamp on /> */}
        <Quotes />
      </div>
    );
  }
}

export default App;
