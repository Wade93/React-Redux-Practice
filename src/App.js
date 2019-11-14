import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';

import PostForm from './components/Postform';
import Posts from './components/Posts';

import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <PostForm/>
          <hr></hr>
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
