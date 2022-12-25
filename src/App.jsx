import React from "react";
import InputMessage from "./Components/Input";

import "./App.css";
import MessageBox from "./Components/MessageBox";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <InputMessage />
        <MessageBox />
      </div>
    );
  }
}

export default App;
