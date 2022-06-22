import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import UpdateStudent from "./components/UpdateStudent";
import AddStudent from "./components/AddStudent";
import StudentList from "./pages/StudentList";
import ViewStudent from "./components/ViewStudent";

function App() {
  return (
  <div className="App">
  <Router> 
    <Switch>
      <Route path="/" exact component={StudentList} />
      <Route path="/add" exact component={AddStudent} />
      <Route path="/update/:id" exact component={UpdateStudent} />
      <Route path="/view/:id" exact component={ViewStudent} />
    </Switch>
  </Router>
  <br/> <br/>
  </div>
  );
}

export default App;
