import React, { Component } from "react";
import './card.css';
import CardList from './CardList';
import { robots } from "./robots";
import SearchBox from './SearchBox';
import Scroll from "./Scroll";
import ErrorBoundary from "./Errorboundary";


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      Searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ Searchfield: event.target.value });
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.Searchfield.toLowerCase())
    })
    return (
      <>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Berkshire+Swash&family=Khula:wght@300&display=swap" rel="stylesheet"></link>
        <div className='tc'>
          <h1>CatFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <br/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      </>
    );
  }
}

export default App;
