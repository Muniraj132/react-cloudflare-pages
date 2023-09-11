import { Component } from "react";
import Users from "./components/users";
import Appuser from "./components/usersexamplpe";
class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ users: data });
      })
      .catch(console.log);
  }

  render() {
    // return <Users />;
    return <Appuser />;
  }
}

export default App;
