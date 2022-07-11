import React from "react";

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    
    increment() {
        this.setState({count: this.state.count + 1})
      }
    
    decrement() {
        this.setState({count: this.state.count - 1})
      }

    increment = this.increment.bind(this);
    decrement = this.decrement.bind(this);
  


    render() {
        return (
            <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        </div>
        )
    }
}

export default ClassCounter