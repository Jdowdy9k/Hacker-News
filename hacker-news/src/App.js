import React, { Component } from 'react';
import Search from './components/Search'
import History from './components/History/history'
import Result from './components/Results/Result';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container mt-12 text-center">
          <div className="column">

            <Search />

            <History />

            <Result />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
