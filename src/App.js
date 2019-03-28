import React, { Component } from 'react';
import logo from './logo.png';
import homerMarge from './homerMarge.png'
import './App.css';

import Quotes from "./Quotes";
// import Lamp from "./Lamp";
import Form from "./Form"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true,
      show: false,
      count: 0
    };
  }

  handleClick = () => {
    this.setState({ working: !this.state.working });
  };

  showMarge = () => {
    this.setState({ show: !this.state.show });
  };

  incrementCounter = (increment) => {
    const count = this.state.count + increment;
    if (count >= 0) { this.setState({ count }) }
  };

  render() {
    const homer = this.state.working ? 'Working' : 'Not Working';
    const logoReact = this.state.working ? 'logoWorking' : 'logoNotWorking';
    const marge = this.state.show ? 'Hide' : 'Right Here';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={logoReact} alt="logo" />
          <h1 className="App-title">Simpson Quotes</h1>
        </header>

        <h2>Compteur : {this.state.count}</h2>
        <button className="btnCount" onClick={() => this.incrementCounter(1)}>
          Plus
          </button>
        <button className="btnCount" onClick={() => this.incrementCounter(-1)}>
          Moins
          </button>

        <h2>Is Homer Working ?</h2>
        <button className="buttonWork" onClick={this.handleClick}>
          {homer.toUpperCase()}
        </button>

        {/* <Lamp on /> */}
        <Form />
        <Quotes />

        <h2>And Marge, where is she ?</h2>
        <button className="btnMarge" onClick={(this.showMarge)}>
          {marge.toUpperCase()}
        </button>
        <br />
        {this.state.show ? <img src={homerMarge} alt='' /> : null}
      </div>
    );
  }
}

export default App;
