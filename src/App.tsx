import * as React from "react";
import logo from './logo.svg';
import './App.css';
import Login from './components/login'

const App = ()=> {
  return (
    <div className="App">
      <h1>Welcome to Eduportal app </h1>
      <Login/>
    </div>
  );
}

export default App;