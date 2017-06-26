import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      salary: 0.00,
      hourlyRate: 0.00
    };

    this.handleOnChange = this.onChangeHandler.bind(this, 'SalaryInput');
  }

  hourlyRate(sal) {
    const salary = ((sal / 52) / 40).toFixed(2);

    if (isNaN(salary)) this.setState({hourlyRate: 0});

    this.setState({hourlyRate: Number(salary)});
  }

  onChangeHandler(ref, e) {
    if (isNaN(e.target.value)) return;

    const salary = e.target.value.replace(/\,/g,'');

    this.setState({salary: Number(salary)}, () => {
        this.hourlyRate(this.state.salary);
    });

  }

  render() {
      return (
        <div>
         <input type='text' placeholder="foo" onKeyPress={this.handleOnChange} ref="SalaryInput" />
         <p>You make ${this.state.hourlyRate} an hour</p>
        </div>
      );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <Input />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
