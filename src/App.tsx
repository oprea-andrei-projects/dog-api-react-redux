import React from 'react';
import './App.css';
import Home from "./components/home/Home";
import store from "./store/store";
import {Provider} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
      <Provider store={store}>

          <Home />

      </Provider>
  );
}

export default App;
