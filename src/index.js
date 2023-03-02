
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalStyles from "./components/GlobalStyles";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "../src/app/store";
ReactDOM.createRoot(document.getElementById("root")).render(
 
    
      <React.Suspense fallback={<div>Loading...</div>}>
        <GlobalStyles>
          <App />
        </GlobalStyles>
      </React.Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
