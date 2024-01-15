import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(
    <>
        <App />
    </>,
    rootElement
);

// what's happeing here?
// well... StrictMode checks for potential problems
// 6 -  get a reference to the dom with id of root, where app is mounted
// 7 - experimenta apt that creates the root where components are attached
// 11 - second arg, to createRoot 
// where it attaches app to dom