import React from 'react';
import Search from './components/Search'
import Results from './components/Results'
import HistoryPage from './components/History/history'
import { Provider } from 'react-redux';
import store from './store/createStore';

function App() {
  return (
    <Provider store={ store }>
        <Search />
        <HistoryPage />
        <Results />
    </Provider>
  );
}

export default App;
