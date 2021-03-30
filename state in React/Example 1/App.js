//Part 1 --> Implemented clock using props
import "./styles.css";

export default function App(props) {
  return  <div>
  <h1>Hello, world!</h1>
  <h2>It is {props.date.toLocaleTimeString()}.</h2>
</div>;
}

//part2 

import "./styles.css";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;

//when using props with class, this.props is required
// this.props is required 


//part03
import "./styles.css";
import React from "react";

class App extends React.Component {
  //Class components should always call the base constructor with props.
  
  //here props/state is a variable, when used like below
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {  
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
