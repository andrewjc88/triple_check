import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { Container } from "semantic-ui-react";

import AddInstructor from "./components/AddInstructor";
import InstructorProfile from "./components/InstructorProfile";
import InstructorList from "./components/InstructorList";

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <div className="ui inverted segment">
            <div className="ui inverted secondary menu">
              <Link className="active item" to="/">
                Triple Check
              </Link>
              <Link className="item" to="/add">
                Add Instructor
              </Link>
              <div className="right menu">
                <div className="item">
                  <div className="ui icon input">
                    <input type="text" placeholder="search..." />
                    <i className="search link icon" />
                  </div>
                </div>
                <a href="#" className="ui item">
                  Logout
                </a>
              </div>
            </div>
          </div>
          <Route path="/" exact component={InstructorList} />
          <Route path="/add" component={AddInstructor} />
          <Route path="/users/:id" component={InstructorProfile} />
        </Container>
      </Router>
    );
  }
}

export default App;
