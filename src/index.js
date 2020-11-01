import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux';

// let store = createStore(reducer)

//STORE -> GLOBALIZED STATE, the store basically holds all the data or state for the application.

//ACTION -> INCREMENT, describes what you want to do. Increment is a type of action. Simple function that returns an object.
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}

const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//REDUCER -> describes how your actions transforms your state into the next state. you'll call an action, the reducer is gonna check what action you did and based on the action, it's gonna modify the store up there.
const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
  }
}

let store = createStore(counter);
//display it in the console
store.subscribe(() => console.log(store.getState()));

//DISPATCH -> sends the action to the reducer and then reducer decides how to modify the store.
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decrement());





ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
