import React, { Component } from 'react';
import RenderCount from '../containers/RenderCount.js';

let itemsResult = []
class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {
			tick: 0,
			items: [],
		}
	}

	componentDidMount() {
		setInterval(() => {
			this.handlerCount()
		},1000)
	}

	handlerCount = () => {
		this.setState({
			tick: this.state.tick+=1
		})

		if(this.state.tick % 5 === 0){
			itemsResult.push(this.state.tick)
			this.setState({
				items:itemsResult
			})
		}
	}

  render() {
    return (
     <div className="App">
     <h1>Time: {this.state.tick}</h1>
      	<RenderCount {...this.state}/>
     </div>
    );
  }
}

export default Counter;
