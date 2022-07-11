import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CardComponent from "./components/card/CardComponent.jsx";
import reportWebVitals from "./reportWebVitals";
import AppComponent from "./components/app/appComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <head>
      <link
        rel="stylesheet"
        media="screen"
        href="https://fontlibrary.org//face/constantine"
        type="text/css"
      />
      <link
        rel="stylesheet"
        media="screen"
        href="https://fontlibrary.org//face/simply-sans"
        type="text/css"
      />
    </head>
    <CardComponent></CardComponent>
    <AppComponent></AppComponent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();