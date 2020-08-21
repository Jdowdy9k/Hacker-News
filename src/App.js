import React from 'react';
import Search from './components/Search'
import Results from './components/Results'
import History from './components/history'
import { Provider } from 'react-redux';
import store from './store/createStore';

function App() {
  return (
    <Provider store={ store }>
        <Search />
        <Results />
        <History />
    </Provider>
  );
}

export default App;
