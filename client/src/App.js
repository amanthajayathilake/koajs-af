import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
  <div className="App">
  <Router> 
    <Switch>
      {/* <Route path="/" exact component={Home} /> */}
    </Switch>
  </Router>
  <br/> <br/>
  </div>
  );
}

export default App;
