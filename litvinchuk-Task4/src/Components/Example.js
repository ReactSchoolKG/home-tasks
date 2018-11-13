import React, { Component } from 'react';
import Name from "./Name";
import '../styles/style.css';

import items from "../constants/items";

class Example extends Component {

  state = {
      counter : 0
  };

  render(){
    return <div className="example">
      <ul className="list">
        {items.map((item, index) => <Name key={index} name={item.name} show={item.show}/>)}
      </ul>
      <h1>Counter</h1>
      <div>
        {this.state.counter}
        <button onClick={() => this._handleClick(true)}>+</button>
        <button onClick={() => this._handleClick(false)}>-</button>
      </div>
    </div>;
  }

  _handleClick = (flag) => {
    flag === true ?
    this.setState({
      counter : this.state.counter + 1,
    }) :
    this.setState({
      counter : this.state.counter > 0 ? this.state.counter - 1 : this.state.counter,
    })
  };

}

export default Example;