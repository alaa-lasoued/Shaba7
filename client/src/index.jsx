import React from "react";
import ReactDOM from "react-dom";
import Main from "./copmonents/Main.jsx";



class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       value: ""
      };
     
    }
    render() {
      return (
        <div>
          <Main/>
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("App"));


