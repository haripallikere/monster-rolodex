import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import { render } from "react-dom";
import { CardList } from "./components/card-list/Card-list";
import { SearchBox } from "./components/search-box/Search-Box";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ""
    };

    this.handlechange = this.handlechange.bind(this);
  }

  handlechange(e) {
    this.setState({ searchField: e.target.value });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then(data =>
      data.json().then(res => this.setState({ monsters: res }))
    );
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search-monster"
          handlechange={this.handlechange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
