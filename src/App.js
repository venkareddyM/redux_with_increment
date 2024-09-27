import React from 'react';
import './App.css';
import { Provider} from 'react-redux';
import store from './redux/store';
import Counter from './redux/Counter'

const App = ()=>{
  return (
    <Provider store={store}>
      <div className="app">
        <h1> Simple Counter with Redux</h1>
        <Counter/>
      </div>

    </Provider>
  )
}
export default App;