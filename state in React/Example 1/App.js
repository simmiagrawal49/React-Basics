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

// this.props is required 
