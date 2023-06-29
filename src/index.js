import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./utils/globalStyles";
import App from "./App";
import CartState from "reducer/CartState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <CartState>
            <GlobalStyles />
            <App />
        </CartState>
    </React.StrictMode>
);
