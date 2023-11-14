import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import store from "./store";

function Root() {
  return (
   
      <Provider store={store}>
        {/* <BrowserRouter> */}
          <App />
        {/* </BrowserRouter> */}
      </Provider>
   
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
