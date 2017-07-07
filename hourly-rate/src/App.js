import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import States from 'us';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      salary: 0,
      hourlyRate: 0
    };

    this.handleOnChange = this.onChangeHandler.bind(this, 'SalaryInput');
  }

  hourlyRate(sal) {
    const rate = ((sal / 52) / 40).toFixed(2);

    this.setState({
        hourlyRate: rate
    });
  }

  onChangeHandler(ref, e) {
    const val = e.target.value.replace(/\,/g,'');
    
    if (isNaN(val)) return;
    
    const salary = e.target.value.replace(/\,/g,'');

    this.setState({
        salary: Number(salary)
    });
    
    this.hourlyRate(Number(salary));
  }

  render() {
      return (
        <div className="input-wrap">
         <input className="input" type='text' placeholder="foo" onKeyUp={this.handleOnChange} ref="SalaryInput" />
         <p>You make ${this.state.hourlyRate} an hour</p>
        </div>
      );
  }
}

class StateList extends Component {
    constructor() {
        super();

        this.state = {
            selectedState: ''
        }

        this.handleStateChange = this.onStateChange.bind(this, 'selectChange');
    }

    onStateChange(event) {
        console.log(event);
        // this.setState({
        //     selectedState: event.target.value
        // });
    }

    render() {
        const states = States.STATES;
        console.log(states);
        return (
            <div>
                <select value="{this.state.selectedState}" onChange="handleStateChange" name="" id=""  ref="selectChange">
                    <option value="null">-- Select State</option>
                    {
                    states.map(function( state ) {
                        return <option value={state.name} key={state.abbr}>{state.name}</option>;
                    })
                }
                </select>
                
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

        <StateList />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
